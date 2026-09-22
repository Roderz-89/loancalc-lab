import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SnowballAvalancheCalculator } from "@/components/calculator/SnowballAvalancheCalculator";
import { SITE } from "@/content/site";
import { SNOWBALL_EXPLAINER } from "@/content/calculator-explainers";

export const metadata: Metadata = {
  title: 'Snowball vs avalanche payoff planner',
  description: 'Multi-debt payoff comparing snowball and avalanche strategies.',
  alternates: { canonical: `${SITE.url}/calculators/snowball-vs-avalanche` },
  openGraph: {
    title: `Snowball vs avalanche payoff planner | ${SITE.name}`,
    description: 'Multi-debt payoff comparing snowball and avalanche strategies.',
    url: `${SITE.url}/calculators/snowball-vs-avalanche`,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: 'Snowball vs avalanche payoff planner',
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: 'Multi-debt payoff comparing snowball and avalanche strategies.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Calculators", href: "/calculators" },
            { label: 'Snowball vs avalanche payoff planner' },
          ]}
        />
      </div>
      <SnowballAvalancheCalculator />
      <section className="mx-auto max-w-4xl space-y-4 px-4 pb-10 text-slate-700 leading-relaxed sm:px-6">
        {SNOWBALL_EXPLAINER}
      </section>
    </>
  );
}
