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
      updated="2026-09-20"
      showAd={false}
    >
      <p>
        Cookies are small files stored on your device. LoanCalc Lab (Rodway Labs) uses
        categories as follows:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Strictly necessary:</strong> may be used by hosting for security and load
          balancing.
        </li>
        <li>
          <strong>Analytics:</strong> not enabled by default.
        </li>
        <li>
          <strong>Advertising:</strong> we use Google AdSense. Consent for advertising cookies
          in the UK/EEA is handled by Google’s Privacy &amp; messaging (European regulations)
          prompt, not a separate LoanCalc Lab banner. Ads and related cookies from Google and
          partners may appear after Google approval and according to your choices in that
          message.
        </li>
      </ul>
      <p>
        You can control cookies via browser settings or via Google’s consent tools where shown.
        Blocking some cookies may affect site functionality. See our{" "}
        <a href="/privacy" className="underline">
          privacy policy
        </a>{" "}
        and{" "}
        <a href="/advertising-disclosure" className="underline">
          advertising disclosure
        </a>
        .
      </p>
    
</ArticleLayout>
  );
}
