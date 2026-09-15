import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Advertising disclosure',
  description: 'How advertising works on LoanCalc Lab.',
  alternates: { canonical: `${SITE.url}/advertising-disclosure` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Advertising disclosure'
      crumbs={[
        { label: "Home", href: "/" },
        { label: 'Advertising disclosure' },
      ]}
      published="2026-09-14"
      updated="2026-09-15"
    >

      <p>
        LoanCalc Lab may display Google AdSense or similar ads in future. Right now{" "}
        <strong>live ads are off</strong> (<code>adsenseEnabled: false</code>) and no ad
        placeholders are shown on the site.
      </p>
      <p>
        Ads will never be presented as organic calculator results or as a credit offer from
        LoanCalc Lab.
      </p>
  
    </ArticleLayout>
  );
}
