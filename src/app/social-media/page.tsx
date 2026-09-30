import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { InstagramFeed, InstagramFollowButton } from "@/components/InstagramFeed";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { festival, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Social Media",
  description: `Follow ${site.name} and the ${festival.name} on Instagram and Facebook for reels, live updates and highlights.`,
  alternates: { canonical: "/social-media" },
};

const facebookPlugin = `https://www.facebook.com/plugins/page.php?${new URLSearchParams({
  href: site.social.facebook,
  tabs: "timeline",
  width: "500",
  height: "640",
  small_header: "false",
  adapt_container_width: "true",
  hide_cover: "false",
  show_facepile: "true",
})}`;

export default function SocialMediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay connected"
        title="Social Media"
        intro={`Reels, live Ramlila moments and behind-the-scenes from ${festival.venue} — follow us and never miss an update.`}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-saffron-light px-6 py-3 text-sm font-bold text-maroon-deep hover:bg-gold-light"
          >
            <InstagramIcon /> Instagram
          </a>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/50 px-6 py-3 text-sm font-bold hover:border-gold-light hover:text-gold-light"
          >
            <FacebookIcon /> Facebook
          </a>
        </div>
      </PageHero>

      <Section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={`@${site.instagramHandle}`} title="Latest reels" />
          <InstagramFollowButton />
        </div>
        <div className="mt-10">
          <InstagramFeed limit={8} />
        </div>
      </Section>

      <Section tone="cream" className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Facebook" title="Updates from our page" intro="Event announcements, photos and live streams." />
          <div className="mt-8 max-w-[500px] overflow-hidden rounded-3xl border border-gold/30 bg-white">
            <iframe
              title={`${site.name} on Facebook`}
              src={facebookPlugin}
              className="h-[640px] w-full"
              loading="lazy"
              allow="encrypted-media; clipboard-write; picture-in-picture; web-share"
            />
          </div>
        </div>
        <div>
          <SectionHeading title="More ways to connect" />
          <div className="mt-8 grid gap-4">
            <div className="flex items-center gap-4 rounded-3xl border border-gold/25 bg-white p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-saffron">
                <InstagramIcon />
              </span>
              <div className="flex-1">
                <p className="font-bold text-maroon">Instagram</p>
                <p className="text-sm text-ink/70">Reels and highlights from the Ramleela.</p>
              </div>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-saffron px-4 py-2 text-sm font-bold text-white hover:bg-maroon"
              >
                Follow
              </a>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-gold/25 bg-white p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-saffron">
                <FacebookIcon />
              </span>
              <div className="flex-1">
                <p className="font-bold text-maroon">Facebook</p>
                <p className="text-sm text-ink/70">Announcements, photos and live streams.</p>
              </div>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-saffron px-4 py-2 text-sm font-bold text-white hover:bg-maroon"
              >
                Follow
              </a>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-[#1f9d55]/30 bg-white p-5">
              <span className="text-2xl" aria-hidden>
                💬
              </span>
              <div className="flex-1">
                <p className="font-bold text-maroon">WhatsApp</p>
                <p className="text-sm text-ink/70">Message the organising committee directly.</p>
              </div>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#1f9d55] px-4 py-2 text-sm font-bold text-white hover:bg-[#177a42]"
              >
                Chat
              </a>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-6">
            <p className="font-bold text-maroon">Share the celebration</p>
            <p className="mt-1 text-sm text-ink/70">Posting from the festival? Tag us and use:</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {site.hashtags.map((tag) => (
                <span key={tag} className="rounded-full bg-cream px-3 py-1.5 text-sm font-semibold text-saffron">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
