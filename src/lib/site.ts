export const site = {
  name: "Indraprastha Sewa Samiti",
  shortName: "ISS",
  hindiName: "इंद्रप्रस्थ सेवा समिति",
  tagline: "Dharma • Sanskriti • Sewa • Samaj",
  hindiTagline: "धर्म • संस्कृति • सेवा • समाज",
  description:
    "Indraprastha Sewa Samiti is a registered NGO in New Delhi, founded in 2018, that organises the annual Ramleela & Dusshera Mohotsav at DDA Ground Sagarpur and runs social welfare drives for the community.",
  url: "https://indraprastha-frontend.vercel.app",
  email: "indraprasthasewasamiti@gmail.com",
  donateUrl: "https://pages.razorpay.com/ramleelasagarpur",
  founded: 2018,
  registration: "Registered society under the Societies Registration Act",
  chairperson: {
    name: "Smt. Poonam Jindal",
    title: "Chairperson, Dusshera Mohatsav Sagarpur & Indraprastha Sewa Samiti",
    note: "Ex-Municipal Councillor, Sagarpur",
    photo: "/images/poonam-jindal.jpg",
  },
  offices: [
    {
      id: "registered",
      label: "Registered Office",
      lines: ["RZ-37/284, Street No. 1", "West Sagarpur, New Delhi - 110046"],
    },
    {
      id: "correspondence",
      label: "Correspondence Office",
      lines: ["RZ-10A, Main Road, Indra Park", "Palam Colony, New Delhi - 110045"],
    },
  ],
  phones: [
    {
      id: "poonam",
      name: "Smt. Poonam Jindal",
      display: "+91 91364 55881",
      href: "tel:+919136455881",
    },
    {
      id: "nand",
      name: "Sh. Nand Kishore",
      display: "+91 99581 14433",
      href: "tel:+919958114433",
    },
  ],
  /** Number that receives form submissions sent via WhatsApp (country code, no +). */
  whatsapp: "919136455881",
  social: {
    facebook: "https://www.facebook.com/indraprasthasewa",
    instagram: "https://www.instagram.com/indraprasthasewa",
  },
  instagramHandle: "indraprasthasewa",
  hashtags: ["#RamleelaSagarpur", "#IndraprasthaSewaSamiti", "#DussheraMohotsav"],
  keywords: [
    "Indraprastha Sewa Samiti",
    "Ramleela Sagarpur",
    "Dussehra Sagarpur",
    "Dusshera Mohotsav Sagarpur",
    "Ramlila DDA Ground Sagarpur",
    "Ramleela New Delhi 2026",
    "NGO Sagarpur",
    "NGO South West Delhi",
  ],
} as const;

export const festival = {
  name: "Ramleela & Dusshera Mohotsav Sagarpur",
  hindiName: "रामलीला दशहरा महोत्सव",
  year: 2026,
  startDate: "2026-10-10",
  endDate: "2026-10-20",
  dateLabel: "10 – 20 October 2026",
  days: 11,
  venue: "DDA Ground, Sagarpur",
  venueArea: "South West Delhi, New Delhi - 110046",
  mapsQuery: "DDA Ground Sagarpur New Delhi 110046",
  dailyFootfall: "20,000",
  totalFootfall: "5,00,000+",
  poster: "/images/schedule-2026.jpg",
} as const;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(festival.mapsQuery)}&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(festival.mapsQuery)}`;

export type NavLink = { href: string; label: string };
export type NavGroup = { label: string; items: NavLink[] };

export const navigation: (NavLink | NavGroup)[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/schedule", label: "Schedule" },
  {
    label: "Get Involved",
    items: [
      { href: "/join-our-team", label: "Join our Team" },
      { href: "/event-registration", label: "Event Registration" },
      { href: "/participate", label: "Participate" },
    ],
  },
  {
    label: "Support Us",
    items: [
      { href: "/sponsorship", label: "Sponsorship" },
      { href: site.donateUrl, label: "Donate" },
    ],
  },
  {
    label: "Media",
    items: [
      { href: "/photos", label: "Photos" },
      { href: "/social-media", label: "Social Media" },
    ],
  },
  {
    label: "Governance",
    items: [
      { href: "/tenders", label: "Tenders" },
      { href: "/quality-policy", label: "Quality Policy" },
      { href: "/quality-manual", label: "Quality Manual" },
    ],
  },
  { href: "/contact", label: "Contact Us" },
];

export const isExternal = (href: string) => href.startsWith("http");

export const allPages: NavLink[] = navigation
  .flatMap((entry) => ("items" in entry ? entry.items : [entry]))
  .filter((page) => !isExternal(page.href));
