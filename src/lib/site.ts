export const site = {
  name: "Indraprastha Sewa Samiti",
  shortName: "ISS",
  slogan: "The world is one family",
  tagline: "Hindu temple and heritage centre in Norval, Ontario",
  description:
    "Indraprastha Sewa Samiti is a Hindu temple in Norval, Halton Hills, Ontario. Visit for darshan and festivals. Open daily 7:00 AM – 8:00 PM. 9386 Tenth Line North.",
  url: "https://indraprastha-frontend.vercel.app",
  email: "radhasarveshwarheritage@outlook.com",
  hours: {
    label: "Open daily",
    time: "7:00 AM – 8:00 PM",
    schema: "Mo-Su 07:00-20:00",
    opens: "07:00",
    closes: "20:00",
  },
  address: {
    line1: "9386 Tenth Line North",
    line2: "Norval, ON L0P 1K0",
    city: "Norval",
    region: "Ontario",
    regionCode: "ON",
    postal: "L0P 1K0",
    country: "Canada",
    countryCode: "CA",
    /** Official Google listing shared by the centre */
    googleListingUrl: "https://share.google/N76Eq6bWxRppb4Gg2",
    googleKnowledgeGraphId: "/g/11zdskbnnb",
    mapsUrl: "https://share.google/N76Eq6bWxRppb4Gg2",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=9386+Tenth+Line+North,+Norval,+ON+L0P+1K0",
    embedUrl:
      "https://www.google.com/maps?q=9386+Tenth+Line+North,+Norval,+ON+L0P+1K0&output=embed",
  },
  geo: {
    latitude: 43.6467673,
    longitude: -79.858421,
  },
  phones: [
    {
      id: "main",
      display: "+1 647-448-4975",
      tel: "+16474484975",
      href: "tel:+16474484975",
    },
    {
      id: "temple",
      display: "+1 647-710-9584",
      tel: "+16477109584",
      href: "tel:+16477109584",
    },
  ],
  keywords: [
    "Indraprastha Sewa Samiti",
    "Hindu temple Norval",
    "Hindu temple Halton Hills",
    "Hindu temple GTA",
    "Norval temple",
    "Sanatan Dharma Ontario",
    "Hindu heritage centre Canada",
    "temple near Brampton",
    "temple near Georgetown",
  ],
} as const;
