import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Let's Create Something"
        subtitle="Have a project in mind or just want to say hello? Drop me a line. I'm excited to hear from you and discuss how we can work together."
      />
      <div className="max-w-3xl mx-auto mt-12 p-8 glassmorphic rounded-lg animate-fade-in" style={{ animationDelay: '0.4s'}}>
        <ContactForm />
      </div>
    </>
  );
}
