import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Using calculators with a lender illustration — amount, term, rate and fees",
  description:
    "UK guide to copying loan amount, term, rate and fees from a lender offer or pre-contract illustration into LoanCalc Lab tools — EXAMPLE figures only, with EMI and APR / true cost routes.",
  alternates: {
    canonical: `${SITE.url}/guides/using-calculators-with-a-lender-illustration`,
  },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Using calculators with a lender illustration — amount, term, rate and fees"
      description="A lender offer or pre-contract illustration already lists the numbers that matter. This guide shows how to copy amount, term, rate and fees into LoanCalc Lab’s tools so the maths stay under stated assumptions — without treating our outputs as the lender’s regulated disclosure."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        {
          label:
            "Using calculators with a lender illustration — amount, term, rate and fees",
        },
      ]}
      published="2026-09-21"
      updated="2026-09-21"
      related={[
        {
          href: "/calculators/personal-loan-emi",
          label: "Personal loan / EMI calculator",
        },
        { href: "/calculators/apr-true-cost", label: "APR / true cost calculator" },
        { href: "/guides/how-emi-works", label: "How EMI works" },
        { href: "/guides/fees-apr-true-cost", label: "Fees & APR — headline rate vs true cost" },
        { href: "/guides/arrangement-fees-and-apr", label: "Arrangement fees and APR" },
        { href: "/guides/representative-apr", label: "Representative APR explained" },
      ]}
    >
      <p>
        When a UK lender makes a personal-loan offer, the document in front of you — sometimes
        called a quote, illustration, or pre-contract credit information pack — already carries the
        fields LoanCalc Lab needs: how much you would borrow, over how many months, at what
        contractual rate, and which fees sit around the advance. The useful habit is not to invent
        round numbers from memory, but to <strong>copy those fields into the calculators</strong>{" "}
        and read the results as illustrative maths under stated assumptions. Our tools are not a
        second lender, not a regulated APR engine, and not a substitute for the figures on the
        agreement.
      </p>
      <p>
        MoneyHelper notes that, by law, when you apply, lenders must tell you how much you will
        repay in total, how much you will pay every month, and the interest rates, fees or charges
        and the APR — information that must also appear in the pre-contract credit information form
        (
        <a
          href="https://www.moneyhelper.org.uk/en/everyday-money/credit/managing-credit-well"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          MoneyHelper — Managing credit well
        </a>
        ). This page maps those fields to the{" "}
        <Link href="/calculators/personal-loan-emi" className="text-slate-900 underline">
          personal loan / EMI calculator
        </Link>{" "}
        and the{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>
        . Every sample figure below is labelled <strong>EXAMPLE</strong>.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        What “lender illustration” means here
      </h2>
      <p>
        Personal-loan paperwork is not a mortgage ESIS. On this site, “lender illustration” simply
        means the offer-side numbers a firm has given you for a regulated consumer-credit personal
        loan: face amount, term, contractual interest rate, monthly repayment, total amount payable,
        APR where shown, and any arrangement or product fee. Names vary by lender. The job is the
        same — find the four inputs our tools use (amount, term, rate, fees) and ignore marketing
        chrome until those four are locked.
      </p>
      <p>
        Prefer the figures on <em>your</em> offer or pre-contract pack over a comparison-site
        representative example or an advert. Advertised representative APR answers a different
        question; see{" "}
        <Link href="/guides/representative-apr" className="text-slate-900 underline">
          Representative APR — what the advertised rate does and does not mean
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        The four fields to copy
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Amount (face principal).</strong> The loan amount the interest and EMI are
          calculated on — often labelled “amount of credit”, “loan amount” or “total amount of
          credit”. Copy the face figure, not “cash you might receive after a fee is deducted”, unless
          the document clearly states that the contractual principal is the net amount.
        </li>
        <li>
          <strong>Term.</strong> Duration in months (or years × 12). Align the calculator term with
          the offer term. Comparing a 36-month EXAMPLE run with a 60-month offer is not a like-for-
          like check.
        </li>
        <li>
          <strong>Rate.</strong> Use the contractual annual interest rate that sizes the repayment —
          not a representative advertising APR alone, and not LoanCalc Lab’s illustrative
          fee-adjusted “true cost” output. If the pack shows both a rate of interest and an APR,
          feed the interest rate into the EMI tool; treat APR as a cost-of-credit disclosure to
          read alongside fees.
        </li>
        <li>
          <strong>Fees.</strong> Arrangement, product, processing or setup fees that reduce cash
          received or sit on the advance. Enter them in the fee field of the true-cost tool. Late-
          payment or optional insurance charges belong in a separate reading of the agreement, not
          in a simple upfront-fee model.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Step 1 — amount, term and rate into the EMI calculator
      </h2>
      <p>
        Open the{" "}
        <Link href="/calculators/personal-loan-emi" className="text-slate-900 underline">
          personal loan / EMI calculator
        </Link>
        , keep UK mode if you are working in pounds, and enter face amount, annual rate and term in
        months. Under LoanCalc Lab’s reducing-balance assumptions the tool returns a fixed monthly
        payment, total interest and total repayable. Compare those outputs with the monthly
        repayment and total amount payable on the lender document. Small differences can come from
        day-count, rounding, payment timing or fee treatment — large gaps mean a field was
        mis-copied or the lender’s model differs from ours.
      </p>
      <p>
        <strong>EXAMPLE (Loan A style):</strong> suppose an offer shows face credit of{" "}
        <strong>£8,500 EXAMPLE</strong>, a contractual rate of{" "}
        <strong>24.9% EXAMPLE</strong>, a term of <strong>48 months EXAMPLE</strong>, and{" "}
        <strong>£0 EXAMPLE</strong> arrangement fee. Enter £8,500, 24.9 and 48 in the EMI calculator.
        The payment and totals are illustrative under our formula; they are not a quote and not the
        lender’s regulated schedule. For the interest-versus-principal story behind a fixed EMI, see{" "}
        <Link href="/guides/how-emi-works" className="text-slate-900 underline">
          How EMI works
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Step 2 — fees into the APR / true cost calculator
      </h2>
      <p>
        If the offer includes an upfront fee that is deducted from the advance (or otherwise reduces
        cash in hand while repayments amortise the face principal), copy amount, rate, term{" "}
        <em>and</em> fee into the{" "}
        <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
          APR / true cost calculator
        </Link>
        . That tool keeps EMI sized on the face principal and solves an illustrative effective yearly
        cost for the cash actually received. It is a teaching model — not a UK regulated APR and not
        the APR printed on the agreement.
      </p>
      <p>
        <strong>EXAMPLE (Loan B style):</strong> face credit{" "}
        <strong>£12,000 EXAMPLE</strong>, rate <strong>16.9% EXAMPLE</strong>, term{" "}
        <strong>60 months EXAMPLE</strong>, arrangement fee <strong>£195 EXAMPLE</strong> deducted
        from the advance. Cash received in the simple model is £11,805 EXAMPLE while payments still
        service £12,000. The headline rate has not changed; the fee-aware cash-flow cost has. Read{" "}
        <Link href="/guides/fees-apr-true-cost" className="text-slate-900 underline">
          Fees &amp; APR — headline rate vs true cost
        </Link>{" "}
        and{" "}
        <Link href="/guides/arrangement-fees-and-apr" className="text-slate-900 underline">
          Arrangement fees and APR
        </Link>{" "}
        for that split in more detail.
      </p>
      <p>
        Always check how the fee is applied on the real pack: deducted, added to the balance, or
        billed separately. If the document finances the fee into a larger principal, enter the
        contractual principal the lender uses for interest — do not invent a hybrid the agreement
        does not describe.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Field map — offer wording to calculator inputs
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>“Amount of credit” / “loan amount”</strong> → EMI and true-cost{" "}
          <em>loan amount</em> (face principal).
        </li>
        <li>
          <strong>“Duration” / “term” / “number of repayments”</strong> → term in months (convert
          years if needed).
        </li>
        <li>
          <strong>“Rate of interest” / “annual interest rate”</strong> → calculator annual rate.
          Prefer this over a lone advertising APR when sizing EMI.
        </li>
        <li>
          <strong>“Arrangement fee” / “product fee” / charges in the total charge for credit</strong>{" "}
          → true-cost upfront fee when the charge reduces cash received in the simple model.
        </li>
        <li>
          <strong>“Monthly repayment” / “instalment”</strong> → compare with EMI output; do not type
          the repayment into the rate field.
        </li>
        <li>
          <strong>“Total amount payable” / “APR”</strong> → sense-check against totals and the
          lender’s own APR disclosure; our illustrative effective rate is a separate number.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Common copy mistakes
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Pasting a <strong>representative APR from an advert</strong> as if it were your contractual
          rate.
        </li>
        <li>
          Using <strong>net cash after fee</strong> as the EMI principal when the agreement still
          charges interest on the higher face amount.
        </li>
        <li>
          Mixing <strong>term units</strong> (years into a months box, or the reverse).
        </li>
        <li>
          Ignoring a fee because the monthly payment “looks fine” — payment and fee-adjusted cost
          answer different questions.
        </li>
        <li>
          Treating calculator output as permission to borrow, or as more authoritative than the
          pre-contract pack and credit agreement.
        </li>
      </ul>
      <p>
        MoneyHelper’s guidance on borrowing options stresses comparing the cost of credit carefully —
        including APR and how much you repay overall — rather than reacting to a single headline
        number (
        <a
          href="https://www.moneyhelper.org.uk/en/everyday-money/credit/options-for-borrowing-money"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          MoneyHelper — Options for borrowing money
        </a>
        ). The FCA’s Consumer Credit sourcebook sets how the total charge for credit and APR are
        determined for regulated agreements (
        <a
          href="https://www.handbook.fca.org.uk/handbook/CONC/App/1/"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          FCA Handbook, CONC App 1
        </a>
        ). Copying fields into a calculator makes a comparison concrete under disclosed maths; it
        does not replace the lender’s disclosure or a statutory APR.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Practical checklist
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Work from your offer or pre-contract credit information, not from an advert alone.</li>
        <li>Copy face amount, term in months, contractual interest rate, then fees.</li>
        <li>
          Run amount / term / rate through the{" "}
          <Link href="/calculators/personal-loan-emi" className="text-slate-900 underline">
            EMI calculator
          </Link>{" "}
          and compare monthly repayment and total repayable.
        </li>
        <li>
          If a fee reduces cash received, run the same deal through the{" "}
          <Link href="/calculators/apr-true-cost" className="text-slate-900 underline">
            APR / true cost calculator
          </Link>
          .
        </li>
        <li>Label any scratch figures EXAMPLE so they are never confused with a live quote.</li>
        <li>
          Prefer the lender’s APR, total charge for credit and agreement text whenever they diverge
          from illustrative outputs.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Disclaimer</h2>
      <p>
        This guide is illustrative educational material only. It is not personalised financial
        advice, not a credit offer, and not a recommendation to take or refuse any loan. LoanCalc Lab
        is not a lender. Calculator results use stated reducing-balance assumptions and may differ
        from a firm’s schedules, APR methodology or fee treatment. Pre-contract credit information
        and consumer-credit rules can change; always rely on the current lender disclosures and
        official guidance for your circumstances. All sample figures on this page are labelled
        EXAMPLE and are not quotes for any reader.
      </p>
    </ArticleLayout>
  );
}
