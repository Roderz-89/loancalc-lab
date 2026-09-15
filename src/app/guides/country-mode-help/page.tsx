import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Country modes — currency & EMI conventions',
  description: 'How LoanCalc Lab’s US / India-SEA / AU / CA / UK modes work, and what we assume about interest.',
  alternates: { canonical: `${SITE.url}/guides/country-mode-help` },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Country modes — currency & EMI conventions'
      description='How LoanCalc Lab’s US / India-SEA / AU / CA / UK modes work, and what we assume about interest.'
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: 'Country modes — currency & EMI conventions' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
      related={[
          { href: "/calculators/personal-loan-emi", label: "EMI / payment calculator" },
          { href: "/guides/how-emi-works", label: "How EMI works" }
      ]}
    >

      <p>
        LoanCalc Lab is multi-country. A country selector on relevant calculators sets currency
        symbol, number formatting and the payment label (EMI vs monthly payment/repayment).
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Shared maths assumption</h2>
      <p>
        All modes use a <strong>reducing-balance</strong> amortising formula with a monthly rate
        equal to the annual percentage rate ÷ 12. That is a clear illustration — not a claim that
        every lender in every country compounds the same way (for example, some Canadian products
        use semi-annual compounding conventions).
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li><strong>US</strong> — USD; “Monthly payment”</li>
        <li><strong>India / SEA</strong> — INR; “EMI”; flat-rate loans out of scope</li>
        <li><strong>Australia</strong> — AUD; comparison-rate rules differ by lender</li>
        <li><strong>Canada</strong> — CAD; check disclosure for compounding</li>
        <li><strong>UK</strong> — GBP; fees often sit outside headline rate — model them separately</li>
      </ul>
  
    </ArticleLayout>
  );
}
