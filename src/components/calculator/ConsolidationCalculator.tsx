"use client";

import { useMemo, useState } from "react";
import {
  CalculatorShell,
  Field,
  NumInput,
  ResultRow,
  SelectInput,
} from "./CalculatorShell";
import { calculateConsolidation } from "@/lib/calculators/consolidation";
import {
  formatMoney,
  formatMoneyPrecise,
  formatMonthsAsYearsMonths,
} from "@/lib/format";
import { COUNTRY_OPTIONS, getCountry, type CountryCode } from "@/content/countries";

const defaults = {
  country: "UK" as CountryCode,
  d1Balance: 3500,
  d1Rate: 22.9,
  d1Pay: 120,
  d2Balance: 2000,
  d2Rate: 18.9,
  d2Pay: 80,
  d3Balance: 1500,
  d3Rate: 15.9,
  d3Pay: 60,
  consolAmount: 7000,
  consolRate: 9.9,
  consolTerm: 48,
  consolFee: 150,
};

export function ConsolidationCalculator() {
  const [s, setS] = useState(defaults);
  const set = <K extends keyof typeof defaults>(k: K, v: (typeof defaults)[K]) =>
    setS((prev) => ({ ...prev, [k]: v }));

  const country = getCountry(s.country);
  const validation: string[] = [];
  if (!Number.isFinite(s.consolAmount) || s.consolAmount <= 0)
    validation.push("Consolidation amount must be positive.");
  if (!Number.isFinite(s.consolTerm) || s.consolTerm < 1)
    validation.push("Consolidation term must be at least 1 month.");
  if (!Number.isFinite(s.consolRate) || s.consolRate < 0 || s.consolRate > 50)
    validation.push("Consolidation rate should be between 0% and 50%.");
  if (!Number.isFinite(s.consolFee) || s.consolFee < 0)
    validation.push("Fees cannot be negative.");

  const result = useMemo(() => {
    if (validation.length) return null;
    const debts = [
      { balance: s.d1Balance, annualRate: s.d1Rate, monthlyPayment: s.d1Pay },
      { balance: s.d2Balance, annualRate: s.d2Rate, monthlyPayment: s.d2Pay },
      { balance: s.d3Balance, annualRate: s.d3Rate, monthlyPayment: s.d3Pay },
    ].filter(
      (d) =>
        Number.isFinite(d.balance) &&
        Number.isFinite(d.annualRate) &&
        Number.isFinite(d.monthlyPayment) &&
        d.balance > 0 &&
        d.monthlyPayment > 0
    );
    if (!debts.length) return null;
    return calculateConsolidation({
      debts,
      consolidationAmount: s.consolAmount,
      consolidationRate: s.consolRate,
      consolidationTermMonths: s.consolTerm,
      consolidationFee: s.consolFee,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s, validation.length]);

  return (
    <CalculatorShell
      title="Debt consolidation break-even"
      intro="Compare keeping up to three debts versus one consolidation loan — monthly change, total cost, fees and break-even month."
      onReset={() => setS(defaults)}
      validationMessages={validation}
      methodNote={`${country.conventionNote} Fee break-even ≈ fee ÷ monthly saving when the new payment is lower.`}
      related={[
        { href: "/calculators/snowball-vs-avalanche", label: "Snowball vs avalanche" },
        { href: "/calculators/apr-true-cost", label: "APR true cost" },
        { href: "/guides/fees-apr-true-cost", label: "Fees & APR guide" },
        { href: "/glossary/consolidation", label: "Consolidation glossary" },
      ]}
      faqs={[
        {
          q: "Should the consolidation amount equal the sum of balances?",
          a: "Usually yes (plus any fees rolled in). Enter the actual loan you would take. A longer term can cut the monthly payment while increasing total interest.",
        },
      ]}
      equations={
        <p>
          Keep path: simulate each debt with its minimum payment until cleared. Consolidation
          path: standard amortising loan on the consolidation principal. Fee break-even ≈ fee ÷
          monthly saving when the new payment is lower. Total cost = principal paid + interest
          (+ fees on the consolidation path).
        </p>
      }
      assumptions={
        <ul className="list-disc space-y-1 pl-5">
          <li>{country.conventionNote}</li>
          <li>No early repayment charges modelled on existing debts.</li>
          <li>Debts with zero balance or zero payment are ignored.</li>
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
          <p className="text-sm font-medium text-slate-800">Existing debts (up to 3)</p>
          {(
            [
              ["d1Balance", "d1Rate", "d1Pay", "Debt 1"],
              ["d2Balance", "d2Rate", "d2Pay", "Debt 2"],
              ["d3Balance", "d3Rate", "d3Pay", "Debt 3"],
            ] as const
          ).map(([bal, rate, pay, label]) => (
            <div key={label} className="space-y-2 rounded-lg border border-slate-100 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {label}
              </p>
              <Field label="Balance">
                <NumInput
                  prefix={country.currencySymbol}
                  value={s[bal]}
                  onChange={(n) => set(bal, n)}
                  min={0}
                  step={50}
                />
              </Field>
              <Field label="Rate">
                <NumInput
                  suffix="%"
                  value={s[rate]}
                  onChange={(n) => set(rate, n)}
                  min={0}
                  max={80}
                  step={0.1}
                />
              </Field>
              <Field label="Min. monthly payment">
                <NumInput
                  prefix={country.currencySymbol}
                  value={s[pay]}
                  onChange={(n) => set(pay, n)}
                  min={0}
                  step={5}
                />
              </Field>
            </div>
          ))}
          <p className="pt-2 text-sm font-medium text-slate-800">Consolidation loan</p>
          <Field label="Consolidation amount">
            <NumInput
              prefix={country.currencySymbol}
              value={s.consolAmount}
              onChange={(n) => set("consolAmount", n)}
              min={0}
              step={100}
            />
          </Field>
          <Field label="Consolidation rate">
            <NumInput
              suffix="%"
              value={s.consolRate}
              onChange={(n) => set("consolRate", n)}
              min={0}
              max={50}
              step={0.01}
            />
          </Field>
          <Field label="Term (months)">
            <NumInput
              value={s.consolTerm}
              onChange={(n) => set("consolTerm", n)}
              min={1}
              max={420}
              step={1}
            />
          </Field>
          <Field label="Fees" hint="Arrangement or broker fee">
            <NumInput
              prefix={country.currencySymbol}
              value={s.consolFee}
              onChange={(n) => set("consolFee", n)}
              min={0}
              step={10}
            />
          </Field>
        </>
      }
      results={
        result ? (
          <>
            <ResultRow
              label="Keep: monthly total"
              value={formatMoneyPrecise(result.keepMonthlyTotal, s.country)}
            />
            <ResultRow
              label="Keep: months to clear"
              value={formatMonthsAsYearsMonths(result.keepMonthsToClear)}
            />
            <ResultRow
              label="Keep: total cost"
              value={formatMoney(result.keepTotalCost, s.country)}
              hint="Principal + interest if you keep paying minima"
            />
            <ResultRow
              label="Consolidation monthly"
              value={formatMoneyPrecise(result.consolMonthly, s.country)}
              emphasise
            />
            <ResultRow
              label="Monthly change"
              value={formatMoneyPrecise(result.monthlyChange, s.country)}
              hint="Negative means lower monthly outgo"
            />
            <ResultRow
              label="Consolidation total cost"
              value={formatMoney(result.consolTotalCost, s.country)}
              hint="Payments over the term + fees"
            />
            <ResultRow
              label="Consolidation interest"
              value={formatMoney(result.consolTotalInterest, s.country)}
            />
            <ResultRow
              label="Interest saved (after fees)"
              value={formatMoney(result.interestSaved, s.country)}
            />
            <ResultRow
              label="Fee break-even month"
              value={
                result.breakEvenMonths == null
                  ? "n/a (no monthly saving)"
                  : formatMonthsAsYearsMonths(result.breakEvenMonths)
              }
              hint="Months until fee is covered by monthly saving"
            />
          </>
        ) : (
          <p className="text-sm text-slate-500">
            Enter at least one debt with balance and payment.
          </p>
        )
      }
    />
  );
}
