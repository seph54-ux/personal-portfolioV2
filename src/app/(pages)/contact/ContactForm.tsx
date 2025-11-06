
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
import { useRef, useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import Script from "next/script";

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
    .refine((files) => !files || files.length === 0 || files[0].size <= MAX_FILE_SIZE, `Max file size is 10MB.`)
    .refine(
      (files) => !files || files.length === 0 || ACCEPTED_FILE_TYPES.includes(files[0].type),
      "Only .pdf files are accepted."
    ).optional(),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptchaReady, setIsCaptchaReady] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaTokenRef = useRef<HTMLInputElement>(null);

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
  
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

  useEffect(() => {
    if (window.grecaptcha) {
      setIsCaptchaReady(true);
    }
  }, []);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    if (!formRef.current || !recaptchaTokenRef.current) {
        toast({
            variant: "destructive",
            title: "Form Error",
            description: "The form could not be submitted. Please refresh and try again.",
        });
        setIsSubmitting(false);
        return;
    }

    try {
      const token = await window.grecaptcha.execute(siteKey, { action: "submit" });
      recaptchaTokenRef.current.value = token;

      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
      
      toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();

    } catch (error) {
        console.error("Submission error:", error);
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your message. It might be a network issue or a spam protection error. Please try again later.",
        });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        onLoad={() => {
          window.grecaptcha.ready(() => {
            setIsCaptchaReady(true);
          });
        }}
        async
        defer
      />
      <Form {...form}>
        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    <Input placeholder="Helps me understand the project scope, e.g. $400" {...field} />
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
                    placeholder="What's your idea? What problems are we trying to solve? e.g., I need a website for my coffee shop business...)"
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
              render={({ field }) => (
                  <FormItem>
                  <FormLabel>Got a project brief? (optional)</FormLabel>
                  <FormControl>
                      <Input type="file" accept=".pdf" {...form.register('attachment')} />
                  </FormControl>
                  <FormDescription>
                      PDF files only, max 10MB.
                  </FormDescription>
                  <FormMessage />
                  </FormItem>
              )}
          />
          
          <input type="hidden" name="g-recaptcha-response" ref={recaptchaTokenRef} />

          <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting || !isCaptchaReady}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          {!isCaptchaReady && <p className="text-sm text-muted-foreground">reCAPTCHA is loading...</p>}
        </form>
      </Form>
    </>
  );
}
