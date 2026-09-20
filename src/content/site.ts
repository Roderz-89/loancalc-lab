export const SITE = {
  name: "LoanCalc Lab",
  domain: "loancalclab.net",
  tagline: "See your payment, compare consolidation, pay debt faster",
  description:
    "Free personal loan and debt calculators — EMI and monthly payments, consolidation break-even, snowball vs avalanche, fees and true cost — for UK, US, India and more. Clear maths, stated assumptions.",
  locale: "en-GB",
  accent: "#c8102e",
  /** Secondary accent for light visual differentiation from Remortgage Lab */
  accentSecondary: "#b45309",
  /** Production canonical URL (Cloudflare Pages + custom domain) */
  url: "https://loancalclab.net",
  /** Anonymous editorial byline — no personal name on site-facing content */
  editorial: "LoanCalc Lab editorial",
  /** Shared editorial “last checked” date */
  contentAsOf: "2026-09-15",
  /** Show labelled mock AdSense placements (off — site should not feel unfinished) */
  adsensePreview: false,
  /** Wire real AdSense only after go-live, approval, and consent */
  adsenseEnabled: false,
  contactEmail: "hello@loancalclab.net",
  /** Brand umbrella (finance tools; Eng Hub stays separate) */
  brand: {
    name: "Rodway Labs",
    tagline: "tools to help you calculate life",
    logoSrc: "/brand/rodway-labs-logo.png",
  },
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
  heroSignals: ["Not a lender", "Not credit advice", "Illustrative only"] as const,
  jurisdictionNote:
    "Calculators support UK / US / India–SEA / AU / CA modes — always check local lender terms.",
  disclaimerHref: "/calculator-disclaimer",
  disclaimerLabel: "Calculator disclaimer",
} as const;

/** Format an ISO date (YYYY-MM-DD) for en-GB display */
export function formatContentDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
