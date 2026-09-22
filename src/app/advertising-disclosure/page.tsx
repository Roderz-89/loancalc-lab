import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Advertising disclosure",
  description: "How advertising works on LoanCalc Lab.",
  alternates: { canonical: `${SITE.url}/advertising-disclosure` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Advertising disclosure"
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Advertising disclosure" },
      ]}
      published="2026-09-14"
      updated="2026-09-22"
      showAd={false}
    >
      <p>
        LoanCalc Lab is published by {SITE.brand.name}. Third-party advertising via Google AdSense
        may appear on some pages to fund the site. Ads are labelled and placed after calculator
        explainers or at the end of articles — not in the header or navigation, and not on thin
        glossary stubs or legal pages.
      </p>
      <p>
        Ads are served by Google and its partners. LoanCalc Lab does not control individual
        creatives and does not accept payment to change calculator formulae or to present an ad as
        a credit offer from this site.
      </p>
      <p>
        For UK and EEA visitors, consent for advertising cookies is intended to be handled by
        Google’s Privacy &amp; messaging tools when those tools are active. You can opt out of
        personalised Google ads at{" "}
        <a className="underline" href="https://adssettings.google.com" rel="noopener noreferrer">
          adssettings.google.com
        </a>
        . See the{" "}
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
        Affiliate links are not used on this site today. If they are added later, they will be
        covered in the{" "}
        <a href="/affiliate-disclosure" className="underline">
          affiliate disclosure
        </a>
        .
      </p>
    </ArticleLayout>
  );
}
