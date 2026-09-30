import { PageHero, Section } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { pageMetadata } from "@/lib/seo";
import { festival, mapsDirectionsUrl, mapsEmbedUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Us – Ramleela Organisers in Sagarpur, New Delhi",
  description: `Contact ${site.name}, organisers of the Sagarpur Ramleela: offices in West Sagarpur and Palam Colony, New Delhi. Call ${site.phones[0].display} or email ${site.email}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        path="/contact"
        eyebrow="We'd love to hear from you"
        title="Contact Us"
        intro="Reach out for festival enquiries, volunteering, sponsorship, donations or anything else."
      />

      <Section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {site.offices.map((office) => (
          <div key={office.id} className="rounded-3xl border border-gold/25 bg-white p-6">
            <p className="text-xs font-bold tracking-[0.2em] text-saffron uppercase">{office.label}</p>
            <address className="mt-3 not-italic leading-relaxed text-ink/85">
              {office.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        ))}
        <div className="rounded-3xl border border-gold/25 bg-white p-6">
          <p className="text-xs font-bold tracking-[0.2em] text-saffron uppercase">Phone</p>
          <ul className="mt-3 space-y-3">
            {site.phones.map((phone) => (
              <li key={phone.id}>
                <p className="text-sm text-ink/70">{phone.name}</p>
                <a href={phone.href} className="text-lg font-bold text-maroon hover:text-saffron">
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-gold/25 bg-white p-6">
          <p className="text-xs font-bold tracking-[0.2em] text-saffron uppercase">Email & WhatsApp</p>
          <a href={`mailto:${site.email}`} className="mt-3 block break-all font-bold text-maroon hover:text-saffron">
            {site.email}
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-[#1f9d55] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#177a42]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </Section>

      <Section tone="cream" className="grid gap-10 lg:grid-cols-2">
        <EnquiryForm
          subject="General Enquiry"
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "phone", label: "Mobile number", type: "tel", required: true },
            { name: "email", label: "Email", type: "email", wide: true },
            {
              name: "topic",
              label: "Topic",
              type: "select",
              options: ["Festival information", "Volunteering", "Event registration", "Sponsorship", "Donation", "Tenders", "Other"],
              wide: true,
            },
            { name: "message", label: "Message", type: "textarea", required: true },
          ]}
        />
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-saffron uppercase">Festival venue</p>
          <p className="mt-2 text-2xl font-bold text-maroon">{festival.venue}</p>
          <p className="text-ink/70">{festival.venueArea}</p>
          <div className="mt-5 overflow-hidden rounded-3xl border border-gold/30 bg-white">
            <iframe
              title={`Map to ${festival.venue}`}
              src={mapsEmbedUrl}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-bold text-saffron hover:text-maroon"
          >
            Get directions →
          </a>
        </div>
      </Section>
    </>
  );
}
