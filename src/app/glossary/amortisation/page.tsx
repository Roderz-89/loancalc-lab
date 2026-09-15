import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Amortisation',
  description: 'Paying off a loan over time; a schedule shows interest vs principal each month.',
  alternates: { canonical: `${SITE.url}/glossary/amortisation` },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Amortisation'
      description='Paying off a loan over time; a schedule shows interest vs principal each month.'
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Glossary", href: "/glossary" },
        { label: 'Amortisation' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
      related={[
          { href: "/calculators/amortisation", label: "Amortisation calculator" },
          { href: "/guides/amortisation-explained", label: "Amortisation explained" }
      ]}
    >

      <p>
        Amortisation is the scheduled reduction of loan principal through regular payments. Early
        payments are typically interest-heavy; later payments are principal-heavy on a standard
        fixed instalment loan.
      </p>

    </ArticleLayout>
  );
}
