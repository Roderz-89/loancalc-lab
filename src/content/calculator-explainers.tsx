import Link from "next/link";

const sources = (
  <p className="text-sm text-slate-500">
    Sources for product-norm wording only:{" "}
    <a className="underline" href="https://www.moneyhelper.org.uk/en/everyday-money/credit-and-debt" rel="noopener noreferrer">
      MoneyHelper — credit and debt
    </a>
    ;{" "}
    <a className="underline" href="https://www.fca.org.uk/firms/consumer-credit" rel="noopener noreferrer">
      FCA consumer credit
    </a>
    . Figures below are labelled EXAMPLE and are not a quote.
  </p>
);

export const EMI_EXPLAINER = (
  <>
    <h2 className="text-xl font-semibold text-slate-900">How to use this EMI / payment calculator</h2>
    <p>
      Enter the amount you would actually draw down, the annual rate printed on the illustration,
      and the term in months. Leave the fee at zero if the lender folds costs into the rate. Add an
      arrangement fee when the illustration shows one taken from the advance — that is how the
      “net proceeds” row can be lower than the headline loan.
    </p>
    <p>
      The UK default is sterling and a reducing-balance monthly payment. Other country modes only
      change currency symbols and labels. They do not change the formula and they are not a second
      product. Use the{" "}
      <Link href="/guides/country-mode-help" className="underline">country mode help</Link>{" "}
      page if you need the toggle.
    </p>
    <h2 className="text-xl font-semibold text-slate-900">Worked EXAMPLE — Loan A</h2>
    <p>
      Shared EXAMPLE Loan A: <strong>£8,500</strong> principal, <strong>24.9%</strong> EXAMPLE
      annual rate, <strong>48 months</strong>, <strong>£0</strong> arrangement fee. The standard
      reducing-balance formula gives a monthly payment of about <strong>£281.36</strong>. Total
      repayable is about <strong>£13,505</strong>, of which about <strong>£5,005</strong> is
      interest. Month 1 is mostly interest (about £176) and a smaller slice of principal (about
      £105). That split reverses later in the term.
    </p>
    <p>
      If the same loan carried a £150 fee taken from the advance, net proceeds fall to £8,350 while
      you still repay as if you borrowed £8,500. That is why a cheap-looking rate with a fat fee can
      lose to a slightly higher rate with no fee. Run both in the{" "}
      <Link href="/calculators/apr-true-cost" className="underline">APR / true cost calculator</Link>.
    </p>
    <h2 className="text-xl font-semibold text-slate-900">What the numbers are not</h2>
    <p>
      This is not a quote, a credit offer or an affordability decision. Lenders may use daily
      interest, different rounding, payment-due conventions, or add payment-protection and
      late-fee language that this page ignores. Always read the pre-contract credit information
      (UK) or equivalent disclosure. LoanCalc Lab is not a lender or credit broker.
    </p>
    <p>
      Flat-rate “EMI” quotes — common on some overseas adverts — are out of scope. They charge
      interest on the original principal for the whole term and usually cost more than they look.
      Convert to a reducing-balance / APR figure or use the lender’s own schedule.
    </p>
    <h2 className="text-xl font-semibold text-slate-900">What to do with the result</h2>
    <ol className="list-decimal space-y-2 pl-5">
      <li>Compare the monthly figure with what you can actually pay after rent and essentials.</li>
      <li>
        Open the{" "}
        <Link href="/calculators/amortisation" className="underline">amortisation schedule</Link>{" "}
        if you want the month-by-month split.
      </li>
      <li>
        Test an extra payment on the{" "}
        <Link href="/calculators/extra-payment" className="underline">extra payment calculator</Link>{" "}
        before you assume overpaying is allowed — many personal loans cap or charge for early settlement.
      </li>
    </ol>
    {sources}
  </>
);

export const AMORTISATION_EXPLAINER = (
  <>
    <h2 className="text-xl font-semibold text-slate-900">How to read the schedule</h2>
    <p>
      Each row is one month: opening balance, interest charged that month, principal repaid, and
      closing balance. Early months are interest-heavy on a high-rate personal loan. That is the
      reducing-balance method, not a bug.
    </p>
    <p>
      Use the same EXAMPLE Loan A inputs as the EMI calculator (£8,500 · 24.9% · 48 months) so the
      first row matches the EMI page. If the two pages disagree, you changed an input.
    </p>
    <h2 className="text-xl font-semibold text-slate-900">Why the schedule matters</h2>
    <p>
      A single monthly figure hides how slowly the balance falls in year one. If you are comparing
      a 36-month loan with a 60-month loan, the longer term cuts the payment and increases total
      interest. The schedule makes that trade-off visible without a sales pitch.
    </p>
    <p>
      Lenders sometimes show a slightly different first or last instalment because of daily
      interest or a longer first period. Treat our rows as an illustration of the method, then
      check the lender’s own table. See{" "}
      <Link href="/guides/how-to-read-an-amortisation-schedule" className="underline">
        how to read an amortisation schedule
      </Link>.
    </p>
    <h2 className="text-xl font-semibold text-slate-900">Limitations</h2>
    <p>
      This tool does not model payment holidays, skipped months, variable rates mid-term, or
      payment-protection premiums. Extra payments belong on the extra-payment calculator, not as
      informal edits to this table.
    </p>
    {sources}
  </>
);

