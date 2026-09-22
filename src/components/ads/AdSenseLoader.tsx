"use client";

import { useEffect } from "react";
import { SITE } from "@/content/site";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

const SCRIPT_ATTR = "data-lcl-adsense";

function adsenseScriptAlreadyPresent(): boolean {
  if (document.querySelector(`script[${SCRIPT_ATTR}]`)) return true;
  const src = `pagead/js/adsbygoogle.js?client=${SITE.adsenseClient}`;
  return Array.from(document.scripts).some((s) => s.src.includes(src));
}

function injectAdSenseScript(): void {
  if (!SITE.adsenseEnabled || SITE.adsensePreview) return;
  if (adsenseScriptAlreadyPresent()) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsenseClient}`;
  script.crossOrigin = "anonymous";
  script.setAttribute(SCRIPT_ATTR, "true");
  document.head.appendChild(script);
}

/** Fallback loader if the static head snippet is missing. Does not double-inject. */
export function AdSenseLoader() {
  useEffect(() => {
    if (!SITE.adsenseEnabled || SITE.adsensePreview) return;
    injectAdSenseScript();
  }, []);

  return null;
}
