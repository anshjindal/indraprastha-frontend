import type { MetadataRoute } from "next";
import { allPages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages.map((page) => ({
    url: page.href === "/" ? site.url : `${site.url}${page.href}`,
    lastModified: new Date(),
    changeFrequency: page.href === "/schedule" || page.href === "/tenders" ? "daily" : "weekly",
    priority: page.href === "/" ? 1 : page.href === "/schedule" ? 0.9 : 0.7,
  }));
}
