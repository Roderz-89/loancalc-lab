import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Cookie policy',
  description: 'Cookie policy for LoanCalc Lab.',
  alternates: { canonical: `${SITE.url}/cookie-policy` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Cookie policy'
      crumbs={[
        { label: "Home", href: "/" },
        { label: 'Cookie policy' },
      ]}
      published="2026-09-14"
      updated="2026-09-15"
    >

      <p>
        LoanCalc Lab does not require cookies for calculators to work. If we enable analytics or
        Google AdSense later, those services may set cookies or similar technologies. AdSense is
        currently <strong>disabled</strong> (<code>adsenseEnabled: false</code>).
      </p>
      <p>
        When live advertising is turned on, we will update this policy and add an appropriate
        consent mechanism where required.
      </p>
  
    </ArticleLayout>
  );
}
