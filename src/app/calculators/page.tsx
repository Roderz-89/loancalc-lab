import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { CALCULATORS } from "@/content/calculators";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "All calculators",
  description:
    "Personal loan EMI, amortisation, consolidation, snowball vs avalanche, refinance and APR true-cost calculators.",
  alternates: { canonical: `${SITE.url}/calculators` },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Calculators"
      description="EMI, amortisation, consolidation, snowball vs avalanche, refinance and APR true-cost — reducing-balance maths with disclosed assumptions."
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
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {c.decisionStage} · {c.priority}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">{c.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{c.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </ArticleLayout>
  );
}
