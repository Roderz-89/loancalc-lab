"use client";

import { useMemo, useState } from "react";
import {
  CalculatorShell,
  Field,
  NumInput,
  ResultRow,
  SelectInput,
} from "./CalculatorShell";
import { calculateExtraPayment } from "@/lib/calculators/extra-payment";
import {
  formatMoney,
  formatMoneyPrecise,
  formatMonthsAsYearsMonths,
} from "@/lib/format";
import { COUNTRY_OPTIONS, getCountry, type CountryCode } from "@/content/countries";

const defaults = {
  country: "UK" as CountryCode,
  loanAmount: 10000,
  annualRate: 8.9,
  termMonths: 48,
  extraMonthly: 50,
  oneOff: 0,
};

export function ExtraPaymentCalculator() {
  const [s, setS] = useState(defaults);
  const set = <K extends keyof typeof defaults>(k: K, v: (typeof defaults)[K]) =>
    setS((prev) => ({ ...prev, [k]: v }));

  const country = getCountry(s.country);
  const validation: string[] = [];
  if (!(s.loanAmount > 0)) validation.push("Loan amount must be greater than zero.");
  if (s.termMonths < 1) validation.push("Term must be at least 1 month.");
  if (s.extraMonthly < 0 || s.oneOff < 0) validation.push("Extra amounts cannot be negative.");

  const result = useMemo(() => {
    if (validation.length) return null;
    return calculateExtraPayment(s);
  }, [s, validation.length]);

  return (
    <CalculatorShell
      title="Extra payment / early payoff"
      intro="See how a regular overpayment or a one-off lump sum cuts interest and shortens the term on a personal loan."
      onReset={() => setS(defaults)}
      validationMessages={validation}
      related={[
        { href: "/calculators/amortisation", label: "Amortisation schedule" },
        { href: "/calculators/snowball-vs-avalanche", label: "Snowball vs avalanche" },
        { href: "/guides/amortisation-explained", label: "Amortisation explained" },
      ]}
      faqs={[
        {
          q: "Will my lender allow this?",
          a: "Many personal loans allow overpayments; some charge early repayment fees. Check your agreement before sending extra money.",
        },
      ]}
      equations={
        <p>
          Base schedule uses the contractual amortising payment. Extra monthly (and optional
          month-1 lump sum) are applied to principal after interest each month until the balance
          clears.
        </p>
      }
      assumptions={
        <ul className="list-disc space-y-1 pl-5">
          <li>{country.conventionNote}</li>
          <li>No early repayment charge modelled.</li>
          <li>Extra payments assumed to reduce term (not reduce future contractual payment).</li>
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
          <Field label="Loan amount">
            <NumInput
              prefix={country.currencySymbol}
              value={s.loanAmount}
              onChange={(n) => set("loanAmount", n)}
              min={0}
              step={100}
            />
          </Field>
          <Field label="Annual interest rate">
            <NumInput
              suffix="%"
              value={s.annualRate}
              onChange={(n) => set("annualRate", n)}
              min={0}
              max={50}
              step={0.01}
            />
          </Field>
          <Field label="Original term (months)">
            <NumInput
              value={s.termMonths}
              onChange={(n) => set("termMonths", n)}
              min={1}
              max={420}
              step={1}
            />
          </Field>
          <Field label="Extra each month">
            <NumInput
              prefix={country.currencySymbol}
              value={s.extraMonthly}
              onChange={(n) => set("extraMonthly", n)}
              min={0}
              step={10}
            />
          </Field>
          <Field label="One-off in month 1 (optional)">
            <NumInput
              prefix={country.currencySymbol}
              value={s.oneOff}
              onChange={(n) => set("oneOff", n)}
              min={0}
              step={50}
            />
          </Field>
        </>
      }
      results={
        result ? (
          <>
            <ResultRow
              label="Contractual monthly"
              value={formatMoneyPrecise(result.baseMonthly, s.country)}
            />
            <ResultRow
              label="Effective monthly (with extra)"
              value={formatMoneyPrecise(result.effectiveMonthly, s.country)}
              emphasise
            />
            <ResultRow
              label="Interest without extras"
              value={formatMoney(result.baseInterest, s.country)}
            />
            <ResultRow
              label="Interest with extras"
              value={formatMoney(result.withExtraInterest, s.country)}
            />
            <ResultRow
              label="Interest saved"
              value={formatMoney(result.interestSaved, s.country)}
            />
            <ResultRow
              label="Term without extras"
              value={formatMonthsAsYearsMonths(result.baseMonths)}
            />
            <ResultRow
              label="Term with extras"
              value={formatMonthsAsYearsMonths(result.withExtraMonths)}
            />
            <ResultRow
              label="Months saved"
              value={formatMonthsAsYearsMonths(result.monthsSaved)}
            />
          </>
        ) : (
          <p className="text-sm text-slate-500">Fix validation issues to see results.</p>
        )
      }
    />
  );
}
