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
      updated="2026-09-14"
    >

      <p>
        LoanCalc Lab (“we”) respects your privacy. This notice explains what we process when you
        use loancalclab.com.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Data we process</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Calculator inputs:</strong> processed in your browser for Phase 1 tools; we do
          not require an account and do not intentionally store your loan figures on our servers.
        </li>
        <li>
          <strong>Contact emails:</strong> if you email us, we process your address and message to
          respond.
        </li>
        <li>
          <strong>Technical logs:</strong> standard hosting/CDN logs (IP, user agent) for security
          and reliability.
        </li>
        <li>
          <strong>Cookies / ads:</strong> when AdSense or analytics are enabled, those providers
          may set cookies — see our{" "}
          <a href="/cookie-policy" className="underline">cookie policy</a>. AdSense is
          feature-flagged off by default in this Phase 1 build.
        </li>
      </ul>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Your rights</h2>
      <p>
        Depending on your location you may have rights of access, rectification, erasure,
        restriction and objection. Contact{" "}
        <a href="mailto:hello@loancalclab.com" className="underline">hello@loancalclab.com</a>.
        UK users may complain to the ICO (ico.org.uk).
      </p>
  
    </ArticleLayout>
  );
}
