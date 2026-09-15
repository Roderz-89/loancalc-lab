import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { RelatedLinks } from "@/components/content/RelatedLinks";

export function ArticleLayout({
  title,
  description,
  crumbs,
  published,
  updated,
  children,
  related,
}: {
  title: string;
  description?: string;
  crumbs: Crumb[];
  published?: string;
  updated?: string;
  children: ReactNode;
  related?: { href: string; label: string }[];
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={crumbs} />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
      {description && <p className="mt-3 text-lg text-slate-600">{description}</p>}
      {(published || updated) && (
        <p className="mt-2 text-xs text-slate-500">
          {published && (
            <>
              Published{" "}
              <time dateTime={published}>
                {new Date(published).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </>
          )}
          {updated && updated !== published && (
            <>
              {" · "}Updated{" "}
              <time dateTime={updated}>
                {new Date(updated).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </>
          )}
        </p>
      )}
      <div className="prose-custom mt-8 space-y-4 text-slate-700 leading-relaxed">{children}</div>
      {related && <RelatedLinks links={related} />}
      <p className="mt-8 text-sm text-slate-500">
        Calculators and articles on LoanCalc Lab are illustrative and not personalised
        financial advice or a credit offer. Always check the lender’s disclosure for your
        country before you borrow.
      </p>
    </article>
  );
}
