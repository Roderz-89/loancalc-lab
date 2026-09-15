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
        </p>
      </div>
    </footer>
  );
}
