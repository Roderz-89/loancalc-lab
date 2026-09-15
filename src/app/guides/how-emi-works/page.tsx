import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'How EMI works (reducing balance)',
  description: 'What EMI means, the standard reducing-balance formula, and why flat-rate quotes look cheaper than they are.',
  alternates: { canonical: `${SITE.url}/guides/how-emi-works` },
};

export default function Page() {
  return (
    <ArticleLayout
      title='How EMI works (reducing balance)'
      description='What EMI means, the standard reducing-balance formula, and why flat-rate quotes look cheaper than they are.'
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: 'How EMI works (reducing balance)' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
      related={[
          { href: "/calculators/personal-loan-emi", label: "Personal loan / EMI calculator" },
          { href: "/calculators/amortisation", label: "Amortisation schedule" },
          { href: "/glossary/emi", label: "EMI glossary" }
      ]}
    >

      <p>
        <strong>EMI</strong> (Equated Monthly Instalment) is a fixed monthly payment on a
        reducing-balance loan. Each EMI covers interest on the outstanding balance plus some
        principal. The payment stays the same (if the rate is fixed); the interest share falls
        over time as the balance shrinks.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">The standard formula</h2>
      <p>
        For principal P, monthly rate r (annual rate ÷ 12 ÷ 100) and n months:
      </p>
      <p className="rounded-lg bg-slate-50 p-4 font-mono text-sm">
        EMI = P × r(1+r)ⁿ / ((1+r)ⁿ − 1)
      </p>
      <p>
        This is the same amortising formula used for personal loans in the US, UK, Australia and
        Canada — only the label changes (“payment”, “repayment”, “instalment”).
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Flat rate vs reducing balance</h2>
      <p>
        A <em>flat-rate</em> quote charges interest on the original principal for the whole term.
        It often looks lower than a reducing-balance rate but costs more. LoanCalc Lab models
        reducing balance only. If a lender quotes flat, ask for the reducing-balance equivalent or
        the APR / comparison rate.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">What to check next</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Use the EMI calculator for payment, interest and total repayable</li>
        <li>Open the amortisation schedule to see the interest/principal split</li>
        <li>Run APR true cost if there is an arrangement or processing fee</li>
      </ul>
  
    </ArticleLayout>
  );
}
