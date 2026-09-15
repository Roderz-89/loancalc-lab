import type { Metadata } from "next";
import Link from "next/link";
import { CALCULATORS } from "@/content/calculators";
import { GUIDES } from "@/content/guides";
import { SITE, TRUST_STRIP } from "@/content/site";
import { AdSlot } from "@/components/calculator/AdSlot";

export const metadata: Metadata = {
  title: "LoanCalc Lab — Personal loan, EMI & debt payoff calculators",
  description: SITE.description,
  alternates: { canonical: SITE.url },
};

const featured = CALCULATORS.filter((c) =>
  [
    "personal-loan-emi",
    "amortisation",
    "consolidation-break-even",
    "snowball-vs-avalanche",
  ].includes(c.slug)
);

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p
            className="text-sm font-semibold uppercase tracking-wide"
            style={{ color: SITE.accent }}
          >
            Multi-country loan decision lab
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Personal loan EMI, amortisation & debt payoff — clear maths, clear assumptions
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Calculator-first tools for borrowers comparing EMI and instalments, consolidation
            break-even, snowball vs avalanche, and the true cost of fees — across US, India-SEA,
            AU, CA and UK modes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/calculators/personal-loan-emi"
              className="rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-sm"
              style={{ backgroundColor: SITE.accent }}
            >
              EMI / payment calculator
            </Link>
            <Link
              href="/calculators/snowball-vs-avalanche"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Snowball vs avalanche
            </Link>
            <Link
              href="/guides/how-emi-works"
              className="rounded-lg border border-transparent px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              How EMI works →
            </Link>
          </div>
          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
            {TRUST_STRIP.signals.map((signal, i) => (
              <span key={signal} className="inline-flex items-center gap-x-2">
                {i > 0 && (
                  <span className="text-slate-300" aria-hidden>
                    ·
                  </span>
                )}
                <span>{signal}</span>
              </span>
            ))}
            <span className="text-slate-300" aria-hidden>
              ·
            </span>
            <Link
              href={TRUST_STRIP.disclaimerHref}
              className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-slate-900"
            >
              {TRUST_STRIP.disclaimerLabel}
            </Link>
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AdSlot slot="home-below-hero" format="leaderboard" />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Featured calculators</h2>
          <Link
            href="/calculators"
            className="text-sm font-medium hover:underline"
            style={{ color: SITE.accent }}
          >
            All calculators
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {featured.map((c) => (
            <Link
              key={c.slug}
              href={c.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {c.decisionStage}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{c.shortTitle}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Borrower decision path</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Know the payment",
                body: "Calculate EMI or instalment, then open the amortisation schedule so fees and interest are visible.",
                href: "/calculators/personal-loan-emi",
              },
              {
                step: "2",
                title: "Compare strategies",
                body: "Weigh consolidation against keeping debts, or snowball vs avalanche for multi-debt payoff.",
                href: "/calculators/snowball-vs-avalanche",
              },
              {
                step: "3",
                title: "Check true cost",
                body: "Fold fees into an effective rate and test refinance break-even before you switch loans.",
                href: "/calculators/apr-true-cost",
              },
            ].map((item) => (
              <li key={item.step} className="rounded-2xl border border-slate-200 bg-white p-5">
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: SITE.accent }}
                >
                  {item.step}
                </span>
                <h3 className="mt-3 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.body}</p>
                <Link
                  href={item.href}
                  className="mt-3 inline-block text-sm font-medium hover:underline"
                  style={{ color: SITE.accent }}
                >
                  Open tool
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900">Guides worth reading first</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {GUIDES.filter((g) => g.priority === "P0").map((g) => (
            <li key={g.slug}>
              <Link
                href={g.href}
                className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
              >
                <h3 className="font-semibold text-slate-900">{g.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{g.description}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-slate-500">
          All calculators are illustrative and not personalised financial advice or a credit
          offer. LoanCalc Lab is not a lender.{" "}
          <Link href="/calculator-disclaimer" className="underline">
            Calculator disclaimer
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
