import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Section } from "@/components/PageHero";
import { photos } from "@/lib/content";
import { festival, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Photos",
  description: `Photo gallery of the ${festival.name} and social welfare activities by ${site.name}.`,
  alternates: { canonical: "/photos" },
};

export default function PhotosPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Photos"
        intro={`Moments from the ${festival.name}, our cultural events and welfare drives since ${site.founded}.`}
      />

      <Section>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map((photo) => (
            <figure key={photo.src} className="mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-gold/25 bg-white">
              <a href={photo.src} target="_blank" rel="noopener">
                <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} className="h-auto w-full" />
              </a>
              {photo.caption ? <figcaption className="px-5 py-3 text-sm text-ink/75">{photo.caption}</figcaption> : null}
            </figure>
          ))}
          <div className="mb-5 break-inside-avoid rounded-3xl border-2 border-dashed border-saffron/40 bg-cream p-8 text-center">
            <p className="text-4xl" aria-hidden>
              📸
            </p>
            <p className="mt-3 text-lg font-bold text-maroon">More photos coming soon</p>
            <p className="mt-2 text-sm text-ink/70">
              Pictures from the {festival.year} Ramlila, Pootla Dehen and cultural events will be added here during the
              festival.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-maroon">Captured a great moment?</h2>
          <p className="mt-3 text-ink/75">
            Share your photos of the festival with us on WhatsApp or email and we may feature them in our gallery.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Namaste! Sharing my photos of the Ramleela & Dusshera Mohotsav:")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#1f9d55] px-6 py-3 text-sm font-bold text-white hover:bg-[#177a42]"
            >
              Share on WhatsApp
            </a>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Festival photos")}`}
              className="rounded-full border border-maroon/30 px-6 py-3 text-sm font-bold text-maroon hover:border-saffron hover:text-saffron"
            >
              Send by Email
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
