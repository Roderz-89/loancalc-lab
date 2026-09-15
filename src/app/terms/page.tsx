import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Terms of use',
  description: 'Terms of use for LoanCalc Lab.',
  alternates: { canonical: `${SITE.url}/terms` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Terms of use'
      crumbs={[
        { label: "Home", href: "/" },
        { label: 'Terms of use' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
    >

      <p>
        By using LoanCalc Lab you agree that content and calculators are provided for general
        information only, without warranty. We are not liable for decisions you make based on the
        tools. Local consumer and credit laws still apply to any lender you deal with.
      </p>
      <p>
        Do not use the site for unlawful purposes. We may update these terms; the date on this
        page will change when we do.
      </p>
  
    </ArticleLayout>
  );
}
