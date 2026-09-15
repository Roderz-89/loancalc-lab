import { SITE } from "@/content/site";

type AdFormat = "leaderboard" | "in-article" | "rectangle" | "mobile-banner";

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

/**
 * AdSense slot.
 * - adsensePreview: labelled mock units (safe local preview, not live ads)
 * - adsenseEnabled: reserved for real AdSense after approval + consent
 * Never deceptive: always labelled Advertisement / Ad preview.
 */
export function AdSlot({
  slot = "default",
  format = "leaderboard",
  className = "",
}: {
  slot?: string;
  format?: AdFormat;
  className?: string;
}) {
  const styles = FORMAT_STYLES[format];
  const showPreview = SITE.adsensePreview || SITE.adsenseEnabled;

  if (!showPreview) {
    return (
      <aside
        className={`my-6 hidden print:hidden ${className}`}
        data-ad-slot={slot}
        data-adsense-enabled="false"
        aria-hidden
      />
    );
  }

  const isLive = SITE.adsenseEnabled && !SITE.adsensePreview;

  return (
    <aside
      className={`my-6 flex justify-center print:hidden ${className}`}
      data-ad-slot={slot}
      data-ad-format={format}
      data-adsense-preview={SITE.adsensePreview ? "true" : "false"}
      aria-label={isLive ? "Advertisement" : "Advertisement preview"}
    >
      <div
        className={`w-full ${styles.maxWidth} ${styles.minHeight} flex flex-col items-center justify-center rounded-md border border-slate-300 bg-[repeating-linear-gradient(135deg,#f8fafc,#f8fafc_8px,#f1f5f9_8px,#f1f5f9_16px)] px-3 py-4 text-center`}
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
          Advertisement
        </p>
        <p className="mt-1 text-xs font-medium text-slate-700">
          {isLive ? "Google AdSense" : "AdSense placement preview"}
        </p>
        <p className="mt-1 text-[11px] text-slate-500">
          {styles.label} · slot: {slot}
        </p>
        {!isLive && (
          <p className="mt-2 max-w-xs text-[10px] leading-snug text-slate-400">
            Mock only — real ads need a live site, AdSense approval, and consent. Not clickable.
          </p>
        )}
      </div>
    </aside>
  );
}
