import Image from "next/image";
import Link from "next/link";
import { FOOTER_LEGAL, SITE } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-50 print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-semibold text-slate-900">{SITE.name}</p>
            <p className="mt-2 text-sm text-slate-600">{SITE.tagline}</p>
            <p className="mt-3 text-xs text-slate-500">
              Calculators are illustrative and not personalised financial advice.
            </p>
            <Link
              href="/brand"
              className="mt-4 inline-flex items-center gap-2.5 rounded-lg border border-stone-200 bg-white/80 px-2.5 py-2 text-left transition hover:border-stone-300 hover:bg-white"
            >
              <Image
                src={SITE.brand.logoSrc}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 rounded-sm object-contain"
              />
              <span className="text-xs leading-snug text-slate-600">
                <span className="font-medium text-slate-800">{SITE.brand.name}</span>
                <span className="block text-slate-500">
                  Part of {SITE.brand.name} — {SITE.brand.tagline}
                </span>
              </span>
            </Link>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Explore</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/calculators">
                  Calculators
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/guides">
                  Guides
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/glossary">
                  Glossary
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/brand">
                  Brand
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Legal & trust</p>
            <ul className="mt-2 grid grid-cols-1 gap-1 text-sm sm:grid-cols-2">
              {FOOTER_LEGAL.map((item) => (
                <li key={item.href}>
                  <Link className="text-slate-600 hover:text-slate-900" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-stone-200 pt-6 text-xs text-slate-500">
          © {year} {SITE.name}. Independent informational site — not a lender or credit broker.
          {" · "}
          Part of {SITE.brand.name} — {SITE.brand.tagline}.
        </p>
      </div>
    </footer>
  );
}
