import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Fees & APR — the true cost of credit',
  description: 'How arrangement fees, processing charges and similar costs raise the effective rate you pay.',
  alternates: { canonical: `${SITE.url}/guides/fees-apr-true-cost` },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Fees & APR — the true cost of credit'
      description='How arrangement fees, processing charges and similar costs raise the effective rate you pay.'
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: 'Fees & APR — the true cost of credit' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
      related={[
          { href: "/calculators/apr-true-cost", label: "APR true cost calculator" },
          { href: "/glossary/apr", label: "APR glossary" },
          { href: "/calculators/personal-loan-emi", label: "EMI calculator" }
      ]}
    >

      <p>
        Two loans with the same headline rate can cost different amounts if one charges an
        arrangement or processing fee. You may receive less cash than the face principal while
        still repaying interest on the full amount — which raises the <em>effective</em> yearly
        cost.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">What our calculator shows</h2>
      <p>
        The APR true-cost tool treats an upfront fee as reducing cash received, then finds an
        illustrative effective APR that matches the payment stream. It is <strong>not</strong> a
        substitute for a regulated APR, UK representative APR, or Australian comparison rate —
        those follow local rules. Always read the lender’s disclosure.
      </p>
  
    </ArticleLayout>
  );
}
