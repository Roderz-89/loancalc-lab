export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDefinition: string;
  href: string;
  related: string[];
  published: string;
  updated: string;
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: "emi",
    term: "EMI (Equated Monthly Instalment)",
    shortDefinition:
      "A fixed monthly payment on a reducing-balance loan that covers both interest and principal. Common terminology in India and parts of South-East Asia; equivalent to a standard amortising instalment elsewhere.",
    href: "/glossary/emi",
    related: ["/calculators/personal-loan-emi", "/guides/how-emi-works"],
    published: "2026-09-14",
    updated: "2026-09-14",
  },
  {
    slug: "apr",
    term: "APR (Annual Percentage Rate)",
    shortDefinition:
      "A standardised way of expressing the yearly cost of credit. Headline interest rates may exclude fees; a true-cost view folds fees into an effective rate for comparison.",
    href: "/glossary/apr",
    related: ["/calculators/apr-true-cost", "/guides/fees-apr-true-cost"],
    published: "2026-09-14",
    updated: "2026-09-14",
  },
  {
    slug: "amortisation",
    term: "Amortisation",
    shortDefinition:
      "The process of paying off a loan over time through regular payments that gradually reduce the outstanding principal. An amortisation schedule shows the interest/principal split each month.",
    href: "/glossary/amortisation",
    related: ["/calculators/amortisation", "/guides/amortisation-explained"],
    published: "2026-09-14",
    updated: "2026-09-14",
  },
  {
    slug: "snowball",
    term: "Debt snowball",
    shortDefinition:
      "A payoff strategy that clears the smallest balance first while making minimum payments on other debts, then rolls freed payments into the next smallest balance.",
    href: "/glossary/snowball",
    related: ["/calculators/snowball-vs-avalanche", "/guides/snowball-vs-avalanche"],
    published: "2026-09-14",
    updated: "2026-09-14",
  },
  {
    slug: "avalanche",
    term: "Debt avalanche",
    shortDefinition:
      "A payoff strategy that targets the highest interest rate first to minimise total interest, while making minimum payments on other debts.",
    href: "/glossary/avalanche",
    related: ["/calculators/snowball-vs-avalanche", "/guides/snowball-vs-avalanche"],
    published: "2026-09-14",
    updated: "2026-09-14",
  },
  {
    slug: "consolidation",
    term: "Debt consolidation",
    shortDefinition:
      "Replacing multiple debts with a single loan — often to simplify payments or reduce rate. Fees and a longer term can erase the benefit; always check break-even.",
    href: "/glossary/consolidation",
    related: [
      "/calculators/consolidation-break-even",
      "/calculators/apr-true-cost",
      "/guides/consolidation-break-even",
    ],
    published: "2026-09-14",
    updated: "2026-09-14",
  },
];
