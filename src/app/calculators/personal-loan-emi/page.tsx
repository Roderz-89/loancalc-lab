import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PersonalLoanEmiCalculator } from "@/components/calculator/PersonalLoanEmiCalculator";
import { SITE } from "@/content/site";
import { EMI_EXPLAINER } from "@/content/calculator-explainers";

export const metadata: Metadata = {
  title: 'Personal loan / EMI payment calculator',
  description: 'Monthly EMI/payment, total interest and repayable with country modes.',
  alternates: { canonical: `${SITE.url}/calculators/personal-loan-emi` },
  openGraph: {
    title: `Personal loan / EMI payment calculator | ${SITE.name}`,
    description: 'Monthly EMI/payment, total interest and repayable with country modes.',
    url: `${SITE.url}/calculators/personal-loan-emi`,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: 'Personal loan / EMI payment calculator',
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: 'Monthly EMI/payment, total interest and repayable with country modes.',
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
            { label: 'Personal loan / EMI payment calculator' },
          ]}
        />
      </div>
      <PersonalLoanEmiCalculator />
      <section className="mx-auto max-w-4xl space-y-4 px-4 pb-10 text-slate-700 leading-relaxed sm:px-6">
        {EMI_EXPLAINER}
      </section>
    </>
  );
}
