import { approximateAprFromFees, monthlyPayment } from "../loan-math";

export interface AprTrueCostInput {
  loanAmount: number;
  headlineRate: number;
  termMonths: number;
  upfrontFee: number;
}

export interface AprTrueCostResult {
  monthlyPayment: number;
  cashReceived: number;
  totalRepayable: number;
  headlineRate: number;
  effectiveApr: number;
  aprUplift: number;
  feeAsPercentOfLoan: number;
}

export function calculateAprTrueCost(input: AprTrueCostInput): AprTrueCostResult {
  const term = Math.max(1, Math.round(input.termMonths));
  const fee = Math.max(0, input.upfrontFee);
  const { payment, cashReceived, effectiveAprPercent } = approximateAprFromFees({
    principal: input.loanAmount,
    upfrontFee: fee,
    annualRatePercent: input.headlineRate,
    termMonths: term,
  });
  const totalRepayable = payment * term;
  return {
    monthlyPayment: payment,
    cashReceived,
    totalRepayable,
    headlineRate: input.headlineRate,
    effectiveApr: effectiveAprPercent,
    aprUplift: effectiveAprPercent - input.headlineRate,
    feeAsPercentOfLoan:
      input.loanAmount > 0 ? (fee / input.loanAmount) * 100 : 0,
  };
}

/** Sanity helper used only in tests / docs */
export function headlinePayment(loan: number, rate: number, months: number) {
  return monthlyPayment(loan, rate, months);
}
