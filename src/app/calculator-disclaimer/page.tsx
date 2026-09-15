import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Calculator disclaimer',
  description: 'LoanCalc Lab calculators are illustrative only — not personalised financial advice.',
  alternates: { canonical: `${SITE.url}/calculator-disclaimer` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Calculator disclaimer'
      crumbs={[
        { label: "Home", href: "/" },
        { label: 'Calculator disclaimer' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
    >

      <p>
        All calculators on LoanCalc Lab are <strong>illustrative</strong>. They use simplified
        reducing-balance formulae and user-entered assumptions. They are{" "}
        <strong>not personalised financial advice</strong>, not a credit offer, and not a lender
        decision.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Rates, fees and terms vary by lender and country</li>
        <li>Check the lender’s disclosure before you borrow</li>
        <li>Day-count, compounding and rounding may differ from our monthly model</li>
        <li>Flat-rate loans are out of scope</li>
        <li>Effective APR illustrations are not regulated APR substitutes</li>
      </ul>
      <p>
        Illustrative only — not personalised financial advice and not a credit offer. Rates, fees
        and terms vary by lender and country. Check the lender’s disclosure before you borrow.
      </p>
  
    </ArticleLayout>
  );
}
