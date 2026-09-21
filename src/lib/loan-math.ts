/**
 * Shared personal-loan / EMI maths (reducing balance).
 * Illustrative only — lender day-count and rounding may differ.
 */

export function monthlyRate(annualPercent: number): number {
  return annualPercent / 100 / 12;
}

/** Standard EMI / amortising payment: M = P * r(1+r)^n / ((1+r)^n - 1) */
export function monthlyPayment(
  principal: number,
  annualRatePercent: number,
  termMonths: number
): number {
  if (
    !Number.isFinite(principal) ||
    !Number.isFinite(annualRatePercent) ||
    !Number.isFinite(termMonths) ||
    principal <= 0 ||
    termMonths <= 0
  ) {
    return 0;
  }
  const r = monthlyRate(annualRatePercent);
  if (r === 0) return principal / termMonths;
  const factor = Math.pow(1 + r, termMonths);
  if (!Number.isFinite(factor) || factor === 1) return principal / termMonths;
  return (principal * r * factor) / (factor - 1);
}

export interface AmortisationMonth {
  month: number;
  payment: number;
  interest: number;
  principal: number;
  balance: number;
}

export interface AmortisationResult {
  schedule: AmortisationMonth[];
  totalInterest: number;
  totalPaid: number;
  months: number;
}

/** Full amortisation schedule with optional extra monthly / one-off payments. */
export function amortise(
  principal: number,
  annualRatePercent: number,
  termMonths: number,
  options?: { extraMonthly?: number; oneOffMonth1?: number; maxMonths?: number }
): AmortisationResult {
  const maxMonths = options?.maxMonths ?? Math.min(Math.max(termMonths, 1) + 600, 720);
  const basePayment = monthlyPayment(principal, annualRatePercent, termMonths);
  const extra = options?.extraMonthly ?? 0;
  const r = monthlyRate(annualRatePercent);
  let balance = principal;
  const schedule: AmortisationMonth[] = [];
  let totalInterest = 0;
  let totalPaid = 0;
  let month = 0;

  while (balance > 0.005 && month < maxMonths) {
    month += 1;
    const interest = balance * r;
    let payment = basePayment + extra;
    if (month === 1 && options?.oneOffMonth1) {
      payment += options.oneOffMonth1;
    }
    if (payment > balance + interest) {
      payment = balance + interest;
    }
    const principalPaid = payment - interest;
    balance = Math.max(0, balance - principalPaid);
    totalInterest += interest;
    totalPaid += payment;
    schedule.push({
      month,
      payment,
      interest,
      principal: principalPaid,
      balance,
    });
    if (extra === 0 && !options?.oneOffMonth1 && month >= termMonths) break;
  }

  return { schedule, totalInterest, totalPaid, months: month };
}

/**
 * Approximate APR that equates cash received (principal − upfront fee)
 * to the payment stream. Newton-Raphson on IRR of monthly cashflows.
 */
export function approximateAprFromFees(params: {
  principal: number;
  upfrontFee: number;
  annualRatePercent: number;
  termMonths: number;
}): { payment: number; cashReceived: number; effectiveAprPercent: number } {
  const { principal, upfrontFee, annualRatePercent, termMonths } = params;
  const payment = monthlyPayment(principal, annualRatePercent, termMonths);
  const cashReceived = Math.max(0, principal - Math.max(0, upfrontFee));

  if (cashReceived <= 0 || termMonths <= 0 || payment <= 0) {
    return { payment, cashReceived, effectiveAprPercent: NaN };
  }

  // Solve for monthly rate m such that cashReceived = sum_{k=1..n} payment / (1+m)^k
  // Equivalent: cashReceived = payment * (1 - (1+m)^-n) / m
  let m = monthlyRate(annualRatePercent);
  if (m <= 0) m = 0.001;

  for (let i = 0; i < 40; i++) {
    const pow = Math.pow(1 + m, -termMonths);
    const pv = (payment * (1 - pow)) / m;
    const dpv =
      (payment * ((termMonths * pow) / (1 + m) * m - (1 - pow))) / (m * m);
    const f = pv - cashReceived;
    if (Math.abs(f) < 1e-8) break;
    const next = m - f / dpv;
    if (!Number.isFinite(next) || next <= -0.99) break;
    m = next;
  }

  return {
    payment,
    cashReceived,
    effectiveAprPercent: m * 12 * 100,
  };
}
