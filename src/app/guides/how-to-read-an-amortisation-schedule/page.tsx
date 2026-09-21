import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "How to read an amortisation schedule — column by column",
  description:
    "UK companion to the amortisation schedule tool: what Month, Payment, Interest, Principal and Balance mean, with a worked EXAMPLE for Loan A (£8,500 · 24.9% EXAMPLE · 48 months · £0 fee).",
  alternates: {
    canonical: `${SITE.url}/guides/how-to-read-an-amortisation-schedule`,
  },
};

export default function Page() {
  return (
    <ArticleLayout
      title="How to read an amortisation schedule — column by column"
      description="The schedule tool’s table is five columns deep. This companion walks each one with a UK EXAMPLE so the interest-heavy front of a personal loan is readable, not mysterious."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "How to read an amortisation schedule — column by column" },
      ]}
      published="2026-09-21"
      updated="2026-09-21"
      related={[
        { href: "/calculators/amortisation", label: "Amortisation schedule calculator" },
        {
          href: "/guides/amortisation-explained",
          label: "Amortisation explained — how to read a loan schedule",
        },
        { href: "/calculators/personal-loan-emi", label: "Personal loan / EMI calculator" },
        { href: "/glossary/amortisation", label: "Amortisation glossary" },
      ]}
    >
      <p>
        An <strong>amortisation schedule</strong> is the month-by-month ledger of a fixed-rate
        reducing-balance loan. LoanCalc Lab’s{" "}
        <Link href="/calculators/amortisation" className="text-slate-900 underline">
          amortisation schedule calculator
        </Link>{" "}
        prints five columns: <strong>Month</strong>, <strong>Payment</strong>,{" "}
        <strong>Interest</strong>, <strong>Principal</strong> and <strong>Balance</strong>. This
        guide is the companion to that table — what each column means, how the rows link, and how to
        spot the interest-heavy front of the term without needing a separate narrative.
      </p>
      <p>
        For the wider story of why interest dominates early and principal later, see{" "}
        <Link href="/guides/amortisation-explained" className="text-slate-900 underline">
          Amortisation explained
        </Link>
        . Here we stay on the columns themselves, using one labelled UK{" "}
        <strong>EXAMPLE</strong>: Loan A (£8,500 · 24.9% EXAMPLE · 48 months · £0 fee). All figures
        are illustrative under LoanCalc Lab’s simple monthly reducing-balance model — not a live
        quote, not a credit offer, and not personalised advice.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Why the schedule exists beside the EMI total
      </h2>
      <p>
        A single monthly repayment figure answers “how much leaves the account each month?” It does
        not answer “how much of that cash is interest this month?” or “what balance is left after
        month 12?” Those questions need a row breakdown. The schedule is that breakdown: one line
        per instalment, with the payment split and the outstanding balance carried forward.
      </p>
      <p>
        On a level-EMI loan the <em>Payment</em> column barely moves (aside from a possible final
        clearing row). The drama sits in <em>Interest</em>, <em>Principal</em> and{" "}
        <em>Balance</em>. Reading left to right — and then down the months — is how you see cost and
        payoff timing under stated assumptions.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Column 1 — Month
      </h2>
      <p>
        <strong>Month</strong> is the instalment index, starting at 1 for the first repayment after
        drawdown under the model’s assumptions. It is not a calendar date. Your lender’s statement
        may show due dates, payment holidays or a different first-interest period; the on-site table
        uses a simple “month 1, month 2, …” sequence so you can compare rows without hunting for
        dates.
      </p>
      <p>
        Use the month number to ask timed questions: What does month 12 look like? When does
        principal first exceed interest inside the EMI? What balance remains at month 24? The index
        is the hook for those checks.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Column 2 — Payment
      </h2>
      <p>
        <strong>Payment</strong> is the cash applied that month — the EMI sized by the standard
        reducing-balance formula for the chosen principal, annual rate and term. For EXAMPLE Loan A
        that fixed payment is about <strong>£281.36 EXAMPLE</strong> each month.
      </p>
      <p>
        Most rows show the same payment. The final month can be slightly different if rounding or a
        residual balance needs clearing so the loan ends at zero. Extra payments, if you model them
        elsewhere, change this column; the basic schedule tool assumes the contractual-style EMI
        with no extras and, for EXAMPLE Loan A, no fee rolled into the balance.
      </p>
      <p>
        Reading tip: if every Payment cell looks identical, that is expected on a fixed EMI. Do not
        stop there — open the Interest and Principal columns to see what the same cash is doing.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Column 3 — Interest
      </h2>
      <p>
        <strong>Interest</strong> is the charge for that month on the <em>outstanding balance at the
        start of the month</em>. Under LoanCalc Lab’s simple monthly model:
      </p>
      <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
        Interest ≈ opening balance × (annual rate ÷ 12 ÷ 100)
      </p>
      <p>
        For EXAMPLE Loan A at 24.9% EXAMPLE, month 1 interest is about{" "}
        <strong>£176.38 EXAMPLE</strong> on the full £8,500 opening balance — roughly 63% of the
        £281.36 payment. By month 24, interest has fallen to about{" "}
        <strong>£112.99 EXAMPLE</strong>; by the final month it is only about{" "}
        <strong>£5.72 EXAMPLE</strong>. The rate has not changed; the balance has.
      </p>
      <p>
        That is why early rows look “expensive” even when the EMI is fixed: interest is always
        computed on what is still outstanding. The Interest column is the clearest place to see that
        front-loaded cost without summing the whole term first.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Column 4 — Principal
      </h2>
      <p>
        <strong>Principal</strong> is the slice of the payment that reduces the loan:
      </p>
      <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
        Principal = Payment − Interest
      </p>
      <p>
        In month 1 of EXAMPLE Loan A, principal is only about{" "}
        <strong>£104.99 EXAMPLE</strong> — less than the interest slice. By month 16 EXAMPLE,
        principal (≈ £142.87) overtakes interest (≈ £138.50) inside the same EMI for the first time
        in this EXAMPLE. By month 48 EXAMPLE, almost the entire payment is principal (≈ £275.64).
      </p>
      <p>
        Reading tip: scan Principal down the table. When it climbs past Interest, you have crossed
        the point where each instalment is mostly clearing debt rather than servicing the balance.
        That crossover month depends on rate and term; it is not a universal calendar milestone.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Column 5 — Balance
      </h2>
      <p>
        <strong>Balance</strong> is what remains after that month’s principal is applied:
      </p>
      <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
        Closing balance = opening balance − Principal
      </p>
      <p>
        Next month’s Interest is calculated on this closing figure. For EXAMPLE Loan A: after month
        1 the balance is about <strong>£8,395.01 EXAMPLE</strong>; after month 12 about{" "}
        <strong>£7,085.96 EXAMPLE</strong> (most of the original £8,500 still outstanding after a
        year of EMIs); after month 24 about <strong>£5,276.72 EXAMPLE</strong>; and after month 48{" "}
        <strong>£0.00</strong>.
      </p>
      <p>
        The Balance column answers “how much of the loan is left?” at each step. Pair it with
        Interest: a high balance and a high rate produce a large interest cell next month. That
        linkage is the whole reducing-balance idea in one glance.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Worked EXAMPLE — Loan A rows to practise on
      </h2>
      <p>
        All figures below are labelled <strong>EXAMPLE</strong>. Inputs: £8,500 principal · 24.9%
        EXAMPLE annual rate · 48 months · £0 arrangement fee. Fixed EMI ≈{" "}
        <strong>£281.36 EXAMPLE</strong>; total repayable ≈{" "}
        <strong>£13,505.36 EXAMPLE</strong>; total interest ≈{" "}
        <strong>£5,005.36 EXAMPLE</strong>. Snapshot rows (rounded to the nearest penny):
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Month 1 EXAMPLE:</strong> Payment £281.36 · Interest ≈ £176.38 · Principal ≈
          £104.99 · Balance ≈ £8,395.01
        </li>
        <li>
          <strong>Month 2 EXAMPLE:</strong> Interest ≈ £174.20 · Principal ≈ £107.17 · Balance ≈
          £8,287.85 — interest edges down as the balance falls
        </li>
        <li>
          <strong>Month 12 EXAMPLE:</strong> Interest ≈ £149.76 · Principal ≈ £131.60 · Balance ≈
          £7,085.96
        </li>
        <li>
          <strong>Month 16 EXAMPLE (crossover):</strong> Interest ≈ £138.50 · Principal ≈ £142.86 —
          first month in this EXAMPLE where principal exceeds interest
        </li>
        <li>
          <strong>Month 24 EXAMPLE:</strong> Interest ≈ £112.99 · Principal ≈ £168.38 · Balance ≈
          £5,276.72
        </li>
        <li>
          <strong>Month 36 EXAMPLE:</strong> Interest ≈ £65.93 · Principal ≈ £215.43 · Balance ≈
          £2,961.84
        </li>
        <li>
          <strong>Month 48 EXAMPLE (final):</strong> Interest ≈ £5.72 · Principal ≈ £275.64 ·
          Balance £0.00
        </li>
      </ul>
      <p>
        Open the{" "}
        <Link href="/calculators/amortisation" className="text-slate-900 underline">
          amortisation schedule
        </Link>{" "}
        with the same EXAMPLE Loan A defaults and match these cells. Change one input at a time
        (rate, term or amount) and watch which columns move most — usually Interest and Balance
        early on, Principal later.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        A short reading checklist
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Confirm Payment is the EMI you expect for the inputs (and note any final clearing row).
        </li>
        <li>
          Check month 1 Interest ÷ Payment — a high share means a high opening balance relative to
          the rate, not a “broken” table.
        </li>
        <li>
          Find the first month where Principal &gt; Interest (the crossover in this EXAMPLE is
          month 16).
        </li>
        <li>
          Read Balance at month 12 and month 24 — calendar halfway is not the same as half the
          principal cleared when interest is front-loaded.
        </li>
        <li>
          Treat penny differences vs a lender printout as normal under different day-count and
          rounding rules.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        UK disclosures — totals and APR sit beside the path
      </h2>
      <p>
        Regulated UK consumer-credit advertising and agreements use cost-of-credit disclosures —
        including the <strong>APR</strong> and the total amount payable — so borrowers can compare
        products on more than a monthly instalment alone. The FCA’s Consumer Credit sourcebook sets
        out how the total charge for credit and APR are determined for regulated agreements (
        <a
          href="https://handbook.fca.org.uk/handbook/concapp1"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          FCA Handbook, CONC App 1
        </a>
        ). MoneyHelper explains common ways to borrow, including personal loans with fixed monthly
        repayments, and stresses comparing options on more than the instalment alone (
        <a
          href="https://www.moneyhelper.org.uk/en/everyday-money/credit/options-for-borrowing-money"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          MoneyHelper — Options for borrowing money
        </a>
        ). An amortisation schedule does not replace those disclosures; it shows the month-by-month
        path of interest and principal that produces the totals under a stated model. LoanCalc Lab
        is not a lender and does not replace the lender’s figures.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Try the schedule tool
      </h2>
      <p>
        Load EXAMPLE Loan A (£8,500 · 24.9% EXAMPLE rate · 48 months · £0 fee) in the{" "}
        <Link href="/calculators/amortisation" className="text-slate-900 underline">
          amortisation schedule calculator
        </Link>
        , then use this column guide while you scroll the preview. For the EMI total, total interest
        and total repayable on the same inputs, open the{" "}
        <Link href="/calculators/personal-loan-emi" className="text-slate-900 underline">
          personal loan / EMI calculator
        </Link>
        . For the narrative of interest vs principal over the full term, return to{" "}
        <Link href="/guides/amortisation-explained" className="text-slate-900 underline">
          Amortisation explained
        </Link>
        . The point of the pair is clearer payoff maths under labelled assumptions — not a sales
        pitch for any particular loan.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Disclaimer</h2>
      <p>
        This guide and all EXAMPLE figures are illustrative only. They are not personalised
        financial advice, not a credit offer, and not a recommendation to take any loan. LoanCalc
        Lab is not a lender. Rates, fees, day-count conventions and early-settlement terms vary by
        product and lender. Always read the lender’s disclosure and regulated pre-contract
        information for your circumstances before you borrow.
      </p>
    </ArticleLayout>
  );
}
