import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Debt consolidation',
  description: 'Replacing multiple debts with a single loan.',
  alternates: { canonical: `${SITE.url}/glossary/consolidation` },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Debt consolidation'
      description='Replacing multiple debts with a single loan.'
      crumbs={[{ label: "Home", href: "/" }, { label: "Glossary", href: "/glossary" }, { label: 'Debt consolidation' }]}
      published="2026-09-14"
      updated="2026-09-14"
      showAd={false}
      related={[{ href: "/calculators/consolidation-break-even", label: "Consolidation break-even" }, { href: "/guides/consolidation-break-even", label: "Consolidation break-even guide" }]}
    >
      <p>
        Consolidation rolls several balances into one loan. It can simplify payments and sometimes
        lower the rate — but fees and a longer term can increase total cost. Use the consolidation
        break-even calculator before you apply.
      </p>
    </ArticleLayout>
  );
}
