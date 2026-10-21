import { unsplash } from "@/lib/images";
import { planningTypes as allPlanningTypes } from "@/data/planningTypes";

// Content for atmosfere.in/spaces. Project names, figures and quotes are
// placeholders until the client supplies real portfolio content.

export const spacesNav = {
  section: { label: "Spaces", href: "/spaces" },
  nav: [
    { label: "Home", href: "/spaces" },
    { label: "Projects", href: "/spaces/projects" },
    { label: "Case Studies", href: "/spaces/case-studies" },
    { label: "Design Process", href: "/spaces/process" },
    { label: "About", href: "/spaces/about" },
  ],
  cta: { label: "Get a Quote", href: "/spaces/get-a-quote" },
};

export const hero = {
  eyebrow: "Atmosfere Spaces · Turnkey Interiors",
  title: "Interiors, designed and delivered end to end.",
  intro:
    "From the first sketch to the final styled shelf, one studio carries your home or workplace through design, execution and handover.",
  image: {
    src: unsplash("1760067537540-cc36c1700d7e"),
    alt: "A warm, sunlit open kitchen and living space with floor-to-ceiling glass doors opening onto a tropical garden",
    position: "50% 55%",
  },
  primary: { label: "Get a Quote", href: "/spaces/get-a-quote" },
  secondary: { label: "View Projects", href: "/spaces/projects" },
};

export const about = {
  eyebrow: "The Studio",
  title: "One team, from concept to keys.",
  body: [
    "Atmosfere Spaces is a design-and-build studio. The people who draw your home are the people who build it — so what you approve on paper is what you walk into.",
    "We work across apartments, villas, offices and retail, with a single point of contact, a fixed scope and a finish that holds up long after the photographs.",
  ],
  image: {
    src: unsplash("1782795799287-a3ca32de0d72"),
    alt: "A warm timber-lined dining room with a round table and a framed mountain print",
  },
  link: { label: "More about us", href: "/spaces/about" },
};

export const projects = {
  eyebrow: "Featured Projects",
  title: "Selected work.",
  intro: "Homes and workplaces we've designed and built, start to finish.",
  items: [
    {
      href: "/spaces/projects/the-aranya",
      name: "The Aranya",
      details: "Sample flat · Noida Extension",
      side: "1,500 sq ft",
      image: {
        src: "/images/spaces/the-aranya/hero.jpg",
        alt: "The living room of the sample flat, with pale sofas on a marble-veined wall and a fluted oak screen",
      },
    },
    {
      href: "/spaces/projects/villa-rise-resort-residency",
      name: "Villa at Rise Resort Residency",
      details: "Villa · New build",
      side: "1,995 sq ft",
      image: {
        src: "/images/spaces/villa-rise-resort-residency/hero.jpg",
        alt: "The living room, with tan leather sofas and full-height curtains opening to the balcony",
      },
    },
    {
      href: "/spaces/projects/arihant",
      name: "Arihant",
      details: "Workplace · Delhi NCR",
      side: "One floor",
      image: {
        src: "/images/spaces/arihant/hero.jpg",
        alt: "The open office, with white workstations under green acoustic baffles",
      },
    },
    {
      href: "/spaces/projects/the-linen-house",
      name: "The Linen House",
      details: "Residence · Gurugram",
      side: "4,200 sq ft",
      image: {
        src: unsplash("1705326701287-346fc37a2c86"),
        alt: "A calm living room with curved cream sofas and a sculptural coffee table",
      },
    },
    {
      href: "/spaces/projects/walnut-and-stone",
      name: "Walnut & Stone",
      details: "Apartment · Mumbai",
      side: "2,600 sq ft",
      image: {
        src: unsplash("1688647063090-36f36f692d95"),
        alt: "A living room with a walnut and stone wall of lit shelving and soft grey sofas",
      },
    },
    {
      href: "/spaces/projects/the-arch-house",
      name: "The Arch House",
      details: "Residence · New Delhi",
      side: "5,800 sq ft",
      image: {
        src: unsplash("1750420556288-d0e32a6f517b"),
        alt: "A bedroom with an arched timber headboard wall and soft cove lighting",
      },
    },
    {
      href: "/spaces/projects/the-quiet-study",
      name: "The Quiet Study",
      details: "Residence · Dehradun",
      side: "3,100 sq ft",
      image: {
        src: unsplash("1642541070065-3912f347e7c6"),
        alt: "A quiet bedroom with a fluted wall, abstract art and a halo pendant",
      },
    },
    {
      href: "/spaces/projects/atelier-dining",
      name: "Atelier Dining",
      details: "Commercial · F&B · Gurugram",
      side: "1,900 sq ft",
      image: {
        src: unsplash("1753800558729-7929703f81de"),
        alt: "Globe pendant lights over a dining table with sculptural branches",
      },
    },
  ],
};

