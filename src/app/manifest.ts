import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf1",
    theme_color: "#4f110e",
    lang: "en-IN",
    icons: [
      { src: "/favicon.png", sizes: "48x48", type: "image/png" },
      { src: "/images/iss-logo.png", sizes: "215x215", type: "image/png", purpose: "any" },
    ],
  };
}
