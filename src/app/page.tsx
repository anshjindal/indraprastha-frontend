import Image from "next/image";
import Link from "next/link";
import { Card, Section, SectionHeading } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { SmartLink } from "@/components/SmartLink";
import { InstagramFeed, InstagramFollowButton } from "@/components/InstagramFeed";
import { formatDay, schedule2026 } from "@/lib/schedule";
import { festival, site } from "@/lib/site";

const stats = [
  { value: String(site.founded), label: "Serving since" },
  { value: `${festival.days} days`, label: "Mega festival" },
  { value: `~${festival.dailyFootfall}`, label: "Visitors every day" },
  { value: festival.totalFootfall, label: "Total turnout" },
];

const highlights = [
  { icon: "🏹", title: "Ramlila Performance", body: "Eleven evenings of the Ramayana brought to life on a grand stage, from Ganesh Vandana to Rajtilak." },
  { icon: "🔥", title: "Pootla Dehen", body: "The symbolic burning of Ravan's effigy on Dussehra — the victory of good over evil." },
  { icon: "🎡", title: "Joy Rides", body: "Thrilling rides and fun zones for children and families throughout the festival." },
  { icon: "🍲", title: "Shop & Food Court", body: "A lively mela with food stalls, shopping and local vendors from across the city." },
  { icon: "💃", title: "Dandiya Night", body: "A festive evening of garba and dandiya open to the whole community." },
  { icon: "🎨", title: "Competitions", body: "Drawing and dance competitions for children and youth, with prizes and recognition." },
];

