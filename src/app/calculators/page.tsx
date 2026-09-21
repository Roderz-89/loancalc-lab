import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { CALCULATORS } from "@/content/calculators";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "All calculators",
  description:
    "Seven personal loan and debt tools: EMI, amortisation, consolidation, snowball vs avalanche, refinance, APR true-cost and extra payment.",
  alternates: { canonical: `${SITE.url}/calculators` },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Calculators"
      description="Seven tools for personal loans and debt payoff — one-line purpose for each."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Calculators" },
      ]}
    >
      <ul className="space-y-3">
        {CALCULATORS.map((c) => (
          <li key={c.slug}>
            <Link
              href={c.href}
              className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
            >
              <h2 className="text-lg font-semibold text-slate-900">{c.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{c.purpose}</p>
            </Link>
          </li>
        ))}
      </ul>
    </ArticleLayout>
  );
}
