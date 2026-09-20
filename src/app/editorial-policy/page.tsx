import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Editorial policy',
  description: 'How LoanCalc Lab creates and updates calculators and guides.',
  alternates: { canonical: `${SITE.url}/editorial-policy` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Editorial policy'
      crumbs={[
        { label: "Home", href: "/" },
        { label: 'Editorial policy' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
      showAd={false}
    >

      <p>
        We prioritise clear assumptions, working maths and fewer high-quality pages over thin
        content. Calculator formulas are documented on each tool. Guides show published and updated
        dates. Corrections: email{" "}{SITE.contactEmail}.
      </p>
      <p>
        We do not accept payment to alter calculator outputs. Advertising and affiliates, if any,
        will be disclosed separately and will not change the maths.
      </p>
  
    </ArticleLayout>
  );
}
