import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: 'Snowball vs avalanche — which payoff method?',
  description: 'Behavioural vs mathematical approaches to clearing multiple debts, with when each wins.',
  alternates: { canonical: `${SITE.url}/guides/snowball-vs-avalanche` },
};

export default function Page() {
  return (
    <ArticleLayout
      title='Snowball vs avalanche — which payoff method?'
      description='Behavioural vs mathematical approaches to clearing multiple debts, with when each wins.'
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: 'Snowball vs avalanche — which payoff method?' },
      ]}
      published="2026-09-14"
      updated="2026-09-14"
      related={[
          { href: "/calculators/snowball-vs-avalanche", label: "Snowball vs avalanche calculator" },
          { href: "/calculators/consolidation-break-even", label: "Consolidation break-even" },
          { href: "/glossary/snowball", label: "Snowball" },
          { href: "/glossary/avalanche", label: "Avalanche" }
      ]}
    >

      <p>
        When you have several debts, two popular strategies decide where extra money goes after
        minimum payments:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Snowball</strong> — clear the smallest balance first. Wins on motivation: you
          see accounts close sooner.
        </li>
        <li>
          <strong>Avalanche</strong> — clear the highest interest rate first. Usually wins on
          total interest paid.
        </li>
      </ul>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">Which should you pick?</h2>
      <p>
        If the interest gap between debts is large, avalanche often saves meaningful money. If the
        rates are similar, snowball’s psychological wins may matter more. Run both strategies with
        your balances, rates and extra payment — then choose the plan you will stick to.
      </p>
      <p>
        Consolidation is a third path: one new loan instead of several. It can help if the new
        rate is genuinely lower after fees — use the consolidation break-even tool before you
        apply.
      </p>
  
    </ArticleLayout>
  );
}
