import type { Metadata } from "next";
import Image from "next/image";
import { Card, PageHero, Section } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { festival, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.name} — a registered NGO founded in ${site.founded} that organises the ${festival.name} and social welfare activities in New Delhi.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`Serving society since ${site.founded}`}
        title="About Us"
        hindi={site.hindiName}
        intro={`Welcome to the official website of ${site.name}!`}
      />

      <Section className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <article className="prose-iss text-ink/85">
          <p className="!mt-0 text-lg">
            {site.name} is a registered society under the Societies Registration Act, founded in {site.founded} with a
            noble vision to serve the society and promote its welfare. We are committed to making a positive impact on
            the lives of individuals and communities, striving to bring about positive change through various
            initiatives.
          </p>

          <h2>Ramleela &amp; Dusshera Mohotsav Sagarpur</h2>
          <p>
            One of our flagship events is the annual cultural and religious program called ‘{festival.name}’. This grand
            event takes place every year around Navratri and Dussehra — in {festival.year} from{" "}
            <strong>{festival.dateLabel}</strong> — capturing the essence of Indian culture and traditions. Situated in
            Sagarpur, New Delhi-110046, our event has become the biggest religious and cultural program in the locality,
            attracting people from all walks of life.
          </p>
          <p>
            The chairperson of Dusshera Mohatsav Sagarpur and our esteemed organization is {site.chairperson.name}, an
            Ex-Municipal Councillor of Sagarpur. Under her dynamic leadership, we have been able to create a remarkable
            platform that showcases the vibrant heritage of our country.
          </p>
          <p>
            The {festival.days}-day long mega event unfolds at the spacious {festival.venue}, situated in the heart of
            South West Delhi. It features a mesmerizing Ramlila performance, the symbolic Pootla Dehen ceremony, thrilling
            joy rides, and a delightful Shop/Food Court. We believe in catering to diverse interests, which is why we have
            organized numerous other cultural events like Dandiya Night, Drawing Competition, Dance Competition, and much
            more.
          </p>
          <p>
            Located in a densely populated area of Delhi, our festival is expected to witness a daily footfall of
            approximately {festival.dailyFootfall} people and a total turnout of over 500,000 individuals throughout the
            festival. To make this event even more special, we have extended invitations to distinguished political
            leaders such as the Hon&apos;ble Lok Sabha Speaker, Sh. Om Birla, and Cabinet Minister Sh. Anurag Thakur to
            grace the occasion as Chief Guests, alongside other eminent dignitaries.
          </p>

          <h2>Beyond the festival</h2>
          <p>
            At {site.name}, we firmly believe that service to society is a responsibility we all share. Therefore, our
            work goes beyond organizing events. We actively engage in social welfare activities, such as distributing
            blankets to the poor and raising awareness on health-related issues. We strive to address the needs of the
            underprivileged and create an inclusive and compassionate society.
          </p>
          <p>
            We welcome you to explore our website and learn more about our initiatives, events, and the incredible work we
            do. Join us in our journey to make a positive difference in the lives of individuals and the community as a
            whole. Together, we can build a better and brighter future.
          </p>
          <p className="font-semibold text-maroon">Thank you for visiting {site.name}!</p>

          <div className="mt-8 flex items-center gap-4 border-l-4 border-saffron pl-5">
            <Image
              src={site.chairperson.photo}
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 shrink-0 rounded-full object-cover object-top"
            />
            <div>
              <p className="text-lg font-bold text-maroon">{site.chairperson.name}</p>
              <p className="text-sm text-ink/70">{site.chairperson.title}</p>
            </div>
          </div>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <figure className="overflow-hidden rounded-3xl border border-gold/30 bg-white">
            <div className="bg-linear-to-b from-cream to-white px-8 pt-8">
              <Image
                src={site.chairperson.photo}
                alt={`${site.chairperson.name}, Chairperson`}
                width={297}
                height={256}
                priority
                className="mx-auto h-auto w-full max-w-[260px] rounded-2xl"
              />
            </div>
            <figcaption className="px-6 pt-4 pb-6 text-center">
              <p className="text-xs font-bold tracking-[0.2em] text-saffron uppercase">Chairperson</p>
              <p className="mt-1 text-xl font-bold text-maroon">{site.chairperson.name}</p>
              <p className="mt-1 text-sm text-ink/70">{site.chairperson.note}</p>
              <p className="mt-2 text-xs text-ink/60">{site.chairperson.title}</p>
            </figcaption>
          </figure>
          <div className="rounded-3xl border border-gold/25 bg-white p-6 text-sm">
            <dl className="space-y-4">
              <div>
                <dt className="font-bold text-maroon">Status</dt>
                <dd className="text-ink/75">{site.registration}</dd>
              </div>
              <div>
                <dt className="font-bold text-maroon">Founded</dt>
                <dd className="text-ink/75">{site.founded}</dd>
              </div>
              <div>
                <dt className="font-bold text-maroon">Chairperson</dt>
                <dd className="text-ink/75">
                  {site.chairperson.name}, {site.chairperson.note}
                </dd>
              </div>
              {site.offices.map((office) => (
                <div key={office.id}>
                  <dt className="font-bold text-maroon">{office.label}</dt>
                  <dd className="text-ink/75">{office.lines.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </Section>

      <Section tone="cream">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Our Vision" icon="🌅">
            A compassionate, inclusive society where our culture and traditions bring every community together.
          </Card>
          <Card title="Our Mission" icon="🤝">
            To serve society through cultural and religious programmes, social welfare activities and support for the
            underprivileged.
          </Card>
          <Card title="Our Values" icon="🪔">
            <span className="font-hindi">{site.hindiTagline}</span> — Dharma, Sanskriti, Sewa and Samaj guide everything
            we do.
          </Card>
        </div>
      </Section>

      <div className="pt-16">
        <CtaBand
          title="Join us in making a difference"
          primary={{ href: "/join-our-team", label: "Join our Team" }}
          secondary={{ href: "/contact", label: "Contact Us" }}
        />
      </div>
    </>
  );
}
