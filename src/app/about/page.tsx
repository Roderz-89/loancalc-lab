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
      crumbs={[
        { label: "Home", href: "/" },
        { label: "About LoanCalc Lab" },
      ]}
      published="2026-09-14"
      updated="2026-09-21"
    >
      <p>
        <strong>LoanCalc Lab</strong> is an independent informational site published by{" "}
        <Link href="/brand" className="underline">
          {SITE.brand.name}
        </Link>
        . It focuses on <strong>personal loans and debt-payoff tools</strong> — monthly
        payments, consolidation break-even, snowball vs avalanche strategies, and
        fee-adjusted true cost — so you can see what a loan really costs and how faster
        payoff changes the total.
      </p>

      <p>
        We are deliberately <strong>not</strong> a property remortgage site. Mortgage
        product transfers, early repayment charges on home loans, and house-purchase
        scenarios sit outside this product. LoanCalc Lab is for unsecured personal borrowing
        and multi-debt payoff planning.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">What we are not</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Not a lender, bank or credit broker</li>
        <li>Not a credit offer or personalised financial advice</li>
        <li>Not a substitute for the lender’s disclosure in your country</li>
        <li>Not a property remortgage or mortgage-advice product</li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">How we position the tools</h2>
      <p>
        Most “EMI calculators” stop at a monthly figure. LoanCalc Lab goes further:
        payoff strategy (extra payments, snowball vs avalanche) and fee-adjusted true cost,
        with assumptions stated up front. The aim is clearer trade-offs — not another generic
        payment widget.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">UK is the primary audience</h2>
      <p>
        LoanCalc Lab is written first for UK borrowers using sterling (£). Other country
        modes (currency and payment labels) are optional calculator toggles when you need
        them — not the product story and not equal “home markets” on the site.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Publisher</h2>
      <p>
        LoanCalc Lab is published by {SITE.brand.name} — {SITE.brand.tagline}. Editorial
        content is attributed to {SITE.editorial}. See our{" "}
        <Link href="/editorial-policy" className="underline">
          editorial policy
        </Link>{" "}
        for how we maintain calculators and guides.
      </p>
      <p>
        Questions or corrections: email{" "}
        <a href={`mailto:${SITE.contactEmail}`} className="underline">
          {SITE.contactEmail}
        </a>
        . We cannot give personalised lending advice or process applications. You may also use
        the{" "}
        <Link href="/contact" className="underline">
          Contact
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
