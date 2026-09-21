export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  href: string;
  published: string;
  updated: string;
  priority: "P0" | "P1" | "P2";
  relatedCalcs: string[];
}

export const GUIDES: GuideMeta[] = [
  {
    slug: "how-emi-works",
    title: "How EMI works — reducing balance, flat rates and true cost",
    description:
      "UK guide to EMI on a reducing balance: the formula, a worked EXAMPLE with Loan A (£8,500), why flat-rate quotes mislead, and how fees change true cost and payoff clarity.",
    href: "/guides/how-emi-works",
    published: "2026-09-14",
    updated: "2026-09-21",
    priority: "P0",
    relatedCalcs: ["/calculators/personal-loan-emi", "/calculators/amortisation"],
  },
  {
    slug: "amortisation-explained",
    title: "Amortisation explained — how to read a loan schedule",
    description:
      "UK guide to reading an amortisation schedule: interest vs principal over time, with a worked EXAMPLE for Loan A (£8,500 · 24.9% EXAMPLE · 48 months · £0 fee).",
    href: "/guides/amortisation-explained",
    published: "2026-09-14",
    updated: "2026-09-21",
    priority: "P0",
    relatedCalcs: ["/calculators/amortisation", "/calculators/personal-loan-emi"],
  },
  {
    slug: "snowball-vs-avalanche",
    title: "Snowball vs avalanche — behaviour vs maths for multiple debts",
    description:
      "UK guide to debt snowball vs avalanche: behaviour versus interest maths, with a three-debt EXAMPLE (£1,200 @ 29.9%, £3,400 @ 22.0%, £6,800 @ 9.9%, extra £75/month).",
    href: "/guides/snowball-vs-avalanche",
    published: "2026-09-14",
    updated: "2026-09-21",
    priority: "P0",
    relatedCalcs: ["/calculators/snowball-vs-avalanche", "/calculators/extra-payment"],
  },
  {
    slug: "refinance-when-it-pays",
    title: "Refinance a personal loan when it pays — fees vs a lower rate",
    description:
      "UK personal-loan refinance guide: break-even maths with a worked EXAMPLE comparing Loan A (£8,500 · 24.9% · 48 months · £0 fee) to a lower-rate deal with a £195 fee — and when fees erase the benefit.",
    href: "/guides/refinance-when-it-pays",
    published: "2026-09-14",
    updated: "2026-09-21",
    priority: "P0",
    relatedCalcs: ["/calculators/refinance-break-even", "/calculators/apr-true-cost"],
  },
  {
    slug: "fees-apr-true-cost",
    title: "Fees & APR — the true cost of credit",
    description:
      "How arrangement fees, processing charges and similar costs raise the effective rate you pay.",
    href: "/guides/fees-apr-true-cost",
    published: "2026-09-14",
    updated: "2026-09-15",
    priority: "P0",
    relatedCalcs: ["/calculators/apr-true-cost", "/calculators/personal-loan-emi"],
  },
  {
    slug: "country-mode-help",
    title: "Country modes — currency & EMI conventions",
    description:
      "How LoanCalc Lab’s US / India-SEA / AU / CA / UK modes work, and what we assume about interest.",
    href: "/guides/country-mode-help",
    published: "2026-09-14",
    updated: "2026-09-15",
    priority: "P1",
    relatedCalcs: ["/calculators/personal-loan-emi", "/glossary/emi"],
  },
];
