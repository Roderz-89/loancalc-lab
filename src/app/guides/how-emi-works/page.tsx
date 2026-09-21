import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "How EMI works — reducing balance, flat rates and true cost",
  description:
    "UK guide to EMI on a reducing balance: the formula, a worked EXAMPLE with Loan A (£8,500), why flat-rate quotes mislead, and how fees change true cost and payoff clarity.",
  alternates: { canonical: `${SITE.url}/guides/how-emi-works` },
};

export default function Page() {
  return (
    <ArticleLayout
      title="How EMI works — reducing balance, flat rates and true cost"
      description="Understand EMI maths on a reducing balance, spot flat-rate confusion, and read fee-adjusted true cost — not just a monthly payment widget."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "How EMI works — reducing balance, flat rates and true cost" },
      ]}
      published="2026-09-14"
      updated="2026-09-21"
      related={[
        { href: "/calculators/personal-loan-emi", label: "Personal loan / EMI calculator" },
        { href: "/calculators/amortisation", label: "Amortisation schedule" },
        {
          href: "/guides/using-calculators-with-a-lender-illustration",
          label: "Using calculators with a lender illustration",
        },
        { href: "/glossary/emi", label: "EMI glossary" },
      ]}
    >
      <p>
        <strong>EMI</strong> (Equated Monthly Instalment) is a fixed monthly repayment on a
        reducing-balance personal loan. The cash amount stays the same each month if the rate is
        fixed; what changes is the split between interest and principal. Early months are
        interest-heavy. Later months clear more of the balance. That schedule — not the headline
        rate alone — is what shows when you finish paying and how much you pay in total.
      </p>
      <p>
        LoanCalc Lab focuses on fee-adjusted true cost and payoff clarity: monthly EMI, total
        interest, total repayable, and (where a fee applies) how less cash in hand raises the
        effective cost. This page explains the reducing-balance formula with a UK{" "}
        <strong>EXAMPLE</strong>, then contrasts it with flat-rate quoting so a lower-looking rate
        is not mistaken for a cheaper loan.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Reducing balance — what each EMI actually does
      </h2>
      <p>
        On a reducing-balance loan, interest for the month is charged on the{" "}
        <em>outstanding</em> principal, not on the original amount for every month of the term.
        After you pay, the principal portion of that EMI reduces the balance. Next month’s interest
        is calculated on the smaller balance. Over the term the interest share falls and the
        principal share rises, while the EMI itself stays level (for a fixed rate and no
        early-settlement changes).
      </p>
      <p>
        That is standard amortising credit maths — the same structure many lenders label as a
        monthly repayment or instalment. LoanCalc Lab models reducing balance only. Day-count and
        rounding on a real agreement can still differ slightly from a simple monthly model, so
        treat calculator output as illustrative.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">The standard EMI formula</h2>
      <p>
        For principal <strong>P</strong>, monthly rate{" "}
        <strong>r</strong> (annual percentage rate ÷ 12 ÷ 100) and{" "}
        <strong>n</strong> months:
      </p>
      <p className="rounded-lg bg-slate-50 p-4 font-mono text-sm">
        EMI = P × r(1+r)ⁿ / ((1+r)ⁿ − 1)
      </p>
      <p>
        When the annual rate is zero, the payment is simply P ÷ n. Otherwise the formula sizes a
        fixed payment that clears the loan exactly after n months under the reducing-balance
        assumption. Total repayable is EMI × n. Total interest is that figure minus P (before any
        separate fees).
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
        Monthly rate r = 24.9 ÷ 12 ÷ 100 = <strong>0.02075 EXAMPLE</strong>. Plugging into the
        formula gives an EMI of about <strong>£281.36 EXAMPLE</strong> per month.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Total repayable ≈ <strong>£13,505.36 EXAMPLE</strong> (281.36 × 48)
        </li>
        <li>
          Total interest ≈ <strong>£5,005.36 EXAMPLE</strong>
        </li>
        <li>
          Month 1 split (EXAMPLE): roughly £176.37 interest and £104.99 principal — most of the
          first payment services interest on the full £8,500 balance
        </li>
        <li>
          By the final months the interest portion is small (a few pounds) and almost all of the
          EMI reduces principal
        </li>
      </ul>
      <p>
        Run the same inputs in the{" "}
        <Link href="/calculators/personal-loan-emi" className="text-slate-900 underline">
          personal loan / EMI calculator
        </Link>{" "}
        for payment, interest and total repayable, then open the{" "}
        <Link href="/calculators/amortisation" className="text-slate-900 underline">
          amortisation schedule
        </Link>{" "}
        to see every month’s interest/principal split. That schedule is the payoff map: it shows
        how long the balance takes to clear under the stated assumptions.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Flat-rate vs reducing-balance confusion
      </h2>
      <p>
        A <em>flat-rate</em> quote charges interest as if the original principal stayed outstanding
        for the whole term (interest ≈ P × flat rate × years), then divides principal plus that
        interest into equal monthly amounts. The percentage quoted often looks lower than a
        reducing-balance rate for a similar monthly payment — which is where confusion starts.
      </p>
      <p>
        Using EXAMPLE Loan A’s 24.9% as a <em>flat</em> rate for four years would imply interest of
        £8,500 × 0.249 × 4 = <strong>£8,466 EXAMPLE</strong>, a far higher total cost than the
        reducing-balance EXAMPLE above (~£5,005 interest). So the same percentage label does not
        mean the same product maths. Conversely, some markets or older product literature quote a
        “flat” percentage that appears modest while the reducing-balance / APR-style equivalent is
        much higher. Always ask which method the rate uses, and compare{" "}
        <strong>total amount repayable</strong> and regulated cost-of-credit disclosures — not the
        percentage string alone.
      </p>
      <p>
        LoanCalc Lab does not model flat-rate products as if they were reducing-balance EMIs. If a
        quote is flat, convert via the lender’s APR / comparison figures or rebuild the cash flows
        before judging cost.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Fees, APR norms and true cost
      </h2>
      <p>
        EXAMPLE Loan A uses a £0 fee so the EMI formula maps cleanly onto cash received. In
        practice an arrangement or processing fee can mean you receive less than the face
        principal while still repaying interest on the full amount (or on a financed fee). That
        raises the <em>effective</em> yearly cost even when the contractual interest rate is
        unchanged. Pair the EMI view with a fee-aware true-cost check when a fee appears on the
        offer.
      </p>
      <p>
        In the UK, regulated consumer credit uses an <strong>APR</strong> (annual percentage rate
        of charge) that reflects the total charge for credit under prescribed assumptions — not a
        casual “interest only” percentage. The FCA’s Consumer Credit sourcebook sets out how the
        total charge for credit and APR are determined for regulated agreements (
        <a
          href="https://handbook.fca.org.uk/handbook/concapp1"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          FCA Handbook, CONC App 1
        </a>
        ). MoneyHelper similarly explains that APR is meant to help compare the yearly cost of
        borrowing including relevant fees, and that lenders must show key costs including the total
        amount repayable (
        <a
          href="https://www.moneyhelper.org.uk/en/everyday-money/credit/managing-credit-well"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          MoneyHelper — Managing credit well
        </a>
        ). LoanCalc Lab’s tools are illustrative companions to those disclosures; they are not a
        substitute for the lender’s pre-contract information or a regulated APR figure on an
        agreement.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        What to check for payoff clarity
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Confirm the rate is reducing-balance (or read the APR / total repayable if the quote is
          flat or mixed)
        </li>
        <li>
          Note any upfront fee and whether cash received is less than the stated principal
        </li>
        <li>
          Compare total repayable and total interest across term lengths — a lower EMI on a longer
          term usually means more interest overall
        </li>
        <li>
          Use the amortisation schedule to see when principal overtakes interest and what balance
          remains at each month
        </li>
        <li>
          Treat early-settlement rights, payment holidays and variable rates as agreement-specific;
          the simple EMI model does not capture every clause
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Try the calculators</h2>
      <p>
        For EXAMPLE Loan A defaults (£8,500 · 24.9% EXAMPLE rate · 48 months · £0 fee), start with
        the{" "}
        <Link href="/calculators/personal-loan-emi" className="text-slate-900 underline">
          personal loan / EMI calculator
        </Link>{" "}
        and the{" "}
        <Link href="/calculators/amortisation" className="text-slate-900 underline">
          amortisation schedule
        </Link>
        . Change one input at a time to see how rate, term or a fee moves monthly cost and total
        repayable. That is the point of these tools: clearer cost and payoff maths under stated
        assumptions — not a sales pitch for any particular loan.
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
