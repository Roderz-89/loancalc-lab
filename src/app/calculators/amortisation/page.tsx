import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AmortisationCalculator } from "@/components/calculator/AmortisationCalculator";
import { SITE } from "@/content/site";
import { AMORTISATION_EXPLAINER } from "@/content/calculator-explainers";

export const metadata: Metadata = {
  title: 'Amortisation schedule calculator',
  description: 'Month-by-month principal and interest schedule for a personal loan.',
  alternates: { canonical: `${SITE.url}/calculators/amortisation` },
  openGraph: {
    title: `Amortisation schedule calculator | ${SITE.name}`,
    description: 'Month-by-month principal and interest schedule for a personal loan.',
    url: `${SITE.url}/calculators/amortisation`,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: 'Amortisation schedule calculator',
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: 'Month-by-month principal and interest schedule for a personal loan.',
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
            { label: 'Amortisation schedule calculator' },
          ]}
        />
      </div>
      <AmortisationCalculator />
      <section className="mx-auto max-w-4xl space-y-4 px-4 pb-10 text-slate-700 leading-relaxed sm:px-6">
        {AMORTISATION_EXPLAINER}
      </section>
    </>
  );
}
