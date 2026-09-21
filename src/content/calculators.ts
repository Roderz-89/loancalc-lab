export interface CalculatorMeta {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  priority: "P0" | "P1" | "P2";
  decisionStage: string;
  related: string[];
}

export const CALCULATORS: CalculatorMeta[] = [
  {
    slug: "personal-loan-emi",
    title: "Personal loan / EMI payment calculator",
    shortTitle: "Loan EMI / payment",
    description:
      "Monthly payment (EMI), total interest and repayable amount with country-aware currency and reducing-balance assumptions.",
    href: "/calculators/personal-loan-emi",
    priority: "P0",
    decisionStage: "Know your payment",
    related: [
      "/calculators/amortisation",
      "/calculators/apr-true-cost",
      "/guides/how-emi-works",
      "/guides/country-mode-help",
    ],
  },
  {
    slug: "amortisation",
    title: "Amortisation schedule calculator",
    shortTitle: "Amortisation",
    description:
      "Month-by-month principal and interest split for a personal loan — preview the first N months plus lifetime totals.",
    href: "/calculators/amortisation",
    priority: "P0",
    decisionStage: "See the schedule",
    related: [
      "/calculators/personal-loan-emi",
      "/calculators/extra-payment",
      "/guides/amortisation-explained",
    ],
  },
  {
    slug: "consolidation-break-even",
    title: "Debt consolidation break-even calculator",
    shortTitle: "Consolidation break-even",
    description:
      "Compare keeping several debts versus one consolidation loan — fees, APR, term, monthly change and break-even.",
    href: "/calculators/consolidation-break-even",
    priority: "P0",
    decisionStage: "Roll debts together?",
    related: [
      "/calculators/snowball-vs-avalanche",
      "/calculators/apr-true-cost",
      "/guides/consolidation-break-even",
      "/guides/fees-apr-true-cost",
      "/glossary/consolidation",
    ],
  },
  {
    slug: "snowball-vs-avalanche",
    title: "Snowball vs avalanche payoff planner",
    shortTitle: "Snowball vs avalanche",
    description:
      "Multi-debt payoff planner comparing smallest-balance-first vs highest-rate-first — months and interest side by side.",
    href: "/calculators/snowball-vs-avalanche",
    priority: "P0",
    decisionStage: "Payoff strategy",
    related: [
      "/calculators/consolidation-break-even",
      "/calculators/extra-payment",
      "/guides/snowball-vs-avalanche",
    ],
  },
  {
    slug: "refinance-break-even",
    title: "Refinance when it pays",
    shortTitle: "Refinance break-even",
    description:
      "Break-even months for refinancing a personal loan given fees, new rate and new term.",
    href: "/calculators/refinance-break-even",
    priority: "P0",
    decisionStage: "Refinance?",
    related: [
      "/calculators/apr-true-cost",
      "/calculators/personal-loan-emi",
      "/guides/refinance-when-it-pays",
    ],
  },
  {
    slug: "apr-true-cost",
    title: "APR / true cost of fees",
    shortTitle: "APR true cost",
    description:
      "See how upfront fees raise the effective cost of borrowing versus the headline interest rate.",
    href: "/calculators/apr-true-cost",
    priority: "P0",
    decisionStage: "True cost of credit",
    related: [
      "/calculators/personal-loan-emi",
      "/calculators/refinance-break-even",
      "/guides/fees-apr-true-cost",
      "/glossary/apr",
    ],
  },
  {
    slug: "extra-payment",
    title: "Extra payment / early payoff calculator",
    shortTitle: "Extra payment",
    description:
      "Model regular extra payments or a one-off lump sum — interest saved and months cut from the term.",
    href: "/calculators/extra-payment",
    priority: "P1",
    decisionStage: "Pay down faster",
    related: [
      "/calculators/personal-loan-emi",
      "/calculators/amortisation",
      "/calculators/snowball-vs-avalanche",
      "/guides/amortisation-explained",
    ],
  },
];

export function getCalculator(slug: string): CalculatorMeta | undefined {
  return CALCULATORS.find((c) => c.slug === slug);
}
