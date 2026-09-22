import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsolidationCalculator } from "@/components/calculator/ConsolidationCalculator";
import { SITE } from "@/content/site";
import { CONSOLIDATION_EXPLAINER } from "@/content/calculator-explainers";

export const metadata: Metadata = {
  title: 'Debt consolidation break-even calculator',
  description: 'Compare keeping multiple debts vs one consolidation loan.',
  alternates: { canonical: `${SITE.url}/calculators/consolidation-break-even` },
  openGraph: {
    title: `Debt consolidation break-even calculator | ${SITE.name}`,
    description: 'Compare keeping multiple debts vs one consolidation loan.',
    url: `${SITE.url}/calculators/consolidation-break-even`,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: 'Debt consolidation break-even calculator',
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: 'Compare keeping multiple debts vs one consolidation loan.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: 'Debt consolidation break-even calculator' }]} />
      </div>
      <ConsolidationCalculator />
      <section className="mx-auto max-w-4xl space-y-4 px-4 pb-10 text-slate-700 leading-relaxed sm:px-6">{CONSOLIDATION_EXPLAINER}</section>
    </>
  );
}
