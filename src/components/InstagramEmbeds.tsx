"use client";

import { useEffect, useRef, useState } from "react";

function embedSrc(url: string) {
  const { pathname } = new URL(url);
  return `https://www.instagram.com${pathname.replace(/\/?$/, "/")}embed/`;
}

function InstagramEmbed({ url }: { url: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== "https://www.instagram.com" || event.source !== frameRef.current?.contentWindow) return;
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data?.type === "MEASURE" && typeof data.details?.height === "number") {
          setHeight(data.details.height);
        }
      } catch {
        // Instagram also posts non-JSON messages; ignore them.
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl border border-gold/25 bg-white shadow-sm shadow-maroon/5">
      <iframe
        ref={frameRef}
        src={embedSrc(url)}
        title="Instagram reel by Indraprastha Sewa Samiti"
        loading="lazy"
        allowFullScreen
        scrolling="no"
        className="block w-full border-0"
        style={{ height: height ?? 640 }}
      />
    </div>
  );
}

export function InstagramEmbeds({ urls }: { urls: string[] }) {
  return (
    <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {urls.map((url) => (
        <InstagramEmbed key={url} url={url} />
      ))}
    </div>
  );
}
