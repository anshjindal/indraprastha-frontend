import { InstagramEmbeds } from "./InstagramEmbeds";
import { ReelCard } from "./ReelCard";
import { InstagramIcon } from "./SocialIcons";
import { instagramPosts } from "@/lib/content";
import { getInstagramMedia } from "@/lib/instagram";
import { site } from "@/lib/site";

export async function InstagramFeed({ limit = 8 }: { limit?: number }) {
  const media = await getInstagramMedia(limit);

  if (media.length) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {media.slice(0, limit).map((item) => (
          <ReelCard key={item.id} media={item} />
        ))}
      </div>
    );
  }

  if (instagramPosts.length) {
    return <InstagramEmbeds urls={instagramPosts.slice(0, limit)} />;
  }

  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border-2 border-dashed border-saffron/40 bg-white px-6 py-12 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-saffron-light via-saffron to-maroon text-white">
        <InstagramIcon className="h-8 w-8" />
      </span>
      <p className="text-xl font-bold text-maroon">Watch our reels on Instagram</p>
      <p className="max-w-md text-sm text-ink/70">
        Ramlila highlights, behind-the-scenes moments and festival updates from {site.name}.
      </p>
      <InstagramFollowButton />
    </div>
  );
}

export function InstagramFollowButton() {
  return (
    <a
      href={site.social.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-saffron to-maroon px-6 py-3 text-sm font-bold text-white shadow-md shadow-saffron/30 hover:opacity-90"
    >
      <InstagramIcon />@{site.instagramHandle}
    </a>
  );
}
