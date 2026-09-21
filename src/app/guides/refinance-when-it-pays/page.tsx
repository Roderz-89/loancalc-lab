import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Refinance a personal loan when it pays — fees vs a lower rate",
  description:
    "UK personal-loan refinance guide: break-even maths with a worked EXAMPLE comparing Loan A (£8,500 · 24.9% · 48 months · £0 fee) to a lower-rate deal with a £195 fee — and when fees erase the benefit.",
  alternates: { canonical: `${SITE.url}/guides/refinance-when-it-pays` },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Refinance a personal loan when it pays — fees vs a lower rate"
      description="A lower rate is not enough on its own. Work through fee break-even, remaining interest and term length for unsecured personal-loan refinance — not property remortgage."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Refinance a personal loan when it pays — fees vs a lower rate" },
      ]}
      published="2026-09-14"
      updated="2026-09-21"
      related={[
        { href: "/calculators/refinance-break-even", label: "Refinance break-even calculator" },
        { href: "/calculators/apr-true-cost", label: "APR / true cost calculator" },
        { href: "/guides/fees-apr-true-cost", label: "Fees & APR guide" },
        {
          href: "/guides/early-settlement-personal-loans",
          label: "Early settlement on personal loans",
        },
      ]}
    >
      <p>
        Refinancing a <strong>personal loan</strong> means replacing an existing unsecured balance with a
        new personal loan — usually hoping for a lower rate or a more manageable monthly figure. This
        guide is about that consumer-credit decision only. It is <em>not</em> about mortgages, property
        remortgage, or secured home loans. LoanCalc Lab’s refinance tools model personal-loan cash
        flows under stated assumptions; they do not approve credit and they do not say whether any
        particular person ought to refinance.
      </p>
      <p>
        The headline rate cut is the easy part. Arrangement fees, early-repayment charges on the old
        agreement, a longer new term, and soft or hard credit checks can all change the maths. A
        worked <strong>EXAMPLE</strong> below contrasts a Loan A–style deal (£8,500 · 24.9% EXAMPLE ·
        48 months · £0 fee) with a lower-rate refinance that carries a £195 arrangement fee — and then
        shows two ways that fee can wipe most or all of the apparent benefit.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        What “pays” means in break-even terms
      </h2>
      <p>
        Two different questions often get mixed up. First: does the new monthly payment fall, and if
        so, how many months until fee costs are recovered from that monthly saving? Second: over the
        full remaining life of the debt, is total interest plus fees on the new loan lower than the
        interest left on the current one? Cashflow break-even can look attractive while lifetime cost
        is worse — especially if the new term is stretched. Lifetime saving can look positive while
        the fee break-even sits near the end of a short remaining term, so the refinance never has
        time to earn its keep.
      </p>
      <p>
        A simple fee break-even when the monthly payment falls is:
      </p>
      <p className="rounded-lg bg-slate-50 p-4 font-mono text-sm">
        break-even months ≈ fees ÷ monthly saving
      </p>
      <p>
        “Fees” here should include the new arrangement or product fee <em>and</em> any early-settlement
        or exit charge on the loan being replaced. Monthly saving is current EMI minus new EMI under
        the same principal (or the remaining balance being refinanced). If monthly saving is tiny or
        negative, the fee is not recovered from payment relief alone — you then rely entirely on
        lower lifetime interest, which is where a short leftover term often fails.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Worked EXAMPLE — Loan A vs a fee-bearing refinance
      </h2>
      <p>
        All figures below are labelled <strong>EXAMPLE</strong>. They are illustrative only — not a
        live quote, not a credit offer, and not a recommendation to refinance or to stay put.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>EXAMPLE Loan A (current):</strong> £8,500 principal · 24.9% EXAMPLE annual rate · 48
          months · £0 arrangement fee
        </li>
        <li>
          <strong>EXAMPLE refinance:</strong> same £8,500 · 14.9% EXAMPLE annual rate · 48 months ·
          £195 arrangement fee
        </li>
      </ul>
      <p>
        Under LoanCalc Lab’s reducing-balance model, EXAMPLE Loan A has a monthly payment of about{" "}
        <strong>£281.36 EXAMPLE</strong>, total repayable ≈ <strong>£13,505 EXAMPLE</strong>, and total
        interest ≈ <strong>£5,005 EXAMPLE</strong>.
      </p>
      <p>
        The EXAMPLE refinance at 14.9% has a monthly payment of about{" "}
        <strong>£236.13 EXAMPLE</strong>, total interest ≈ <strong>£2,834 EXAMPLE</strong>, plus the{" "}
        <strong>£195 EXAMPLE</strong> fee. Compared with staying on Loan A for the full 48 months:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Monthly saving ≈ <strong>£45.23 EXAMPLE</strong> (£281.36 − £236.13)
        </li>
        <li>
          Interest saving ≈ <strong>£2,171 EXAMPLE</strong> before the fee
        </li>
        <li>
          Net lifetime saving after the £195 fee ≈ <strong>£1,976 EXAMPLE</strong>
        </li>
        <li>
          Simple fee break-even ≈ <strong>5 months EXAMPLE</strong> (ceil of £195 ÷ £45.23)
        </li>
      </ul>
      <p>
        In <em>this</em> EXAMPLE the rate cut is large and the remaining term is long, so the fee is
        recovered quickly and lifetime maths still looks favourable under the stated assumptions. That
        is the best-case shape of a refinance story — not a template for every balance. Change the
        rate gap, the fee, or how many months are left, and the same £195 can tell a different story.
      </p>
      <p>
        Run the same inputs in the{" "}
        <Link href="/calculators/refinance-break-even" className="text-slate-900 underline">
          refinance break-even calculator
        </Link>{" "}
        for monthly saving, break-even months and lifetime saving. Pair it with the{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>{" "}
        when you want a fee-aware view of effective yearly cost on a single product, not just a
        side-by-side refinance comparison.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        When fees erase the benefit — two counter-EXAMPLES
      </h2>
      <p>
        <strong>Counter-EXAMPLE 1 — modest rate cut, same fee.</strong> Keep EXAMPLE Loan A (£8,500 ·
        24.9% · 48 months · £0 fee) and refinance to <strong>23.9% EXAMPLE</strong> for 48 months with
        the same <strong>£195 EXAMPLE</strong> fee. Monthly saving shrinks to about{" "}
        <strong>£4.72 EXAMPLE</strong>. Interest saving before the fee is only about{" "}
        <strong>£226 EXAMPLE</strong>; after the fee, lifetime saving falls to roughly{" "}
        <strong>£31 EXAMPLE</strong>. Fee break-even stretches to about{" "}
        <strong>42 months EXAMPLE</strong> — almost the whole term. A one-percentage-point cut that
        looks “better on the rate” barely covers a mid-hundreds fee once interest maths is done.
      </p>
      <p>
        <strong>Counter-EXAMPLE 2 — large rate cut, short time left.</strong> Suppose EXAMPLE Loan A
        has already run for 36 months, leaving about <strong>£2,962 EXAMPLE</strong> and{" "}
        <strong>12 months</strong> on the original schedule. Refinance that remaining balance to{" "}
        <strong>14.9% EXAMPLE</strong> for 12 months with a <strong>£195 EXAMPLE</strong> fee. Monthly
        saving is still positive (~<strong>£14.17 EXAMPLE</strong>), and fee break-even on cashflow
        alone looks like about <strong>14 months EXAMPLE</strong> — longer than the 12 months left.
        Lifetime interest saved on the short stub is only about <strong>£170 EXAMPLE</strong>, so after
        the £195 fee the refinance shows a small <strong>lifetime loss</strong> (~
        <strong>£25 EXAMPLE</strong>) under these assumptions. The lower rate is real; the fee still
        wins because there is not enough remaining interest to claw it back.
      </p>
      <p>
        Together these counter-EXAMPLES make the same point as the main comparison: fees can wipe a
        lower rate when the cut is thin, the leftover term is short, or both. Always price the fee
        against <em>remaining</em> interest, not against the original full-term interest on day one.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Term stretch, early settlement and credit checks
      </h2>
      <p>
        Refinancing into a longer term can drop the monthly payment even when the rate is unchanged —
        and total interest usually rises. Treat a lower EMI that comes from more months as a cashflow
        choice, not automatically as a cheaper loan. Compare remaining interest on the current
        schedule with interest plus fees on the new schedule at the new term.
      </p>
      <p>
        Early settlement on the old loan may carry a charge or a limited rebate of future interest,
        depending on the agreement and UK consumer-credit rules for that product. Add any exit cost to
        the refinance “fees” pot before judging break-even. A new application may also trigger a
        credit search; eligibility and the rate you are actually offered can differ from an
        illustrative EXAMPLE rate on a calculator.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        APR, total charge for credit, and public guidance
      </h2>
      <p>
        In the UK, regulated consumer credit uses an <strong>APR</strong> (annual percentage rate of
        charge) that reflects the total charge for credit under prescribed assumptions. The FCA’s
        Consumer Credit sourcebook sets out how the total charge for credit and APR are determined for
        regulated agreements (
        <a
          href="https://handbook.fca.org.uk/handbook/concapp1"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          FCA Handbook, CONC App 1
        </a>
        ). MoneyHelper’s borrowing guidance similarly stresses comparing the cost of credit options —
        including key figures such as APR and how much you repay overall — rather than reacting to a
        headline rate alone (
        <a
          href="https://www.moneyhelper.org.uk/en/everyday-money/credit/options-for-borrowing-money"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          MoneyHelper — Options for borrowing money
        </a>
        ). LoanCalc Lab’s refinance and true-cost tools are illustrative companions to those
        disclosures; they are not a substitute for the lender’s pre-contract information or a
        regulated APR on an agreement.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Practical checklist</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Confirm you are comparing personal-loan refinance with personal-loan refinance — not a
          mortgage or secured remortgage product
        </li>
        <li>
          Put arrangement fees and any early-repayment / exit charge into the same “fees” total
        </li>
        <li>
          Compare remaining interest on the current loan with interest + fees on the new one at the
          proposed term
        </li>
        <li>
          Note fee break-even months and whether that horizon fits inside the new (or remaining) term
        </li>
        <li>
          Watch for term stretch that lowers the EMI while raising lifetime interest
        </li>
        <li>
          Remember credit checks and eligibility — calculators do not approve credit or guarantee a
          rate
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Try the calculators</h2>
      <p>
        For the EXAMPLE Loan A baseline (£8,500 · 24.9% EXAMPLE rate · 48 months · £0 fee) and a
        lower-rate fee-bearing alternative, start with the{" "}
        <Link href="/calculators/refinance-break-even" className="text-slate-900 underline">
          refinance break-even calculator
        </Link>
        . Change the new rate, fee and term one at a time to see when monthly saving, break-even
        months and lifetime saving flip sign. Use the{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>{" "}
        when you want a fee-adjusted view of a single offer’s effective cost. The point of these tools
        is clearer cost maths under stated assumptions — not a sales pitch to refinance.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Disclaimer</h2>
      <p>
        This guide and all EXAMPLE figures are illustrative only. They are not personalised financial
        advice, not a credit offer, and not a recommendation to refinance, to stay on an existing
        loan, or to take any new credit. LoanCalc Lab is not a lender. Rates, fees, early-settlement
        terms, day-count conventions and eligibility vary by product and lender. Always read the
        lender’s disclosure and regulated pre-contract information for your circumstances before you
        borrow or settle early.
      </p>
    </ArticleLayout>
  );
}
