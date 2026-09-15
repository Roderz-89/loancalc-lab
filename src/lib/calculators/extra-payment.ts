import { amortise, monthlyPayment } from "../loan-math";

export interface ExtraPaymentInput {
  loanAmount: number;
  annualRate: number;
  termMonths: number;
  extraMonthly: number;
  oneOff?: number;
}

export interface ExtraPaymentResult {
  baseMonthly: number;
  baseInterest: number;
  baseMonths: number;
  withExtraInterest: number;
  withExtraMonths: number;
  interestSaved: number;
  monthsSaved: number;
  effectiveMonthly: number;
}

export function calculateExtraPayment(input: ExtraPaymentInput): ExtraPaymentResult {
  const term = Math.max(1, Math.round(input.termMonths));
  const baseMonthly = monthlyPayment(input.loanAmount, input.annualRate, term);
  const base = amortise(input.loanAmount, input.annualRate, term);
  const withExtra = amortise(input.loanAmount, input.annualRate, term, {
    extraMonthly: Math.max(0, input.extraMonthly),
    oneOffMonth1: Math.max(0, input.oneOff ?? 0),
  });
  return {
    baseMonthly,
    baseInterest: base.totalInterest,
    baseMonths: base.months,
    withExtraInterest: withExtra.totalInterest,
    withExtraMonths: withExtra.months,
    interestSaved: base.totalInterest - withExtra.totalInterest,
    monthsSaved: base.months - withExtra.months,
    effectiveMonthly: baseMonthly + Math.max(0, input.extraMonthly),
  };
}
