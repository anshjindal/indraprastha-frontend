"use client";

import { useRef, useState } from "react";
import type { InstagramMedia } from "@/lib/instagram";

export function ReelCard({ media }: { media: InstagramMedia }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const isVideo = media.media_type === "VIDEO";
  const caption = media.caption?.split("\n")[0];

  function play() {
    videoRef.current?.play().then(() => setPlaying(true)).catch(() => {});
  }

  function pause() {
    videoRef.current?.pause();
    setPlaying(false);
  }

  return (
    <figure className="group overflow-hidden rounded-3xl border border-gold/25 bg-white shadow-sm shadow-maroon/5">
      <div
        className="relative aspect-[9/14] overflow-hidden bg-maroon-deep"
        onMouseEnter={isVideo ? play : undefined}
        onMouseLeave={isVideo ? pause : undefined}
      >
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              src={media.media_url}
              poster={media.thumbnail_url}
              muted
              loop
              playsInline
              preload="none"
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={playing ? pause : play}
              aria-label={playing ? "Pause reel" : "Play reel"}
              className={`absolute inset-0 flex items-center justify-center transition ${playing ? "opacity-0" : "bg-black/15"}`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-maroon shadow-lg">
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- Instagram CDN URLs are signed and expire
          <img
            src={media.media_url}
            alt={caption ?? "Instagram post by Indraprastha Sewa Samiti"}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="line-clamp-1 text-sm text-ink/75">{caption || "View on Instagram"}</p>
        <a
          href={media.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-xs font-bold text-saffron hover:text-maroon"
        >
          Open ↗
        </a>
      </figcaption>
    </figure>
  );
}
