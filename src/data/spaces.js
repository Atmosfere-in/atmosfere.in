import { unsplash } from "@/lib/images";

// Content for atmosfere.in/spaces. Project names, figures and quotes are
// placeholders until the client supplies real portfolio content.

export const spacesNav = {
  section: { label: "Spaces", href: "/spaces" },
  nav: [
    { label: "Home", href: "/spaces" },
    { label: "Projects", href: "/spaces/projects" },
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
    src: unsplash("1774199496664-a9690967be5a"),
    alt: "A calm living room with a lounge chair, arc floor lamp and warm afternoon light",
  },
};

export const about = {
  eyebrow: "The Studio",
  title: "One team, from concept to keys.",
  body: [
    "Atmosfere Spaces is a design-and-build studio. The people who draw your home are the people who build it — so what you approve on paper is what you walk into.",
    "We work across apartments, villas, offices and retail, with a single point of contact, a fixed scope and a finish that holds up long after the photographs.",
  ],
  image: {
    src: unsplash("1768836180164-070b4c1a8f94"),
    alt: "A sunlit dining corner with sculpted wooden chairs and a potted plant",
  },
};

export const projects = [
  {
    slug: "the-linen-house",
    name: "The Linen House",
    type: "Residence",
    location: "Gurugram",
    area: "4,200 sq ft",
    image: {
      src: unsplash("1772797583328-f83bc3f94f80"),
      alt: "A light living room with timber shelving and a linen sofa",
    },
  },
  {
    slug: "walnut-and-stone",
    name: "Walnut & Stone",
    type: "Apartment",
    location: "Mumbai",
    area: "2,600 sq ft",
    image: {
      src: unsplash("1581784878214-8d5596b98a01"),
      alt: "Spherical glass pendants against a dark walnut wall",
    },
  },
  {
    slug: "casa-terra",
    name: "Casa Terra",
    type: "Villa",
    location: "Goa",
    area: "5,800 sq ft",
    image: {
      src: unsplash("1724582586580-8b52c02e99dd"),
      alt: "A curved sofa and low table beside floor-to-ceiling glass doors",
    },
  },
  {
    slug: "the-quiet-room",
    name: "The Quiet Room",
    type: "Residence",
    location: "Dehradun",
    area: "3,100 sq ft",
    image: {
      src: unsplash("1617098900591-3f90928e8c54"),
      alt: "A bedroom with a crystal chandelier and dark timber panelling",
    },
  },
  {
    slug: "atelier-dining",
    name: "Atelier Dining",
    type: "Commercial · F&B",
    location: "New Delhi",
    area: "1,900 sq ft",
    image: {
      src: unsplash("1540760029765-138c8f6d2eac"),
      alt: "An oval glass dining table with armchairs against a fluted wall",
    },
  },
];

export const planningTypes = {
  eyebrow: "Atmosfere Hospitality",
  title: "Planning a hospitality project?",
  intro:
    "Hotels, villas and restaurants start with a different question — not how the property should look, but what it should become. Our Hospitality practice plans it before we build it.",
  types: [
    {
      name: "Hotel / Resort",
      image: {
        src: unsplash("1605346434674-a440ca4dc4c0"),
        alt: "A crisp hotel bed beside a dark timber nightstand",
      },
    },
    {
      name: "Villa / Cottage",
      image: {
        src: unsplash("1613977257365-aaae5a9817ff"),
        alt: "A white modern villa with a swimming pool",
      },
    },
    {
      name: "Restaurant / Café",
      image: {
        src: unsplash("1631615535272-1106aa1b3854"),
        alt: "A restaurant lit by clusters of amber pendant lights",
      },
    },
    {
      name: "Banquet",
      image: {
        src: unsplash("1554009975-d74653b879f1"),
        alt: "Rows of glowing pendant lamps in a tall hall",
      },
    },
    {
      name: "Airbnb",
      image: {
        src: unsplash("1599777560450-e462cffc5368"),
        alt: "A stay with an infinity pool reflecting the evening sky",
      },
    },
  ],
};

