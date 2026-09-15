import { amortise, monthlyPayment } from "../loan-math";

export interface RefinanceInput {
  remainingBalance: number;
  currentRate: number;
  remainingMonths: number;
  newRate: number;
  newTermMonths: number;
  refinanceFees: number;
}

export interface RefinanceResult {
  currentMonthly: number;
  newMonthly: number;
  monthlySaving: number;
  currentRemainingInterest: number;
  newTotalInterest: number;
  newTotalCost: number;
  breakEvenMonths: number | null;
  lifetimeSaving: number;
}

export function calculateRefinanceBreakEven(input: RefinanceInput): RefinanceResult {
  const remMonths = Math.max(1, Math.round(input.remainingMonths));
  const newTerm = Math.max(1, Math.round(input.newTermMonths));
  const fees = Math.max(0, input.refinanceFees);

  const currentMonthly = monthlyPayment(
    input.remainingBalance,
    input.currentRate,
    remMonths
  );
  const { totalInterest: currentRemainingInterest } = amortise(
    input.remainingBalance,
    input.currentRate,
    remMonths
  );

  const newMonthly = monthlyPayment(input.remainingBalance, input.newRate, newTerm);
  const { totalInterest: newTotalInterest, totalPaid } = amortise(
    input.remainingBalance,
    input.newRate,
    newTerm
  );

  const monthlySaving = currentMonthly - newMonthly;
  let breakEvenMonths: number | null = null;
  if (monthlySaving > 0.01 && fees > 0) {
    breakEvenMonths = Math.ceil(fees / monthlySaving);
  } else if (fees <= 0 && monthlySaving >= 0) {
    breakEvenMonths = 0;
  }

  const lifetimeSaving =
    currentRemainingInterest - (newTotalInterest + fees);

  return {
    currentMonthly,
    newMonthly,
    monthlySaving,
    currentRemainingInterest,
    newTotalInterest,
    newTotalCost: totalPaid + fees,
    breakEvenMonths,
    lifetimeSaving,
  };
}
