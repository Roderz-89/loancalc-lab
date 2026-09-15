"use client";

import { useMemo, useState } from "react";
import {
  CalculatorShell,
  Field,
  NumInput,
  OptionalFeesDetails,
  ResultRow,
  SelectInput,
} from "./CalculatorShell";
import { calculatePersonalLoanEmi } from "@/lib/calculators/personal-loan-emi";
import { formatMoney, formatMoneyPrecise, formatMonthsAsYearsMonths } from "@/lib/format";
import { COUNTRY_OPTIONS, getCountry, type CountryCode } from "@/content/countries";

const defaults = {
  country: "UK" as CountryCode,
  loanAmount: 10000,
  annualRate: 8.9,
  termMonths: 36,
  upfrontFee: 0,
};

export function PersonalLoanEmiCalculator() {
  const [s, setS] = useState(defaults);
  const set = <K extends keyof typeof defaults>(k: K, v: (typeof defaults)[K]) =>
    setS((prev) => ({ ...prev, [k]: v }));

  const country = getCountry(s.country);
  const validation: string[] = [];
  if (!(s.loanAmount > 0)) validation.push("Loan amount must be greater than zero.");
  if (s.annualRate < 0 || s.annualRate > 50)
    validation.push("Rate should be between 0% and 50%.");
  if (s.termMonths < 1 || s.termMonths > 420)
    validation.push("Term should be between 1 and 420 months.");
  if (s.upfrontFee < 0) validation.push("Fee cannot be negative.");

  const result = useMemo(() => {
    if (validation.length) return null;
    return calculatePersonalLoanEmi(s);
  }, [s, validation.length]);

  return (
    <CalculatorShell
      title="Personal loan / EMI payment calculator"
      intro="Work out a reducing-balance monthly payment (EMI), total interest and amount repayable — with country-aware currency and labels."
      onReset={() => setS(defaults)}
      validationMessages={validation}
      related={[
        { href: "/calculators/amortisation", label: "Amortisation" },
        { href: "/calculators/snowball-vs-avalanche", label: "Snowball vs avalanche" },
        { href: "/calculators/consolidation-break-even", label: "Consolidation" },
        { href: "/calculators/apr-true-cost", label: "APR / true cost of fees" },
        { href: "/guides/how-emi-works", label: "How EMI works" },
        { href: "/guides/country-mode-help", label: "Country mode help" },
      ]}
      faqs={[
        {
          q: "Is EMI the same as a monthly instalment?",
          a: "Yes for reducing-balance loans. “EMI” is the common label in India/SEA; elsewhere we show “monthly payment” or “repayment”. Maths are the same reducing-balance formula.",
        },
        {
          q: "Do you support flat-rate loans?",
          a: "No — Phase 1 models reducing-balance only. Flat-rate quotes often look cheaper but cost more; convert or ask the lender for the reducing-balance / APR equivalent.",
        },
      ]}
      equations={
        <p>
          M = P × r(1+r)ⁿ / ((1+r)ⁿ − 1), where P is the loan, r is the monthly rate
          (annual ÷ 12 ÷ 100), and n is the number of months.
        </p>
      }
      assumptions={
        <ul className="list-disc space-y-1 pl-5">
          <li>{country.conventionNote}</li>
          <li>Fixed rate for the whole term; monthly payments in arrears.</li>
          <li>Optional upfront fee is added to total repayable and reduces net proceeds; it is not rolled into the amortising balance unless you add it to the loan amount yourself.</li>
        </ul>
      }
      inputs={
        <>
          <Field label="Country / region" hint="Sets currency, number format and payment label">
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
          <Field label="Term (months)" hint={formatMonthsAsYearsMonths(s.termMonths)}>
            <NumInput
              value={s.termMonths}
              onChange={(n) => set("termMonths", n)}
              min={1}
              max={420}
              step={1}
            />
          </Field>
          <OptionalFeesDetails summary="Add fees (optional)">
            <Field label="Upfront fee" hint="Arrangement or broker fee paid separately">
              <NumInput
                prefix={country.currencySymbol}
                value={s.upfrontFee}
                onChange={(n) => set("upfrontFee", n)}
                min={0}
                step={10}
              />
            </Field>
          </OptionalFeesDetails>
        </>
      }
      results={
        result ? (
          <>
            <ResultRow
              label={country.paymentLabel}
              value={formatMoneyPrecise(result.monthly, s.country)}
              emphasise
            />
            <ResultRow
              label="Total interest"
              value={formatMoney(result.totalInterest, s.country)}
            />
            <ResultRow
              label="Total repayable (incl. fee)"
              value={formatMoney(result.totalRepayable, s.country)}
            />
            <ResultRow
              label="Net proceeds (after fee)"
              value={formatMoney(result.netProceeds, s.country)}
            />
            <ResultRow
              label="First-year interest (approx.)"
              value={formatMoney(result.firstYearInterest, s.country)}
            />
          </>
        ) : (
          <p className="text-sm text-slate-500">Fix validation issues to see results.</p>
        )
      }
    />
  );
}
