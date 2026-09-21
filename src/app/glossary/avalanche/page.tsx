import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Debt avalanche',
  description: 'Payoff method that clears the highest interest rate first.',
  alternates: { canonical: `${SITE.url}/glossary/avalanche` },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Debt avalanche'
      description='Payoff method that clears the highest interest rate first.'
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Glossary", href: "/glossary" },
        { label: 'Debt avalanche' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
      related={[
          { href: "/calculators/snowball-vs-avalanche", label: "Snowball vs avalanche" },
          { href: "/guides/snowball-vs-avalanche", label: "Strategy guide" },
          {
            href: "/guides/snowball-vs-avalanche-with-fees",
            label: "Snowball vs avalanche with fees",
          },
      ]}
    >

      <p>
        Avalanche targets the highest rate first while maintaining minimums elsewhere. It usually
        minimises total interest compared with snowball, though balances may take longer to “feel”
        cleared.
      </p>

    </ArticleLayout>
  );
}
