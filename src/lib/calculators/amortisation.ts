import { amortise, type AmortisationMonth } from "../loan-math";

export interface AmortisationCalcInput {
  loanAmount: number;
  annualRate: number;
  termMonths: number;
  showMonths?: number;
}

export interface AmortisationCalcResult {
  schedulePreview: AmortisationMonth[];
  totalInterest: number;
  totalPaid: number;
  months: number;
  monthlyPayment: number;
}

export function calculateAmortisationSchedule(
  input: AmortisationCalcInput
): AmortisationCalcResult {
  const termMonths = Math.max(1, Math.round(input.termMonths));
  const show = Math.min(Math.max(1, input.showMonths ?? 12), termMonths);
  const { schedule, totalInterest, totalPaid, months } = amortise(
    input.loanAmount,
    input.annualRate,
    termMonths
  );
  return {
    schedulePreview: schedule.slice(0, show),
    totalInterest,
    totalPaid,
    months,
    monthlyPayment: schedule[0]?.payment ?? 0,
  };
}
