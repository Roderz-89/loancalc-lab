/**
 * AdSense slot — currently always renders nothing.
 * adsensePreview and adsenseEnabled stay false until live ads + consent are ready.
 * Kept as a no-op so future placements can be reintroduced without layout rewrites.
 */
export function AdSlot(_props: {
  slot?: string;
  format?: "leaderboard" | "in-article" | "rectangle" | "mobile-banner";
  className?: string;
}) {
  return null;
}
