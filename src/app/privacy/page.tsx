import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'Privacy policy for LoanCalc Lab — data, cookies and your rights.',
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Privacy policy'
      crumbs={[
        { label: "Home", href: "/" },
        { label: 'Privacy policy' },
      ]}
      published="2026-09-14"
      updated="2026-09-20"
      showAd={false}
    >

      <p>
        LoanCalc Lab (“we”) respects your privacy. This notice explains what we process when you
        use this site ({SITE.domain}).
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Data we process</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Calculator inputs:</strong> processed in your browser; we do not require an
          account and do not intentionally store your loan figures on our servers.
        </li>
        <li>
          <strong>Contact emails:</strong> if you email us via the contact address, we process
          your address and message to respond. We do not run a newsletter or mailing list signup
          on this site.
        </li>
        <li>
          <strong>Technical logs:</strong> standard hosting/CDN logs (IP, user agent) for security
          and reliability.
        </li>
                <li>
          <strong>Cookies / ads:</strong> Google AdSense may show ads (after Google approval).
          Consent for advertising cookies in the UK/EEA is handled by Google’s Privacy &amp;
          messaging (European regulations) prompt. Google and partners may set advertising
          cookies according to your choices there. See our{" "}
          <a href="/cookie-policy" className="underline">
            cookie policy
          </a>{" "}
          and{" "}
          <a href="/advertising-disclosure" className="underline">
            advertising disclosure
          </a>
          .
        </li>
      </ul>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Your rights</h2>
      <p>
        Depending on your location you may have rights of access, rectification, erasure,
        restriction and objection. Contact{" "}
        <a href={`mailto:${SITE.contactEmail}`} className="underline">{SITE.contactEmail}</a>.
        UK users may complain to the ICO (ico.org.uk).
      </p>
  
    </ArticleLayout>
  );
}
