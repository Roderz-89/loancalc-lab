import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'APR (Annual Percentage Rate)',
  description: 'A yearly cost-of-credit measure; fees can push effective cost above the headline rate.',
  alternates: { canonical: `${SITE.url}/glossary/apr` },
};

export default function Page() {
  return (
    <ArticleLayout
      title='APR (Annual Percentage Rate)'
      description='A yearly cost-of-credit measure; fees can push effective cost above the headline rate.'
      crumbs={[{ label: "Home", href: "/" }, { label: "Glossary", href: "/glossary" }, { label: 'APR (Annual Percentage Rate)' }]}
      published="2026-09-14"
      updated="2026-09-14"
      showAd={false}
      related={[{ href: "/calculators/apr-true-cost", label: "APR true cost" }, { href: "/guides/fees-apr-true-cost", label: "Fees & APR guide" }, { href: "/guides/representative-apr", label: "Representative APR explained" }]}
    >
      <p>
        APR aims to express the yearly cost of borrowing in a comparable way. Headline interest
        rates may exclude fees. Our true-cost calculator shows an illustrative effective rate when
        an upfront fee reduces cash received.
      </p>
      <p>
        Regulated APR / comparison-rate figures follow local rules and may differ from this
        illustration. Always rely on the lender’s disclosure.
      </p>
    </ArticleLayout>
  );
}
