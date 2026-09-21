import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import {
  FEATURED_GUIDE_SLUGS,
  GUIDES,
  type GuideMeta,
} from "@/content/guides";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Guides — UK personal loans, EMI and debt payoff",
  description:
    "UK-first personal-loan guides from LoanCalc Lab: how EMI works, amortisation, snowball vs avalanche, refinance, fees and APR, consolidation, early settlement, and using calculators with a lender illustration.",
  alternates: { canonical: `${SITE.url}/guides` },
};

const CORE_SLUGS = new Set<string>(FEATURED_GUIDE_SLUGS);
const HELPER_SLUGS = new Set(["country-mode-help"]);

function bySlug(slug: string): GuideMeta | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

function GuideCard({ g }: { g: GuideMeta }) {
  return (
    <li>
      <Link
        href={g.href}
        className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
      >
        <h3 className="text-lg font-semibold text-slate-900">{g.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{g.description}</p>
      </Link>
    </li>
  );
}

export default function Page() {
  const core = FEATURED_GUIDE_SLUGS.map(bySlug).filter(Boolean) as GuideMeta[];
  const companions = GUIDES.filter(
    (g) => !CORE_SLUGS.has(g.slug) && !HELPER_SLUGS.has(g.slug),
  );
  const helpers = GUIDES.filter((g) => HELPER_SLUGS.has(g.slug));

  return (
    <ArticleLayout
      title="Guides"
      description="UK-first explainers for personal-loan EMI, amortisation, debt payoff and fee-aware true cost — tied to LoanCalc Lab’s calculators. Illustrative only; not a lender and not a credit offer."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides" },
      ]}
      published="2026-09-14"
      updated="2026-09-21"
    >
      <p>
        These guides use UK English and £ EXAMPLE figures by default. They explain personal-loan
        maths and payoff choices under stated assumptions. They are not personalised advice, not a
        credit offer, and not about mortgages or remortgage products.
      </p>

      <h2 className="pt-4 text-xl font-semibold text-slate-900">Core guides</h2>
      <ul className="mt-3 space-y-3">
        {core.map((g) => (
          <GuideCard key={g.slug} g={g} />
        ))}
      </ul>

      <h2 className="pt-6 text-xl font-semibold text-slate-900">Companion guides</h2>
      <ul className="mt-3 space-y-3">
        {companions.map((g) => (
          <GuideCard key={g.slug} g={g} />
        ))}
      </ul>

      <h2 className="pt-6 text-xl font-semibold text-slate-900">Calculator mode help</h2>
      <ul className="mt-3 space-y-3">
        {helpers.map((g) => (
          <GuideCard key={g.slug} g={g} />
        ))}
      </ul>
    </ArticleLayout>
  );
}