export const beforeAfter = {
  eyebrow: "Transformation",
  title: "From bare shell to a home that feels finished.",
  project: "The Linen House, Gurugram",
  before: {
    src: unsplash("1757742690834-aa581b9f53b2"),
    alt: "Before: an empty room with bare walls, timber floor and a large window",
  },
  after: {
    src: unsplash("1750639258774-9a714379a093"),
    alt: "After: the same room styled with a cream sofa, sculpted table and framed art",
  },
};

export const process = {
  eyebrow: "How We Work",
  title: "Four stages. One team. No hand-offs.",
  steps: [
    {
      name: "Consult",
      text: "We listen first — how you live, what you need, and what you want to spend.",
      icon: "consult",
    },
    {
      name: "Design",
      text: "Layouts, 3D views, materials and a fixed quote, signed off before work begins.",
      icon: "design",
    },
    {
      name: "Execute",
      text: "Our own site team builds it, with weekly updates and one point of contact.",
      icon: "execute",
    },
    {
      name: "Handover",
      text: "Snag-checked, styled and handed over — ready to live in from day one.",
      icon: "handover",
    },
  ],
};

export const founder = {
  quote:
    "A beautiful room isn't the goal. A room that still feels right ten years from now — that's the work.",
  name: "Founder & Principal Designer",
  role: "Atmosfere",
  image: {
    src: unsplash("1772442198907-765685249ea4"),
    alt: "A designer studying an architectural model at a desk",
  },
};

export const split = [
  {
    title: "Residential",
    text: "Homes, apartments and villas — designed around the way you live.",
    href: "/spaces/projects?type=residential",
    image: {
      src: unsplash("1762544968153-b9b47435fefd"),
      alt: "A living room with tan leather chairs arranged around a fireplace",
    },
  },
  {
    title: "Commercial",
    text: "Offices, retail and F&B — spaces that work as hard as your brand.",
    href: "/spaces/projects?type=commercial",
    image: {
      src: unsplash("1758448511255-ac2a24a135d7"),
      alt: "A contemporary lounge with sculptural ring lighting and city views",
    },
  },
];

export const caseStudies = [
  {
    slug: "the-spiral-residence",
    tag: "Residence · Chandigarh",
    title: "The Spiral Residence",
    summary:
      "Turning a dark, compartmentalised floor plan into one continuous, light-filled volume around a sculpted timber stair.",
    image: {
      src: unsplash("1758801304964-417e328be877"),
      alt: "A sculpted timber spiral staircase in warm light",
    },
  },
  {
    slug: "marble-and-brass-office",
    tag: "Workplace · Bengaluru",
    title: "Marble & Brass Office",
    summary:
      "A founder's office that had to host board meetings and quiet focus — resolved with zoning, acoustics and a single marble plinth.",
    image: {
      src: unsplash("1778731525532-d2ab833c8463"),
      alt: "A modern office with a marble desk and a plush chair",
    },
  },
  {
    slug: "the-timber-suite",
    tag: "Residence · Pune",
    title: "The Timber Suite",
    summary:
      "A primary suite reworked around storage, soft light and a headboard wall that hides everything you don't want to see.",
    image: {
      src: unsplash("1757344454333-cc666252e596"),
      alt: "A bedroom with timber accents and soft indirect lighting",
    },
  },
];

export const caseStudyStages = [
  "Brief",
  "Challenge",
  "Approach",
  "Design Decisions",
  "Execution",
  "Outcome",
];

export const trust = {
  stats: [
    { value: "120+", label: "Projects delivered" },
    { value: "8+", label: "Years in practice" },
    { value: "14", label: "Cities across India" },
    { value: "1", label: "Team, concept to keys" },
  ],
  clients: ["Maison Verde", "Kaya Hotels", "Oakline", "Studio Nara", "The Loft Co.", "Aurum"],
  // Fictional placeholders — replace with real press mentions only.
  press: ["The Interior Review", "Habitat Journal", "Casa Quarterly", "Form & Room"],
};

export const closing = {
  title: "Ready to start a project?",
  text: "Tell us about your space. We'll call within 24 hours to talk scope, budget and timeline.",
  image: {
    src: unsplash("1770816307528-67e404552dcf"),
    alt: "An interior at night lit by low pendant lights",
  },
};
