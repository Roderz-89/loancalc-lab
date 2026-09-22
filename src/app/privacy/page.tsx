import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy for LoanCalc Lab — data, cookies, advertising and your rights.",
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Privacy policy"
      crumbs={[{ label: "Home", href: "/" }, { label: "Privacy policy" }]}
      published="2026-09-14"
      updated="2026-09-22"
      showAd={false}
    >
      <p>
        This notice is for LoanCalc Lab at {SITE.domain}, published by {SITE.brand.name} (“we”).
        {SITE.brand.name} is the organisation responsible for this site. Contact{" "}
        <a href={`mailto:${SITE.contactEmail}`} className="underline">{SITE.contactEmail}</a>.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">What we process</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li><strong>Calculator inputs:</strong> processed in your browser. We do not send loan figures to our application server as part of the calculation.</li>
        <li><strong>Contact emails:</strong> processed to reply. No newsletter signup.</li>
        <li><strong>Hosting and security logs:</strong> Cloudflare and the host may process IP address, user agent, timestamps and URLs. Cloudflare Insights may record aggregated page views.</li>
        <li><strong>Advertising:</strong> third-party vendors, including Google, use cookies and similar technologies to serve ads based on your prior visits to this site or other sites.</li>
      </ul>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Legal bases (UK GDPR)</h2>
      <p>
        We rely on legitimate interests to operate and secure the site, and on consent for
        non-essential advertising cookies where UK/EEA rules require it.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Advertising and cookies</h2>
      <p>
        Google AdSense may show ads. You can opt out of personalised Google ads at{" "}
        <a className="underline" href="https://adssettings.google.com" rel="noopener noreferrer">adssettings.google.com</a>.
        See also{" "}
        <a className="underline" href="https://www.google.com/policies/privacy/partners/" rel="noopener noreferrer">How Google uses information from sites that use our services</a>
        and <a className="underline" href="https://www.aboutads.info" rel="noopener noreferrer">aboutads.info</a>.
      </p>
      <p>
        For UK and EEA visitors, advertising-cookie consent is intended to run through Google’s
        Privacy & messaging tools when those tools are active. We do not currently run a separate first-party cookie banner.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Your rights</h2>
      <p>
        Under UK GDPR you may have rights of access, rectification, erasure, restriction and
        objection, and a right to complain to the ICO (ico.org.uk). Email {SITE.contactEmail}.
      </p>
    </ArticleLayout>
  );
}
