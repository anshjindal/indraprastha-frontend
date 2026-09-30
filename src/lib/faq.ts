import { festival, site } from "@/lib/site";

export type FaqItem = { question: string; answer: string };

export const homeFaq: FaqItem[] = [
  {
    question: "Where is the Sagarpur Ramleela held in Delhi?",
    answer: `The ${festival.name} is held at ${festival.venue}, ${festival.venueArea}. It is easy to reach from ${site.nearbyAreas.join(", ")} and the rest of West and South West Delhi.`,
  },
  {
    question: `What are the dates of Delhi Ramleela ${festival.year} at Sagarpur?`,
    answer: `The Ramleela runs for ${festival.days} evenings, from ${festival.dateLabel}. It begins with Ganesh Vandana on 10 October and ends with Ravan Vadh, the Dussehra Mohotsav and Rajtilak on 20 October.`,
  },
  {
    question: `When is Ravan Dahan (Pootla Dehen) at Sagarpur in ${festival.year}?`,
    answer: `The Pootla Dehen (Ravan Dahan) takes place on Dussehra, Tuesday 20 October ${festival.year}, at ${festival.venue}. It is the biggest evening of the festival, so please arrive early.`,
  },
  {
    question: "What is there to see besides the Ramlila?",
    answer: "Alongside the Ramlila stage there are joy rides for children, a shop and food court, Dandiya Night, and drawing and dance competitions for children and youth.",
  },
  {
    question: "Who organises the Ramleela at DDA Ground Sagarpur?",
    answer: `${site.name} (${site.hindiName}), a registered NGO founded in ${site.founded}, has organised the Ramleela every year since then, except in 2020 and 2021 when it could not be held due to COVID-19. The festival is led by ${site.chairperson.name}, ${site.chairperson.note}.`,
  },
  {
    question: "How can I volunteer, perform, set up a stall or sponsor?",
    answer: `Use the Join our Team, Participate, Event Registration and Sponsorship pages on this website, or call ${site.phones[0].name} on ${site.phones[0].display}.`,
  },
];
