
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState, useCallback, useEffect } from "react";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { useReCaptcha } from "react-google-recaptcha-v3";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = ["application/pdf"];


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  budget: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  attachment: z
    .any()
    .refine((files) => !files || files.length === 0 || files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 10MB.`)
    .refine(
      (files) => !files || files.length === 0 || ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "Only .pdf files are accepted."
    )
    .optional(),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attachmentName, setAttachmentName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { executeRecaptcha } = useReCaptcha();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      budget: "",
      subject: "",
      message: "",
      attachment: undefined,
    },
  });
  
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      toast({
        variant: "destructive",
        title: "Verification System Error",
        description: "reCAPTCHA is not ready. Please wait a moment and try again.",
      });
      return null;
    }

    const token = await executeRecaptcha("contactFormSubmit");
    return token;
  }, [executeRecaptcha, toast]);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const token = await handleReCaptchaVerify();
    
    if (!token) {
        toast({
            variant: "destructive",
            title: "Verification Failed",
            description: "Could not verify reCAPTCHA. Please try again.",
        });
        setIsSubmitting(false);
        return;
    }

    try {
      // EmailJS configuration
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      // Prepare template params
      const templateParams: Record<string, unknown> = {
        name: values.name,
        email: values.email,
        budget: values.budget || "Not specified",
        subject: values.subject,
        message: values.message,
        'g-recaptcha-response': token, // Pass the token to EmailJS
      };

      // Send email with or without attachment
      if (values.attachment && values.attachment.length > 0) {
        const file = values.attachment[0];
        const reader = new FileReader();

        const base64Promise = new Promise<string>((resolve, reject) => {
          reader.onload = () => {
            const base64 = reader.result as string;
            resolve(base64.split(",")[1]);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        const base64Content = await base64Promise;
        templateParams.attachment = base64Content;
        templateParams.attachment_name = file.name;
        
      }

      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );


      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      form.reset();
      setAttachmentName(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

    } catch (error: any) {
      console.error("Submission error:", error);
      
      let errorMessage = "There was a problem sending your message. Please try again.";
      
      if (typeof error?.text === 'string' && error.text.toLowerCase().includes("recaptcha")) {
        errorMessage = "Security verification failed from server. Please try again.";
      } else if (error?.status === 400) {
        errorMessage = "Invalid form data. Please check all fields and try again.";
      }
      
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What Should I Call you?</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Best Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Estimated Budget (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Helps me understand the project scope, e.g. $400" {...field} value={field.value ?? ''} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Project Inquiry" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tell me all about your project</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What's your idea? What problems are we trying to solve? e.g., I need a website for my coffee shop business..."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="attachment"
            render={({ field: { onChange, value, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Got a project brief? (optional)</FormLabel>
                <div className="flex items-center gap-4">
                  <label 
                    htmlFor="attachment-upload" 
                    className={cn(
                      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                      "h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                      )}
                  >
                    Choose File
                  </label>
                  <FormControl>
                    <Input
                      type="file"
                      id="attachment-upload"
                      accept=".pdf"
                      ref={fileInputRef}
                      onChange={(e) => {
                        onChange(e.target.files);
                        setAttachmentName(e.target.files?.[0]?.name ?? null);
                      }}
                      className="hidden"
                      {...fieldProps}
                    />
                  </FormControl>
                  <span className="text-sm text-muted-foreground truncate max-w-xs">
                    {attachmentName || "No file chosen"}
                  </span>
                </div>
                <FormDescription>PDF files only, max 10MB.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col items-center">
            <Button type="submit" className="w-full md:w-auto px-12" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="underline">Terms of Service</a> apply.
            </p>
          </div>
        </form>
      </Form>
    </>
  );
}
