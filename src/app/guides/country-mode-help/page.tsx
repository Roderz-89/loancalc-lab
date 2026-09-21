import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Country mode help — currency & payment labels",
  description:
    "Short help for LoanCalc Lab’s country toggle: UK (£) is the default; optional US / India-SEA / AU / CA modes only change currency and payment labels.",
  alternates: { canonical: `${SITE.url}/guides/country-mode-help` },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Country mode help — currency & payment labels"
      description="LoanCalc Lab is UK-first. Optional country modes only change currency symbols and payment labels on calculators — not the site’s primary personal-loan story."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Country mode help — currency & payment labels" },
      ]}
      published="2026-09-14"
      updated="2026-09-21"
      related={[
        { href: "/calculators/personal-loan-emi", label: "Personal loan / EMI calculator" },
        { href: "/guides/how-emi-works", label: "How EMI works" },
      ]}
    >
      <p>
        LoanCalc Lab’s default audience is UK personal-loan borrowers using £. A country selector on
        some calculators is an optional toggle for currency symbol, number formatting and the
        payment label (EMI vs monthly payment). It does not turn the site into a multi-country
        product pitch, and it does not cover mortgages.
      </p>
      <h2 className="pt-2 text-xl font-semibold text-slate-900">Shared maths assumption</h2>
      <p>
        All modes use a <strong>reducing-balance</strong> amortising formula with a monthly rate
        equal to the annual percentage rate ÷ 12. That is a clear illustration — not a claim that
        every lender compounds the same way.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>UK (default)</strong> — GBP; fees often sit outside the headline rate — model them
          separately
        </li>
        <li>
          <strong>US</strong> — USD; “Monthly payment”
        </li>
        <li>
          <strong>India / SEA</strong> — INR; “EMI”; flat-rate loans out of scope
        </li>
        <li>
          <strong>Australia</strong> — AUD; comparison-rate rules differ by lender
        </li>
        <li>
          <strong>Canada</strong> — CAD; check disclosure for compounding
        </li>
      </ul>
    </ArticleLayout>
  );
}
