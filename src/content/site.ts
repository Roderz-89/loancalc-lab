export const SITE = {
  name: "LoanCalc Lab",
  domain: "loancalclab.com",
  tagline: "Personal loan, EMI & debt payoff calculators — multi-country",
  description:
    "Calculator-first decision lab for borrowers comparing EMI, amortisation, debt snowball/avalanche, and consolidation break-even — with clear assumptions across US, India-SEA, AU, CA and UK.",
  locale: "en-GB",
  accent: "#c8102e",
  url: "https://loancalclab.com",
  author: "Chris Rodway",
  /** Show labelled mock AdSense placements for local UX review (not live ads) */
  adsensePreview: true,
  /** Wire real AdSense only after go-live, approval, and consent */
  adsenseEnabled: false,
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/calculators", label: "Calculators" },
  { href: "/guides", label: "Guides" },
  { href: "/glossary", label: "Glossary" },
  { href: "/about", label: "About" },
] as const;

export const FOOTER_LEGAL = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookie-policy", label: "Cookie policy" },
  { href: "/contact", label: "Contact" },
  { href: "/editorial-policy", label: "Editorial policy" },
  { href: "/advertising-disclosure", label: "Advertising disclosure" },
  { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
  { href: "/calculator-disclaimer", label: "Calculator disclaimer" },
  { href: "/terms", label: "Terms" },
] as const;

export const DEFAULT_DISCLAIMER =
  "Illustrative only — not personalised financial advice and not a credit offer. Rates, fees and terms vary by lender and country. Check the lender’s disclosure before you borrow.";

/** Calm clarity signals for header / hero trust strip (en-GB, not salesy) */
export const TRUST_STRIP = {
  signals: ["Free", "No signup", "Not a lender", "Maths disclosed"] as const,
  disclaimerHref: "/calculator-disclaimer",
  disclaimerLabel: "Calculator disclaimer",
} as const;
