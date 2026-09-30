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

export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  dateIso: string;
  summary: string;
  image: { src: string; width: number; height: number };
  document?: string;
};

/** Certificates and recognitions, newest first. Put images in /public/images/achievements and PDFs in /public/documents. */
export const achievements: Achievement[] = [
  {
    title: "Certificate of Participation – Vidyanjali Programme",
    issuer: "Department of School Education & Literacy, Ministry of Education, Government of India",
    date: "12 November 2025",
    dateIso: "2025-11-12",
    summary:
      "Recognised for volunteering in Vidyanjali, the Ministry of Education's school volunteer programme, by contributing 32 stationery items to Govt. Sarvodaya Kanya Vidyalaya No. 1, Sagarpur, New Delhi.",
    image: { src: "/images/achievements/vidyanjali-2025.jpg", width: 1743, height: 1121 },
    document: "/documents/vidyanjali-certificate-2025.pdf",
  },
];

export type MediaLink = {
  url: string;
  /** Publish date (India time) as YYYY-MM-DD; for YouTube links it is looked up automatically when left out. */
  date?: string;
  /** Optional overrides; YouTube titles and channel names are fetched automatically. */
  title?: string;
  outlet?: string;
};

/** News and TV coverage. Paste YouTube links as-is (a "&t=230s" start time is kept); the page groups them by year. */
export const mediaCoverage: MediaLink[] = [
  { url: "https://www.youtube.com/watch?v=CV6_MUuyJNI&t=230s", date: "2026-09-26" },
  { url: "https://www.youtube.com/watch?v=UOwDA_G9Azo", date: "2026-09-25", outlet: "National Samachar Reporter" },
  { url: "https://www.youtube.com/watch?v=Dl1mQqZCvtg&t=181s", date: "2025-09-23" },
  { url: "https://www.youtube.com/watch?v=SsaGBcRXgnQ", date: "2024-10-01" },
  {
    url: "https://www.youtube.com/watch?v=NBlf8KbNnuE",
    date: "2019-11-03",
    title: "निगम पार्षद पूनम जिंदल अनेक छठ घाटों पर जाकर शामिल हुई",
  },
  { url: "https://www.youtube.com/watch?v=Han0XCYDhUc", date: "2018-09-23" },
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
