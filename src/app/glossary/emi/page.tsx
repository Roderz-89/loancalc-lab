import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'EMI (Equated Monthly Instalment)',
  description: 'A fixed monthly payment on a reducing-balance loan covering interest and principal.',
  alternates: { canonical: `${SITE.url}/glossary/emi` },
};

export default function Page() {
  return (
    <ArticleLayout
      title='EMI (Equated Monthly Instalment)'
      description='A fixed monthly payment on a reducing-balance loan covering interest and principal.'
      crumbs={[{ label: "Home", href: "/" }, { label: "Glossary", href: "/glossary" }, { label: 'EMI (Equated Monthly Instalment)' }]}
      published="2026-09-14"
      updated="2026-09-14"
      showAd={false}
      related={[{ href: "/calculators/personal-loan-emi", label: "EMI calculator" }, { href: "/guides/how-emi-works", label: "How EMI works" }]}
    >
      <p>
        EMI is the everyday term in India and parts of South-East Asia for a fixed monthly
        instalment on a reducing-balance loan. Elsewhere the same idea is called a monthly
        payment, repayment or instalment.
      </p>
      <p>
        LoanCalc Lab’s EMI calculator uses the standard amortising formula. Flat-rate EMI quotes
        are out of scope — convert them or ask for a reducing-balance / APR figure.
      </p>
    </ArticleLayout>
  );
}
