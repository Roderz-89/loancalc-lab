"use client";

import { useEffect, useRef } from "react";
import { SITE } from "@/content/site";

type AdFormat = "leaderboard" | "in-article" | "rectangle" | "mobile-banner";

type AdSenseSlotKey = keyof typeof SITE.adsenseSlots;

const FORMAT_STYLES: Record<
  AdFormat,
  { minHeight: string; maxWidth: string; label: string }
> = {
  leaderboard: {
    minHeight: "min-h-[90px]",
    maxWidth: "max-w-[728px]",
    label: "Leaderboard · 728×90",
  },
  "in-article": {
    minHeight: "min-h-[250px]",
    maxWidth: "max-w-[336px]",
    label: "In-article · 300×250",
  },
  rectangle: {
    minHeight: "min-h-[250px]",
    maxWidth: "max-w-[300px]",
    label: "Rectangle · 300×250",
  },
  "mobile-banner": {
    minHeight: "min-h-[50px]",
    maxWidth: "max-w-[320px]",
    label: "Mobile banner · 320×50",
  },
};

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

function resolveAdSlotId(slot: string, adSlotId?: string): string | undefined {
  if (adSlotId) return adSlotId;
  if (slot in SITE.adsenseSlots) {
    return SITE.adsenseSlots[slot as AdSenseSlotKey];
  }
  return undefined;
}

/**
 * AdSense slot.
 * - adsensePreview: labelled mock units (local UX only)
 * - adsenseEnabled: real <ins class="adsbygoogle"> with mapped numeric data-ad-slot
 * Returns null when both flags are false.
 */
export function AdSlot({
  slot = "default",
  format = "leaderboard",
  className = "",
  adSlotId,
}: {
  slot?: string;
  format?: AdFormat;
  className?: string;
  /** Optional AdSense unit ID override; otherwise looked up from SITE.adsenseSlots */
  adSlotId?: string;
}) {
  const pushed = useRef(false);
  const styles = FORMAT_STYLES[format];
  const resolvedSlotId = resolveAdSlotId(slot, adSlotId);

  useEffect(() => {
    if (!SITE.adsenseEnabled || SITE.adsensePreview) return;
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* AdSense may throw if script not ready; Auto ads still work via loader */
    }
  }, []);

  if (!SITE.adsensePreview && !SITE.adsenseEnabled) {
    return null;
  }

  const isLive = SITE.adsenseEnabled && !SITE.adsensePreview;

  if (isLive) {
    return (
      <aside
        className={`my-6 flex justify-center overflow-hidden print:hidden ${className}`}
        data-ad-placement={slot}
        data-ad-format={format}
        aria-label="Advertisement"
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block", minHeight: 90, width: "100%" }}
          data-ad-client={SITE.adsenseClient}
          {...(resolvedSlotId ? { "data-ad-slot": resolvedSlotId } : {})}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </aside>
    );
  }

  /* Preview / mock only when adsensePreview is true */
  return (
    <aside
      className={`my-6 flex justify-center overflow-hidden print:hidden ${className}`}
      data-ad-placement={slot}
      data-ad-format={format}
      data-adsense-preview="true"
      aria-label="Advertisement preview"
    >
      <div
        className={`pointer-events-none w-full ${styles.maxWidth} ${styles.minHeight} flex flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-[repeating-linear-gradient(135deg,#f8fafc,#f8fafc_8px,#f1f5f9_8px,#f1f5f9_16px)] px-3 py-4 text-center select-none`}
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
          Advertisement
        </p>
        <p className="mt-1 text-xs font-medium text-slate-700">
          AdSense placement preview
        </p>
        <p className="mt-1 text-[11px] text-slate-500">
          {styles.label} · slot: {slot}
          {resolvedSlotId ? ` · ${resolvedSlotId}` : ""}
        </p>
        <p className="mt-2 max-w-xs text-[10px] leading-snug text-slate-400">
          Mock only — real ads need a live site and AdSense approval. Not clickable.
        </p>
      </div>
    </aside>
  );
}
