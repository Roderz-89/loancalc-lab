import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Fees & APR — headline rate vs true cost of credit",
  description:
    "UK guide to how arrangement fees raise effective cost vs a headline rate: worked EXAMPLE with Loan B (£12,000 · 16.9% EXAMPLE · 60 months · £195 fee) and what APR disclosures are for.",
  alternates: { canonical: `${SITE.url}/guides/fees-apr-true-cost` },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Fees & APR — headline rate vs true cost of credit"
      description="Two loans with the same headline rate can cost different amounts once an arrangement fee reduces cash in hand. See how fee-adjusted true cost and illustrative APR diverge from the rate on the advert."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Fees & APR — headline rate vs true cost of credit" },
      ]}
      published="2026-09-14"
      updated="2026-09-21"
      related={[
        { href: "/calculators/apr-true-cost", label: "APR / true cost calculator" },
        { href: "/guides/representative-apr", label: "Representative APR explained" },
        { href: "/guides/arrangement-fees-and-apr", label: "Arrangement fees and APR" },
        { href: "/guides/refinance-when-it-pays", label: "Refinance when it pays" },
        {
          href: "/guides/using-calculators-with-a-lender-illustration",
          label: "Using calculators with a lender illustration",
        },
        { href: "/calculators/personal-loan-emi", label: "Personal loan / EMI calculator" },
        { href: "/glossary/apr", label: "APR glossary" },
      ]}
    >
      <p>
        A <strong>headline rate</strong> is the contractual annual interest percentage used to size
        the monthly repayment on the face principal. An <strong>APR</strong> (annual percentage rate
        of charge), and the broader idea of <em>true cost</em>, ask a different question: given the
        cash you actually receive and the payments you must make, what yearly cost does that deal
        imply? When an arrangement, processing or similar fee is taken up front, those two numbers
        stop matching — even if the interest rate printed on the offer is unchanged.
      </p>
      <p>
        LoanCalc Lab focuses on fee-adjusted true cost and payoff clarity. This guide explains why a
        fee raises effective cost, walks a UK <strong>EXAMPLE</strong> using Loan B (£12,000 · 16.9%
        EXAMPLE · 60 months · £195 fee), and points to the calculators that recompute the same maths
        under stated assumptions. It is not a sales pitch for any product and it is not a substitute
        for a lender’s regulated disclosure.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Headline rate, cash received and the payment stream
      </h2>
      <p>
        On a simple reducing-balance personal loan with no fee, the lender advances the full face
        principal and you repay a fixed EMI sized on that principal and the contractual rate. The
        percentage on the advert and the effective yearly cost of the cash flows line up under the
        same modelling assumptions (before day-count and rounding differences).
      </p>
      <p>
        Add an <strong>upfront fee</strong> that is deducted from the advance (or paid separately so
        you still end up with less usable cash than the face amount) and the picture changes. Interest
        and the EMI are still calculated on the full face principal in the usual LoanCalc Lab model,
        but the net cash you receive is principal minus fee. You are servicing a larger notional
        balance than the money that actually arrived. That gap is what pushes an illustrative
        fee-adjusted APR above the headline rate.
      </p>
      <p>
        Fees can also be financed (added to the loan) or charged as a separate invoice. The cash-flow
        pattern differs, but the economic point is the same: extra cost attached to getting the
        credit raises the effective price of borrowing relative to a fee-free quote at the same
        headline rate. Always read how the fee is applied on the actual agreement — calculator
        assumptions are labelled and simplified.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        What “true cost” means on LoanCalc Lab
      </h2>
      <p>
        The{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>{" "}
        treats an upfront fee as reducing cash received, keeps the EMI sized on the face principal and
        headline rate, then solves for an illustrative effective APR that equates that smaller cash
        advance to the same payment stream. Outputs typically include:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Monthly payment (from the headline rate and face principal)</li>
        <li>Cash received (principal − upfront fee)</li>
        <li>Total repayable over the term</li>
        <li>Illustrative effective APR and the uplift versus the headline rate</li>
        <li>Fee as a percentage of the face loan</li>
      </ul>
      <p>
        That effective APR is an <em>illustrative</em> IRR-style figure under LoanCalc Lab’s monthly
        reducing-balance model. It is <strong>not</strong> a substitute for a UK regulated APR,
        representative APR on advertising, Australian comparison rate, or any other jurisdiction’s
        prescribed cost-of-credit calculation. Those follow local rules, prescribed inclusions and
        timing assumptions. Always prefer the lender’s pre-contract information and the APR printed
        on the agreement.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Worked EXAMPLE — Loan B (UK)
      </h2>
      <p>
        All figures below are labelled <strong>EXAMPLE</strong>. They are not a live quote, not a
        credit offer, and not a recommendation to borrow. The EXAMPLE term is{" "}
        <strong>60 months</strong> so the EMI and fee-adjusted APR maths are fully specified.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>EXAMPLE Loan B:</strong> £12,000 face principal · 16.9% EXAMPLE annual headline
          rate · 60 months · £195 EXAMPLE arrangement fee deducted from the advance
        </li>
      </ul>
      <p>
        Under LoanCalc Lab’s reducing-balance model, the monthly payment sized on the £12,000 face
        amount at 16.9% EXAMPLE for 60 months is about <strong>£297.59 EXAMPLE</strong>.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Cash received after the fee ≈ <strong>£11,805 EXAMPLE</strong> (£12,000 − £195)
        </li>
        <li>
          Total repayable ≈ <strong>£17,855 EXAMPLE</strong> (£297.59 × 60)
        </li>
        <li>
          Total interest on the face principal ≈ <strong>£5,855 EXAMPLE</strong> (before treating the
          fee as a separate cost of getting the credit)
        </li>
        <li>
          Fee as a share of face principal = <strong>1.625% EXAMPLE</strong>
        </li>
        <li>
          Illustrative effective APR ≈ <strong>17.66% EXAMPLE</strong>
        </li>
        <li>
          Uplift versus the 16.9% EXAMPLE headline ≈ <strong>0.76 percentage points EXAMPLE</strong>
        </li>
      </ul>
      <p>
        The contractual headline rate is still 16.9% EXAMPLE. The EMI is still about £297.59 EXAMPLE.
        What changed is the value of cash in hand: you repay as if you borrowed £12,000 while only
        receiving £11,805. The illustrative APR rises to roughly 17.66% EXAMPLE to reflect that
        thinner advance against the same payment stream. That is the core “headline vs true cost”
        lesson in a single product — not a comparison between two different lenders’ brands.
      </p>
      <p>
        Run the same inputs in the{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>{" "}
        (£12,000 · 16.9% · 60 months · £195 fee) to reproduce cash received, total repayable and
        effective APR. Pair it with the{" "}
        <Link href="/calculators/personal-loan-emi" className="text-slate-900 underline">
          personal loan / EMI calculator
        </Link>{" "}
        if you want the payment, interest and total repayable view without focusing on the
        fee-adjusted APR solve.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Same headline rate, £0 fee vs £195 fee — side-by-side EXAMPLE
      </h2>
      <p>
        Hold every input fixed except the fee. Both rows use <strong>£12,000 EXAMPLE</strong> face
        principal · <strong>16.9% EXAMPLE</strong> headline · <strong>60 months EXAMPLE</strong>:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>EXAMPLE with £0 fee:</strong> cash received <strong>£12,000 EXAMPLE</strong> · EMI ≈{" "}
          <strong>£297.59 EXAMPLE</strong> · total repayable ≈ <strong>£17,855 EXAMPLE</strong> ·
          illustrative effective APR ≈ <strong>16.9% EXAMPLE</strong> (matches the headline under this
          model)
        </li>
        <li>
          <strong>EXAMPLE Loan B (£195 fee):</strong> cash received ≈ <strong>£11,805 EXAMPLE</strong> ·
          EMI ≈ <strong>£297.59 EXAMPLE</strong> (unchanged) · total repayable ≈{" "}
          <strong>£17,855 EXAMPLE</strong> · illustrative effective APR ≈{" "}
          <strong>17.66% EXAMPLE</strong> (about <strong>0.76 percentage points EXAMPLE</strong> above
          the headline)
        </li>
      </ul>
      <p>
        The headline rate string is identical. The EMI is identical. You still repay about £17,855
        EXAMPLE over five years. What changed is usable cash: Loan B leaves you{" "}
        <strong>£195 EXAMPLE</strong> short of the fee-free version for the same payment stream. That
        is why ranking by headline rate alone fails — and why a fee-aware true-cost view exists.
      </p>
      <p>
        The reverse advertising trap is common too: a slightly lower headline with a large fee can
        look “cheaper” on the percentage while cash-in-hand and total charge tell a worse story.
        Compare <strong>total amount repayable</strong>, fees, and the lender’s regulated APR /
        cost-of-credit disclosure — not the interest percentage in isolation. For product-fee detail,
        see{" "}
        <Link href="/guides/arrangement-fees-and-apr" className="text-slate-900 underline">
          arrangement fees and APR
        </Link>
        ; for when a fee erases a refinance rate cut, see{" "}
        <Link href="/guides/refinance-when-it-pays" className="text-slate-900 underline">
          refinance a personal loan when it pays
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        UK APR norms and public sources
      </h2>
      <p>
        In the UK, regulated consumer credit uses an <strong>APR</strong> that reflects the total
        charge for credit under prescribed assumptions — not a casual “interest only” percentage. The
        FCA’s Consumer Credit sourcebook sets out how the total charge for credit and APR are
        determined for regulated agreements (
        <a
          href="https://handbook.fca.org.uk/handbook/concapp1"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          FCA Handbook, CONC App 1
        </a>
        ). MoneyHelper’s borrowing guidance stresses comparing the cost of credit options — including
        key figures such as APR and how much you repay overall — rather than reacting to a headline
        rate alone (
        <a
          href="https://www.moneyhelper.org.uk/en/everyday-money/credit/options-for-borrowing-money"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          MoneyHelper — Options for borrowing money
        </a>
        ).
      </p>
      <p>
        LoanCalc Lab’s fee and APR tools are illustrative companions to those disclosures. They help
        you see <em>why</em> a fee moves effective cost in a simple monthly model. They do not
        calculate the statutory APR for an agreement, do not include every charge a firm must put
        into the total charge for credit, and do not replace pre-contract information or the
        agreement itself.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        What to check when a fee appears
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Is the fee deducted from the advance, added to the loan, or payable separately?
        </li>
        <li>
          How much cash do you actually receive versus the face principal used to size the EMI?
        </li>
        <li>
          What is the total amount repayable, and how does it change if you drop or raise the fee in
          an illustrative comparison?
        </li>
        <li>
          What APR / representative APR and total charge for credit does the lender disclose under UK
          rules?
        </li>
        <li>
          Are there other costs (early-settlement charges, optional insurance, payment holidays)
          outside the simple upfront-fee model?
        </li>
        <li>
          Does a longer term lower the EMI while raising total interest — a separate decision from
          the fee itself?
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Try the calculators</h2>
      <p>
        For EXAMPLE Loan B (£12,000 · 16.9% EXAMPLE rate · 60 months · £195 fee), start with the{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>{" "}
        to see cash received, total repayable and the illustrative effective APR uplift. Use the{" "}
        <Link href="/calculators/personal-loan-emi" className="text-slate-900 underline">
          personal loan / EMI calculator
        </Link>{" "}
        when you want payment, interest and total repayable with the same principal, rate and term.
        Change the fee or the rate one at a time to see how headline and true-cost views diverge.
        That is the point of these tools: clearer cost maths under stated assumptions — not a pitch
        for any particular loan.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Disclaimer</h2>
      <p>
        This guide and all EXAMPLE figures are illustrative only. They are not personalised financial
        advice, not a credit offer, and not a recommendation to take or refuse any loan. LoanCalc Lab
        is not a lender. Rates, fees, day-count conventions, early-settlement terms and which charges
        enter a regulated APR vary by product and lender. Always read the lender’s disclosure and
        regulated pre-contract information for your circumstances before you borrow.
      </p>
    </ArticleLayout>
  );
}
