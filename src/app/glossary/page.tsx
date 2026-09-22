import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { GLOSSARY } from "@/content/glossary";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Glossary",
  description: "EMI, APR, amortisation, snowball, avalanche and consolidation — plain-language definitions.",
  alternates: { canonical: `${SITE.url}/glossary` },
};

export default function Page() {
  return (
    <ArticleLayout
      showAd={false}
      title="Glossary"
      description="Core borrowing terms used across LoanCalc Lab."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Glossary" },
      ]}
    >
      <dl className="space-y-4">
        {GLOSSARY.map((g) => (
          <div key={g.slug} className="rounded-xl border border-slate-200 p-4">
            <dt>
              <Link href={g.href} className="text-lg font-semibold text-slate-900 hover:underline">
                {g.term}
              </Link>
            </dt>
            <dd className="mt-2 text-sm text-slate-600">{g.shortDefinition}</dd>
          </div>
        ))}
      </dl>
    </ArticleLayout>
  );
}
