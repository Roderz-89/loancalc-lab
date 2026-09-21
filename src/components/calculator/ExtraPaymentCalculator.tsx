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
import { EXAMPLE_LOAN_A, EXAMPLE_LOAN_A_NOTE } from "@/content/example-loan";

const defaults = {
  country: EXAMPLE_LOAN_A.country,
  loanAmount: EXAMPLE_LOAN_A.loanAmount,
  annualRate: EXAMPLE_LOAN_A.annualRate,
  termMonths: EXAMPLE_LOAN_A.termMonths,
  extraMonthly: 50,
  oneOff: 0,
};

export function ExtraPaymentCalculator() {
  const [s, setS] = useState(defaults);
  const set = <K extends keyof typeof defaults>(k: K, v: (typeof defaults)[K]) =>
    setS((prev) => ({ ...prev, [k]: v }));

  const country = getCountry(s.country);
  const validation: string[] = [];
  if (!Number.isFinite(s.loanAmount) || !(s.loanAmount > 0))
    validation.push("Loan amount must be greater than zero.");
  if (!Number.isFinite(s.annualRate) || s.annualRate < 0 || s.annualRate > 50)
    validation.push("Rate should be between 0% and 50%.");
  if (!Number.isFinite(s.termMonths) || s.termMonths < 1 || s.termMonths > 420)
    validation.push("Term should be between 1 and 420 months.");
  if (!Number.isFinite(s.extraMonthly) || s.extraMonthly < 0)
    validation.push("Extra monthly cannot be negative.");
  if (!Number.isFinite(s.oneOff) || s.oneOff < 0)
    validation.push("One-off amount cannot be negative.");

  const result = useMemo(() => {
    if (validation.length) return null;
    return calculateExtraPayment(s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s, validation.length]);

  return (
    <CalculatorShell
      title="Extra payment / early payoff"
      intro="See how a regular overpayment or a one-off lump sum cuts interest and shortens the term on a personal loan."
      onReset={() => setS(defaults)}
      validationMessages={validation}
      methodNote={country.conventionNote}
      related={[
        { href: "/calculators/personal-loan-emi", label: "Personal loan / EMI" },
        { href: "/calculators/amortisation", label: "Amortisation schedule" },
        { href: "/calculators/snowball-vs-avalanche", label: "Snowball vs avalanche" },
        { href: "/guides/amortisation-explained", label: "Amortisation explained" },
        { href: "/guides/overpaying-vs-saving", label: "Overpaying vs saving" },
        { href: "/guides/early-settlement-personal-loans", label: "Early settlement guide" },
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
          <li>Starts from the same EXAMPLE Loan A principal, rate and term as EMI / amortisation.</li>
        </ul>
      }
      inputs={
        <>
          <p className="rounded-lg border border-amber-200 bg-amber-50/70 px-3 py-2 text-xs leading-relaxed text-amber-950">
            {EXAMPLE_LOAN_A_NOTE} Default extra £50/month shows early-payoff impact; set to £0 to
            match the base EMI schedule.
          </p>
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
          <Field
            label="Annual interest rate (EXAMPLE)"
            hint="EXAMPLE rate — not a live quote"
          >
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
