"use client";

import { useMemo, useState } from "react";
import {
  CalculatorShell,
  Field,
  NumInput,
  ResultRow,
  SelectInput,
} from "./CalculatorShell";
import { calculateAmortisationSchedule } from "@/lib/calculators/amortisation";
import { formatMoney, formatMoneyPrecise } from "@/lib/format";
import { COUNTRY_OPTIONS, getCountry, type CountryCode } from "@/content/countries";
import { EXAMPLE_LOAN_A, EXAMPLE_LOAN_A_NOTE } from "@/content/example-loan";

const defaults = {
  country: EXAMPLE_LOAN_A.country,
  loanAmount: EXAMPLE_LOAN_A.loanAmount,
  annualRate: EXAMPLE_LOAN_A.annualRate,
  termMonths: EXAMPLE_LOAN_A.termMonths,
  showMonths: 12,
};

export function AmortisationCalculator() {
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
  if (!Number.isFinite(s.showMonths) || s.showMonths < 1)
    validation.push("Show-months must be at least 1.");

  const result = useMemo(() => {
    if (validation.length) return null;
    return calculateAmortisationSchedule(s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s, validation.length]);

  return (
    <CalculatorShell
      title="Amortisation schedule calculator"
      intro="See how each monthly payment splits into interest and principal. Preview the first N months and lifetime totals."
      onReset={() => setS(defaults)}
      validationMessages={validation}
      methodNote={country.conventionNote}
      related={[
        { href: "/calculators/personal-loan-emi", label: "Personal loan / EMI" },
        { href: "/calculators/extra-payment", label: "Extra payment calculator" },
        { href: "/guides/amortisation-explained", label: "Amortisation explained" },
      ]}
      faqs={[
        {
          q: "Why is early interest so high?",
          a: "Interest is charged on the outstanding balance. Early on, most of the balance is still outstanding, so more of each payment covers interest.",
        },
      ]}
      equations={
        <p>
          Each month: interest = balance × (annual rate ÷ 12 ÷ 100); principal = payment −
          interest; new balance = balance − principal.
        </p>
      }
      assumptions={
        <ul className="list-disc space-y-1 pl-5">
          <li>{country.conventionNote}</li>
          <li>Fixed payment equal to the standard amortising EMI for the chosen term.</li>
          <li>Schedule preview is capped for readability; totals use the full term.</li>
          <li>Fees are not rolled into the schedule balance (match EMI tool with £0 fee for EXAMPLE Loan A).</li>
        </ul>
      }
      inputs={
        <>
          <p className="rounded-lg border border-amber-200 bg-amber-50/70 px-3 py-2 text-xs leading-relaxed text-amber-950">
            {EXAMPLE_LOAN_A_NOTE}
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
          <Field label="Term (months)">
            <NumInput
              value={s.termMonths}
              onChange={(n) => set("termMonths", n)}
              min={1}
              max={420}
              step={1}
            />
          </Field>
          <Field label="Show first N months">
            <NumInput
              value={s.showMonths}
              onChange={(n) => set("showMonths", n)}
              min={1}
              max={120}
              step={1}
            />
          </Field>
        </>
      }
      results={
        result ? (
          <>
            <ResultRow
              label={country.paymentLabel}
              value={formatMoneyPrecise(result.monthlyPayment, s.country)}
              emphasise
            />
            <ResultRow
              label="Total interest"
              value={formatMoney(result.totalInterest, s.country)}
            />
            <ResultRow
              label="Total paid"
              value={formatMoney(result.totalPaid, s.country)}
            />
            <div className="mt-4 -mx-1 overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="min-w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="px-2 py-2 font-medium">Month</th>
                    <th className="px-2 py-2 font-medium">Payment</th>
                    <th className="px-2 py-2 font-medium">Interest</th>
                    <th className="px-2 py-2 font-medium">Principal</th>
                    <th className="px-2 py-2 font-medium">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {result.schedulePreview.map((row) => (
                    <tr key={row.month} className="border-t border-slate-100">
                      <td className="px-2 py-1.5 tabular-nums">{row.month}</td>
                      <td className="px-2 py-1.5 tabular-nums">
                        {formatMoneyPrecise(row.payment, s.country)}
                      </td>
                      <td className="px-2 py-1.5 tabular-nums">
                        {formatMoneyPrecise(row.interest, s.country)}
                      </td>
                      <td className="px-2 py-1.5 tabular-nums">
                        {formatMoneyPrecise(row.principal, s.country)}
                      </td>
                      <td className="px-2 py-1.5 tabular-nums">
                        {formatMoneyPrecise(row.balance, s.country)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="text-sm text-slate-500">Fix validation issues to see results.</p>
        )
      }
    />
  );
}
