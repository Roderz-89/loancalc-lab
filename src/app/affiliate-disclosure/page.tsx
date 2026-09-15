import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Affiliate disclosure',
  description: 'Affiliate disclosure for LoanCalc Lab.',
  alternates: { canonical: `${SITE.url}/affiliate-disclosure` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Affiliate disclosure'
      crumbs={[
        { label: "Home", href: "/" },
        { label: 'Affiliate disclosure' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
    >

      <p>
        Phase 1 has <strong>no live affiliate CTAs</strong>. If we later earn commissions from
        lender or broker partners, we will label those links clearly. Affiliate relationships will
        not change calculator formulas or disclosed assumptions.
      </p>
  
    </ArticleLayout>
  );
}
