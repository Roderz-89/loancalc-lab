import { amortise, monthlyPayment } from "../loan-math";

export interface DebtItem {
  balance: number;
  annualRate: number;
  /** Minimum / contractual monthly payment */
  monthlyPayment: number;
}

export interface ConsolidationInput {
  debts: DebtItem[];
  consolidationAmount: number;
  consolidationRate: number;
  consolidationTermMonths: number;
  consolidationFee: number;
}

export interface ConsolidationResult {
  keepMonthlyTotal: number;
  keepTotalInterest: number;
  keepTotalCost: number;
  keepMonthsToClear: number;
  consolMonthly: number;
  consolTotalInterest: number;
  consolTotalCost: number;
  consolMonths: number;
  interestSaved: number;
  monthlyChange: number;
  breakEvenMonths: number | null;
}

function simulateKeepDebts(debts: DebtItem[], maxMonths = 600) {
  const state = debts.map((d) => ({
    balance: d.balance,
    rate: d.annualRate,
    payment: d.monthlyPayment,
  }));
  let totalInterest = 0;
  let month = 0;
  while (month < maxMonths && state.some((d) => d.balance > 0.01)) {
    month += 1;
    for (const d of state) {
      if (d.balance <= 0.01) {
        d.balance = 0;
        continue;
      }
      const r = d.rate / 100 / 12;
      const interest = d.balance * r;
      totalInterest += interest;
      let pay = d.payment;
      if (pay > d.balance + interest) pay = d.balance + interest;
      d.balance = Math.max(0, d.balance + interest - pay);
    }
  }
  const keepMonthlyTotal = debts.reduce((s, d) => s + d.monthlyPayment, 0);
  return { keepMonthlyTotal, keepTotalInterest: totalInterest, keepMonthsToClear: month };
}

export function calculateConsolidation(input: ConsolidationInput): ConsolidationResult {
  const keep = simulateKeepDebts(input.debts);
  const term = Math.max(1, Math.round(input.consolidationTermMonths));
  const fee = Math.max(0, input.consolidationFee);
  const principal = Math.max(0, input.consolidationAmount);
  const keepPrincipal = input.debts.reduce((s, d) => s + Math.max(0, d.balance), 0);
  const keepTotalCost = keepPrincipal + keep.keepTotalInterest;
  const consolMonthly = monthlyPayment(principal, input.consolidationRate, term);
  const { totalInterest, months, totalPaid } = amortise(
    principal,
    input.consolidationRate,
    term
  );
  const consolTotalCost = totalPaid + fee;
  const interestSaved = keep.keepTotalInterest - totalInterest - fee;

  // Break-even: months until cumulative keep cost exceeds cumulative consol cost
  // Simplified: fee / monthly savings when consol payment is lower
  const monthlyChange = consolMonthly - keep.keepMonthlyTotal;
  let breakEvenMonths: number | null = null;
  if (monthlyChange < -0.01 && fee > 0) {
    breakEvenMonths = Math.ceil(fee / -monthlyChange);
  } else if (fee <= 0 && monthlyChange <= 0) {
    breakEvenMonths = 0;
  }

  return {
    keepMonthlyTotal: keep.keepMonthlyTotal,
    keepTotalInterest: keep.keepTotalInterest,
    keepTotalCost,
    keepMonthsToClear: keep.keepMonthsToClear,
    consolMonthly,
    consolTotalInterest: totalInterest,
    consolTotalCost,
    consolMonths: months,
    interestSaved,
    monthlyChange,
    breakEvenMonths,
  };
}
