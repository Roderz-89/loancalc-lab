import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { CALCULATORS } from "@/content/calculators";
import { GUIDES } from "@/content/guides";
import { GLOSSARY } from "@/content/glossary";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/calculators",
    "/guides",
    "/glossary",
    "/about",
    "/editorial-policy",
    "/contact",
    "/privacy",
    "/cookie-policy",
    "/advertising-disclosure",
    "/affiliate-disclosure",
    "/calculator-disclaimer",
    "/terms",
  ];

  const now = new Date();
  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE.url}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...CALCULATORS.map((c) => ({
      url: `${SITE.url}${c.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...GUIDES.map((g) => ({
      url: `${SITE.url}${g.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...GLOSSARY.map((g) => ({
      url: `${SITE.url}${g.href}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
