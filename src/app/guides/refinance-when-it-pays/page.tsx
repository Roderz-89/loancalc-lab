import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Refinance a personal loan when it pays',
  description: 'Break-even thinking for refinancing: fees, remaining term, and when a lower rate is not enough.',
  alternates: { canonical: `${SITE.url}/guides/refinance-when-it-pays` },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Refinance a personal loan when it pays'
      description='Break-even thinking for refinancing: fees, remaining term, and when a lower rate is not enough.'
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: 'Refinance a personal loan when it pays' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
      related={[
          { href: "/calculators/refinance-break-even", label: "Refinance break-even calculator" },
          { href: "/calculators/apr-true-cost", label: "APR true cost" }
      ]}
    >

      <p>
        Refinancing replaces an existing personal loan with a new one — ideally at a lower rate.
        The headline rate cut is not enough on its own: fees, a longer term, and any early
        repayment charge on the old loan can erase the benefit.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Break-even months</h2>
      <p>
        If the new monthly payment is lower, a simple fee break-even is: fees ÷ monthly saving.
        If you will keep the loan longer than that, the refinance may pay on cashflow. Still check
        <em>lifetime</em> interest: stretching the term can raise total cost even when the monthly
        figure falls.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Practical checklist</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Include arrangement fees and any early repayment charge in “fees”</li>
        <li>Compare remaining interest on the current loan with interest + fees on the new one</li>
        <li>Watch credit checks and eligibility — calculators do not approve credit</li>
      </ul>
  
    </ArticleLayout>
  );
}
