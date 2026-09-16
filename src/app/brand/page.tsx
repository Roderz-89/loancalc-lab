import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Brand — Rodway Labs",
  description:
    "LoanCalc Lab is part of Rodway Labs — tools to help you calculate life.",
  alternates: { canonical: `${SITE.url}/brand` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Rodway Labs"
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Brand" },
      ]}
      published="2026-09-16"
      updated="2026-09-16"
    >
      <div className="flex items-center gap-4 not-prose">
        <Image
          src={SITE.brand.logoSrc}
          alt="Rodway Labs"
          width={64}
          height={64}
          className="h-16 w-16 rounded-md object-contain"
        />
        <div>
          <p className="text-lg font-semibold text-slate-900">{SITE.brand.name}</p>
          <p className="text-sm text-slate-600">{SITE.brand.tagline}</p>
        </div>
      </div>
      <p>
        <strong>{SITE.name}</strong> is a product under the {SITE.brand.name} umbrella —{" "}
        {SITE.brand.tagline}. The site name stays LoanCalc Lab; {SITE.brand.name} is the quiet
        brand line behind borrower-facing calculators like this one.
      </p>
      <p>
        We keep branding light on purpose: clear tools first, a short umbrella credit in the
        footer, and this page if you want the fuller picture.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 pt-2">On this site</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <Link href="/" className="underline">
            LoanCalc Lab home
          </Link>
        </li>
        <li>
          <Link href="/calculators" className="underline">
            Calculators
          </Link>
        </li>
        <li>
          <Link href="/about" className="underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="underline">
            Contact
          </Link>
        </li>
      </ul>
    </ArticleLayout>
  );
}
