"use client";

import { useMemo, useState } from "react";
import {
  CalculatorShell,
  Field,
  NumInput,
  ResultRow,
  SelectInput,
} from "./CalculatorShell";
import { calculateRefinanceBreakEven } from "@/lib/calculators/refinance";
import {
  formatMoney,
  formatMoneyPrecise,
  formatMonthsAsYearsMonths,
} from "@/lib/format";
import { COUNTRY_OPTIONS, getCountry, type CountryCode } from "@/content/countries";

const defaults = {
  country: "UK" as CountryCode,
  remainingBalance: 8000,
  currentRate: 12.9,
  remainingMonths: 36,
  newRate: 8.9,
  newTermMonths: 36,
  refinanceFees: 200,
};

export function RefinanceCalculator() {
  const [s, setS] = useState(defaults);
  const set = <K extends keyof typeof defaults>(k: K, v: (typeof defaults)[K]) =>
    setS((prev) => ({ ...prev, [k]: v }));

  const country = getCountry(s.country);
  const validation: string[] = [];
  if (!(s.remainingBalance > 0)) validation.push("Balance must be greater than zero.");
  if (s.remainingMonths < 1 || s.newTermMonths < 1)
    validation.push("Terms must be at least 1 month.");

  const result = useMemo(() => {
    if (validation.length) return null;
    return calculateRefinanceBreakEven(s);
  }, [s, validation.length]);

  return (
    <CalculatorShell
      title="Refinance when it pays"
      intro="Estimate monthly saving, fee break-even months, and lifetime interest difference when refinancing a personal loan."
      onReset={() => setS(defaults)}
      validationMessages={validation}
      related={[
        { href: "/guides/refinance-when-it-pays", label: "Refinance guide" },
        { href: "/calculators/apr-true-cost", label: "APR true cost" },
        { href: "/calculators/personal-loan-emi", label: "EMI / payment" },
      ]}
      faqs={[
        {
          q: "What if the new term is longer?",
          a: "A lower rate with a longer term can cut the monthly payment but increase total interest. Watch lifetime saving, not only the monthly figure.",
        },
      ]}
      equations={
        <p>
          Break-even months ≈ refinance fees ÷ monthly payment saving (when saving &gt; 0).
          Lifetime saving ≈ remaining interest on current loan − (new loan interest + fees).
        </p>
      }
      assumptions={
        <ul className="list-disc space-y-1 pl-5">
          <li>{country.conventionNote}</li>
          <li>Current loan assumed to continue on its remaining term at the current rate.</li>
          <li>No early repayment charge on the current loan modelled — add any ERC into fees.</li>
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
          <Field label="Remaining balance">
            <NumInput
              prefix={country.currencySymbol}
              value={s.remainingBalance}
              onChange={(n) => set("remainingBalance", n)}
              min={0}
              step={100}
            />
          </Field>
          <Field label="Current rate">
            <NumInput
              suffix="%"
              value={s.currentRate}
              onChange={(n) => set("currentRate", n)}
              min={0}
              max={50}
              step={0.01}
            />
          </Field>
          <Field label="Remaining term (months)">
            <NumInput
              value={s.remainingMonths}
              onChange={(n) => set("remainingMonths", n)}
              min={1}
              max={420}
              step={1}
            />
          </Field>
          <Field label="New rate">
            <NumInput
              suffix="%"
              value={s.newRate}
              onChange={(n) => set("newRate", n)}
              min={0}
              max={50}
              step={0.01}
            />
          </Field>
          <Field label="New term (months)">
            <NumInput
              value={s.newTermMonths}
              onChange={(n) => set("newTermMonths", n)}
              min={1}
              max={420}
              step={1}
            />
          </Field>
          <Field label="Refinance fees (incl. any ERC)">
            <NumInput
              prefix={country.currencySymbol}
              value={s.refinanceFees}
              onChange={(n) => set("refinanceFees", n)}
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
              label="Current monthly"
              value={formatMoneyPrecise(result.currentMonthly, s.country)}
            />
            <ResultRow
              label="New monthly"
              value={formatMoneyPrecise(result.newMonthly, s.country)}
              emphasise
            />
            <ResultRow
              label="Monthly saving"
              value={formatMoneyPrecise(result.monthlySaving, s.country)}
            />
            <ResultRow
              label="Break-even"
              value={
                result.breakEvenMonths == null
                  ? "n/a (no monthly saving)"
                  : formatMonthsAsYearsMonths(result.breakEvenMonths)
              }
            />
            <ResultRow
              label="Remaining interest if you stay"
              value={formatMoney(result.currentRemainingInterest, s.country)}
            />
            <ResultRow
              label="New loan interest"
              value={formatMoney(result.newTotalInterest, s.country)}
            />
            <ResultRow
              label="Lifetime saving (after fees)"
              value={formatMoney(result.lifetimeSaving, s.country)}
              hint="Negative means refinance costs more overall"
            />
          </>
        ) : (
          <p className="text-sm text-slate-500">Fix validation issues to see results.</p>
        )
      }
    />
  );
}
