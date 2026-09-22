import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ExtraPaymentCalculator } from "@/components/calculator/ExtraPaymentCalculator";
import { SITE } from "@/content/site";
import { EXTRA_PAYMENT_EXPLAINER } from "@/content/calculator-explainers";

export const metadata: Metadata = {
  title: 'Extra payment / early payoff calculator',
  description: 'Model extra payments and interest saved on a personal loan.',
  alternates: { canonical: `${SITE.url}/calculators/extra-payment` },
  openGraph: {
    title: `Extra payment / early payoff calculator | ${SITE.name}`,
    description: 'Model extra payments and interest saved on a personal loan.',
    url: `${SITE.url}/calculators/extra-payment`,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: 'Extra payment / early payoff calculator',
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: 'Model extra payments and interest saved on a personal loan.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: 'Extra payment / early payoff calculator' }]} />
      </div>
      <ExtraPaymentCalculator />
      <section className="mx-auto max-w-4xl space-y-4 px-4 pb-10 text-slate-700 leading-relaxed sm:px-6">{EXTRA_PAYMENT_EXPLAINER}</section>
    </>
  );
}