const involve = [
  { href: "/join-our-team", title: "Join our Team", body: "Volunteer with us and help run one of Delhi's biggest Ramleelas." },
  { href: "/event-registration", title: "Event Registration", body: "Register for Dandiya Night, drawing and dance competitions." },
  { href: "/participate", title: "Participate", body: "Perform in the Ramlila, bring your troupe, or set up a stall." },
  { href: "/sponsorship", title: "Sponsorship", body: `Reach ${festival.totalFootfall} visitors across ${festival.days} days.` },
  { href: site.donateUrl, title: "Donate", body: "Support the festival and our blanket and health drives." },
];

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "NGO",
      "@id": `${site.url}/#org`,
      name: site.name,
      alternateName: [site.hindiName, site.shortName],
      url: site.url,
      logo: `${site.url}/images/iss-logo.png`,
      email: site.email,
      telephone: site.phones.map((p) => p.href.replace("tel:", "")),
      foundingDate: String(site.founded),
      address: {
        "@type": "PostalAddress",
        streetAddress: site.offices[0].lines[0],
        addressLocality: "West Sagarpur, New Delhi",
        postalCode: "110046",
        addressCountry: "IN",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: `${festival.name} ${festival.year}`,
      startDate: festival.startDate,
      endDate: festival.endDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      image: [`${site.url}${festival.poster}`],
      location: {
        "@type": "Place",
        name: festival.venue,
        address: { "@type": "PostalAddress", addressLocality: "Sagarpur, New Delhi", postalCode: "110046", addressCountry: "IN" },
      },
      organizer: { "@id": `${site.url}/#org` },
      isAccessibleForFree: true,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="sunburst relative overflow-hidden text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:px-6 md:py-24 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-hindi text-lg text-gold-light">सस्नेह निमंत्रण · जय श्री राम</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              {festival.name} <span className="text-saffron-light">{festival.year}</span>
            </h1>
            <p className="mt-3 font-hindi text-2xl text-gold-light">
              {site.hindiName} · {festival.hindiName}
            </p>
            <div className="gold-rule my-6 max-w-sm" />
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white/10 px-4 py-2 font-semibold ring-1 ring-white/20">📅 {festival.dateLabel}</span>
              <span className="rounded-full bg-white/10 px-4 py-2 font-semibold ring-1 ring-white/20">📍 {festival.venue}, New Delhi</span>
            </div>
            <p className="mt-6 max-w-xl leading-relaxed text-cream/85">
              The biggest religious and cultural celebration of South West Delhi — eleven days of Ramlila, Pootla Dehen,
              joy rides, a food court and cultural competitions. You are warmly invited with your family.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/schedule" className="rounded-full bg-saffron-light px-6 py-3 text-sm font-bold text-maroon-deep hover:bg-gold-light">
                View 2026 Schedule
              </Link>
              <Link href="/participate" className="rounded-full border border-cream/50 px-6 py-3 text-sm font-bold hover:border-gold-light hover:text-gold-light">
                Get Involved
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-6 rounded-full bg-saffron-light/30 blur-3xl" aria-hidden />
            <div className="relative rounded-[2.5rem] bg-cream p-8 shadow-2xl shadow-black/30">
              <Image src="/images/iss-logo.png" alt={`${festival.name} logo`} width={215} height={215} priority className="mx-auto h-auto w-full max-w-[240px]" />
              <p className="mt-4 text-center font-hindi text-sm text-maroon">{site.hindiTagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gold/20 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4 md:px-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-saffron md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-ink/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Section className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="Welcome" title={`Welcome to ${site.name}`} />
          <p className="mt-5 leading-relaxed text-ink/80">
            {site.name} is a registered society under the Societies Registration Act, founded in {site.founded} with a noble vision to serve
            society and promote its welfare. Since then we have organised the annual {festival.name} at {festival.venue} —
            now the biggest religious and cultural programme in the locality — alongside social welfare work such as
            blanket distribution and health awareness drives.
          </p>
          <Link href="/about" className="mt-6 inline-block font-bold text-saffron hover:text-maroon">
            Read our story →
          </Link>
        </div>
        <figure className="rounded-3xl border border-gold/30 bg-cream p-8">
          <blockquote className="text-lg leading-relaxed text-maroon">
            “At {site.name}, we firmly believe that service to society is a responsibility we all share. Together, we can
            build a better and brighter future.”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <Image
              src={site.chairperson.photo}
              alt={site.chairperson.name}
              width={80}
              height={80}
              className="h-20 w-20 shrink-0 rounded-full object-cover object-top ring-4 ring-white shadow-md"
            />
            <div>
              <p className="font-bold text-maroon">{site.chairperson.name}</p>
              <p className="text-sm text-ink/70">{site.chairperson.title}</p>
            </div>
          </figcaption>
        </figure>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="The Festival"
          title="Eleven days of devotion, culture and joy"
          intro={`Every evening at ${festival.venue} in the heart of South West Delhi.`}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} title={item.title} icon={item.icon}>
              {item.body}
            </Card>
          ))}
        </div>
      </Section>

      <Section className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <SectionHeading eyebrow="कार्यक्रम · Schedule 2026" title={festival.dateLabel} />
          <ul className="mt-8 divide-y divide-gold/20 rounded-3xl border border-gold/25 bg-white">
            {schedule2026.map((day, index) => (
              <li key={day.date} className="flex gap-4 px-5 py-3.5">
                <span className="w-20 shrink-0 font-bold text-maroon">{formatDay(day.date)}</span>
                <span className="font-hindi text-ink/85">{day.hindi.join(", ")}</span>
                {index === schedule2026.length - 1 ? <span className="ml-auto shrink-0 text-lg" aria-hidden>🏹</span> : null}
              </li>
            ))}
          </ul>
          <Link href="/schedule" className="mt-6 inline-block font-bold text-saffron hover:text-maroon">
            Full schedule in Hindi & English →
          </Link>
        </div>
        <a href={festival.poster} target="_blank" rel="noopener" className="group block self-start">
          <Image
            src={festival.poster}
            alt={`${festival.name} ${festival.year} schedule poster`}
            width={723}
            height={1024}
            className="w-full rounded-3xl shadow-xl shadow-maroon/15 transition group-hover:scale-[1.01]"
          />
          <span className="mt-3 block text-center text-sm text-ink/60">Tap to open the poster</span>
        </a>
      </Section>

      <Section tone="cream">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={`Instagram · @${site.instagramHandle}`}
            title="Moments from the Ramleela"
            intro="Reels and highlights from the stage, the mela and our community."
          />
          <InstagramFollowButton />
        </div>
        <div className="mt-10">
          <InstagramFeed limit={4} />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Get Involved"
          title="Be a part of the celebration"
          intro="Whether you give your time, your talent or your support, there is a place for you in the Ramleela family."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {involve.map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className="group rounded-3xl border border-gold/25 bg-ivory p-6 transition hover:-translate-y-1 hover:border-saffron hover:shadow-lg hover:shadow-saffron/10"
            >
              <p className="text-lg font-bold text-maroon group-hover:text-saffron">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.body}</p>
              <span className="mt-4 inline-block text-sm font-bold text-saffron">→</span>
            </SmartLink>
          ))}
        </div>
      </Section>

      <Section tone="cream" className="grid gap-8 md:grid-cols-2">
        <Card title="Blanket Distribution" icon="🧣">
          Every winter our volunteers distribute blankets to people in need across Sagarpur and nearby areas.
        </Card>
        <Card title="Health Awareness" icon="🩺">
          We raise awareness on health-related issues and work to address the needs of the underprivileged.
        </Card>
      </Section>

      <div className="pt-16">
        <CtaBand
          title="Support the 2026 Ramleela"
          body={`Your sponsorship or donation helps us welcome ${festival.totalFootfall} devotees and serve those in need.`}
          primary={{ href: "/sponsorship", label: "Become a Sponsor" }}
          secondary={{ href: site.donateUrl, label: "Donate Online" }}
        />
      </div>
    </>
  );
}
