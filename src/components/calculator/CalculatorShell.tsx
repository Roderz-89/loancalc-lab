"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { DEFAULT_DISCLAIMER, SITE, formatContentDate } from "@/content/site";
import { AdSlot } from "./AdSlot";

export function CalculatorShell({
  title,
  intro,
  inputs,
  results,
  assumptions,
  equations,
  validationMessages,
  disclaimer = DEFAULT_DISCLAIMER,
  onReset,
  related,
  faqs,
}: {
  title: string;
  intro: string;
  inputs: ReactNode;
  results: ReactNode;
  assumptions: ReactNode;
  equations?: ReactNode;
  validationMessages?: string[];
  disclaimer?: string;
  onReset: () => void;
  related?: { href: string; label: string }[];
  faqs?: { q: string; a: string }[];
}) {
  const nextTools = related?.filter((l) => l.href.startsWith("/calculators/")) ?? [];
  const lastChecked = formatContentDate(SITE.contentAsOf);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
      <p className="mt-3 text-lg text-slate-600">{intro}</p>
      <p className="mt-3 rounded-lg border border-stone-200 bg-stone-50/80 px-3 py-2 text-xs leading-relaxed text-slate-600">
        <span className="font-medium text-slate-800">{SITE.editorial}</span>
        {" · "}
        <span className="font-medium text-slate-800">Methodology:</span> reducing-balance EMI /
        amortisation with disclosed assumptions (fees optional where shown)
        {" · "}
        <span className="font-medium text-slate-800">Last checked:</span>{" "}
        <time dateTime={SITE.contentAsOf}>{lastChecked}</time>
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 print:grid-cols-1">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-slate-900">Your inputs</h2>
            <button
              type="button"
              onClick={onReset}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 print:hidden"
            >
              Reset
            </button>
          </div>
          <div className="space-y-4">{inputs}</div>
          {validationMessages && validationMessages.length > 0 && (
            <ul className="mt-4 space-y-1 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
              {validationMessages.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 print:border-slate-300">
          <h2 className="text-lg font-semibold text-slate-900">Results</h2>
          <div className="mt-4 space-y-3">{results}</div>
          {nextTools.length > 0 && (
            <div className="mt-5 border-t border-slate-200 pt-4 print:hidden">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Most people next
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {nextTools.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
          <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
            {disclaimer}{" "}
            <Link href="/calculator-disclaimer" className="underline hover:text-slate-700">
              Full calculator disclaimer
            </Link>
            .
          </p>
        </section>
      </div>

      <AdSlot slot="calc-below-results" format="rectangle" className="mt-8" />

      <details className="mt-8 rounded-xl border border-slate-200 bg-white p-5 print:open">
        <summary className="cursor-pointer text-base font-semibold text-slate-900">
          Equations &amp; assumptions
        </summary>
        <div className="mt-4 space-y-3 text-sm text-slate-600 leading-relaxed">
          {equations}
          {assumptions}
        </div>
      </details>

      {faqs && faqs.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">Notes &amp; FAQs</h2>
          <dl className="mt-4 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-lg border border-slate-200 p-4">
                <dt className="font-medium text-slate-900">{f.q}</dt>
                <dd className="mt-2 text-sm text-slate-600">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {related && related.length > 0 && (
        <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 print:hidden">
          <h2 className="text-base font-semibold text-slate-900">Related tools &amp; guides</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {related.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-6 print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Print / save as PDF
        </button>
      </div>
    </div>
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-800">{label}</span>
      {hint && <span className="mt-0.5 block text-xs text-slate-500">{hint}</span>}
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

/** Collapse optional fee fields behind a calm disclosure (default closed). */
export function OptionalFeesDetails({
  children,
  summary = "Add fees (optional)",
}: {
  children: ReactNode;
  summary?: string;
}) {
  return (
    <details className="rounded-lg border border-dashed border-slate-300 bg-slate-50/60">
      <summary className="cursor-pointer select-none px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900">
        {summary}
      </summary>
      <div className="space-y-4 border-t border-slate-200 px-3 py-3">{children}</div>
    </details>
  );
}

export function NumInput({
  value,
  onChange,
  min,
  max,
  step = "any",
  suffix,
  prefix,
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
  step?: string | number;
  suffix?: string;
  prefix?: string;
}) {
  return (
    <div className="relative">
      {prefix && (
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-500">
          {prefix}
        </span>
      )}
      <input
        type="number"
        inputMode="decimal"
        className={`w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200 ${prefix ? "pl-8" : ""} ${suffix ? "pr-12" : ""}`}
        value={Number.isFinite(value) ? value : ""}
        min={min}
        max={max}
        step={step}
        onChange={(e) => {
          const v = e.target.value === "" ? NaN : Number(e.target.value);
          onChange(v);
        }}
      />
      {suffix && (
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
          {suffix}
        </span>
      )}
    </div>
  );
}

export function SelectInput({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function ResultRow({
  label,
  value,
  emphasise,
  hint,
}: {
  label: string;
  value: string;
  emphasise?: boolean;
  hint?: string;
}) {
  if (emphasise) {
    return (
      <div
        className="rounded-xl px-4 py-4 ring-1 ring-slate-200/80"
        style={{ backgroundColor: "var(--accent-soft)" }}
      >
        <p className="text-sm font-medium text-slate-600">{label}</p>
        {hint && <p className="mt-0.5 text-xs text-slate-500">{hint}</p>}
        <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900 tabular-nums sm:text-4xl">
          {value}
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-between gap-4 rounded-lg px-3 py-2">
      <div>
        <p className="text-sm text-slate-600">{label}</p>
        {hint && <p className="text-xs text-slate-500">{hint}</p>}
      </div>
      <p className="shrink-0 text-right text-base font-semibold tabular-nums text-slate-800">
        {value}
      </p>
    </div>
  );
}
