export type Photo = { src: string; alt: string; width: number; height: number; caption?: string };

/** Add festival photos to /public/images/gallery and list them here, newest first. */
export const photos: Photo[] = [
  {
    src: "/images/schedule-2026.jpg",
    alt: "Ramleela & Dusshera Mohotsav 2026 schedule poster",
    width: 723,
    height: 1024,
    caption: "Ramleela & Dusshera Mohotsav 2026 — official schedule",
  },
];

/**
 * Hand-picked Instagram reels or posts to embed, e.g. "https://www.instagram.com/reel/ABC123/".
 * Used when the automatic feed (INSTAGRAM_ACCESS_TOKEN) is not configured.
 */
export const instagramPosts: string[] = [
  "https://www.instagram.com/reel/DPRN8OejzNw/",
  "https://www.instagram.com/reel/DdX_RdIoZac/",
  "https://www.instagram.com/reel/DPXAQk5j5h9/",
];

export type Tender = {
  ref: string;
  title: string;
  published: string;
  closes: string;
  document?: string;
};

/** Add open tenders here; the Tenders page lists them automatically. */
export const tenders: Tender[] = [];
