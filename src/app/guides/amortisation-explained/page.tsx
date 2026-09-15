import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Amortisation explained',
  description: 'How each payment splits into interest and principal, and why early months are interest-heavy.',
  alternates: { canonical: `${SITE.url}/guides/amortisation-explained` },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Amortisation explained'
      description='How each payment splits into interest and principal, and why early months are interest-heavy.'
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: 'Amortisation explained' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
      related={[
          { href: "/calculators/amortisation", label: "Amortisation calculator" },
          { href: "/calculators/extra-payment", label: "Extra payment calculator" }
      ]}
    >

      <p>
        <strong>Amortisation</strong> is the process of clearing a loan through regular payments.
        An amortisation schedule lists, for each month, the payment, interest charged, principal
        repaid and remaining balance.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Why early payments are mostly interest</h2>
      <p>
        Interest is calculated on the outstanding balance. Near the start, almost all of the loan
        is still outstanding, so interest is high and only a small slice of the EMI reduces
        principal. Later, the balance is smaller, so more of each payment goes to principal.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Extra payments</h2>
      <p>
        Paying more than the contractual EMI (where allowed) cuts principal earlier, which reduces
        future interest and can shorten the term. Use the extra-payment calculator to estimate the
        saving — and check your agreement for early repayment fees.
      </p>
  
    </ArticleLayout>
  );
}
