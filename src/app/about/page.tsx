import type { Metadata } from "next";
import Link from "next/link";
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
      updated="2026-09-16"
    >

      <p>
        <strong>LoanCalc Lab</strong> is an independent informational site from{" "}
        <Link href="/brand" className="underline">
          {SITE.brand.name}
        </Link>
        {" "}
        ({SITE.brand.tagline}). It helps borrowers answer practical questions: what will I
        pay each month, does consolidating save money, and how do I clear debt faster — with EMI,
        amortisation, snowball vs avalanche, and fee true-cost tools. Assumptions are stated up
        front.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">What we are not</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Not a lender, bank or credit broker</li>
        <li>Not a credit offer or personalised financial advice</li>
        <li>Not a substitute for the lender’s disclosure in your country</li>
      </ul>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Focus</h2>
      <p>
        LoanCalc Lab focuses on personal loans, EMI and debt payoff across UK, US, India–SEA, AU
        and CA calculator modes. Content is maintained by {SITE.editorial}. It is a separate niche
        from property remortgage tools.
      </p>
      <p>
        Questions or corrections: see{" "}
        <Link href="/contact" className="underline">
          Contact
        </Link>
        .
      </p>
  
    </ArticleLayout>
  );
}
