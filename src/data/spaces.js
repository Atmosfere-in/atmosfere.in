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
  // The studio's own render: a living room with a timber screen, a
  // hand-painted wallpaper and a cylindrical pendant.
  image: {
    src: "/images/spaces/hero.jpg",
    alt: "A living room with a sculpted timber screen, a hand-painted green wallpaper, a printed pendant lamp and marble-topped tables",
    position: "50% 50%",
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
    src: unsplash("1758448755952-42b404bc6f39"),
    alt: "A finished living room with a crystal chandelier, curved cream sofas and warm lighting",
  },
  link: { label: "More about us", href: "/spaces/about" },
};

export const projects = {
  eyebrow: "Featured Projects",
  title: "Selected work.",
  intro: "Homes and workplaces we've designed and built, start to finish.",
  items: [
    {
      href: "/spaces/projects/arihant",
      name: "Arihant",
      details: "Commercial compound · Delhi NCR",
      side: "10,000 sq ft",
      image: {
        src: "/images/spaces/arihant/gallery-3.jpg",
        alt: "The Arihant court at night: a water feature with lit stone edges, umbrella tables and the kiosk beyond",
      },
    },
    {
      href: "/spaces/projects/villa-rise-resort-residency",
      name: "Villa at Rise Resorts",
      details: "Villa · Greater Noida West",
      side: "5,800 sq ft",
      image: {
        src: "/images/spaces/villa-rise-resort-residency/hero.jpg",
        alt: "The living room, with tan leather sofas and full-height curtains opening to the balcony",
      },
    },
    {
      href: "/spaces/projects/tower-10-202",
      name: "Tower 10 – 202",
      details: "Apartment · 3BHK",
      side: "1,985 sq ft",
      image: {
        src: "/images/spaces/tower-10-202/hero.jpg",
        alt: "The finished TV wall: marble-effect panels between timber slats and a floating unit",
      },
    },
    {
      href: "/spaces/projects/lajpat-nagar-boutique",
      name: "Suneja Card Creations",
      details: "Retail boutique · Lajpat Nagar",
      side: "700 sq ft",
      image: {
        src: "/images/spaces/lajpat-nagar/hero.jpg",
        alt: "The finished store, with shelves of cards and gift boxes down both walls and marble counters",
      },
    },
  ],
};

// Cross-sell: each tile deep-links to the same type on the Hospitality page.
export const planningTypes = {
  eyebrow: "Atmosfere Hospitality",
  title: "Planning a hospitality project?",
  intro:
    "Hotels, resorts and banquet venues start with a different question — not how the property should look, but what it should become. Our Hospitality practice plans it before we build it.",
  action: { label: "Explore Hospitality", href: "/hospitality" },
  image: {
    src: unsplash("1520250497591-112f2f40a3f4"),
    alt: "A resort pool lined with palms and thatched pavilions",
  },
  // Only the two planning types the practice currently shows work for; each
  // card opens that planning type's own page.
  types: allPlanningTypes
    .filter((type) => ["hotel-resort", "banquet"].includes(type.slug))
    .map((type) => ({
      ...type,
      href: `/hospitality/${type.slug}`,
    })),
};

// The studio's own before/after: the room as it was, then the same view as
// redesigned, from the same camera angle.
export const beforeAfter = {
  eyebrow: "Transformation",
  title: "From a plain room to a home that feels finished.",
  project: "A living room, Delhi NCR",
  before: {
    src: "/images/spaces/living-room-before.jpg",
    alt: "Before: the living room as a bare shell, with plastered walls, a dropped ceiling beam and the window to the towers opposite",
    asIs: true,
  },
  after: {
    src: "/images/spaces/living-room-after.jpg",
    alt: "After: the same room finished, with cove-lit walls, grey leather sofas, a marble floor, a mirrored television wall and sheer curtains at the window",
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
        src: "/images/spaces/process/consult.jpg",
        alt: "A hand-drawn sketch of the Suneja Card Creations store: the chandelier under the ceiling medallion, the shelves and the counters, with the design notes written in",
      },
    },
    {
      name: "Design",
      text: "Layouts, 3D views, materials and a fixed quote, signed off before work begins.",
      image: {
        src: "/images/spaces/process/design.jpg",
        alt: "The design view of the store's display shelf: printed gift boxes between brass uprights over cane-fronted cabinets",
      },
    },
    {
      name: "Execute",
      text: "Our own site team builds it, with weekly updates and one point of contact.",
      image: {
        src: "/images/spaces/process/execute.jpg",
        alt: "The Atmosfere site team at work in an office fit-out: drawings on the desk, a ladder at the ceiling and the joinery going in",
      },
    },
    {
      name: "Handover",
      text: "Snag-checked, styled and handed over — ready to live in from day one.",
      image: {
        src: "/images/spaces/process/handover.jpg",
        alt: "A finished living room at Tower 10: a pale sofa under a branching chandelier, the marble-effect feature wall and the television unit",
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
      // Mohak Goel: BA (Hons) Interior Architecture & Design, Kingston
      // University; founded Atmosfere in Noida in 2023.
      name: "Mohak Goel",
      role: "Co-founder",
      quote:
        "Good design is quiet. It is felt in the proportion of a space, in the way light moves through it, in how naturally it fits the people who use it. We design for that feeling, not for the photograph.",
      image: {
        src: "/images/founders/mohak-goel-seated.jpg",
        alt: "Mohak Goel, co-founder of Atmosfere, seated on a cream sofa in a black jacket",
      },
    },
    {
      name: "Vivek Sharma",
      role: "Co-founder",
      quote:
        "Every space we create is built exactly as it was designed. One team carries the idea from the first drawing to the final finish, so nothing is lost in between and what you imagined is what you walk into.",
      image: {
        src: "/images/founders/vivek-sharma-seated.jpg",
        alt: "Vivek Sharma, co-founder of Atmosfere, seated on a cream sofa in a sand jacket",
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
      href: "/spaces/case-studies/chelvets",
      tag: "Workplace & studio · Sector 88, Delhi NCR",
      title: "Chelvets",
      summary:
        "Two floors of 2,500 sq ft for a fashion brand — one for its creative designers, one for its exclusive display, photoshoot studio and business office — designed around the brand's existing identity.",
      image: {
        src: "/images/spaces/chelvets/hero.jpg",
        alt: "The creative team's floor: open workstations in long runs under timber slats, with the brand's displays along the wall",
      },
    },
    {
      href: "/spaces/case-studies/arihant",
      tag: "Commercial compound · Delhi NCR",
      title: "Arihant",
      summary:
        "A 10,000 sq ft commercial compound — two basements, seven floors and the entry court — planned so one floor serves the owner, six earn rent, and the ground floor earns on its own.",
      image: {
        src: "/images/spaces/arihant/chapter-1.jpg",
        alt: "Workstations in long runs facing the 'Team Work' feature wall",
      },
    },
    {
      href: "/spaces/case-studies/villa-rise-resort-residency",
      tag: "Villa · Rise Resorts, Greater Noida West",
      title: "Villa at Rise Resorts",
      summary:
        "An ultra-luxury villa of 5,800 sq ft — three floors and a terrace, a pool, a fountain and gardens — planned for one family, from its bachelors to its retired parents.",
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
