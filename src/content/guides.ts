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
    title: "How EMI works (reducing balance)",
    description:
      "What EMI means, the standard reducing-balance formula, and why flat-rate quotes look cheaper than they are.",
    href: "/guides/how-emi-works",
    published: "2026-09-14",
    updated: "2026-09-14",
    priority: "P0",
    relatedCalcs: ["/calculators/personal-loan-emi", "/calculators/amortisation"],
  },
  {
    slug: "amortisation-explained",
    title: "Amortisation explained",
    description:
      "How each payment splits into interest and principal, and why early months are interest-heavy.",
    href: "/guides/amortisation-explained",
    published: "2026-09-14",
    updated: "2026-09-14",
    priority: "P0",
    relatedCalcs: ["/calculators/amortisation", "/calculators/extra-payment"],
  },
  {
    slug: "snowball-vs-avalanche",
    title: "Snowball vs avalanche — which payoff method?",
    description:
      "Behavioural vs mathematical approaches to clearing multiple debts, with when each wins.",
    href: "/guides/snowball-vs-avalanche",
    published: "2026-09-14",
    updated: "2026-09-14",
    priority: "P0",
    relatedCalcs: ["/calculators/snowball-vs-avalanche", "/calculators/consolidation-break-even"],
  },
  {
    slug: "refinance-when-it-pays",
    title: "Refinance a personal loan when it pays",
    description:
      "Break-even thinking for refinancing: fees, remaining term, and when a lower rate is not enough.",
    href: "/guides/refinance-when-it-pays",
    published: "2026-09-14",
    updated: "2026-09-14",
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
    updated: "2026-09-14",
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
    updated: "2026-09-14",
    priority: "P1",
    relatedCalcs: ["/calculators/personal-loan-emi", "/glossary/emi"],
  },
];
