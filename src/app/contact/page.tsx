import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Contact',
  description: 'How to contact LoanCalc Lab.',
  alternates: { canonical: `${SITE.url}/contact` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Contact'
      crumbs={[
        { label: "Home", href: "/" },
        { label: 'Contact' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
    >

      <p>
        For editorial corrections, privacy requests or general questions about LoanCalc Lab, email{" "}
        <a href="mailto:hello@loancalclab.com" className="underline">
          hello@loancalclab.com
        </a>
        . We cannot provide personalised lending advice or process loan applications.
      </p>
  
    </ArticleLayout>
  );
}
