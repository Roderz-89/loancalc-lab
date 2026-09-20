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
      updated="2026-09-20"
      showAd={false}
    >
      <p>
        LoanCalc Lab (published by Rodway Labs) displays third-party advertising via Google
        AdSense to help fund the site. Ads are labelled and placed sparingly (for example after
        calculator results or at the end of an article) so they do not interrupt primary tools or
        sit in the header/navigation. Ads may appear after Google AdSense approval.
      </p>
      <p>
        For visitors in the UK/EEA, consent for advertising cookies is managed through Google’s
        Privacy &amp; messaging (European regulations) experience — we do not show a separate
        LoanCalc Lab cookie banner. See our{" "}
        <a href="/cookie-policy" className="underline">
          cookie policy
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline">
          privacy policy
        </a>
        .
      </p>
      <p>
        We do not accept payment to change calculator formulae or to present ads as organic
        calculator results or as a credit offer from LoanCalc Lab. Ad content is served by Google
        and its partners; LoanCalc Lab does not control individual creatives.
      </p>
      <p className="text-sm text-slate-500">
        Affiliate links, if introduced later, will be covered separately in our{" "}
        <a href="/affiliate-disclosure" className="underline">
          affiliate disclosure
        </a>
        .
      </p>
    
</ArticleLayout>
  );
}
