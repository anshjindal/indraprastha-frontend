import type { FaqItem } from "@/lib/faq";
import { festival, site } from "@/lib/site";

const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;
const eventId = `${site.url}/#ramleela-${festival.year}`;

const registeredAddress = {
  "@type": "PostalAddress",
  streetAddress: site.offices[0].lines[0],
  addressLocality: "West Sagarpur, New Delhi",
  addressRegion: "Delhi",
  postalCode: "110046",
  addressCountry: "IN",
};

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": orgId,
  name: site.name,
  alternateName: [site.hindiName, site.shortName],
  url: site.url,
  logo: `${site.url}/images/iss-ngo-logo.png`,
  image: `${site.url}/images/iss-ngo-logo.png`,
  description: site.description,
  email: site.email,
  telephone: site.phones[0].href.replace("tel:", ""),
  foundingDate: String(site.founded),
  address: registeredAddress,
  areaServed: { "@type": "City", name: "New Delhi" },
  sameAs: Object.values(site.social),
  contactPoint: site.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.href.replace("tel:", ""),
    name: phone.name,
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["Hindi", "English"],
  })),
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: site.name,
  alternateName: [site.hindiName, `${festival.seoName} Sagarpur`],
  url: site.url,
  inLanguage: ["en-IN", "hi-IN"],
  publisher: { "@id": orgId },
};

export const eventLd = {
  "@context": "https://schema.org",
  "@type": "Festival",
  "@id": eventId,
  name: `${festival.seoName} ${festival.year} – ${festival.name}`,
  alternateName: [`Sagarpur Ramlila ${festival.year}`, `${festival.hindiName} ${festival.year}`],
  description: `${festival.days} evenings of Ramlila at ${festival.venue}, New Delhi, ending with Ravan Dahan (Pootla Dehen) on Dussehra. Includes joy rides, a food court, Dandiya Night and cultural competitions.`,
  startDate: festival.startDate,
  endDate: festival.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  inLanguage: "hi-IN",
  isAccessibleForFree: true,
  image: [`${site.url}${festival.poster}`, `${site.url}/opengraph-image`],
  url: `${site.url}/schedule`,
  location: {
    "@type": "Place",
    name: festival.venue,
    address: {
      "@type": "PostalAddress",
      streetAddress: festival.venue,
      addressLocality: "Sagarpur, New Delhi",
      addressRegion: "Delhi",
      postalCode: "110046",
      addressCountry: "IN",
    },
  },
  organizer: { "@type": "NGO", "@id": orgId, name: site.name, url: site.url },
};

export function breadcrumbLd(path: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };
}

export function faqLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
