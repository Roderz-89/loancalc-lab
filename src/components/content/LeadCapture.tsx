"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/content/site";

/**
 * Minimal non-intrusive lead capture via mailto (no CRM).
 * Used on debt / consolidation paths.
 */
export function LeadCapture({
  context = "debt payoff",
}: {
  context?: string;
}) {
  const [email, setEmail] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) return;
    const subject = encodeURIComponent(`LoanCalc Lab — ${context} checklist`);
    const body = encodeURIComponent(
      `Please send the free ${context} checklist to:\n${trimmed}\n\n(I understand this is not credit advice.)`
    );
    window.location.href = `mailto:${SITE.contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <aside className="mt-8 rounded-xl border border-amber-200/80 bg-amber-50/60 p-5 print:hidden">
      <p className="text-sm font-semibold text-slate-900">
        Free {context} checklist by email
      </p>
      <p className="mt-1 text-sm text-slate-600">
        A short printable list of what to check before consolidating or changing payoff order.
        Opens your email app — we don’t store this on a server yet.
      </p>
      <form onSubmit={onSubmit} className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sr-only" htmlFor="lead-email">
          Email address
        </label>
        <input
          id="lead-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-200 sm:max-w-xs"
        />
        <button
          type="submit"
          className="rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
          style={{ backgroundColor: SITE.accent }}
        >
          Email me the checklist
        </button>
      </form>
      <p className="mt-2 text-xs text-slate-500">
        By using this form you open a message to {SITE.contactEmail}. See our{" "}
        <Link href="/privacy" className="underline hover:text-slate-700">
          privacy policy
        </Link>
        .
      </p>
    </aside>
  );
}
