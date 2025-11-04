import { PageHeader } from "@/components/PageHeader";
import { AffiliateForm } from "./AffiliateForm";

export default function AffiliatesPage() {
  return (
    <>
      <PageHeader
        title="Affiliate Showcase"
        subtitle="Discover products and assets from affiliated marketplaces. Describe a design you're working on, and our AI will suggest relevant items to help you out."
      />
      <section className="mt-12">
        <AffiliateForm />
      </section>
    </>
  );
}
