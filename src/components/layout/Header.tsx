"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE, TRUST_STRIP } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-stone-200 bg-[var(--header-bg)] print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-slate-900">
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold text-white shadow-sm ring-1 ring-black/5"
            style={{ backgroundColor: SITE.accent }}
            aria-hidden
          >
            LC
          </span>
          <span className="flex flex-col leading-tight">
            <span>{SITE.name}</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-stone-500">
              Borrower tools
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="rounded-md border border-stone-300 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="primary-nav"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[61px] z-40 flex-col gap-1 border-b border-stone-200 bg-[var(--header-bg)] px-4 py-3 shadow-md md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:p-0 md:shadow-none`}
        >
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  active
                    ? "bg-amber-50 text-slate-900"
                    : "text-slate-600 hover:bg-stone-50 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-amber-100/80 bg-amber-50/50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2 text-xs text-slate-600 sm:px-6 sm:text-sm">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {TRUST_STRIP.signals.map((signal, i) => (
              <span key={signal} className="inline-flex items-center gap-x-2">
                {i > 0 && (
                  <span className="text-stone-300" aria-hidden>
                    ·
                  </span>
                )}
                <span>{signal}</span>
              </span>
            ))}
          </p>
          <span className="text-stone-300" aria-hidden>
            ·
          </span>
          <Link
            href={TRUST_STRIP.disclaimerHref}
            className="font-medium text-slate-700 underline decoration-stone-300 underline-offset-2 hover:text-slate-900 hover:decoration-stone-500"
          >
            {TRUST_STRIP.disclaimerLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