// Cross-sell: each tile deep-links to the same type on the Hospitality page.
export const planningTypes = {
  eyebrow: "Atmosfere Hospitality",
  title: "Planning a hospitality project?",
  intro:
    "Hotels, resorts and villas start with a different question — not how the property should look, but what it should become. Our Hospitality practice plans it before we build it.",
  action: { label: "Explore Hospitality", href: "/hospitality" },
  image: {
    src: unsplash("1520250497591-112f2f40a3f4"),
    alt: "A resort pool lined with palms and thatched pavilions",
  },
  types: allPlanningTypes.map((type) => ({
    ...type,
    href: `/hospitality#${type.slug}`,
  })),
};

// Same room, same camera angle. Both are placeholders edited from one stock
// photo — before: bare walls, no lamps, dated brown sofa, dry twigs, flat
// yellowed light; after: styled, with fresh greenery. Replace both with the
// client's real before/after shots when available.
export const beforeAfter = {
  eyebrow: "Transformation",
  title: "From a plain room to a home that feels finished.",
  project: "The Linen House, Gurugram",
  before: {
    src: "/images/spaces/linen-house-before.webp",
    alt: "Before: the living room with bare walls, flat yellowed lighting and no styling",
    asIs: true,
  },
  after: {
    src: "/images/spaces/linen-house-after.webp",
    alt: "After: a cream bouclé sofa, table lamps, framed abstract art and fresh greenery in a white vase",
  },
};

export const process = {
  eyebrow: "How We Work",
  title: "Four stages. One team. No hand-offs.",
  intro:
    "Every material is chosen in the studio, every detail is drawn before it's built, and the same team sees it through to handover.",
  steps: [
    {
      name: "Consult",
      text: "We listen first — how you live, what you need, and what you want to spend.",
      image: {
        src: unsplash("1646987916641-1f3c8992daa2"),
        alt: "A sculpted lounge with soft seating and a large abstract artwork",
      },
    },
    {
      name: "Design",
      text: "Layouts, 3D views, materials and a fixed quote, signed off before work begins.",
      image: {
        src: unsplash("1776362658611-2067c9ded1d1"),
        alt: "A drawn-to-detail lounge with a fluted timber wall and framed art",
      },
    },
    {
      name: "Execute",
      text: "Our own site team builds it, with weekly updates and one point of contact.",
      image: {
        src: unsplash("1757524826474-efe6b2758055"),
        alt: "A stone-clad bathroom with a sculpted dark bathtub and a garden view",
      },
    },
    {
      name: "Handover",
      text: "Snag-checked, styled and handed over — ready to live in from day one.",
      image: {
        src: unsplash("1758448755952-42b404bc6f39"),
        alt: "A finished living room with a crystal chandelier, curved sofa and warm lighting",
      },
    },
  ],
  link: { label: "See the full process", href: "/spaces/process" },
};

// Placeholder names and portraits until the founders supply their own.
export const founders = {
  eyebrow: "Founders' Note",
  title: "Two founders. One promise to every space.",
  people: [
    {
      name: "Co-founder",
      role: "Principal Designer",
      quote:
        "A beautiful room isn't the goal. A room that still feels right ten years from now — that's the work.",
      image: {
        src: unsplash("1772404245810-b8b0a05c731e"),
        alt: "Portrait of the co-founder in a cream suit, seated in a dark timber room",
      },
    },
    {
      name: "Co-founder",
      role: "Strategy & Hospitality",
      quote:
        "We only promise what we can build — and then we build exactly that, on the date and the budget we agreed.",
      image: {
        src: unsplash("1762341124796-530c0085f7d8"),
        alt: "Portrait of the co-founder, seated, in a tailored black outfit",
      },
    },
  ],
};

