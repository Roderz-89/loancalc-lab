import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Amortisation explained — how to read a loan schedule",
  description:
    "UK guide to reading an amortisation schedule: interest vs principal over time, with a worked EXAMPLE for Loan A (£8,500 · 24.9% EXAMPLE · 48 months · £0 fee).",
  alternates: { canonical: `${SITE.url}/guides/amortisation-explained` },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Amortisation explained — how to read a loan schedule"
      description="Each EMI is fixed; the interest/principal split is not. Learn how to read a schedule month by month with a UK EXAMPLE."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Amortisation explained — how to read a loan schedule" },
      ]}
      published="2026-09-14"
      updated="2026-09-21"
      related={[
        { href: "/calculators/amortisation", label: "Amortisation schedule" },
        { href: "/calculators/personal-loan-emi", label: "Personal loan / EMI calculator" },
        { href: "/glossary/amortisation", label: "Amortisation glossary" },
      ]}
    >
      <p>
        <strong>Amortisation</strong> is the process of clearing a loan through regular payments.
        An <strong>amortisation schedule</strong> is the month-by-month table that shows, for each
        instalment: the payment amount, how much of it is interest, how much reduces principal, and
        the balance left afterwards. The EMI (or monthly repayment) is usually level on a fixed-rate
        reducing-balance loan; the <em>split</em> inside that payment changes every month.
      </p>
      <p>
        Reading that table is the practical skill behind “true cost” and payoff clarity. Headline
        rates and a single monthly figure do not show when interest dominates, when principal
        overtakes it, or how much of the original loan is still outstanding halfway through the
        term. This guide walks through those columns with a UK <strong>EXAMPLE</strong> — Loan A —
        then points to the on-site tools that regenerate the same maths under stated assumptions.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        What each column on the schedule means
      </h2>
      <p>
        A typical reducing-balance schedule has four numbers per month (plus the month index):
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Payment</strong> — the cash you pay that month (the EMI, unless the final month
          is a small residual to clear rounding).
        </li>
        <li>
          <strong>Interest</strong> — charge for the month on the <em>outstanding</em> balance at
          the start of the month (annual rate ÷ 12 in the simple monthly model LoanCalc Lab uses).
        </li>
        <li>
          <strong>Principal</strong> — payment minus interest. This is the slice that actually
          shrinks the loan.
        </li>
        <li>
          <strong>Balance</strong> — previous balance minus principal. Next month’s interest is
          calculated on this new figure.
        </li>
      </ul>
      <p>
        Early months: balance is high → interest is large → principal slice is small. Later months:
        balance is low → interest is small → almost all of the EMI pays down principal. The payment
        line looks boring; the interest and principal lines tell the story.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Worked EXAMPLE — Loan A (UK)
      </h2>
      <p>
        All figures below are labelled <strong>EXAMPLE</strong>. They are not a live quote, not a
        credit offer, and not a recommendation to borrow.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>EXAMPLE Loan A:</strong> £8,500 principal · 24.9% EXAMPLE annual rate · 48 months
          · £0 arrangement fee
        </li>
      </ul>
      <p>
        Under the standard reducing-balance EMI formula, the fixed monthly payment is about{" "}
        <strong>£281.36 EXAMPLE</strong>. Over 48 months that implies:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Total repayable ≈ <strong>£13,505.36 EXAMPLE</strong>
        </li>
        <li>
          Total interest ≈ <strong>£5,005.36 EXAMPLE</strong>
        </li>
      </ul>
      <p>
        Those totals alone do not show <em>when</em> the interest is paid. The schedule does.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        How to read interest vs principal over time
      </h2>
      <p>
        Snapshot rows from the EXAMPLE Loan A schedule (figures rounded to the nearest penny;
        labelled EXAMPLE throughout):
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Month 1 EXAMPLE:</strong> payment £281.36 · interest ≈ £176.38 · principal ≈
          £104.99 · balance ≈ £8,395.01 — roughly 63% of the first payment is interest.
        </li>
        <li>
          <strong>Month 2 EXAMPLE:</strong> interest ≈ £174.20 · principal ≈ £107.17 — the interest
          share edges down as the balance falls.
        </li>
        <li>
          <strong>Month 12 EXAMPLE:</strong> interest ≈ £149.76 · principal ≈ £131.60 · balance ≈
          £7,085.96 — after a full year, most of the original £8,500 is still outstanding.
        </li>
        <li>
          <strong>Month 16 EXAMPLE (crossover):</strong> interest ≈ £138.50 · principal ≈ £142.86 —
          the first month in this EXAMPLE where principal exceeds interest inside the EMI.
        </li>
        <li>
          <strong>Month 24 EXAMPLE:</strong> interest ≈ £112.99 · principal ≈ £168.38 · balance ≈
          £5,276.72 — halfway through the calendar term, more than half the original principal
          remains.
        </li>
        <li>
          <strong>Month 36 EXAMPLE:</strong> interest ≈ £65.93 · principal ≈ £215.43 · balance ≈
          £2,961.84.
        </li>
        <li>
          <strong>Month 48 EXAMPLE (final):</strong> interest ≈ £5.72 · principal ≈ £275.64 ·
          balance £0.00 — almost the entire last payment clears principal.
        </li>
      </ul>
      <p>
        Grouped by year on the same EXAMPLE, interest paid falls while principal repaid rises:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Year 1 EXAMPLE: ≈ £1,962 interest · ≈ £1,414 principal
        </li>
        <li>
          Year 2 EXAMPLE: ≈ £1,567 interest · ≈ £1,809 principal
        </li>
        <li>
          Year 3 EXAMPLE: ≈ £1,061 interest · ≈ £2,315 principal
        </li>
        <li>
          Year 4 EXAMPLE: ≈ £415 interest · ≈ £2,962 principal
        </li>
      </ul>
      <p>
        That pattern is why early-settlement or extra principal payments (where the agreement
        allows) can cut total interest more than the same cash applied late in the term: interest
        is charged on whatever balance is still there. The schedule makes that timing visible
        without needing a separate narrative.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        What the schedule is for — and what it is not
      </h2>
      <p>
        Use a schedule to answer concrete questions under stated assumptions: How much interest is
        paid in the first year? When does principal overtake interest inside the EMI? What balance
        remains at month 24? How does a longer term stretch the interest-heavy front of the curve?
        Pair it with the EMI total so monthly cash flow and lifetime cost sit side by side.
      </p>
      <p>
        A simple monthly model will not match every lender printout. Day-count conventions,
        rounding, payment holidays, variable rates, and fee financing can shift rows by pennies or
        more. Treat on-site output as illustrative; the lender’s disclosure and regulated
        pre-contract information remain the agreement of record.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        UK norms — total cost and comparisons
      </h2>
      <p>
        In the UK, regulated consumer credit advertising and agreements use cost-of-credit
        disclosures — including the <strong>APR</strong> and the total amount payable — so that
        borrowers can compare products on more than a monthly instalment alone. The FCA’s Consumer
        Credit sourcebook sets out how the total charge for credit and APR are determined for
        regulated agreements (
        <a
          href="https://handbook.fca.org.uk/handbook/concapp1"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          FCA Handbook, CONC App 1
        </a>
        ). MoneyHelper explains common ways to borrow, including personal loans with fixed monthly
        repayments, and emphasises comparing options on more than the instalment alone (
        <a
          href="https://www.moneyhelper.org.uk/en/everyday-money/credit/options-for-borrowing-money"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          MoneyHelper — Options for borrowing money
        </a>
        ). An amortisation schedule complements those disclosures: it shows the path of interest
        and principal that produces the totals, under the model’s assumptions. LoanCalc Lab is not
        a lender and does not replace the lender’s figures.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Try the calculators</h2>
      <p>
        For EXAMPLE Loan A defaults (£8,500 · 24.9% EXAMPLE rate · 48 months · £0 fee), open the{" "}
        <Link href="/calculators/amortisation" className="text-slate-900 underline">
          amortisation schedule
        </Link>{" "}
        to walk month by month through interest, principal and balance. Use the{" "}
        <Link href="/calculators/personal-loan-emi" className="text-slate-900 underline">
          personal loan / EMI calculator
        </Link>{" "}
        for the same inputs’ monthly payment, total interest and total repayable. Change rate,
        term or amount one at a time to see how the interest-heavy front of the schedule stretches
        or compresses. That is the point of these tools: clearer cost and payoff maths under
        stated assumptions — not a sales pitch for any particular loan.
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
