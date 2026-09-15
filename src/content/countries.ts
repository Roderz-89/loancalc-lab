/** Central country / region modes for currency, locale and payment labels. */

export type CountryCode = "US" | "IN" | "AU" | "CA" | "UK";

export interface CountryConfig {
  code: CountryCode;
  label: string;
  currency: string;
  currencySymbol: string;
  locale: string;
  /** Primary payment label shown in calculators */
  paymentLabel: string;
  /** Short note on interest convention used in our maths */
  conventionNote: string;
}

export const COUNTRIES: CountryConfig[] = [
  {
    code: "US",
    label: "United States",
    currency: "USD",
    currencySymbol: "$",
    locale: "en-US",
    paymentLabel: "Monthly payment",
    conventionNote:
      "Reducing-balance amortising loan; monthly compounding (nominal APR ÷ 12). Fees modelled separately.",
  },
  {
    code: "IN",
    label: "India / SEA",
    currency: "INR",
    currencySymbol: "₹",
    locale: "en-IN",
    paymentLabel: "EMI",
    conventionNote:
      "Standard reducing-balance EMI: P × r(1+r)ⁿ / ((1+r)ⁿ − 1) with r = annual rate ÷ 12 ÷ 100. Flat-rate loans are out of scope.",
  },
  {
    code: "AU",
    label: "Australia",
    currency: "AUD",
    currencySymbol: "A$",
    locale: "en-AU",
    paymentLabel: "Monthly repayment",
    conventionNote:
      "Reducing-balance personal loan; monthly rate = comparison/interest rate ÷ 12. Comparison rate rules differ by lender — illustrative only.",
  },
  {
    code: "CA",
    label: "Canada",
    currency: "CAD",
    currencySymbol: "C$",
    locale: "en-CA",
    paymentLabel: "Monthly payment",
    conventionNote:
      "Reducing-balance amortising loan with monthly compounding for illustration. Some Canadian products use semi-annual compounding — check the disclosure.",
  },
  {
    code: "UK",
    label: "United Kingdom",
    currency: "GBP",
    currencySymbol: "£",
    locale: "en-GB",
    paymentLabel: "Monthly repayment",
    conventionNote:
      "Capital-and-interest reducing balance; monthly rate = APR ÷ 12. Representative APR on UK credit ads may include fees — we model fees separately unless stated.",
  },
];

export function getCountry(code: CountryCode): CountryConfig {
  return COUNTRIES.find((c) => c.code === code) ?? COUNTRIES[4];
}

export const COUNTRY_OPTIONS = COUNTRIES.map((c) => ({
  value: c.code,
  label: c.label,
}));
