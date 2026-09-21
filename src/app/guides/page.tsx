import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { GUIDES } from "@/content/guides";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Guides",
  description: "EMI, amortisation, how to read a schedule, snowball vs avalanche, refinance, early settlement, overpaying vs saving, fee true-cost, arrangement-fee APR, representative APR, consolidation break-even, snowball vs avalanche with fees, and using calculators with a lender illustration guides.",
  alternates: { canonical: `${SITE.url}/guides` },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Guides"
      description="Short, practical explainers tied to the calculators — fewer pages, clearer writing."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides" },
      ]}
    >
      <ul className="space-y-3">
        {GUIDES.map((g) => (
          <li key={g.slug}>
            <Link
              href={g.href}
              className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
            >
              <h2 className="text-lg font-semibold text-slate-900">{g.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{g.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </ArticleLayout>
  );
}
