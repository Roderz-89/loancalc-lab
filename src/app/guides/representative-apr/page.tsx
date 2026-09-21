import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Representative APR — what the advertised rate does and does not mean",
  description:
    "UK guide to representative APR on personal-loan ads: the 51% expectation test, and a Loan B EXAMPLE (£12,000 · 16.9% · 60 months · £195 fee) contrasting headline figures with fee-inclusive true cost — not a personal quote.",
  alternates: { canonical: `${SITE.url}/guides/representative-apr` },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Representative APR — what the advertised rate does and does not mean"
      description="UK personal-loan adverts often lead with a representative APR. That figure is a regulated advertising measure — not a personalised quote, not a guarantee of the rate you will be offered, and not the same as LoanCalc Lab’s illustrative fee-adjusted true cost."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Representative APR — what the advertised rate does and does not mean" },
      ]}
      published="2026-09-21"
      updated="2026-09-21"
      related={[
        { href: "/calculators/apr-true-cost", label: "APR / true cost calculator" },
        { href: "/guides/fees-apr-true-cost", label: "Fees & APR — headline rate vs true cost" },
        { href: "/guides/arrangement-fees-and-apr", label: "Arrangement fees and APR" },
        { href: "/glossary/apr", label: "APR glossary" },
      ]}
    >
      <p>
        When a UK personal-loan advert shows a large percentage, that number is usually a{" "}
        <strong>representative APR</strong> — an annual percentage rate of charge labelled for
        advertising under FCA consumer-credit rules. Readers often treat it as “the rate I will get”.
        That is the misunderstanding this guide addresses. A representative APR helps compare
        promotions and stops firms advertising a rare bargain as if it were typical. It is{" "}
        <strong>not</strong> a personalised quote, not a promise that your agreement will carry that
        APR, and not a substitute for pre-contract information after a lender assesses an
        application. This page is about unsecured personal loans only — not mortgages.
      </p>
      <p>
        LoanCalc Lab is not a lender and does not issue credit. Use the{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>{" "}
        and{" "}
        <Link href="/guides/fees-apr-true-cost" className="text-slate-900 underline">
          Fees &amp; APR — headline rate vs true cost
        </Link>{" "}
        for fee-aware EXAMPLE maths under stated assumptions. Nothing here is a credit offer or advice
        to apply.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">What APR is trying to show</h2>
      <p>
        An <strong>APR</strong> (annual percentage rate of charge) is a standardised yearly
        cost-of-credit measure. In regulated UK consumer credit it is meant to reflect the total
        charge for credit under prescribed assumptions — interest plus certain fees — so products can
        be compared on a common footing. It is broader than a contractual “interest only” percentage
        on the face principal.
      </p>
      <p>
        Advertising adds another layer: when the rules require it, the APR shown must be a{" "}
        <em>representative</em> APR. That word is regulatory — not “typical for your credit file” and
        not “the only rate this lender charges”.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        What representative APR <em>does</em> mean
      </h2>
      <p>
        Under the FCA Handbook’s consumer-credit advertising rules for credit agreements not secured
        on land (<strong>CONC 3.5</strong>), a <strong>representative APR</strong> is an APR at or
        below which the firm reasonably expects, at the date of the promotion, that credit would be
        provided under at least <strong>51%</strong> of the credit agreements expected from that
        promotion. In plain terms: the advertised APR is meant to be at or better than the rate most
        successful customers from that promotion are expected to get — a majority test, not a personal
        guarantee.
      </p>
      <p>
        The same chapter sets when a representative APR must appear and how it must be shown —
        typically as “%APR” with the word “representative”, with prominence rules so it is not buried
        beside a flashier claim. Where a promotion indicates a rate or cost amount, firms may also
        need a <strong>representative example</strong>: amount of credit, interest rate, other charges
        in the total charge for credit, duration, total amount payable and repayment amounts —
        framed as what the firm reasonably expects to be representative of agreements to which that
        APR applies. Public detail:{" "}
        <a
          href="https://www.handbook.fca.org.uk/handbook/CONC/3/5.html"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          FCA Handbook, CONC 3.5
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        What representative APR does <em>not</em> mean
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Not a quote for you.</strong> Your personal APR (if offered) can sit above the
          representative figure — the 51% test leaves room for dearer accepted agreements.
        </li>
        <li>
          <strong>Not “most people like me”.</strong> The test covers agreements from the promotion
          as a whole, not your profile segment.
        </li>
        <li>
          <strong>Not only the contractual interest percentage.</strong> APR includes prescribed
          charges; see{" "}
          <Link href="/guides/fees-apr-true-cost" className="text-slate-900 underline">
            Fees &amp; APR
          </Link>
          . Representative APR is still advertising disclosure, not your signed agreement.
        </li>
        <li>
          <strong>Not pre-contract disclosure</strong> and{" "}
          <strong>not LoanCalc Lab’s illustrative true-cost APR</strong> — our{" "}
          <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
            APR / true cost calculator
          </Link>{" "}
          is a teaching model, not a regulated or representative APR.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Worked EXAMPLE — Loan B (headline style vs fee-inclusive cost)
      </h2>
      <p>
        All figures below are labelled <strong>EXAMPLE</strong>. They are not a lender’s
        representative APR, not a live quote, and not a credit offer.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>EXAMPLE Loan B:</strong> £12,000 face principal · 16.9% EXAMPLE annual headline
          rate · 60 months · £195 EXAMPLE arrangement fee deducted from the advance
        </li>
      </ul>
      <p>
        Under LoanCalc Lab’s reducing-balance model, the EMI sized on £12,000 at 16.9% EXAMPLE for 60
        months is about <strong>£297.59 EXAMPLE</strong>. Total repayable ≈{" "}
        <strong>£17,855 EXAMPLE</strong>.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>EXAMPLE with £0 fee:</strong> cash received <strong>£12,000 EXAMPLE</strong> ·
          illustrative effective APR ≈ <strong>16.9% EXAMPLE</strong> (matches the headline under
          this model)
        </li>
        <li>
          <strong>EXAMPLE Loan B (£195 fee):</strong> cash received ≈{" "}
          <strong>£11,805 EXAMPLE</strong> · same EMI ≈ <strong>£297.59 EXAMPLE</strong> ·
          illustrative effective APR ≈ <strong>17.66% EXAMPLE</strong> (about{" "}
          <strong>0.76 percentage points EXAMPLE</strong> above the headline)
        </li>
      </ul>
      <p>
        An advert might show a representative APR in the mid-teens and a representative example with
        amount, term and monthly repayment. That advertising package is still not your personal
        offer. Separately, even at 16.9% EXAMPLE on the face principal, the £195 EXAMPLE fee leaves
        less usable cash for the same payment stream — which is why fee-aware true-cost maths exists.
        Run the same inputs in the{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>
        . For arrangement-fee detail, see{" "}
        <Link href="/guides/arrangement-fees-and-apr" className="text-slate-900 underline">
          arrangement fees and APR
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Representative example vs the single percentage
      </h2>
      <p>
        Shoppers often remember only the big “X% APR representative” string. When a{" "}
        <strong>representative example</strong> is required, it should show more of the deal shape:
        how much credit, how long, what repayments, what total payable, and what other charges enter
        the total charge for credit. Two promotions that look similar on APR can still imply very
        different cash commitments.
      </p>
      <p>
        MoneyHelper stresses comparing the cost of credit carefully — including APR and how much you
        repay overall — rather than reacting to a single headline number (
        <a
          href="https://www.moneyhelper.org.uk/en/everyday-money/credit/options-for-borrowing-money"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          MoneyHelper — Options for borrowing money
        </a>
        ). Representative APR is one comparison tool among several, not a personal price tag.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        How this sits next to fees and “true cost”
      </h2>
      <p>
        Two confusions tangle: “Will <em>I</em> get the advertised representative APR?” (eligibility
        and underwriting) versus “Does a fee change cash in hand at a given rate?” (cash-flow maths).
        LoanCalc Lab targets the second with labelled EXAMPLE inputs — see the Loan B EXAMPLE above
        and{" "}
        <Link href="/guides/fees-apr-true-cost" className="text-slate-900 underline">
          Fees &amp; APR — headline rate vs true cost
        </Link>
        . That is illustrative fee maths, not a firm’s advertising APR.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Practical checklist when you see “representative APR”
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Treat the figure as an advertising benchmark under the 51% expectation test — not as your quote.</li>
        <li>Read any representative example in full: amount, term, repayments, total payable, charges.</li>
        <li>Compare total amount repayable and fees, not the percentage string alone.</li>
        <li>Prefer the lender’s pre-contract information and the APR on any actual offer over the banner rate.</li>
        <li>
          Use LoanCalc Lab only for illustrative fee-adjusted cost maths under stated assumptions —
          never as a regulated disclosure.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Disclaimer</h2>
      <p>
        This guide and all EXAMPLE figures are illustrative educational material only. They are not
        personalised financial advice, not a credit offer, and not a recommendation to take or refuse
        any loan. LoanCalc Lab is not a lender. Representative APR, representative examples and
        statutory APR follow FCA Handbook and related consumer-credit rules that can change; always
        rely on the current handbook text and the lender’s own disclosures for your circumstances.
      </p>
    </ArticleLayout>
  );
}
