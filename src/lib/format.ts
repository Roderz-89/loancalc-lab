import type { CountryCode } from "@/content/countries";
import { getCountry } from "@/content/countries";

export function formatMoney(
  value: number,
  country: CountryCode = "UK",
  opts?: { maximumFractionDigits?: number; minimumFractionDigits?: number }
): string {
  if (!Number.isFinite(value)) return "—";
  const c = getCountry(country);
  return new Intl.NumberFormat(c.locale, {
    style: "currency",
    currency: c.currency,
    maximumFractionDigits: opts?.maximumFractionDigits ?? 0,
    minimumFractionDigits: opts?.minimumFractionDigits,
  }).format(value);
}

export function formatMoneyPrecise(value: number, country: CountryCode = "UK"): string {
  return formatMoney(value, country, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
}

export function formatPercent(value: number, digits = 2): string {
  if (!Number.isFinite(value)) return "—";
  return `${value.toFixed(digits)}%`;
}

export function formatNumber(value: number, digits = 0, locale = "en-GB"): string {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
}

export function formatMonthsAsYearsMonths(months: number): string {
  if (!Number.isFinite(months) || months < 0) return "—";
  const m = Math.round(months);
  const years = Math.floor(m / 12);
  const rem = m % 12;
  if (years === 0) return `${rem} month${rem === 1 ? "" : "s"}`;
  if (rem === 0) return `${years} year${years === 1 ? "" : "s"}`;
  return `${years} year${years === 1 ? "" : "s"} ${rem} month${rem === 1 ? "" : "s"}`;
}
