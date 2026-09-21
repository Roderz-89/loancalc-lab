import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Snowball vs avalanche — behaviour vs maths for multiple debts",
  description:
    "UK guide to debt snowball vs avalanche: behaviour versus interest maths, with a three-debt EXAMPLE (£1,200 @ 29.9%, £3,400 @ 22.0%, £6,800 @ 9.9%, extra £75/month).",
  alternates: { canonical: `${SITE.url}/guides/snowball-vs-avalanche` },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Snowball vs avalanche — behaviour vs maths for multiple debts"
      description="Two ways to aim spare cash after minimums: clear the smallest balance first, or the dearest rate first. Compare the framing — then run your figures under stated assumptions."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Snowball vs avalanche — behaviour vs maths for multiple debts" },
      ]}
      published="2026-09-14"
      updated="2026-09-21"
      related={[
        { href: "/calculators/snowball-vs-avalanche", label: "Snowball vs avalanche calculator" },
        { href: "/calculators/extra-payment", label: "Extra payment calculator" },
        {
          href: "/guides/consolidation-break-even",
          label: "Consolidation break-even guide",
        },
        { href: "/glossary/snowball", label: "Snowball" },
        { href: "/glossary/avalanche", label: "Avalanche" },
      ]}
    >
      <p>
        When several balances are open at once, the hard question is not usually “should I pay
        something?” — it is <em>where the spare pounds go</em> after every minimum is met. Two
        well-known plans answer that differently: the <strong>snowball</strong> (smallest balance
        first) and the <strong>avalanche</strong> (highest interest rate first). One leans on
        behaviour and early wins; the other leans on interest maths and total cost. This guide
        explains both framings with a UK <strong>EXAMPLE</strong>, without telling you which plan
        you must follow.
      </p>
      <p>
        LoanCalc Lab is a calculator site, not a lender and not a debt adviser. Priority bills,
        arrears and hardship sit outside these two “extra payment” tactics — MoneyHelper’s
        prioritisation guidance comes first if payments are at risk. The tools here only illustrate
        how directing extra cash changes months and interest under stated assumptions.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Snowball — behaviour and early clears
      </h2>
      <p>
        Under a snowball plan you keep every minimum current, then put all extra monthly cash on
        the <em>smallest balance</em>. When that account hits zero, its former minimum joins the
        extra pot and rolls onto the next-smallest balance. The “snowball” is that growing payment
        aimed at one target at a time.
      </p>
      <p>
        The case for snowball is behavioural. Closing an account sooner can feel concrete: fewer
        statements, one less due date, a visible step that makes the next target easier to stick
        with. If motivation is the scarce resource — not a spreadsheet — that framing matters. The
        trade-off is familiar: if a larger balance carries a much higher rate, interest can keep
        accruing there while you finish a cheap small balance. Whether that trade-off is worth it
        is a personal judgment; the calculator only shows the cost difference under your inputs.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Avalanche — maths and interest cost
      </h2>
      <p>
        Under an avalanche plan you still meet every minimum, then aim the same extra cash at the{" "}
        <em>highest annual rate</em>. When that debt clears, the freed minimum rolls onto the
        next-highest rate. The logic is arithmetic: interest is a percentage of what remains, so
        shrinking the dearest balance first usually cuts total interest paid over the whole journey.
      </p>
      <p>
        The case for avalanche is total cost and, often, a shorter overall calendar when rates
        differ sharply. The behavioural cost can be the opposite of snowball’s: the first full clear
        may take longer if the highest-rate debt is also the largest. Some people find that gap
        demotivating; others prefer the interest saving and ignore the “first win” timing. Again,
        this page does not pick for you — it separates the two lenses so you can compare.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Shared rules before either method
      </h2>
      <p>
        Both plans assume the same floor:{" "}
        <strong>minimum payments stay current on every debt</strong> while extras attack one
        target. Falling behind on a minimum to “accelerate” another balance is a different problem
        — fees, default interest and credit-file damage can wipe out any theoretical interest
        saving. If you cannot meet minimums, free debt advice is the right next step, not a
        snowball-versus-avalanche tweak.
      </p>
      <p>
        In the UK, MoneyHelper explains how to separate debt emergencies, priority debts (serious
        consequences if unpaid) and non-priority credit before you decide how to use spare cash (
        <a
          href="https://www.moneyhelper.org.uk/en/everyday-money/credit/how-to-prioritise-your-debts"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          MoneyHelper — How to prioritise your debts
        </a>
        ). National Debtline describes the snowball approach in the same “minimums first, surplus on
        one target” structure, and contrasts it with aiming surplus at the highest rate instead (
        <a
          href="https://nationaldebtline.org/get-information/guides/what-is-the-debt-snowball-method-and-how-does-it-work/"
          className="text-slate-900 underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          National Debtline — Debt snowball method
        </a>
        ). LoanCalc Lab’s comparison tool sits after that foundation: it only models the surplus
        routing once minimums are assumed paid.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        Worked EXAMPLE — three debts and £75 extra
      </h2>
      <p>
        All figures below are labelled <strong>EXAMPLE</strong>. They are illustrative only — not a
        live quote, not a credit offer, and not a recommendation of either method.
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
        <li>
          <strong>EXAMPLE extra:</strong> £75 / month aimed at the current target (on top of all
          three minimums)
        </li>
      </ul>
      <p>
        Ordering under each rule for this EXAMPLE:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Snowball order EXAMPLE:</strong> A (£1,200) → B (£3,400) → C (£6,800)
        </li>
        <li>
          <strong>Avalanche order EXAMPLE:</strong> A (29.9%) → B (22.0%) → C (9.9%)
        </li>
      </ul>
      <p>
        Notice that in <em>this</em> EXAMPLE the two orders are identical: the smallest balance is
        also the highest rate, and the mid and large balances follow the same ranking. Under
        LoanCalc Lab’s simple monthly model (interest on outstanding balance each month; extra plus
        freed minimums on the target), both strategies therefore produce the same path:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Debt A clears around <strong>month 12 EXAMPLE</strong>
        </li>
        <li>
          Debt B clears around <strong>month 29 EXAMPLE</strong>
        </li>
        <li>
          Debt C (and the stack) clears around <strong>month 48 EXAMPLE</strong>
        </li>
        <li>
          Total interest across the journey ≈ <strong>£3,349 EXAMPLE</strong>
        </li>
      </ul>
      <p>
        So this EXAMPLE is useful for two lessons at once. First, it shows a full three-debt run
        with a modest £75 extra: about four years to clear roughly £11,400 of starting balances
        once interest is included in the cash paid. Second, it shows that snowball and avalanche
        are not always rivals — when balance order and rate order line up, behaviour and maths
        point at the same target sequence and the interest gap is zero.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        When the methods diverge
      </h2>
      <p>
        Divergence appears when the <em>smallest</em> balance is <em>not</em> the dearest rate —
        for example a small low-rate balance beside a larger high-rate card. Snowball would still
        clear the small account first (earlier “win,” possibly more total interest). Avalanche would
        still attack the high rate first (usually less interest; the first full clear may take
        longer). The size of that gap depends on the rate spread, the balance sizes, the minimums
        and how large the extra is. A wide rate gap and a long payoff usually enlarge the interest
        difference; similar rates shrink it so that sticking to either plan may matter more than
        which plan you labelled.
      </p>
      <p>
        That is the behaviour-versus-maths framing in one sentence: snowball optimises for
        momentum and closed accounts; avalanche optimises for interest cost under the model. Neither
        framing overrides priority debts, nor does a calculator know your household cash-flow stress.
        Run both with your numbers, read the months and interest side by side, and choose the plan
        you will actually keep — this guide will not declare a single “correct” method for every
        reader.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">
        What the on-site tools show
      </h2>
      <p>
        The{" "}
        <Link href="/calculators/snowball-vs-avalanche" className="text-slate-900 underline">
          snowball vs avalanche calculator
        </Link>{" "}
        takes up to three debts (balance, rate, minimum) plus a monthly extra, then reports months,
        total interest and payoff order for each strategy under the same simple monthly
        assumptions used in the EXAMPLE above. Change one input at a time — especially the extra —
        to see how sensitive the gap is. The{" "}
        <Link href="/calculators/extra-payment" className="text-slate-900 underline">
          extra payment calculator
        </Link>{" "}
        is the single-loan companion: it shows how an additional monthly amount shortens one
        amortising balance and cuts interest when you are not comparing multiple targets.
      </p>
      <p>
        Treat both outputs as illustrative. Day-count conventions, promotional rates, fees,
        payment allocation rules on cards, and early-settlement terms on loans can all shift real
        statements. If a lender allocates payments differently from “minimums everywhere, surplus on
        one named target,” your live path will not match the model penny for penny.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 pt-2">Disclaimer</h2>
      <p>
        This guide and all EXAMPLE figures are illustrative only. They are not personalised
        financial advice, not a credit offer, and not a recommendation to use snowball, avalanche
        or any other repayment plan. LoanCalc Lab is not a lender. Priority debts, arrears and
        affordability sit outside these calculators. Rates, fees, payment allocation and
        early-settlement terms vary by product and lender. Always read the lender’s disclosure and,
        if you are struggling, seek free debt advice before you change how you pay.
      </p>
    </ArticleLayout>
  );
}
