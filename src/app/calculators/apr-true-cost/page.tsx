import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AprTrueCostCalculator } from "@/components/calculator/AprTrueCostCalculator";
import { SITE } from "@/content/site";
import { APR_EXPLAINER } from "@/content/calculator-explainers";

export const metadata: Metadata = {
  title: 'APR / true cost of fees',
  description: 'See how fees raise effective cost vs headline rate.',
  alternates: { canonical: `${SITE.url}/calculators/apr-true-cost` },
  openGraph: {
    title: `APR / true cost of fees | ${SITE.name}`,
    description: 'See how fees raise effective cost vs headline rate.',
    url: `${SITE.url}/calculators/apr-true-cost`,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: 'APR / true cost of fees',
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: 'See how fees raise effective cost vs headline rate.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: 'APR / true cost of fees' }]} />
      </div>
      <AprTrueCostCalculator />
      <section className="mx-auto max-w-4xl space-y-4 px-4 pb-10 text-slate-700 leading-relaxed sm:px-6">{APR_EXPLAINER}</section>
    </>
  );
}
