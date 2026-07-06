/** Public routes included in sitemap.xml (stable, no sensitive query state). */
export const PUBLIC_SITEMAP_PATHS = [
  "/",
  "/blog",
  "/careers",
  "/support/faq",
  "/support/help",
  "/legal/privacy",
  "/legal/terms",
  "/legal/cookies",
] as const;

export type PublicSitemapPath = (typeof PUBLIC_SITEMAP_PATHS)[number];