export const split = [
  {
    title: "Residential",
    text: "Homes, apartments and villas — designed around the way you live.",
    href: "/spaces/projects?type=residential",
    image: {
      src: unsplash("1582610116397-edb318620f90"),
      alt: "A garden villa with a long green pool and a white pavilion",
    },
  },
  {
    title: "Commercial",
    text: "Offices, retail and F&B — spaces that work as hard as your brand.",
    href: "/spaces/projects?type=commercial",
    image: {
      src: unsplash("1742844552193-2fd3425cd26d"),
      alt: "A grand, sunlit lobby with marble floors and tall windows",
    },
  },
];

export const caseStudies = {
  title: "The thinking behind the finish.",
  items: [
    {
      href: "/spaces/projects/the-aranya",
      tag: "Sample flat · Noida Extension",
      title: "The Aranya",
      summary:
        "A 2BHK sample flat for a high-rise, designed to be aspirational and practical at once — the home a buyer can picture living in.",
      image: {
        src: "/images/spaces/the-aranya/concept.jpg",
        alt: "The dining room of the sample flat, with a round table, green chairs and curtains",
      },
    },
    {
      href: "/spaces/projects/arihant",
      tag: "Workplace · Delhi NCR",
      title: "Arihant",
      summary:
        "A third-floor office planned as one open room — workstations under green acoustic baffles, a breakout table in the middle, and the quiet rooms at the edges.",
      image: {
        src: "/images/spaces/arihant/chapter-1.jpg",
        alt: "Workstations in long runs facing the 'Team Work' feature wall",
      },
    },
    {
      href: "/spaces/projects/villa-rise-resort-residency",
      tag: "Villa · Rise Resort Residency",
      title: "Villa at Rise Resort Residency",
      summary:
        "A new-build 3BHK home designed on a tight budget — clean lines, a functional plan and cost-effective finishes that still read as sophisticated.",
      image: {
        src: "/images/spaces/villa-rise-resort-residency/chapter-3.jpg",
        alt: "The slate-blue kitchen with a marble-topped breakfast counter and tan stools",
      },
    },
  ],
};

export const trust = {
  image: {
    src: unsplash("1702814160779-4a88cfb330c7"),
  },
  stats: [
    { value: "120+", label: "Projects delivered" },
    { value: "8+", label: "Years in practice" },
    { value: "14", label: "Cities across India" },
    { value: "1", label: "Team, concept to keys" },
  ],
  // Placeholder testimonials — replace with real, attributable client quotes.
  testimonials: [
    {
      quote:
        "They drew it, built it and styled it — and the finished home looks exactly like the drawings we signed off.",
      name: "Homeowner",
      project: "Residence · Gurugram",
    },
    {
      quote:
        "One point of contact for eleven months. Weekly updates, no surprises on cost, and a handover date they actually met.",
      name: "Founder, design-led startup",
      project: "Workplace · Bengaluru",
    },
    {
      quote:
        "Our apartment finally feels calm. Every cupboard has a purpose and every lamp is exactly where it should be.",
      name: "Homeowners",
      project: "Apartment · Mumbai",
    },
  ],
};

export const closing = {
  title: "Ready to start a project?",
  text: "Tell us about your space. We'll call within 24 hours to talk scope, budget and timeline.",
  image: {
    src: unsplash("1760072513367-55182245e76c"),
    position: "50% 55%",
  },
  cta: { label: "Get a Quote", href: "/spaces/get-a-quote" },
};

// Spaces footer: dark, with its own closing line and link columns.
export const footer = {
  theme: "dark",
  section: { label: "Spaces", href: "/spaces" },
  tagline:
    "Turnkey interiors for homes and workplaces — designed, built and styled by one studio.",
  cta: {
    title: "Let's design a space that feels like yours.",
    text: "Share a few details about your home or workplace. We'll call within 24 hours to talk scope, budget and timeline.",
    primary: { label: "Get a Quote", href: "/spaces/get-a-quote" },
  },
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Home", href: "/spaces" },
        { label: "Projects", href: "/spaces/projects" },
        { label: "Case Studies", href: "/spaces/case-studies" },
        { label: "Design Process", href: "/spaces/process" },
        { label: "About Us", href: "/spaces/about" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Residential Interiors", href: "/spaces/projects?type=residential" },
        { label: "Commercial Interiors", href: "/spaces/projects?type=commercial" },
        { label: "Turnkey Execution", href: "/spaces/process" },
        { label: "Get a Quote", href: "/spaces/get-a-quote" },
      ],
    },
  ],
  crossLinks: [
    { label: "Hospitality", href: "/hospitality" },
    { label: "Living", href: null },
  ],
};
