"use client";

import { useEffect } from "react";
import { SITE } from "@/content/site";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

const SCRIPT_ATTR = "data-lcl-adsense";

function injectAdSenseScript(): void {
  if (!SITE.adsenseEnabled || SITE.adsensePreview) return;
  if (document.querySelector(`script[${SCRIPT_ATTR}]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsenseClient}`;
  script.crossOrigin = "anonymous";
  script.setAttribute(SCRIPT_ATTR, "true");
  document.head.appendChild(script);
}

/**
 * Loads adsbygoogle.js unconditionally when AdSense is enabled.
 * Google’s Privacy & messaging (CMP) handles GDPR consent — no local gate.
 * Mount once from the root layout.
 */
export function AdSenseLoader() {
  useEffect(() => {
    if (!SITE.adsenseEnabled || SITE.adsensePreview) return;
    injectAdSenseScript();
  }, []);

  return null;
}
