import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Debt snowball',
  description: 'Payoff method that clears the smallest balance first.',
  alternates: { canonical: `${SITE.url}/glossary/snowball` },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Debt snowball'
      description='Payoff method that clears the smallest balance first.'
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Glossary", href: "/glossary" },
        { label: 'Debt snowball' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
      related={[
          { href: "/calculators/snowball-vs-avalanche", label: "Snowball vs avalanche" },
          { href: "/guides/snowball-vs-avalanche", label: "Strategy guide" }
      ]}
    >

      <p>
        With the snowball method you make minimum payments on all debts and put every extra pound
        (or dollar/rupee) toward the smallest balance. When that debt clears, its minimum joins the
        attack on the next-smallest balance.
      </p>

    </ArticleLayout>
  );
}
