import type { Metadata } from "next";
import { Card, PageHero, Section } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ContactStrip } from "@/components/ContactStrip";
import { festival } from "@/lib/site";

export const metadata: Metadata = {
  title: "Event Registration",
  description: `Register for Dandiya Night, drawing and dance competitions at the ${festival.name} ${festival.year}.`,
  alternates: { canonical: "/event-registration" },
};

const events = [
  { icon: "💃", title: "Dandiya Night", body: "Open to all ages — come solo, with family or as a group. Traditional attire encouraged." },
  { icon: "🎨", title: "Drawing Competition", body: "For school children in age-wise categories. Themes are inspired by the Ramayana and our festivals." },
  { icon: "🕺", title: "Dance Competition", body: "Solo and group categories for classical, folk and devotional dance performances." },
  { icon: "✨", title: "More cultural events", body: "Additional competitions and stage events are announced closer to the festival." },
];

export default function EventRegistrationPage() {
  return (
    <>
      <PageHero
        eyebrow={`${festival.name} ${festival.year}`}
        title="Event Registration"
        intro={`Register for the cultural events and competitions held alongside the Ramlila at ${festival.venue}, ${festival.dateLabel}.`}
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <Card key={event.title} title={event.title} icon={event.icon}>
              {event.body}
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="cream" className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <EnquiryForm
          subject="Event Registration"
          intro="Registrations are confirmed by our team by phone. Dates, timings and rules for each event are shared on confirmation."
          fields={[
            { name: "event", label: "Event", type: "select", options: events.map((e) => e.title), required: true },
            { name: "category", label: "Category", type: "select", options: ["Solo", "Duet", "Group"] },
            { name: "name", label: "Participant / team name", required: true },
            { name: "age", label: "Age (or age group)", placeholder: "e.g. 12, or 8–14 for groups" },
            { name: "members", label: "Number of members", type: "number" },
            { name: "school", label: "School / organisation" },
            { name: "guardian", label: "Parent / guardian name (for children)" },
            { name: "phone", label: "Mobile number", type: "tel", required: true },
            { name: "email", label: "Email", type: "email", wide: true },
            { name: "message", label: "Notes (song, dance style, special needs…)", type: "textarea" },
          ]}
        />
        <div className="space-y-5">
          <Card title="Good to know" icon="📋">
            <ul className="list-disc space-y-1 pl-4">
              <li>Participation in competitions is free unless stated otherwise.</li>
              <li>Children must be accompanied by a parent or guardian.</li>
              <li>Please carry a photo ID on the day of the event.</li>
              <li>The organising committee&apos;s decision on results is final.</li>
            </ul>
          </Card>
          <ContactStrip />
        </div>
      </Section>
    </>
  );
}
