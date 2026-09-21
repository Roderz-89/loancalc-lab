import type { CountryCode } from "@/content/countries";

/**
 * EXAMPLE Loan A — shared illustrative defaults for EMI → amortisation → extra payment.
 * Labelled EXAMPLE so it is never mistaken for a live quote.
 */
export const EXAMPLE_LOAN_A: {
  country: CountryCode;
  loanAmount: number;
  annualRate: number;
  termMonths: number;
  upfrontFee: number;
} = {
  country: "UK",
  loanAmount: 8500,
  /** EXAMPLE rate — not a live quote */
  annualRate: 24.9,
  termMonths: 48,
  upfrontFee: 0,
};

export const EXAMPLE_LOAN_A_NOTE =
  "EXAMPLE Loan A defaults (£8,500 · 24.9% EXAMPLE rate · 48 months · £0 fee) — illustrative only, not a live quote.";
