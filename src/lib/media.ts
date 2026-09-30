import type { MediaLink } from "@/lib/content";

export type MediaItem = {
  url: string;
  title: string;
  outlet?: string;
  date?: string;
  youtube?: { id: string; start: number };
};

function parseSeconds(value: string | null) {
  if (!value) return 0;
  if (/^\d+$/.test(value)) return Number(value);
  const match = value.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!match) return 0;
  const [, h = "0", m = "0", s = "0"] = match;
  return Number(h) * 3600 + Number(m) * 60 + Number(s);
}

export function parseYouTube(url: string): MediaItem["youtube"] {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return undefined;
  }
  const host = parsed.hostname.replace(/^(www\.|m\.)/, "");
  let id: string | null = null;
  if (host === "youtu.be") id = parsed.pathname.slice(1);
  else if (host === "youtube.com") {
    id = parsed.searchParams.get("v") ?? parsed.pathname.match(/^\/(?:shorts|live|embed)\/([^/]+)/)?.[1] ?? null;
  }
  if (!id || !/^[\w-]{11}$/.test(id)) return undefined;
  return { id, start: parseSeconds(parsed.searchParams.get("t") ?? parsed.searchParams.get("start")) };
}

async function fetchYouTubeDetails(url: string) {
  try {
    const res = await fetch(`https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(url)}`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return undefined;
    return (await res.json()) as { title?: string; author_name?: string };
  } catch {
    return undefined;
  }
}

/** Reads the publish date from the public watch page; oEmbed does not include it. */
async function fetchYouTubeDate(id: string) {
  try {
    const res = await fetch(`https://www.youtube.com/watch?v=${id}`, {
      headers: { "Accept-Language": "en-US,en;q=0.9" },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return undefined;
    const html = await res.text();
    const published = html.match(/itemprop="(?:datePublished|uploadDate)" content="([^"]+)"/)?.[1];
    if (!published || Number.isNaN(Date.parse(published))) return undefined;
    return new Date(published).toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  } catch {
    return undefined;
  }
}

export async function resolveMediaCoverage(links: MediaLink[]): Promise<MediaItem[]> {
  const items = await Promise.all(
    links.map(async (link) => {
      const youtube = parseYouTube(link.url);
      const [details, date] = await Promise.all([
        youtube && (!link.title || !link.outlet) ? fetchYouTubeDetails(link.url) : undefined,
        link.date ?? (youtube ? fetchYouTubeDate(youtube.id) : undefined),
      ]);
      return {
        url: link.url,
        title: link.title ?? details?.title ?? new URL(link.url).hostname.replace(/^www\./, ""),
        outlet: link.outlet ?? details?.author_name,
        date,
        youtube,
      };
    }),
  );
  return items.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export function groupByYear(items: MediaItem[]) {
  const groups = new Map<string, MediaItem[]>();
  for (const item of items) {
    const year = item.date?.slice(0, 4) ?? "Earlier";
    groups.set(year, [...(groups.get(year) ?? []), item]);
  }
  return [...groups.entries()].map(([year, list]) => ({ year, items: list }));
}

export function formatMediaDate(iso: string) {
  return new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}
