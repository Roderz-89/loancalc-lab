import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "Cookie policy for LoanCalc Lab — necessary, analytics and advertising cookies.",
  alternates: { canonical: `${SITE.url}/cookie-policy` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Cookie policy"
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Cookie policy" },
      ]}
      published="2026-09-14"
      updated="2026-09-22"
      showAd={false}
    >
      <p>
        Cookies are small files stored on your device. LoanCalc Lab, published by {SITE.brand.name},
        uses the categories below.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Strictly necessary:</strong> hosting and Cloudflare may set cookies or similar
          storage for security, load balancing and abuse prevention. The site can break if you
          block all cookies.
        </li>
        <li>
          <strong>Analytics / performance:</strong> Cloudflare Insights may collect aggregated
          page-view data. We do not currently load Google Analytics.
        </li>
        <li>
          <strong>Advertising:</strong> Google AdSense and partners may set advertising cookies to
          serve and measure ads, including personalised ads where you allow them. Third-party
          vendors, including Google, use cookies to serve ads based on visits to this site or
          other sites.
        </li>
      </ul>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Consent and opt-out</h2>
      <p>
        For UK and EEA visitors, advertising-cookie consent is intended to run through Google’s
        Privacy &amp; messaging experience when that message is shown. We do not run a separate
        LoanCalc Lab banner. You can also:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Opt out of personalised Google ads at{" "}
          <a className="underline" href="https://adssettings.google.com" rel="noopener noreferrer">
            adssettings.google.com
          </a>
        </li>
        <li>Use browser settings to block or delete cookies</li>
        <li>
          See{" "}
          <a className="underline" href="https://www.aboutads.info" rel="noopener noreferrer">
            aboutads.info
          </a>{" "}
          for industry opt-out tools
        </li>
      </ul>
      <p>
        Blocking advertising cookies does not remove every ad; it usually means ads are less
        relevant. See the{" "}
        <a href="/privacy" className="underline">privacy policy</a>{" "}
        and{" "}
        <a href="/advertising-disclosure" className="underline">advertising disclosure</a>.
      </p>
    </ArticleLayout>
  );
}
