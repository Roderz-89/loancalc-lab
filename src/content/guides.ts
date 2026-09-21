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

/** Rewritten core guides (Jobs 3a–3e) — homepage featured list */
export const FEATURED_GUIDE_SLUGS = [
  "how-emi-works",
  "amortisation-explained",
  "snowball-vs-avalanche",
  "refinance-when-it-pays",
  "fees-apr-true-cost",
] as const;

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
    title: "Fees & APR — headline rate vs true cost of credit",
    description:
      "UK guide to how arrangement fees raise effective cost vs a headline rate: worked EXAMPLE with Loan B (£12,000 · 16.9% EXAMPLE · 60 months · £195 fee) and what APR disclosures are for.",
    href: "/guides/fees-apr-true-cost",
    published: "2026-09-14",
    updated: "2026-09-21",
    priority: "P0",
    relatedCalcs: ["/calculators/apr-true-cost", "/calculators/personal-loan-emi"],
  },
  {
    slug: "arrangement-fees-and-apr",
    title: "Arrangement fees and APR — why the quoted rate is not what you pay",
    description:
      "UK guide to why a quoted personal-loan rate is not the full cost when an arrangement fee applies: worked EXAMPLE with Loan B (£12,000 · 16.9% EXAMPLE · 60 months · £195 fee) and how cash received diverges from the face principal.",
    href: "/guides/arrangement-fees-and-apr",
    published: "2026-09-21",
    updated: "2026-09-21",
    priority: "P0",
    relatedCalcs: ["/calculators/apr-true-cost", "/calculators/personal-loan-emi"],
  },
  {
    slug: "consolidation-break-even",
    title: "Consolidation break-even — when one loan costs more after fees",
    description:
      "UK debt-consolidation guide: when rolling several debts into one loan costs more after fee and term, with a worked EXAMPLE using Loan B (£12,000 · 16.9% · 60 months · £195 fee) and three snowball-style balances.",
    href: "/guides/consolidation-break-even",
    published: "2026-09-21",
    updated: "2026-09-21",
    priority: "P0",
    relatedCalcs: ["/calculators/consolidation-break-even", "/calculators/apr-true-cost"],
  },
  {
    slug: "snowball-vs-avalanche-with-fees",
    title: "Snowball vs avalanche with fees — when consolidation flips the winner",
    description:
      "UK guide: how a fee on a new consolidation loan can change which payoff path wins on paper — snowball, avalanche, or consolidate — with the three-debt EXAMPLE and a £195 EXAMPLE fee.",
    href: "/guides/snowball-vs-avalanche-with-fees",
    published: "2026-09-21",
    updated: "2026-09-21",
    priority: "P0",
    relatedCalcs: [
      "/calculators/snowball-vs-avalanche",
      "/calculators/consolidation-break-even",
    ],
  },
  {
    slug: "early-settlement-personal-loans",
    title: "Early settlement on personal loans — rebate ideas, not promises",
    description:
      "UK high-level guide to early settlement on regulated personal loans: settlement figures, rebate ideas under consumer-credit rules, always checking the credit agreement — illustrative only, not legal advice.",
    href: "/guides/early-settlement-personal-loans",
    published: "2026-09-21",
    updated: "2026-09-21",
    priority: "P0",
    relatedCalcs: ["/calculators/extra-payment", "/calculators/refinance-break-even"],
  },
  {
    slug: "how-to-read-an-amortisation-schedule",
    title: "How to read an amortisation schedule — column by column",
    description:
      "UK companion to the amortisation schedule tool: what Month, Payment, Interest, Principal and Balance mean, with a worked EXAMPLE for Loan A (£8,500 · 24.9% EXAMPLE · 48 months · £0 fee).",
    href: "/guides/how-to-read-an-amortisation-schedule",
    published: "2026-09-21",
    updated: "2026-09-21",
    priority: "P0",
    relatedCalcs: ["/calculators/amortisation", "/calculators/personal-loan-emi"],
  },
  {
    slug: "representative-apr",
    title: "Representative APR — what the advertised rate does and does not mean",
    description:
      "UK guide to advertised representative APR: the 51% expectation test, representative examples, and why the figure on a loan advert is not a personalised quote for the reader.",
    href: "/guides/representative-apr",
    published: "2026-09-21",
    updated: "2026-09-21",
    priority: "P0",
    relatedCalcs: ["/calculators/apr-true-cost", "/calculators/personal-loan-emi"],
  },
  {
    slug: "overpaying-vs-saving",
    title: "Overpaying a personal loan vs saving — a trade-off frame",
    description:
      "UK trade-off guide: overpaying a personal loan versus putting the same cash into savings, with EXAMPLE Loan A (£8,500 · 24.9% EXAMPLE · 48 months · £0 fee) plus £75/month extra — illustrative only, no instruction to overpay or save.",
    href: "/guides/overpaying-vs-saving",
    published: "2026-09-21",
    updated: "2026-09-21",
    priority: "P0",
    relatedCalcs: ["/calculators/extra-payment", "/calculators/personal-loan-emi"],
  },
  {
    slug: "using-calculators-with-a-lender-illustration",
    title: "Using calculators with a lender illustration — amount, term, rate and fees",
    description:
      "UK guide to copying loan amount, term, rate and fees from a lender offer or pre-contract illustration into LoanCalc Lab tools — EXAMPLE figures only, with EMI and APR / true cost routes.",
    href: "/guides/using-calculators-with-a-lender-illustration",
    published: "2026-09-21",
    updated: "2026-09-21",
    priority: "P0",
    relatedCalcs: ["/calculators/personal-loan-emi", "/calculators/apr-true-cost"],
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
