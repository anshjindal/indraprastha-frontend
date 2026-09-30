import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Section } from "@/components/PageHero";
import { ScheduleTable } from "@/components/ScheduleTable";
import { schedule2026 } from "@/lib/schedule";
import { festival, mapsDirectionsUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: `Schedule ${festival.year}`,
  description: `Day-by-day programme of the ${festival.name} ${festival.year}, ${festival.dateLabel} at ${festival.venue}, New Delhi.`,
  alternates: { canonical: "/schedule" },
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow={`कार्यक्रम · ${festival.year}`}
        title={`Ramleela Schedule ${festival.year}`}
        hindi={`${festival.hindiName} ${festival.year}`}
        intro={`${festival.days} days of Ramlila at ${festival.venue}, ${festival.dateLabel}. आप सभी सादर आमंत्रित हैं — you are all warmly invited.`}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={festival.poster}
            download="Ramleela-Sagarpur-Schedule-2026.jpg"
            className="rounded-full bg-saffron-light px-6 py-3 text-sm font-bold text-maroon-deep hover:bg-gold-light"
          >
            Download Poster
          </a>
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/50 px-6 py-3 text-sm font-bold hover:border-gold-light hover:text-gold-light"
          >
            Directions to {festival.venue}
          </a>
        </div>
      </PageHero>

      <Section className="grid gap-12 lg:grid-cols-[1.7fr_1fr]">
        <ScheduleTable days={schedule2026} />
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <a href={festival.poster} target="_blank" rel="noopener" className="block">
            <Image
              src={festival.poster}
              alt={`${festival.name} ${festival.year} schedule poster`}
              width={723}
              height={1024}
              className="w-full rounded-3xl shadow-xl shadow-maroon/15"
            />
          </a>
          <p className="text-center font-hindi text-maroon">सत्य की विजय • अधर्म का अंत • मर्यादा का संदेश</p>
        </aside>
      </Section>
    </>
  );
}
