import type { MetadataRoute } from "next";
import { allPages, festival, site } from "@/lib/site";

const pageImages: Record<string, string[]> = {
  "/": ["/opengraph-image", festival.poster, "/images/iss-logo.png"],
  "/schedule": [festival.poster],
  "/about": [site.chairperson.photo],
  "/quality-policy": [site.chairperson.photo],
};

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages.map((page) => ({
    url: page.href === "/" ? site.url : `${site.url}${page.href}`,
    lastModified: new Date(),
    changeFrequency: page.href === "/schedule" || page.href === "/tenders" ? "daily" : "weekly",
    priority: page.href === "/" ? 1 : page.href === "/schedule" ? 0.9 : 0.7,
    images: pageImages[page.href]?.map((path) => `${site.url}${path}`),
  }));
}
