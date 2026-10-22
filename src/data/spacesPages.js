import { unsplash } from "@/lib/images";
import { process } from "@/data/spaces";

// Content for /spaces/process and /spaces/about. Durations and figures are
// typical ranges, to be confirmed by the studio.

const [consult, design, execute, handover] = process.steps;

export const processPage = {
  hero: {
    crumbs: [
      { label: "Spaces", href: "/spaces" },
      { label: "Design Process", href: "/spaces/process" },
    ],
    title: "Four stages. One team. No hand-offs.",
    intro:
      "How a project moves from the first conversation to the day you move in — and what you receive at every step.",
    image: {
      src: unsplash("1781859240244-61e274c2bf39"),
      alt: "A curated material palette of marble, stone and ceramics",
    },
  },
  detail: {
    eyebrow: "The Process",
    title: "Every decision made on paper, before a single wall is touched.",
    intro:
      "The same people carry your project from brief to handover, so nothing is lost between the design and the build.",
    stages: [
      {
        name: consult.name,
        duration: "1–2 weeks",
        text: "We start by listening — at your site, in our studio, or both. We want to understand how you live or work, what isn't working today, and what you want to spend.",
        activities: [
          "Site visit and measured survey",
          "Lifestyle and requirements brief",
          "Budget and timeline conversation",
          "Mood and material references",
        ],
        deliverables: ["A written design brief", "An indicative budget range", "A proposed project timeline"],
        image: consult.image,
      },
      {
        name: design.name,
        duration: "4–8 weeks",
        text: "Layouts, 3D views, materials and lighting come together into one complete design — then a fixed quote, so you sign off on exactly what will be built and what it will cost.",
        activities: [
          "Space planning options",
          "3D visualisations of key rooms",
          "Material, finish and furniture selection",
          "Lighting and electrical layouts",
        ],
        deliverables: ["Approved design set and 3D views", "Material and finish board", "A fixed, itemised quote"],
        image: design.image,
      },
      {
        name: execute.name,
        duration: "10–30 weeks",
        text: "Our own site team builds it — civil work, services, joinery and finishes — with weekly updates and one point of contact from the first day on site to the last.",
        activities: [
          "Civil, electrical and plumbing works",
          "Workshop-built custom joinery",
          "Weekly site walkthroughs",
          "Quality checks at every stage",
        ],
        deliverables: ["Weekly photo progress reports", "One project manager, start to finish", "Changes priced before they're made"],
        image: execute.image,
      },
      {
        name: handover.name,
        duration: "1–2 weeks",
        text: "Before you get the keys, we snag every room, deep-clean, and style the home or workplace so it's ready to live in from day one.",
        activities: [
          "Room-by-room snag list and fixes",
          "Deep clean and styling",
          "Walkthrough of every system",
          "Care guide for materials",
        ],
        deliverables: ["A finished, styled space", "Warranty and care documents", "12 months of after-care support"],
        image: handover.image,
      },
    ],
  },
  faq: {
    title: "What clients usually ask first.",
    items: [
      {
        q: "How long does a full home interior take?",
        a: "Most apartments take 4–6 months from first meeting to handover; larger homes and villas take 7–12 months. You'll get a project-specific timeline at the end of the Consult stage.",
      },
      {
        q: "Will the final cost match the quote?",
        a: "Yes. The quote you approve at the end of Design is fixed and itemised. If you ask for a change later, we price it and get your approval before any work is done.",
      },
      {
        q: "Do you take on design-only projects?",
        a: "Our strength is designing and building with one team, so most of our work is turnkey. For select projects we offer design-only packages — ask us in your first conversation.",
      },
      {
        q: "Do I need to be on site during the work?",
        a: "No. You'll have one project manager, weekly progress reports with photos, and scheduled walkthroughs at key milestones — in person or on a video call.",
      },
      {
        q: "Which cities do you work in?",
        a: "Our studio is in Noida, and we deliver projects across Delhi NCR and in cities across India. Get in touch with your location and we'll confirm.",
      },
    ],
  },
};

export const aboutPage = {
  hero: {
    crumbs: [
      { label: "Spaces", href: "/spaces" },
      { label: "About", href: "/spaces/about" },
    ],
    title: "A design studio that builds what it draws.",
    intro:
      "Atmosfere Spaces is a turnkey interior studio for homes and workplaces — one team from the first sketch to the final styled shelf.",
    // The studio's own render (the Rise Resorts villa): living and dining
    // as one bright room, opening to the garden.
    image: {
      src: "/images/spaces/villa-rise-resort-residency/chapter-1.jpg",
      alt: "Living and dining as one room, with full-height curtains opening to the garden and a chandelier over the table",
      position: "50% 60%",
    },
  },
  story: {
    eyebrow: "Our Story",
    title: "Design and build, under one roof.",
    body: [
      "Atmosfere began with a simple frustration: beautiful drawings that never quite became beautiful rooms. Somewhere between the designer and the contractor, the details were always lost.",
      "So we built a studio where the people who design your space are the people who build it — with our own site team, our own joinery workshop and one point of contact from start to finish.",
    ],
    // The studio's own render (Tower 10 – 202): the living room under its
    // branching chandelier.
    image: {
      src: "/images/spaces/tower-10-202/hero.jpg",
      alt: "A living room with a pale sofa under a branching chandelier, a marble-effect feature wall and the TV unit beyond",
    },
    link: { label: "See our projects", href: "/spaces/projects" },
  },
  principles: {
    eyebrow: "What we believe",
    title: "Three promises we make on every project.",
    items: [
      {
        title: "What you approve is what you get.",
        text: "Every room is drawn, visualised and priced before work begins, so the finished space matches the design you signed off.",
      },
      {
        title: "One team, start to finish.",
        text: "No hand-offs between designer and contractor. The same people carry your project from brief to handover.",
      },
      {
        title: "Built to last, not to photograph.",
        text: "We choose materials and details for how they'll feel in ten years, not just how they look on the day we leave.",
      },
    ],
  },
};
