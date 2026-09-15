import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RefinanceCalculator } from "@/components/calculator/RefinanceCalculator";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Refinance when it pays',
  description: 'Break-even months for refinancing a personal loan given fees.',
  alternates: { canonical: `${SITE.url}/calculators/refinance-break-even` },
  openGraph: {
    title: `Refinance when it pays | ${SITE.name}`,
    description: 'Break-even months for refinancing a personal loan given fees.',
    url: `${SITE.url}/calculators/refinance-break-even`,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: 'Refinance when it pays',
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: 'Break-even months for refinancing a personal loan given fees.',
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
            { label: 'Refinance when it pays' },
          ]}
        />
      </div>
      <RefinanceCalculator />
    </>
  );
}
