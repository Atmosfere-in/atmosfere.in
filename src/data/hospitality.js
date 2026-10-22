import { unsplash } from "@/lib/images";
import { planningTypes as allPlanningTypes } from "@/data/planningTypes";

// Content for atmosfere.in/hospitality. Service names still need client
// confirmation; project names, figures and quotes are placeholders.

export const hospitalityNav = {
  section: { label: "Hospitality", href: "/hospitality" },
  nav: [
    { label: "Home", href: "/hospitality" },
    { label: "Projects", href: "/hospitality/projects" },
    { label: "Case Studies", href: "/hospitality/case-studies" },
    { label: "Planning Types", href: "/hospitality#planning-types" },
  ],
  cta: { label: "Book a Consultation", href: "/hospitality/book-a-consultation" },
};

const BOOK = { label: "Book a Consultation", href: "/hospitality/book-a-consultation" };

export const hero = {
  eyebrow: "Atmosfere Hospitality · Planning & Advisory",
  title: "What should this property become?",
  intro:
    "Before anything is designed, we decide what a property should be — hotel, resort, villa or venue — and plan it to perform.",
  // The poster frame of the video: shown while it loads, on reduced motion,
  // and wherever video can't play.
  image: {
    src: "/images/hospitality/hero-poster.jpg",
    alt: "The lobby of a wellness resort, with a chandelier over a marble floor",
    position: "50% 50%",
  },
  video: { src: "/videos/hospitality-hero.mp4", position: "50% 50%" },
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

export const projects = {
  eyebrow: "Projects",
  title: "Properties we've helped become.",
  intro: "Hospitality engagements from first feasibility to opening day.",
  items: [
    {
      href: "/hospitality/case-studies/the-punarnava-spa-and-resort",
      name: "The Punarnava Spa & Resort",
      details: "Wellness resort · Dehradun",
      side: "90,000 sq ft",
      image: {
        src: "/images/hospitality/punarnava/hero.jpg",
        alt: "The lobby of the new building, with a chandelier over a marble floor and a sculpture at its centre",
      },
    },
    {
      href: "/hospitality/case-studies/jim-corbett-resort-dhela",
      name: "Jim Corbett Resort, Dhela",
      details: "Resort · Jim Corbett",
      side: "15 keys",
      image: {
        src: "/images/hospitality/jim-corbett-resort-dhela/hero.jpg",
        alt: "The four-bedroom duplex villa, set among forest trees",
      },
    },
    {
      href: "/hospitality/case-studies/moradabad-sourcing-convention-centre",
      name: "Moradabad Sourcing & Convention Centre",
      details: "Convention centre & hotel · Moradabad",
      side: "70 keys",
      image: {
        src: "/images/hospitality/moradabad-sourcing-convention-centre/hero.jpg",
        alt: "The proposed building, with a brass-toned lattice tower and a glass rotunda at the corner",
      },
    },
  ],
};

// Anchored tiles: /hospitality#hotel-resort etc. (linked from /spaces).
export const planningTypes = {
  id: "planning-types",
  eyebrow: "Planning Types",
  title: "Two kinds of property. Two different questions.",
  intro:
    "A resort and a banquet hall succeed for entirely different reasons. We plan each one on its own terms.",
  anchors: true,
  // Only the two planning types the practice currently shows work for.
  types: allPlanningTypes
    .filter((type) => ["hotel-resort", "banquet"].includes(type.slug))
    .map((type) => ({
      ...type,
      href: `/hospitality/${type.slug}`,
    })),
};

export const process = {
  eyebrow: "How We Work",
  title: "Advisory-led, from question to opening.",
  intro:
    "Our sequence starts with understanding, not drawing — so every design decision traces back to a business decision.",
  steps: [
    {
      name: "Understand",
      text: "The site, the market, the budget and what success looks like for you.",
      image: {
        src: unsplash("1562790351-d273a961e0e9"),
        alt: "An aerial view of a resort with a winding pool among palms",
      },
    },
    {
      name: "Plan",
      text: "Concept, room mix, and a layout that makes the numbers work.",
      image: {
        src: unsplash("1731336478850-6bce7235e320"),
        alt: "A hotel suite with a sculpted timber headboard wall and soft lighting",
      },
    },
    {
      name: "Advise",
      text: "Clear recommendations on design, operators, phasing and spend.",
      image: {
        src: unsplash("1660557989695-14fac79c086d"),
        alt: "A dark marble hotel reception desk lit by warm pendant lights",
      },
    },
    {
      name: "Execute",
      text: "Delivered with Atmosfere Spaces — the plan built exactly as advised.",
      image: {
        src: unsplash("1742844552193-2fd3425cd26d"),
        alt: "A grand, sunlit hotel lobby with marble floors and tall windows",
      },
    },
  ],
  link: { label: "Book a consultation", href: BOOK.href },
};

// Placeholder names and portraits until the founders supply their own.
export const founders = {
  eyebrow: "Founders' Note",
  title: "Two founders. One question before every plan.",
  people: [
    {
      name: "Co-founder",
      role: "Principal Designer",
      quote:
        "The most expensive mistake in hospitality is building the wrong thing beautifully. We make sure the question is right before the answer is drawn.",
      image: {
        src: unsplash("1772404245810-b8b0a05c731e"),
        alt: "Portrait of the co-founder in a cream suit, seated in a dark timber room",
      },
    },
    {
      name: "Co-founder",
      role: "Strategy & Hospitality",
      quote:
        "Every property has a guest it's meant for. Our work is to find that guest before the first wall goes up.",
      image: {
        src: unsplash("1762341124796-530c0085f7d8"),
        alt: "Portrait of the co-founder, seated, in a tailored black outfit",
      },
    },
  ],
};

export const caseStudies = {
  title: "How the right question changed the property.",
  items: [
    {
      href: "/hospitality/case-studies/the-punarnava-spa-and-resort",
      tag: "Wellness resort · Dehradun",
      title: "The Punarnava Spa & Resort",
      summary:
        "A new 90,000 sq ft building planned around the five natural elements, so luxury, Ayurveda and everyday operations share one calm design language.",
      image: {
        src: "/images/hospitality/punarnava/concept.jpg",
        alt: "The reception desk, with a brass mandala on a stone wall and glass pendants above",
      },
    },
    {
      href: "/hospitality/case-studies/jim-corbett-resort-dhela",
      tag: "Resort · Dhela, Jim Corbett",
      title: "Jim Corbett Resort, Dhela",
      summary:
        "A forest-edge plot planned as a 15-key retreat: cottages and a villa around a central pool, with the banquet hall and cafe at the arrival.",
      image: {
        src: "/images/hospitality/jim-corbett-resort-dhela/concept.jpg",
        alt: "The round, thatched reception and cafe",
      },
    },
    {
      href: "/hospitality/case-studies/moradabad-sourcing-convention-centre",
      tag: "Convention centre & hotel · Moradabad",
      title: "Moradabad Sourcing & Convention Centre",
      summary:
        "A plot in the brass city, first briefed as a hotel, re-planned as the place buyers come to see, source, meet and stay — exhibition, convention halls and 70 rooms in one building.",
      image: {
        src: "/images/hospitality/moradabad-sourcing-convention-centre/chapter-3.jpg",
        alt: "The glass rotunda at the entrance of the proposed building",
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
    { value: "4", label: "Planning types" },
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
        "Our hall only earned on wedding weekends. Their re-plan made it work for conferences and private dinners too — it's booked most weekdays now.",
      name: "Venue owner",
      project: "Banquet · Indore",
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

// Hospitality footer: light stone, with its own closing line and columns.
export const footer = {
  theme: "light",
  section: { label: "Hospitality", href: "/hospitality" },
  tagline:
    "Planning and advisory for hotels, resorts, villas and banquets — deciding what a property should become.",
  cta: {
    title: "What should your property become?",
    text: "Book a 30-minute consultation to talk through your site, concept and budget.",
    primary: BOOK,
  },
  columns: [
    {
      title: "Planning Types",
      links: allPlanningTypes.map((type) => ({
        label: type.name,
        href: `/hospitality#${type.slug}`,
      })),
    },
    {
      title: "The Practice",
      links: [
        { label: "Case Studies", href: "/hospitality/case-studies" },
        { label: "Book a Consultation", href: BOOK.href },
      ],
    },
  ],
  crossLinks: [
    { label: "Spaces", href: "/spaces" },
    { label: "Living", href: null },
  ],
};