export const CONSOLIDATION_EXPLAINER = (
  <>
    <h2 className="text-xl font-semibold text-slate-900">What “break-even” means here</h2>
    <p>
      Consolidation only wins if the new loan’s interest plus fees is lower than keeping the
      existing debts on their current terms — over a horizon you choose. A lower monthly payment
      on a longer term can still cost more in total. This calculator is built to show that split,
      not to tell you to apply.
    </p>
    <p>
      Enter each existing debt with its balance, rate and remaining term. Then enter the proposed
      consolidation loan including any fee. The result compares monthly outgoing and estimated
      total cost. If the fee is large, the new loan can lose even when the headline rate looks cheaper.
    </p>
    <h2 className="text-xl font-semibold text-slate-900">Worked EXAMPLE</h2>
    <p>
      Suppose two EXAMPLE debts: £3,200 at 29.9% with 24 months left, and £5,400 at 18.9% with 36
      months left. A consolidation loan of £8,600 at 14.9% over 48 months with a £200 fee can cut
      the monthly outgoing and still raise lifetime interest because you borrowed the fee and
      stretched the term. Change the term to 36 months and the picture often flips.
    </p>
    <p>
      Read{" "}
      <Link href="/guides/consolidation-break-even" className="underline">consolidation break-even</Link>{" "}
      before you treat a lower monthly figure as a saving. This is not debt advice.
    </p>
    {sources}
  </>
);

export const SNOWBALL_EXPLAINER = (
  <>
    <h2 className="text-xl font-semibold text-slate-900">Snowball vs avalanche — the only difference</h2>
    <p>
      Both methods pay the contractual minimum on every debt, then throw spare cash at one target.
      Snowball targets the smallest balance first. Avalanche targets the highest interest rate
      first. Maths usually favours avalanche for total interest. This page shows both on the same debts.
    </p>
    <p>
      Use remaining balances and the rates you are actually being charged. See{" "}
      <Link href="/guides/snowball-vs-avalanche" className="underline">snowball vs avalanche</Link>.
    </p>
    {sources}
  </>
);

export const REFINANCE_EXPLAINER = (
  <>
    <h2 className="text-xl font-semibold text-slate-900">When refinancing a personal loan can win on paper</h2>
    <p>
      Refinancing means replacing one unsecured personal loan with another. It is not a mortgage
      product transfer. Use the lender’s settlement figure, not a guess.
    </p>
    <p>
      If the remaining term is short, fees usually eat the rate cut. If you stretch the new term,
      total interest can rise even when the rate falls. Remortgage / ERC tools sit on{" "}
      <a className="underline" href="https://remortgagelab.co.uk">Remortgage Lab</a>.
    </p>
    {sources}
  </>
);

export const APR_EXPLAINER = (
  <>
    <h2 className="text-xl font-semibold text-slate-900">Why APR and the headline rate diverge</h2>
    <p>
      The interest rate feeds the monthly formula. APR can pull in certain fees. A 0% fee and a
      9.9% rate can beat an 8.9% rate with a £400 fee on a short loan.
    </p>
    <p>
      UK ads often quote a representative APR that applies to at least 51% of advertised customers.
      See <Link href="/guides/representative-apr" className="underline">representative APR</Link>.
      This is not the statutory APR engine on a credit agreement.
    </p>
    {sources}
  </>
);

export const EXTRA_PAYMENT_EXPLAINER = (
  <>
    <h2 className="text-xl font-semibold text-slate-900">Overpaying a personal loan</h2>
    <p>
      An extra payment cuts interest only if it reduces principal and the lender applies it that way.
      Check the agreement before you copy a number from this page into a standing order.
    </p>
    <p>
      EXAMPLE Loan A (£8,500 · 24.9% · 48 months): a regular extra £50 a month shortens the term.
      Do not use this tool for a residential mortgage. See{" "}
      <Link href="/guides/early-settlement-personal-loans" className="underline">early settlement</Link>.
    </p>
    {sources}
  </>
);
