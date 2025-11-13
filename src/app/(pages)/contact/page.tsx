"use client";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

  return (
    <>
      <PageHeader
        title="Let's Create Something"
        subtitle="Have a project in mind or just want to say hello? Drop me a line. I'm excited to hear from you and discuss how we can work together."
      />
      <div className="max-w-3xl mx-auto mt-12 p-8 glassmorphic rounded-lg animate-fade-in" style={{ animationDelay: '0.4s'}}>
        {emailJsServiceId ? (
            <ContactForm />
        ) : (
            <div className="text-center text-destructive">
                <p>Contact form is not configured.</p>
                <p className="text-sm text-muted-foreground">Please set the necessary EmailJS environment variables.</p>
            </div>
        )}
      </div>
    </>
  );
}
