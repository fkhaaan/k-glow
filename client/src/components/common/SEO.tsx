import Head from "next/head";

import { siteConfig } from "@/configs/site";

type SEOProps = {
  title?: string;
  description?: string;
  canonicalPath?: string;
};

export function SEO({ title, description, canonicalPath = "/" }: SEOProps) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  const canonicalUrl = `${siteConfig.url}${canonicalPath}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={siteConfig.locale} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
