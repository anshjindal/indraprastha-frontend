import type { Metadata } from "next";
import { festival, site } from "@/lib/site";

const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${festival.seoName} ${festival.year} – ${festival.name}, ${festival.dateLabel}`,
};

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  /** Use the title as-is, without the "| Indraprastha Sewa Samiti" suffix. */
  absoluteTitle?: boolean;
};

export function pageMetadata({ title, description, path, keywords = [], absoluteTitle = false }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...keywords, ...site.keywords],
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage],
    },
  };
}
