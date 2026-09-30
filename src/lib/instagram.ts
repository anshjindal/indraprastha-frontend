export type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

/**
 * Latest posts and reels from the Samiti's Instagram professional account.
 * Needs INSTAGRAM_ACCESS_TOKEN (Instagram API with Instagram Login); returns [] when it is missing or the call fails.
 */
export async function getInstagramMedia(limit = 12): Promise<InstagramMedia[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  const params = new URLSearchParams({
    fields: "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
    limit: String(limit),
    access_token: token,
  });

  try {
    const res = await fetch(`https://graph.instagram.com/me/media?${params}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.error(`Instagram feed request failed: ${res.status}`);
      return [];
    }
    const json = (await res.json()) as { data?: InstagramMedia[] };
    return json.data ?? [];
  } catch (error) {
    console.error("Instagram feed request failed", error);
    return [];
  }
}
