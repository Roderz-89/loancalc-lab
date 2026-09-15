"use client";

import { useMemo, useState } from "react";
import {
  CalculatorShell,
  Field,
  NumInput,
  ResultRow,
  SelectInput,
} from "./CalculatorShell";
import { calculateAprTrueCost } from "@/lib/calculators/apr-true-cost";
import { formatMoney, formatMoneyPrecise, formatPercent } from "@/lib/format";
import { COUNTRY_OPTIONS, getCountry, type CountryCode } from "@/content/countries";

const defaults = {
  country: "UK" as CountryCode,
  loanAmount: 10000,
  headlineRate: 7.9,
  termMonths: 48,
  upfrontFee: 299,
};

export function AprTrueCostCalculator() {
  const [s, setS] = useState(defaults);
  const set = <K extends keyof typeof defaults>(k: K, v: (typeof defaults)[K]) =>
    setS((prev) => ({ ...prev, [k]: v }));

  const country = getCountry(s.country);
  const validation: string[] = [];
  if (!(s.loanAmount > 0)) validation.push("Loan amount must be greater than zero.");
  if (s.upfrontFee >= s.loanAmount)
    validation.push("Fee should be less than the loan amount.");
  if (s.termMonths < 1) validation.push("Term must be at least 1 month.");

  const result = useMemo(() => {
    if (validation.length) return null;
    return calculateAprTrueCost(s);
  }, [s, validation.length]);

  return (
    <CalculatorShell
      title="APR / true cost of fees"
      intro="See how an upfront fee raises the effective yearly cost versus the headline interest rate — useful when comparing offers."
      onReset={() => setS(defaults)}
      validationMessages={validation}
      related={[
        { href: "/guides/fees-apr-true-cost", label: "Fees & APR guide" },
        { href: "/calculators/personal-loan-emi", label: "EMI / payment" },
        { href: "/glossary/apr", label: "APR glossary" },
      ]}
      faqs={[
        {
          q: "Is this the same as a regulated APR?",
          a: "No. It is an illustrative effective rate that treats the fee as reducing cash received while payments amortise the full principal. Local APR rules (UK, AU comparison rate, etc.) can differ — always read the lender disclosure.",
        },
      ]}
      equations={
        <p>
          Cash received = principal − upfront fee. Find monthly rate m such that the present
          value of the payment stream equals cash received; effective APR ≈ m × 12 × 100.
        </p>
      }
      assumptions={
        <ul className="list-disc space-y-1 pl-5">
          <li>{country.conventionNote}</li>
          <li>Single upfront fee only; ongoing fees not modelled.</li>
          <li>Fee paid separately (not added to principal) unless you change the loan amount.</li>
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
          <Field label="Loan amount (principal)">
            <NumInput
              prefix={country.currencySymbol}
              value={s.loanAmount}
              onChange={(n) => set("loanAmount", n)}
              min={0}
              step={100}
            />
          </Field>
          <Field label="Headline annual rate">
            <NumInput
              suffix="%"
              value={s.headlineRate}
              onChange={(n) => set("headlineRate", n)}
              min={0}
              max={50}
              step={0.01}
            />
          </Field>
          <Field label="Term (months)">
            <NumInput
              value={s.termMonths}
              onChange={(n) => set("termMonths", n)}
              min={1}
              max={420}
              step={1}
            />
          </Field>
          <Field label="Upfront fee">
            <NumInput
              prefix={country.currencySymbol}
              value={s.upfrontFee}
              onChange={(n) => set("upfrontFee", n)}
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
              label="Monthly payment"
              value={formatMoneyPrecise(result.monthlyPayment, s.country)}
            />
            <ResultRow
              label="Cash you receive"
              value={formatMoney(result.cashReceived, s.country)}
            />
            <ResultRow
              label="Headline rate"
              value={formatPercent(result.headlineRate)}
            />
            <ResultRow
              label="Effective APR (illustrative)"
              value={formatPercent(result.effectiveApr)}
              emphasise
            />
            <ResultRow label="APR uplift from fees" value={formatPercent(result.aprUplift)} />
            <ResultRow
              label="Fee as % of loan"
              value={formatPercent(result.feeAsPercentOfLoan)}
            />
            <ResultRow
              label="Total repayable (payments only)"
              value={formatMoney(result.totalRepayable, s.country)}
            />
          </>
        ) : (
          <p className="text-sm text-slate-500">Fix validation issues to see results.</p>
        )
      }
    />
  );
}
