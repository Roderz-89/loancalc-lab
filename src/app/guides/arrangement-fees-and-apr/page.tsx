import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Arrangement fees and APR — why the quoted rate is not what you pay",
  description:
    "UK guide to why a quoted personal-loan rate is not the full cost when an arrangement fee applies: worked EXAMPLE with Loan B (£12,000 · 16.9% EXAMPLE · 60 months · £195 fee) and how cash received diverges from the face principal.",
  alternates: { canonical: `${SITE.url}/guides/arrangement-fees-and-apr` },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Arrangement fees and APR — why the quoted rate is not what you pay"
      description="A quoted interest rate sizes the repayment on the face loan. An arrangement fee can shrink the cash you actually receive — so the rate on the advert and the cost of the money in your account are no longer the same thing."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Arrangement fees and APR — why the quoted rate is not what you pay" },
      ]}
      published="2026-09-21"
      updated="2026-09-21"
      related={[
        { href: "/calculators/apr-true-cost", label: "APR / true cost calculator" },
        { href: "/guides/fees-apr-true-cost", label: "Fees & APR — headline rate vs true cost" },
        { href: "/guides/representative-apr", label: "Representative APR explained" },
        { href: "/glossary/apr", label: "APR glossary" },
      ]}
    >
      <p>
        Personal-loan adverts lead with a <strong>quoted rate</strong> — an annual interest
        percentage that sounds like the price of borrowing. For many readers that number becomes the
        whole comparison: lower rate, better deal. An <strong>arrangement fee</strong> (sometimes
        called a product, processing or setup fee) breaks that shortcut. The rate still drives the
        contractual monthly repayment on the face principal, but the fee changes how much usable cash
        you get for those repayments. Quoted rate and “what you pay” for the money you actually
        receive then diverge.
      </p>
      <p>
        This guide focuses on why the quoted rate is not the full story when a fee sits on the
        advance. A UK <strong>EXAMPLE</strong> (Loan B: £12,000 · 16.9% EXAMPLE · 60 months · £195
        fee) shows how cash received and an illustrative fee-adjusted APR move apart from the
        headline percentage. Use the{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>{" "}
        and the companion{" "}
        <Link href="/guides/fees-apr-true-cost" className="text-slate-900 underline">
          Fees &amp; APR — headline rate vs true cost
        </Link>{" "}
        guide for the wider framing. Explanatory maths under stated assumptions — not a product
        recommendation or a substitute for regulated disclosure.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        What the quoted rate actually prices
      </h2>
      <p>
        On a straightforward reducing-balance personal loan, the quoted (contractual) annual rate is
        the input used to size a fixed EMI on the <em>face</em> principal and term. If you borrow
        £12,000 EXAMPLE at 16.9% EXAMPLE for 60 months with no fee, the model advances £12,000 and
        you repay an EMI built on that £12,000. Under LoanCalc Lab’s monthly reducing-balance
        assumptions, the interest percentage on the quote and the effective yearly cost of those cash
        flows line up (before day-count and rounding differences).
      </p>
      <p>
        The quoted rate does <strong>not</strong>, by itself, answer: “How much usable cash do I get
        today?” or “What yearly cost does this payment stream imply for the cash that actually lands
        in my account?” Those are fee-aware questions. When marketers say “from X%”, they are usually
        pointing at the contractual interest input — not at every charge that can sit around getting
        the credit.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        How an arrangement fee changes “what you pay”
      </h2>
      <p>
        An upfront arrangement fee commonly arrives in one of three patterns: deducted from the
        advance, added to the loan balance, or billed separately so you still fund it from your own
        pocket. LoanCalc Lab’s simple true-cost model focuses on the first pattern — fee deducted —
        because it makes the mismatch obvious: interest and EMI are still calculated on the full face
        amount, while net cash received is face principal minus fee.
      </p>
      <p>
        Economically you are then servicing a larger notional balance than the money that arrived.
        The quoted rate has not changed. The monthly payment sized on the face principal has not
        changed. What changed is the value of cash in hand relative to that payment stream. That is
        why people say the quoted rate is “not what you pay”: the percentage on the advert still
        describes contractual interest on the face loan, but the fee has made each pound of usable
        credit more expensive in cash-flow terms.
      </p>
      <p>
        Financed or separately invoiced fees rearrange the same idea: you either repay a larger
        principal or fund the fee from savings. Always read how the fee is applied on the agreement;
        calculator assumptions are labelled and simplified.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Worked EXAMPLE — Loan B (UK)
      </h2>
      <p>
        All figures below are labelled <strong>EXAMPLE</strong>. They are not a live quote, not a
        credit offer, and not a recommendation to borrow. The EXAMPLE term is{" "}
        <strong>60 months</strong> so EMI and fee-adjusted APR maths are fully specified.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>EXAMPLE Loan B:</strong> £12,000 face principal · 16.9% EXAMPLE annual quoted
          (headline) rate · 60 months · £195 EXAMPLE arrangement fee deducted from the advance
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
          Uplift versus the 16.9% EXAMPLE quoted rate ≈{" "}
          <strong>0.76 percentage points EXAMPLE</strong>
        </li>
      </ul>
      <p>
        The quoted rate is still 16.9% EXAMPLE and the EMI still ~£297.59 EXAMPLE — you repay as if
        you borrowed £12,000 while receiving £11,805. The illustrative effective APR (~17.66% EXAMPLE)
        is the numerical form of “quoted rate ≠ what you pay” for this fee pattern, not a brand
        ranking.
      </p>
      <p>
        Reproduce the same inputs in the{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>{" "}
        (£12,000 · 16.9% · 60 months · £195 fee). For the broader framing of headline rate versus
        true cost of credit — including same-rate fee-free comparisons — see{" "}
        <Link href="/guides/fees-apr-true-cost" className="text-slate-900 underline">
          Fees &amp; APR — headline rate vs true cost
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Same quoted rate, fee vs no fee
      </h2>
      <p>
        Hold the quoted rate, face principal and term fixed at Loan B’s EXAMPLE inputs, then drop the
        fee to £0. Cash received becomes the full £12,000 EXAMPLE. The EMI stays ~£297.59 EXAMPLE
        because face principal and rate are unchanged. Under the same model the illustrative
        effective APR sits on the quoted 16.9% EXAMPLE. Ranking by quoted rate alone calls the
        fee-bearing and fee-free versions equal; ranking by cash received or fee-aware APR does not.
        That is the comparison the advert percentage cannot make on its own.
      </p>
      <p>
        The reverse trap appears when a slightly lower quoted rate carries a large fee. The
        percentage string looks cheaper while cash-in-hand and total charge for getting the credit
        tell a worse story. Compare total amount repayable, how the fee is applied, and the APR /
        cost-of-credit figures on the disclosure — not the interest percentage in isolation.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Why term length changes how hard a fee bites
      </h2>
      <p>
        A fixed £195 EXAMPLE fee is the same in pounds on a 24- or 60-month term, but as a share of
        the advance’s economics it usually lifts illustrative APR more on shorter terms. That does
        not make a longer term “better” — longer terms usually raise total interest. Fee impact and
        interest impact are different levers; change one input at a time in the calculator.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Quoted rate, APR and UK disclosures
      </h2>
      <p>
        In the UK, regulated consumer credit uses an <strong>APR</strong> (annual percentage rate of
        charge) that reflects the total charge for credit under prescribed assumptions — not a casual
        “interest only” percentage. The FCA’s Consumer Credit sourcebook explains how the total
        charge for credit and APR are determined for regulated agreements (
        <a
          href="https://handbook.fca.org.uk/handbook/concapp1"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          FCA Handbook, CONC App 1
        </a>
        ). MoneyHelper’s borrowing guidance likewise stresses comparing the cost of credit options —
        including APR and how much you repay overall — rather than reacting to a headline rate
        alone (
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
        LoanCalc Lab’s fee-adjusted APR is an <em>illustrative</em> IRR-style figure under a monthly
        reducing-balance model. It is <strong>not</strong> a UK regulated APR, not a representative
        APR for advertising, and not a claim that any particular disclosure is wrong. Prefer the
        lender’s pre-contract information and the APR printed on the agreement whenever those
        conflict with an illustrative tool.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Questions that separate rate from cash cost
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Is the fee deducted from the advance, added to the loan, or payable separately — and how
          much cash do you receive versus the face principal used to size the EMI?
        </li>
        <li>
          What total amount repayable and APR / representative APR does the lender disclose?
        </li>
        <li>
          Are other costs (early settlement, optional insurance) outside a simple upfront-fee model?
        </li>
        <li>
          If you change only the fee or term, how do cash received and illustrative effective APR
          move in the{" "}
          <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
            APR / true cost calculator
          </Link>
          ?
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Try the tools</h2>
      <p>
        For EXAMPLE Loan B (£12,000 · 16.9% · 60 months · £195 fee), run the{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>
        . Pair{" "}
        <Link href="/guides/fees-apr-true-cost" className="text-slate-900 underline">
          Fees &amp; APR — headline rate vs true cost
        </Link>{" "}
        for the wider framing. Change fee or rate one at a time — clearer cost maths under stated
        assumptions, not a pitch for any loan.
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
