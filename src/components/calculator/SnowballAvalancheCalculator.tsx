"use client";

import { useMemo, useState } from "react";
import {
  CalculatorShell,
  Field,
  NumInput,
  ResultRow,
  SelectInput,
} from "./CalculatorShell";
import { compareSnowballAvalanche } from "@/lib/calculators/snowball-avalanche";
import {
  formatMoney,
  formatMonthsAsYearsMonths,
} from "@/lib/format";
import { COUNTRY_OPTIONS, getCountry, type CountryCode } from "@/content/countries";

const defaults = {
  country: "UK" as CountryCode,
  extraMonthly: 100,
  d1Name: "Card A",
  d1Balance: 2500,
  d1Rate: 24.9,
  d1Min: 75,
  d2Name: "Card B",
  d2Balance: 1200,
  d2Rate: 19.9,
  d2Min: 40,
  d3Name: "Personal loan",
  d3Balance: 4000,
  d3Rate: 9.9,
  d3Min: 110,
};

export function SnowballAvalancheCalculator() {
  const [s, setS] = useState(defaults);
  const set = <K extends keyof typeof defaults>(k: K, v: (typeof defaults)[K]) =>
    setS((prev) => ({ ...prev, [k]: v }));

  const country = getCountry(s.country);
  const validation: string[] = [];
  if (!Number.isFinite(s.extraMonthly) || s.extraMonthly < 0)
    validation.push("Extra payment cannot be negative.");

  const result = useMemo(() => {
    if (validation.length) return null;
    const debts = [
      {
        id: "1",
        name: s.d1Name || "Debt 1",
        balance: s.d1Balance,
        annualRate: s.d1Rate,
        minPayment: s.d1Min,
      },
      {
        id: "2",
        name: s.d2Name || "Debt 2",
        balance: s.d2Balance,
        annualRate: s.d2Rate,
        minPayment: s.d2Min,
      },
      {
        id: "3",
        name: s.d3Name || "Debt 3",
        balance: s.d3Balance,
        annualRate: s.d3Rate,
        minPayment: s.d3Min,
      },
    ].filter(
      (d) =>
        Number.isFinite(d.balance) &&
        Number.isFinite(d.annualRate) &&
        Number.isFinite(d.minPayment) &&
        d.balance > 0 &&
        d.minPayment > 0
    );
    // Tool always exposes three debt slots; need at least two active for a comparison.
    if (debts.length < 2) return null;
    return compareSnowballAvalanche({ debts, extraMonthly: s.extraMonthly });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s, validation.length]);

  return (
    <CalculatorShell
      title="Snowball vs avalanche"
      intro="Compare smallest-balance-first (snowball) with highest-rate-first (avalanche) on three debts — months and interest side by side."
      onReset={() => setS(defaults)}
      validationMessages={validation}
      methodNote={`${country.conventionNote} Extra (plus freed minimums) goes to the target debt each month.`}
      related={[
        { href: "/guides/snowball-vs-avalanche", label: "Snowball vs avalanche guide" },
        { href: "/calculators/consolidation-break-even", label: "Consolidation break-even" },
        { href: "/calculators/extra-payment", label: "Extra payment" },
      ]}
      faqs={[
        {
          q: "Which should I choose?",
          a: "Avalanche usually costs less interest. Snowball can be easier to stick with because balances clear sooner. Run both with your numbers.",
        },
      ]}
      equations={
        <p>
          Each month apply minimums to all debts; put extra (plus freed minimums from cleared
          debts) on the target debt. Snowball targets lowest balance; avalanche targets highest
          rate.
        </p>
      }
      assumptions={
        <ul className="list-disc space-y-1 pl-5">
          <li>{country.conventionNote}</li>
          <li>Interest accrues monthly on each remaining balance before payment.</li>
          <li>Three debt inputs by default; needs at least two debts with balance and minimum payment.</li>
        </ul>
      }
      inputs={
        <>
          <Field label="Country / region">
            <SelectInput
              value={s.country}
              onChange={(v) => set("country", v as CountryCode)}
              options={COUNTRY_OPTIONS}
            />
          </Field>
          <Field label="Extra monthly toward payoff">
            <NumInput
              prefix={country.currencySymbol}
              value={s.extraMonthly}
              onChange={(n) => set("extraMonthly", n)}
              min={0}
              step={10}
            />
          </Field>
          {(
            [
              ["d1Name", "d1Balance", "d1Rate", "d1Min"],
              ["d2Name", "d2Balance", "d2Rate", "d2Min"],
              ["d3Name", "d3Balance", "d3Rate", "d3Min"],
            ] as const
          ).map(([nameK, balK, rateK, minK], i) => (
            <div key={nameK} className="space-y-2 rounded-lg border border-slate-100 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Debt {i + 1}
              </p>
              <Field label="Name">
                <input
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
                  value={s[nameK]}
                  onChange={(e) => set(nameK, e.target.value)}
                />
              </Field>
              <Field label="Balance">
                <NumInput
                  prefix={country.currencySymbol}
                  value={s[balK]}
                  onChange={(n) => set(balK, n)}
                  min={0}
                  step={50}
                />
              </Field>
              <Field label="Rate">
                <NumInput
                  suffix="%"
                  value={s[rateK]}
                  onChange={(n) => set(rateK, n)}
                  min={0}
                  max={80}
                  step={0.1}
                />
              </Field>
              <Field label="Minimum payment">
                <NumInput
                  prefix={country.currencySymbol}
                  value={s[minK]}
                  onChange={(n) => set(minK, n)}
                  min={0}
                  step={5}
                />
              </Field>
            </div>
          ))}
        </>
      }
      results={
        result ? (
          <>
            <ResultRow
              label="Snowball months"
              value={formatMonthsAsYearsMonths(result.snowball.months)}
              emphasise
            />
            <ResultRow
              label="Snowball interest"
              value={formatMoney(result.snowball.totalInterest, s.country)}
            />
            <ResultRow
              label="Snowball order"
              value={result.snowball.order.join(" → ") || "—"}
            />
            <ResultRow
              label="Avalanche months"
              value={formatMonthsAsYearsMonths(result.avalanche.months)}
              emphasise
            />
            <ResultRow
              label="Avalanche interest"
              value={formatMoney(result.avalanche.totalInterest, s.country)}
            />
            <ResultRow
              label="Avalanche order"
              value={result.avalanche.order.join(" → ") || "—"}
            />
            <ResultRow
              label="Interest difference (snowball − avalanche)"
              value={formatMoney(result.interestDifference, s.country)}
              hint="Positive means avalanche saves interest"
            />
          </>
        ) : (
          <p className="text-sm text-slate-500">
            Enter at least two debts with balance and minimum payment (three slots provided).
          </p>
        )
      }
    />
  );
}
