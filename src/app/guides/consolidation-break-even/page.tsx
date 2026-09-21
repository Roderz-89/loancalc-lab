import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Consolidation break-even — when one loan costs more after fees",
  description:
    "UK debt-consolidation guide: when rolling several debts into one loan costs more after fee and term, with a worked EXAMPLE using Loan B (£12,000 · 16.9% · 60 months · £195 fee) and three snowball-style balances.",
  alternates: { canonical: `${SITE.url}/guides/consolidation-break-even` },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Consolidation break-even — when one loan costs more after fees"
      description="Rolling several balances into one personal loan can simplify the calendar — and still raise what you pay overall once fees, rate blend and term are in the picture. Work the break-even maths with labelled EXAMPLE inputs."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Consolidation break-even — when one loan costs more after fees" },
      ]}
      published="2026-09-21"
      updated="2026-09-21"
      related={[
        {
          href: "/calculators/consolidation-break-even",
          label: "Consolidation break-even calculator",
        },
        { href: "/calculators/apr-true-cost", label: "APR / true cost calculator" },
        {
          href: "/guides/snowball-vs-avalanche",
          label: "Snowball vs avalanche guide",
        },
        { href: "/glossary/consolidation", label: "Consolidation glossary" },
      ]}
    >
      <p>
        Debt consolidation, in this guide, means replacing several unsecured balances with one new
        personal loan. The appeal is easy to state: one repayment, one rate, one end date. The
        maths is harder. A lower monthly figure can hide a longer term. A mid-range consolidation
        rate can still be <em>higher</em> than your cheapest existing debt. An arrangement fee adds
        cash you never see as usable balance. LoanCalc Lab’s tools compare keep-versus-consolidate
        cash flows under stated assumptions; they do not approve credit and they do not say whether
        any particular person ought to consolidate.
      </p>
      <p>
        The angle here is deliberately cautious:{" "}
        <strong>when rolling several debts into one loan costs more after fee and term</strong>. A
        worked <strong>EXAMPLE</strong> pairs a Loan B–style consolidation (£12,000 · 16.9% EXAMPLE ·
        60 months · £195 fee) with the same three balances used in the snowball-versus-avalanche
        guide (£1,200 @ 29.9%, £3,400 @ 22.0%, £6,800 @ 9.9%, with EXAMPLE minimums). Under those
        inputs the new loan clears faster than the keep path — and still shows a slightly{" "}
        <em>higher</em> lifetime cost once the fee and the larger face principal are counted.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        What “break-even” means for consolidation
      </h2>
      <p>
        Three questions often get collapsed into one slogan. First: does the monthly outlay fall?
        Second: if it does, how many months until the arrangement fee (and any exit charges on the
        old debts) are recovered from that monthly saving? Third: over the full life of the debt,
        is total interest plus fees on the consolidation loan lower than the interest you would pay
        by keeping the separate balances at their minimums?
      </p>
      <p>
        A simple fee break-even when the new payment is lower is:
      </p>
      <p className="rounded-lg bg-slate-50 p-4 font-mono text-sm">
        break-even months ≈ fee ÷ monthly saving
      </p>
      <p>
        That formula is empty when the consolidation EMI is <em>higher</em> than the sum of current
        minimums — there is no monthly saving to amortise the fee against. Lifetime cost can still
        improve if interest falls by more than the fee, or worsen if you stretch the term, roll a
        cheap balance into a dearer rate, or borrow more than the sum of today’s balances. The{" "}
        <Link href="/calculators/consolidation-break-even" className="text-slate-900 underline">
          consolidation break-even calculator
        </Link>{" "}
        reports monthly change, keep-path interest, consolidation interest, fee-inclusive total cost
        and a fee break-even month when a monthly saving exists.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Worked EXAMPLE — three debts vs Loan B–style consolidation
      </h2>
      <p>
        All figures below are labelled <strong>EXAMPLE</strong>. They are illustrative only — not a
        live quote, not a credit offer, and not a recommendation to consolidate or to keep separate
        debts.
      </p>
      <p>
        <strong>Existing debts (same snowball EXAMPLE set):</strong>
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>EXAMPLE Debt A:</strong> £1,200 balance · 29.9% EXAMPLE annual rate · £45 EXAMPLE
          minimum / month
        </li>
        <li>
          <strong>EXAMPLE Debt B:</strong> £3,400 balance · 22.0% EXAMPLE annual rate · £90 EXAMPLE
          minimum / month
        </li>
        <li>
          <strong>EXAMPLE Debt C:</strong> £6,800 balance · 9.9% EXAMPLE annual rate · £100 EXAMPLE
          minimum / month
        </li>
      </ul>
      <p>
        Starting balances sum to <strong>£11,400 EXAMPLE</strong>. Combined minimums are{" "}
        <strong>£235 EXAMPLE</strong> per month.
      </p>
      <p>
        <strong>EXAMPLE consolidation (Loan B style):</strong> £12,000 face principal · 16.9%
        EXAMPLE annual rate · <strong>60 months</strong> · £195 EXAMPLE arrangement fee.
      </p>
      <p>
        Under LoanCalc Lab’s reducing-balance keep-path simulation (each debt pays only its EXAMPLE
        minimum until cleared), the three debts take about <strong>101 months EXAMPLE</strong> to
        clear, with total interest ≈ <strong>£6,460 EXAMPLE</strong> and total cost (principal +
        interest) ≈ <strong>£17,860 EXAMPLE</strong>.
      </p>
      <p>
        The EXAMPLE consolidation EMI is about <strong>£297.59 EXAMPLE</strong>. Total interest on
        the £12,000 loan ≈ <strong>£5,855 EXAMPLE</strong>. Adding the £195 fee, fee-inclusive total
        cost ≈ <strong>£18,050 EXAMPLE</strong> over 60 months.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Monthly change ≈ <strong>+£62.59 EXAMPLE</strong> (£297.59 − £235) — the consolidation
          payment is <em>higher</em>, so fee break-even from monthly saving does not apply
        </li>
        <li>
          Interest alone is lower on the consolidation path (~£605 EXAMPLE before the fee), but
          fee-inclusive lifetime cost is about <strong>£190 EXAMPLE higher</strong> than keeping the
          three debts at their minimums
        </li>
        <li>
          Time to clear falls from ~101 months to 60 months — a shorter calendar that still costs
          more in this EXAMPLE once fee and face principal are counted
        </li>
      </ul>
      <p>
        Run the same inputs in the{" "}
        <Link href="/calculators/consolidation-break-even" className="text-slate-900 underline">
          consolidation break-even calculator
        </Link>
        . Pair it with the{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>{" "}
        when you want a fee-aware view of the consolidation product on its own — not only the
        keep-versus-consolidate comparison.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Why this EXAMPLE costs more — fee, blend and face amount
      </h2>
      <p>
        Three structural features drive the result; none of them needs a “bad” lender to appear.
      </p>
      <p>
        <strong>1. Rate blend.</strong> Debts A and B sit above 16.9% EXAMPLE; Debt C sits{" "}
        <em>below</em> it at 9.9% EXAMPLE. Rolling the cheap balance into the consolidation rate
        raises the cost of that slice of debt even while the dear balances get cheaper. Weighted
        average rate on the keep path is not the same as “everything at 16.9%”.
      </p>
      <p>
        <strong>2. Face principal vs balances.</strong> The Loan B–style EXAMPLE advances £12,000
        against £11,400 of starting balances — an extra £600 EXAMPLE of principal to amortise.
        Interest on the consolidation path can still look lower than keep-path interest while{" "}
        <em>total</em> cash repaid (principal + interest + fee) is higher, because you are
        financing a larger face amount.
      </p>
      <p>
        <strong>3. Arrangement fee.</strong> The £195 EXAMPLE fee is cash that does not reduce
        anyone’s existing balance in this framing. On the calculator’s interest-saved line it is
        subtracted from the interest gap; on total cost it sits on top of repayments. Either way it
        must be earned back — and when monthly outlay rises, it cannot be earned back from payment
        relief alone.
      </p>
      <p>
        Term length matters too. Sixty months clears faster than the ~101-month keep path at
        minimums, which can feel like a win on the calendar. Stretching further to force a lower EMI
        would usually raise consolidation interest; shortening the term raises the monthly figure
        further. Neither move is “free” — each trades cashflow against lifetime cost.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        What a better-looking consolidation would need (same debts)
      </h2>
      <p>
        The EXAMPLE above is chosen to show a cost <em>increase</em>, not to claim every
        consolidation loses money. Holding the three debts fixed, a consolidation that matched the
        £11,400 balance sum (instead of £12,000), carried a lower rate than the dear balances{" "}
        <em>without</em> lifting Debt C above its 9.9% EXAMPLE, or cut the fee, would move the
        lifetime comparison. Leaving Debt C outside the new loan and consolidating only A and B is
        another modelling choice — still an EXAMPLE decision, not advice. Change one input at a time
        in the calculator and watch monthly change, interest and fee-inclusive total cost flip sign.
      </p>
      <p>
        Separately, keeping the debts and directing surplus after minimums (snowball or avalanche)
        is a different strategy from taking new credit. The{" "}
        <Link href="/guides/snowball-vs-avalanche" className="text-slate-900 underline">
          snowball vs avalanche guide
        </Link>{" "}
        uses the same three EXAMPLE balances with a £75 EXAMPLE monthly extra; that path never
        introduces a consolidation fee or a new rate on Debt C.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Public guidance on cost of credit
      </h2>
      <p>
        In the UK, regulated consumer credit uses an <strong>APR</strong> (annual percentage rate of
        charge) that reflects the total charge for credit under prescribed assumptions. The FCA’s
        Consumer Credit sourcebook sets out how the total charge for credit and APR are determined
        for regulated agreements (
        <a
          href="https://handbook.fca.org.uk/handbook/concapp1"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          FCA Handbook, CONC App 1
        </a>
        ). MoneyHelper’s borrowing guidance stresses comparing the cost of credit options —
        including key figures such as APR and how much you repay overall — rather than reacting to a
        headline rate or a single monthly figure alone (
        <a
          href="https://www.moneyhelper.org.uk/en/everyday-money/credit/options-for-borrowing-money"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          MoneyHelper — Options for borrowing money
        </a>
        ). LoanCalc Lab’s consolidation and true-cost tools are illustrative companions to those
        disclosures; they are not a substitute for the lender’s pre-contract information or a
        regulated APR on an agreement.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Practical checklist</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          List every balance, contractual rate and minimum you would replace — including any cheap
          debt that might become dearer under the consolidation rate
        </li>
        <li>
          Compare the consolidation face amount with the sum of balances (and how any fee is funded)
        </li>
        <li>
          Put arrangement fees and any early-settlement / exit charges into the same cost pot
        </li>
        <li>
          Record monthly change <em>and</em> fee-inclusive lifetime cost — a lower EMI from a longer
          term is not automatically a cheaper loan
        </li>
        <li>
          Note whether fee break-even months even apply (they need a monthly saving)
        </li>
        <li>
          Remember credit checks and eligibility — calculators do not approve credit or guarantee a
          rate
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Try the calculators</h2>
      <p>
        For the EXAMPLE above — three snowball-style debts versus a Loan B–style consolidation
        (£12,000 · 16.9% EXAMPLE · 60 months · £195 fee) — start with the{" "}
        <Link href="/calculators/consolidation-break-even" className="text-slate-900 underline">
          consolidation break-even calculator
        </Link>
        . Change the consolidation amount, rate, term and fee one at a time to see when monthly
        change and lifetime cost flip. Use the{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>{" "}
        when you want a fee-adjusted view of a single consolidation offer’s effective cost. The
        point of these tools is clearer cost maths under stated assumptions — not a sales pitch to
        roll debts together.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Disclaimer</h2>
      <p>
        This guide and all EXAMPLE figures are illustrative only. They are not personalised financial
        advice, not a credit offer, and not a recommendation to consolidate, to keep separate debts,
        or to take any new credit. LoanCalc Lab is not a lender. Rates, fees, early-settlement
        terms, day-count conventions and eligibility vary by product and lender. Always read the
        lender’s disclosure and regulated pre-contract information for your circumstances before you
        borrow or settle early.
      </p>
    </ArticleLayout>
  );
}
