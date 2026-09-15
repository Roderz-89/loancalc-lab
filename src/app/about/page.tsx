import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'About LoanCalc Lab',
  description: 'Who LoanCalc Lab is for — independent personal loan, EMI and debt payoff calculators.',
  alternates: { canonical: `${SITE.url}/about` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title='About LoanCalc Lab'
      crumbs={[
        { label: "Home", href: "/" },
        { label: 'About LoanCalc Lab' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
    >

      <p>
        <strong>LoanCalc Lab</strong> is an independent informational site run by{" "}
        <strong>Chris Rodway</strong>. It helps borrowers think clearly about personal loans and
        debt payoff: EMI and instalments, amortisation, consolidation break-even, snowball vs
        avalanche, refinance timing, and the true cost of fees — with assumptions stated up front.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">What we are not</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Not a lender, bank or credit broker</li>
        <li>Not a credit offer or personalised financial advice</li>
        <li>Not a substitute for the lender’s disclosure in your country</li>
      </ul>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Sibling site</h2>
      <p>
        LoanCalc Lab is a calculator-first decision lab focused on personal loans and debt payoff.
        It focuses solely on personal loans, EMI and debt payoff — a separate niche from property financing tools.
      </p>
  
    </ArticleLayout>
  );
}
