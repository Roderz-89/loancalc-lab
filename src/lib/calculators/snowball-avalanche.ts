export interface PayoffDebt {
  id: string;
  name: string;
  balance: number;
  annualRate: number;
  minPayment: number;
}

export interface PayoffInput {
  debts: PayoffDebt[];
  extraMonthly: number;
}

export interface PayoffStrategyResult {
  strategy: "snowball" | "avalanche";
  months: number;
  totalInterest: number;
  totalPaid: number;
  order: string[];
}

function cloneDebts(debts: PayoffDebt[]) {
  return debts.map((d) => ({ ...d }));
}

function runStrategy(
  debtsIn: PayoffDebt[],
  extraMonthly: number,
  mode: "snowball" | "avalanche",
  maxMonths = 720
): PayoffStrategyResult {
  const debts = cloneDebts(debtsIn).filter((d) => d.balance > 0);
  const orderNames: string[] = [];
  let totalInterest = 0;
  let totalPaid = 0;
  let month = 0;
  let freedExtra = 0;

  const sortTarget = () => {
    const active = debts.filter((d) => d.balance > 0.01);
    if (mode === "snowball") {
      active.sort((a, b) => a.balance - b.balance || b.annualRate - a.annualRate);
    } else {
      active.sort((a, b) => b.annualRate - a.annualRate || a.balance - b.balance);
    }
    return active;
  };

  while (month < maxMonths && debts.some((d) => d.balance > 0.01)) {
    month += 1;
    const active = sortTarget();
    const target = active[0];

    // Accrue interest & apply minimums (extra goes to target)
    for (const d of debts) {
      if (d.balance <= 0.01) {
        d.balance = 0;
        continue;
      }
      const interest = d.balance * (d.annualRate / 100 / 12);
      totalInterest += interest;
      d.balance += interest;

      let pay = d.minPayment;
      if (d === target) {
        pay += Math.max(0, extraMonthly) + freedExtra;
      }
      if (pay > d.balance) pay = d.balance;
      d.balance = Math.max(0, d.balance - pay);
      totalPaid += pay;

      if (d.balance <= 0.01 && d.balance !== 0) {
        d.balance = 0;
      }
      if (d.balance === 0 && !orderNames.includes(d.name)) {
        orderNames.push(d.name);
        freedExtra += d.minPayment;
      }
    }
  }

  return {
    strategy: mode,
    months: month,
    totalInterest,
    totalPaid,
    order: orderNames,
  };
}

export function compareSnowballAvalanche(input: PayoffInput): {
  snowball: PayoffStrategyResult;
  avalanche: PayoffStrategyResult;
  interestDifference: number;
  monthsDifference: number;
} {
  const snowball = runStrategy(input.debts, input.extraMonthly, "snowball");
  const avalanche = runStrategy(input.debts, input.extraMonthly, "avalanche");
  return {
    snowball,
    avalanche,
    interestDifference: snowball.totalInterest - avalanche.totalInterest,
    monthsDifference: snowball.months - avalanche.months,
  };
}
