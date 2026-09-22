import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Editorial policy",
  description: "How LoanCalc Lab creates and updates calculators and guides.",
  alternates: { canonical: `${SITE.url}/editorial-policy` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Editorial policy"
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Editorial policy" },
      ]}
      published="2026-09-14"
      updated="2026-09-22"
      showAd={false}
    >
      <p>
        LoanCalc Lab publishes a small set of personal-loan and debt-payoff tools plus guides that
        explain the same maths. We prefer fewer pages with worked EXAMPLE figures over a large
        volume of thin posts.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Sources</h2>
      <p>
        Where a page states a UK product norm or a consumer-credit concept, we link a primary
        reference such as MoneyHelper or FCA material. Calculator outputs are illustrations from
        disclosed formulae — not copies of a named lender’s schedule.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Review</h2>
      <p>
        Core tools and rate-assumption notes are reviewed when rules change or at least annually.
        Pages show a published date and an updated / last-checked date. Content as of{" "}
        {SITE.contentAsOf}.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Corrections</h2>
      <p>
        Email {SITE.contactEmail} with the URL and what is wrong. Material errors are corrected
        promptly; the page date is updated when the substance changes.
      </p>
      <p>
        We do not accept payment to alter calculator outputs. Advertising is disclosed separately
        and does not change the maths.
      </p>
    </ArticleLayout>
  );
}
