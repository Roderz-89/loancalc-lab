import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "About LoanCalc Lab",
  description:
    "LoanCalc Lab is an independent Rodway Labs site for personal loans and debt-payoff tools — not property remortgage, not a lender, and not personalised advice.",
  alternates: { canonical: `${SITE.url}/about` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title="About LoanCalc Lab"
      crumbs={[{ label: "Home", href: "/" }, { label: "About LoanCalc Lab" }]}
      published="2026-09-14"
      updated="2026-09-22"
      showAd={false}
    >
      <p>
        <strong>LoanCalc Lab</strong> is an independent informational site published by{" "}
        <Link href="/brand" className="underline">{SITE.brand.name}</Link>.
        It focuses on personal loans and debt-payoff tools — monthly payments, consolidation
        break-even, snowball vs avalanche, and fee-adjusted true cost.
      </p>
      <p>
        We are deliberately <strong>not</strong> a property remortgage site. LoanCalc Lab is for
        unsecured personal borrowing and multi-debt payoff planning.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">What we are not</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Not a lender, bank or credit broker</li>
        <li>Not a credit offer or personalised financial advice</li>
        <li>Not a substitute for the lender’s disclosure</li>
        <li>Not a property remortgage product</li>
      </ul>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">UK is the primary audience</h2>
      <p>
        Written first for UK borrowers using sterling. Other country modes are calculator toggles,
        not equal home markets.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">How we check numbers</h2>
      <p>
        Formulae are documented on each tool. Guides that state a UK product norm cite MoneyHelper
        or the FCA and carry a last-checked date. EXAMPLE figures are labelled EXAMPLE. Corrections:
        email {SITE.contactEmail}.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Publisher</h2>
      <p>
        Published by {SITE.brand.name} — {SITE.brand.tagline}. Editorial content is attributed to
        {SITE.editorial}. No personal name is published on this site on purpose. See the{" "}
        <Link href="/editorial-policy" className="underline">editorial policy</Link>.
      </p>
    </ArticleLayout>
  );
}
