import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Festivals } from "@/components/Festivals";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["HinduTemple", "PlaceOfWorship", "LocalBusiness"],
    "@id": `${site.url}/#temple`,
    name: site.name,
    alternateName: ["Indraprastha Sewa", "ISS"],
    description: site.description,
    url: site.url,
    image: [`${site.url}/images/logo.png`, `${site.url}/og.jpg`],
    logo: `${site.url}/images/logo.png`,
    email: site.email,
    telephone: site.phones.map((p) => p.tel),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.regionCode,
      postalCode: site.address.postal,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.address.googleListingUrl,
    sameAs: [
      site.address.googleListingUrl,
      `https://www.google.com/search?kgmid=${encodeURIComponent(site.address.googleKnowledgeGraphId)}&q=${encodeURIComponent(site.name)}`,
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
    areaServed: [
      "Norval",
      "Halton Hills",
      "Georgetown",
      "Brampton",
      "Greater Toronto Area",
      "Ontario",
    ],
    isAccessibleForFree: true,
    currenciesAccepted: "CAD",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phones[0].tel,
        contactType: "customer service",
        email: site.email,
        areaServed: "CA",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Festivals />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
