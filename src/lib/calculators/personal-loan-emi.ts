import { amortise, monthlyPayment } from "../loan-math";

export interface PersonalLoanEmiInput {
  loanAmount: number;
  annualRate: number;
  termMonths: number;
  upfrontFee?: number;
}

export interface PersonalLoanEmiResult {
  monthly: number;
  totalRepayable: number;
  totalInterest: number;
  termMonths: number;
  firstYearInterest: number;
  netProceeds: number;
}

export function calculatePersonalLoanEmi(input: PersonalLoanEmiInput): PersonalLoanEmiResult {
  const termMonths = Math.max(1, Math.round(input.termMonths));
  const fee = Math.max(0, input.upfrontFee ?? 0);
  const monthly = monthlyPayment(input.loanAmount, input.annualRate, termMonths);
  const { schedule, totalInterest, totalPaid } = amortise(
    input.loanAmount,
    input.annualRate,
    termMonths
  );
  const firstYearInterest = schedule.slice(0, 12).reduce((s, m) => s + m.interest, 0);
  return {
    monthly,
    totalRepayable: totalPaid + fee,
    totalInterest,
    termMonths,
    firstYearInterest,
    netProceeds: Math.max(0, input.loanAmount - fee),
  };
}
