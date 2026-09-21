import type { Metadata } from "next";
import Link from "next/link";
import { CALCULATORS } from "@/content/calculators";
import { FEATURED_GUIDE_SLUGS, GUIDES } from "@/content/guides";
import { SITE, TRUST_STRIP, formatContentDate } from "@/content/site";
import { AdSlot } from "@/components/calculator/AdSlot";

export const metadata: Metadata = {
  title: "LoanCalc Lab — Personal loan, EMI & debt payoff calculators",
  description: SITE.description,
  alternates: { canonical: SITE.url },
};

/** All seven tools — keep homepage count aligned with /calculators */
const featuredCalcs = CALCULATORS;

const featuredGuides = FEATURED_GUIDE_SLUGS.map(
  (slug) => GUIDES.find((g) => g.slug === slug)!,
).filter(Boolean);

export default function HomePage() {
  const updated = formatContentDate(SITE.contentAsOf);

  return (
    <div>
      <section className="border-b border-stone-200 bg-gradient-to-b from-amber-50/70 via-stone-50 to-[var(--background)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p
            className="text-sm font-semibold uppercase tracking-wide"
            style={{ color: SITE.accent }}
          >
            Personal loan &amp; debt payoff tools
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            What will you pay each month — and how can you clear debt faster?
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Work out your EMI or instalment in £, see whether consolidating saves money, and
            compare snowball vs avalanche payoff — with fees and assumptions shown. UK-first by
            default; country modes are available as calculator toggles when you need another
            currency or payment label.
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
              href="/calculators/consolidation-break-even"
              className="rounded-lg border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-stone-50"
            >
              Consolidation break-even
            </Link>
            <Link
              href="/calculators/snowball-vs-avalanche"
              className="rounded-lg border border-transparent px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-stone-100"
            >
              Snowball vs avalanche →
            </Link>
          </div>

          <div className="mt-8 max-w-2xl rounded-xl border border-stone-200 bg-white/90 p-4 shadow-sm">
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-slate-800">
              {TRUST_STRIP.heroSignals.map((signal, i) => (
                <span key={signal} className="inline-flex items-center gap-x-2">
                  {i > 0 && (
                    <span className="font-normal text-slate-300" aria-hidden>
                      ·
                    </span>
                  )}
                  <span>{signal}</span>
                </span>
              ))}
            </p>
            <p className="mt-2 text-sm text-slate-600">{TRUST_STRIP.jurisdictionNote}</p>
            <p className="mt-2 text-xs text-slate-500">
              <Link
                href={TRUST_STRIP.disclaimerHref}
                className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-slate-900"
              >
                {TRUST_STRIP.disclaimerLabel}
              </Link>
              {" · "}
              Updated <time dateTime={SITE.contentAsOf}>{updated}</time>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">All seven calculators</h2>
          <Link
            href="/calculators"
            className="text-sm font-medium hover:underline"
            style={{ color: SITE.accent }}
          >
            Calculators index
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {featuredCalcs.map((c) => (
            <Link
              key={c.slug}
              href={c.href}
              className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-stone-300 hover:shadow"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {c.decisionStage}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{c.shortTitle}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.purpose}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AdSlot slot="home-below-tools" format="leaderboard" />
      </div>

      <section className="border-y border-stone-200 bg-stone-50/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">A simple path for borrowers</h2>
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
              <li key={item.step} className="rounded-2xl border border-stone-200 bg-white p-5">
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
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Guides worth reading first</h2>
          <Link
            href="/guides"
            className="text-sm font-medium hover:underline"
            style={{ color: SITE.accent }}
          >
            All guides
          </Link>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Updated <time dateTime={SITE.contentAsOf}>{updated}</time>
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {featuredGuides.map((g) => (
            <li key={g.slug}>
              <Link
                href={g.href}
                className="block rounded-xl border border-stone-200 p-4 hover:bg-stone-50"
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
