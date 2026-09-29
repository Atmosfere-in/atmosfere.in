import { unsplash } from "@/lib/images";
import { planningTypes as allPlanningTypes } from "@/data/planningTypes";

// Content for atmosfere.in/hospitality. Service names still need client
// confirmation; project names, figures and quotes are placeholders.

export const hospitalityNav = {
  section: { label: "Hospitality", href: "/hospitality" },
  nav: [
    { label: "Home", href: "/hospitality" },
    { label: "Planning Types", href: "/hospitality#planning-types" },
    { label: "Case Studies", href: "/hospitality/case-studies" },
    { label: "Insights", href: "/hospitality/insights" },
  ],
  cta: { label: "Book a Consultation", href: "/hospitality/book-a-consultation" },
};

const BOOK = { label: "Book a Consultation", href: "/hospitality/book-a-consultation" };

export const hero = {
  eyebrow: "Atmosfere Hospitality · Planning & Advisory",
  title: "What should this property become?",
  intro:
    "Before anything is designed, we decide what a property should be — hotel, villa, café or venue — and plan it to perform.",
  image: {
    src: unsplash("1770887422169-7146365d2146"),
    alt: "A grand stone archway opening onto a resort and the sea",
    position: "50% 40%",
  },
  primary: BOOK,
  secondary: { label: "Explore Planning Types", href: "/hospitality#planning-types" },
  centered: true,
};

export const about = {
  eyebrow: "The Practice",
  title: "Planning first. Design follows.",
  body: [
    "Most hospitality projects go wrong long before the first tile is laid — in the wrong room mix, the wrong concept or the wrong market. Atmosfere Hospitality exists to get those decisions right.",
    "We advise owners, investors and operators on what a property should become, then carry that plan into layout, design and execution with Atmosfere Spaces.",
  ],
  image: {
    src: unsplash("1590381105924-c72589b9ef3f"),
    alt: "A wood-panelled hotel suite with warm lamps and a framed portrait",
  },
  link: { label: "About the practice", href: "/hospitality#process" },
};

export const services = {
  eyebrow: "Services",
  title: "Four ways we shape a property.",
  intro: "Engage us for one stage or all four — each one feeds the next.",
  items: [
    {
      name: "Concept & Feasibility",
      text: "Market, location and budget tested before you commit — Airbnb, hotel, villa or venue.",
      href: "/hospitality/services#concept-feasibility",
      image: {
        src: unsplash("1730342754687-956c90fb0db9"),
        alt: "Colour swatches and fabric samples fanned out on a planning table",
      },
    },
    {
      name: "Space Planning & Layout",
      text: "Room mix, guest circulation and back-of-house planned to work on day one.",
      href: "/hospitality/services#space-planning",
      image: {
        src: unsplash("1601993957728-1e56ab70c5a8"),
        alt: "A minimalist stone staircase washed in warm daylight",
      },
    },
    {
      name: "F&B / Hospitality Advisory",
      text: "Menus, kitchens and seating plans shaped around how guests actually eat and stay.",
      href: "/hospitality/services#fnb-advisory",
      image: {
        src: unsplash("1551632436-cbf8dd35adfa"),
        alt: "A restaurant dining room with timber tables, plants and copper pendant lights",
      },
    },
    {
      name: "Renovation & Repositioning",
      text: "Existing properties re-planned for a new market, a new guest or a better rate.",
      href: "/hospitality/services#repositioning",
      image: {
        src: unsplash("1776763018821-8feeaeeee0a5"),
        alt: "A refreshed hotel room with a reading chair, desk and warm lamplight",
      },
    },
  ],
};

export const projects = {
  eyebrow: "Projects",
  title: "Properties we've helped become.",
  intro: "Hospitality engagements from first feasibility to opening day.",
  items: [
    {
      href: "/hospitality/case-studies/the-cabana-resort",
      name: "The Cabana Resort",
      details: "Resort · Goa",
      side: "42 keys",
      image: {
        src: unsplash("1571003123894-1f0594d2b5d9"),
        alt: "Draped poolside cabanas along an infinity pool at dusk",
      },
    },
    {
      href: "/hospitality/case-studies/olive-court",
      name: "Olive Court",
      details: "Heritage boutique hotel · Jaipur",
      side: "18 keys",
      image: {
        src: unsplash("1570133435807-5feefeb2d196"),
        alt: "A tiled courtyard with a pool, palms and carved arches",
      },
    },
    {
      href: "/hospitality/case-studies/canopy-cafe",
      name: "Canopy Café",
      details: "Café & bar · Bengaluru",
      side: "80 covers",
      image: {
        src: unsplash("1656533391146-dad89b5a8b40"),
        alt: "A café with globe pendants, plants and leather seating",
      },
    },
    {
      href: "/hospitality/case-studies/the-pink-house",
      name: "The Pink House",
      details: "Private villa stay · Udaipur",
      side: "5 suites",
      image: {
        src: unsplash("1683914791856-040e5de792b3"),
        alt: "A pink-walled villa with a pool and garden umbrella",
      },
    },
    {
      href: "/hospitality/case-studies/horizon-villas",
      name: "Horizon Villas",
      details: "Villa stays · Kerala",
      side: "6 villas",
      image: {
        src: unsplash("1782113286208-06b91ed3ad05"),
        alt: "A curved lounge beside an infinity pool overlooking the sea",
      },
    },
  ],
};

