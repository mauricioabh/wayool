import { DEFAULT_DESCRIPTION, PRODUCT_NAME, getSiteUrl } from "@/lib/seo/site";

export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: PRODUCT_NAME,
    url: getSiteUrl(),
    description: DEFAULT_DESCRIPTION,
    email: "support@wayool.com",
  };
}

export function webSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: PRODUCT_NAME,
    url: getSiteUrl(),
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: PRODUCT_NAME,
    },
  };
}
