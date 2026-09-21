import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Early settlement on personal loans — settlement figures, rebates and overpaying",
  description:
    "UK guide to early settlement on personal loans: what a settlement figure is, how interest and fees interact, and a Loan A EXAMPLE (£8,500 · 24.9% · 48 months · £0 fee) contrasting full settlement vs overpaying — illustrative only.",
  alternates: { canonical: `${SITE.url}/guides/early-settlement-personal-loans` },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Early settlement on personal loans — settlement figures, rebates and overpaying"
      description="Clearing a UK personal loan early is rarely “remaining balance only”. A settlement figure, possible rebate of future credit charges, and the agreement’s wording all matter — and none of that is a promise of a particular saving."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        {
          label:
            "Early settlement on personal loans — settlement figures, rebates and overpaying",
        },
      ]}
      published="2026-09-21"
      updated="2026-09-21"
      related={[
        { href: "/calculators/extra-payment", label: "Extra payment / early payoff calculator" },
        { href: "/calculators/amortisation", label: "Amortisation schedule" },
        {
          href: "/guides/overpaying-vs-saving",
          label: "Overpaying a personal loan vs saving",
        },
        {
          href: "/guides/refinance-when-it-pays",
          label: "Refinance a personal loan when it pays",
        },
        { href: "/guides/amortisation-explained", label: "Amortisation explained" },
      ]}
    >
      <p>
        Early settlement means clearing (or partly clearing) a fixed-sum personal loan before the
        contractual end date. This guide is about <strong>unsecured UK personal loans</strong> only —
        not mortgages or remortgage products. It explains what a settlement figure is, how interest
        and fees can interact with early repayment, and how full settlement differs from overpaying
        along the way. A worked <strong>EXAMPLE</strong> uses Loan A (£8,500 · 24.9% EXAMPLE · 48
        months · £0 fee). It is not personalised advice, not a credit offer, and not a promise of any
        rebate amount.
      </p>
      <p>
        LoanCalc Lab can illustrate reducing-balance interest and extra payments under labelled
        assumptions. Those outputs do <em>not</em> replace a lender’s official settlement figure.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Settlement figure first — not a DIY balance
      </h2>
      <p>
        If you want to clear a loan in full, ask the lender for an{" "}
        <strong>early settlement figure</strong> (sometimes called a settlement quote or payoff
        amount). That is the amount the lender says will discharge the agreement if paid by a stated
        date. It is not the same as “remaining principal on last month’s statement”, and it is not
        the sum of every future EMI still on the original schedule.
      </p>
      <p>
        A settlement figure can reflect interest accrued to a settlement date, adjustments for paying
        ahead of the contractual timetable, and any charges the agreement allows. Quotes are usually
        time-limited. Asking for a quote does not oblige you to settle. Treat any third-party
        calculator — including LoanCalc Lab — as an <strong>illustrative sketch</strong>. The figure
        that closes the account is the one on the lender’s settlement statement.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Worked EXAMPLE — Loan A (UK)
      </h2>
      <p>
        All figures below are labelled <strong>EXAMPLE</strong>. They are not a live quote, not a
        credit offer, and not a settlement statement.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>EXAMPLE Loan A:</strong> £8,500 principal · 24.9% EXAMPLE annual rate · 48 months ·
          £0 arrangement fee
        </li>
      </ul>
      <p>
        Under LoanCalc Lab’s reducing-balance model, the EMI is about{" "}
        <strong>£281.36 EXAMPLE</strong>. Over the full term, total repayable ≈{" "}
        <strong>£13,505 EXAMPLE</strong> and total interest ≈ <strong>£5,005 EXAMPLE</strong>.
      </p>
      <p>
        <strong>After 24 months EXAMPLE</strong> (halfway through the calendar term), roughly{" "}
        <strong>£5,277 EXAMPLE</strong> of principal remains. Interest already paid is about{" "}
        <strong>£3,529 EXAMPLE</strong>. If the loan ran to month 48 with no extras, about{" "}
        <strong>£1,476 EXAMPLE</strong> of interest would still be due on the remaining schedule.
        That leftover interest is <em>not</em> automatically “rebated in full” if you settle early —
        the lender’s settlement figure applies statutory and contractual adjustments. Do not treat
        £1,476 as your personal rebate.
      </p>
      <p>
        <strong>Overpay EXAMPLE:</strong> adding <strong>£50 EXAMPLE</strong> every month on top of
        the £281.36 EXAMPLE EMI (still under the simple model, £0 fee) clears the loan in about{" "}
        <strong>37 months EXAMPLE</strong> instead of 48, with total interest ≈{" "}
        <strong>£3,760 EXAMPLE</strong> — about <strong>£1,245 EXAMPLE</strong> less interest than
        the full-term path. That is an overpayment path, not a full early settlement. Lenders may
        re-cast EMI or term after a partial payment differently from this sketch.
      </p>
      <p>
        Reproduce the schedule and extra-payment scenarios in the{" "}
        <Link href="/calculators/amortisation" className="text-slate-900 underline">
          amortisation schedule
        </Link>{" "}
        and the{" "}
        <Link href="/calculators/extra-payment" className="text-slate-900 underline">
          extra payment / early payoff calculator
        </Link>
        . Compare those illustrations with a real settlement quote before you act.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Rebate ideas — high-level only
      </h2>
      <p>
        On many regulated UK personal loans, early settlement can include a{" "}
        <strong>rebate</strong> of some future credit charges because you are paying sooner than the
        full-term schedule assumed. The Consumer Credit (Early Settlement) Regulations 2004 set out
        entitlement and calculation rules for regulated agreements in the circumstances they cover.
        The FCA’s Consumer Credit sourcebook sits alongside those rules for how cost of credit and
        related disclosures work for regulated agreements (
        <a
          href="https://www.handbook.fca.org.uk/handbook/CONC/"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          FCA Handbook — CONC
        </a>
        ). MoneyHelper stresses weighing early-repayment costs against the interest you hope to avoid
        before using spare cash to clear credit (
        <a
          href="https://www.moneyhelper.org.uk/en/everyday-money/credit/how-to-reduce-your-borrowing"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          MoneyHelper — How to reduce your borrowing
        </a>
        ).
      </p>
      <p>
        A rebate idea is not a promise of a particular pound amount. Whether a rebate applies and
        what appears in your settlement figure depend on the agreement and the lender’s statement —
        not on this EXAMPLE.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Full settlement vs overpaying along the way
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Full early settlement</strong> — pay the settlement figure and close the agreement.
        </li>
        <li>
          <strong>Partial overpayment</strong> — pay more than the contractual EMI (or a lump sum)
          while the loan continues, aiming to cut interest and/or shorten the term.
        </li>
      </ul>
      <p>
        On EXAMPLE Loan A, the £50 EXAMPLE monthly extra is the second path: the loan stays open
        until cleared in ~37 months under the model. Full settlement after month 24 would instead
        require the lender’s settlement figure for the remaining balance on a stated date — which may
        be higher or lower than the ~£5,277 EXAMPLE principal left on a simple schedule once interest
        to the settlement date and any rebate are applied.
      </p>
      <p>
        For when overpaying sits beside keeping a cash buffer, see{" "}
        <Link href="/guides/overpaying-vs-saving" className="text-slate-900 underline">
          overpaying a personal loan vs saving
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        When settlement sits inside a refinance decision
      </h2>
      <p>
        Refinancing usually means a new personal loan pays off the old one. The cost of leaving is an
        early-settlement problem: you need the current lender’s settlement figure (including any
        rebate adjustment and any exit cost the agreement allows) before judging whether a lower new
        rate survives fees. Put that figure into the “cost of leaving” side, alongside any arrangement
        fee on the new product. See{" "}
        <Link href="/guides/refinance-when-it-pays" className="text-slate-900 underline">
          refinance a personal loan when it pays
        </Link>{" "}
        for fee break-even under EXAMPLE assumptions — still not a substitute for a real settlement
        quote.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Practical checklist</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Confirm the product is a UK personal loan (not a mortgage) and read the early-repayment section</li>
        <li>Request a written settlement figure and note its validity date</li>
        <li>Compare that figure with continuing contractual EMIs — without assuming a rebate size</li>
        <li>For overpayments, ask how the lender will re-cast EMI or term</li>
        <li>If refinancing, add the settlement figure to the cost of the new deal before judging break-even</li>
        <li>Keep emergency savings in mind before clearing a loan with cash you may need later</li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Try the tools</h2>
      <p>
        For EXAMPLE Loan A (£8,500 · 24.9% · 48 months · £0 fee), use the{" "}
        <Link href="/calculators/extra-payment" className="text-slate-900 underline">
          extra payment / early payoff calculator
        </Link>{" "}
        and the{" "}
        <Link href="/calculators/amortisation" className="text-slate-900 underline">
          amortisation schedule
        </Link>
        . Change extras or a lump sum one at a time. Clearer interest maths under stated assumptions —
        not a settlement quote and not a sales pitch to settle early.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Disclaimer</h2>
      <p>
        This guide and all EXAMPLE figures are illustrative only. They are not personalised financial
        advice, not legal advice, not a credit offer, and not a calculation or promise of any rebate,
        settlement figure, interest saving, or early-repayment charge. LoanCalc Lab is not a lender.
        Rates, fees, day-count conventions and early-settlement terms vary by product and lender.
        Always read the lender’s disclosure, credit agreement and official settlement information for
        your circumstances before you overpay, settle early, or refinance.
      </p>
    </ArticleLayout>
  );
}