// Anchored tiles: /hospitality#hotel-resort etc. (linked from /spaces).
export const planningTypes = {
  id: "planning-types",
  eyebrow: "Planning Types",
  title: "Five kinds of property. Five different questions.",
  intro:
    "An Airbnb, a resort and a banquet hall succeed for entirely different reasons. We plan each one on its own terms.",
  anchors: true,
  types: allPlanningTypes.map((type) => ({
    ...type,
    href: `/hospitality/${type.slug}`,
  })),
};

export const process = {
  eyebrow: "How We Work",
  title: "Advisory-led, from question to opening.",
  intro:
    "Our sequence starts with understanding, not drawing — so every design decision traces back to a business decision.",
  image: {
    src: unsplash("1742844552700-3926862c5311"),
    alt: "An elegant hotel interior opening onto a garden view",
    caption: "Planning before design",
  },
  steps: [
    {
      name: "Understand",
      text: "The site, the market, the budget and what success looks like for you.",
      icon: "understand",
    },
    {
      name: "Plan",
      text: "Concept, room or seating mix, and a layout that makes the numbers work.",
      icon: "plan",
    },
    {
      name: "Advise",
      text: "Clear recommendations on design, operators, phasing and spend.",
      icon: "advise",
    },
    {
      name: "Execute",
      text: "Delivered with Atmosfere Spaces — the plan built exactly as advised.",
      icon: "execute",
    },
  ],
  link: { label: "Book a consultation", href: BOOK.href },
};

export const founder = {
  quote:
    "The most expensive mistake in hospitality is building the wrong thing beautifully. We make sure the question is right before the answer is drawn.",
  name: "Founder & Principal Consultant",
  role: "Atmosfere Hospitality",
  image: {
    src: unsplash("1581065178047-8ee15951ede6"),
    alt: "Portrait of a hospitality consultant in a black blazer",
  },
};

export const split = [
  {
    eyebrow: "Private estates",
    title: "Residential",
    text: "Villas, cottages and private estates — planned as homes that can also host.",
    href: "/hospitality#villa-cottage",
    image: {
      src: unsplash("1582610116397-edb318620f90"),
      alt: "A garden villa with a long green pool and a white pavilion",
    },
  },
  {
    eyebrow: "Hotels & venues",
    title: "Commercial",
    text: "Hotels, resorts, restaurants and banquets — planned to perform from opening night.",
    href: "/hospitality#hotel-resort",
    image: {
      src: unsplash("1742844552193-2fd3425cd26d"),
      alt: "A grand hotel lobby filled with sunlight",
    },
  },
];

export const caseStudies = {
  title: "How the right question changed the property.",
  items: [
    {
      href: "/hospitality/case-studies/the-dusk-pool-retreat",
      tag: "Resort · Konkan coast",
      title: "The Dusk Pool Retreat",
      summary:
        "A plot zoned for villas, re-planned as a 24-key retreat whose pool terrace now draws guests who aren't even staying.",
      image: {
        src: unsplash("1759805583291-704d7af07682"),
        alt: "Lounge chairs and umbrellas beside a resort pool at dusk",
      },
    },
    {
      href: "/hospitality/case-studies/the-linden-rooms",
      tag: "Boutique hotel · Shimla",
      title: "The Linden Rooms",
      summary:
        "A tired guesthouse repositioned as 12 boutique rooms — fewer keys, a far higher rate, and a waitlist in season.",
      image: {
        src: unsplash("1761757821641-3b347c034042"),
        alt: "A boutique hotel bedroom with a metal bed frame and framed artwork",
      },
    },
    {
      href: "/hospitality/case-studies/the-garden-table",
      tag: "Restaurant · Mumbai",
      title: "The Garden Table",
      summary:
        "An all-day café re-planned around a planted dining room and an open kitchen, turning lunch into an evening destination.",
      image: {
        src: unsplash("1636405189493-181ecf851006"),
        alt: "A restaurant built around a tree under woven pendant lights",
      },
    },
  ],
};

export const trust = {
  image: {
    src: unsplash("1790115586343-33229df06aea"),
  },
  stats: [
    { value: "40+", label: "Properties advised" },
    { value: "6+", label: "Years in hospitality" },
    { value: "5", label: "Planning types" },
    { value: "1", label: "Plan, carried to opening" },
  ],
  // Placeholder testimonials — replace with real, attributable client quotes.
  testimonials: [
    {
      quote:
        "We came in wanting eight villas. They showed us why a 24-key retreat would earn more — and they were right.",
      name: "Owner",
      project: "Resort · Konkan coast",
    },
    {
      quote:
        "The feasibility study alone saved us from the wrong operator. Everything after that was planned around real numbers.",
      name: "Investor",
      project: "Boutique hotel · Shimla",
    },
    {
      quote:
        "They rebuilt our seating plan around how guests actually use the room. Evenings went from quiet to fully booked.",
      name: "Restaurateur",
      project: "Restaurant · Mumbai",
    },
  ],
};

export const closing = {
  title: "We don't just plan spaces, we plan what a property can become.",
  quote: true,
  image: {
    src: unsplash("1520250497591-112f2f40a3f4"),
  },
  cta: BOOK,
};
