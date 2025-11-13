import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "./ContactForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function ContactPage() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY;

  return (
    <>
      <PageHeader
        title="Let's Create Something"
        subtitle="Have a project in mind or just want to say hello? Drop me a line. I'm excited to hear from you and discuss how we can work together."
      />
      <div className="max-w-3xl mx-auto mt-12 p-8 glassmorphic rounded-lg animate-fade-in" style={{ animationDelay: '0.4s'}}>
        {siteKey ? (
            <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
                <ContactForm />
            </GoogleReCaptchaProvider>
        ) : (
            <div className="text-center text-destructive">
                <p>reCAPTCHA is not configured. The contact form is disabled.</p>
                <p className="text-sm text-muted-foreground">Please set the NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY environment variable.</p>
            </div>
        )}
      </div>
    </>
  );
}
