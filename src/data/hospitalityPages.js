// Content for /hospitality/about. The practice's own case-study pictures
// front the page; the story and principles are written from how the
// practice works: planning first, design second, carried to opening.

export const aboutPage = {
  hero: {
    crumbs: [
      { label: "Hospitality", href: "/hospitality" },
      { label: "About", href: "/hospitality/about" },
    ],
    title: "A planning practice that asks what a property should become.",
    intro:
      "Atmosfere Hospitality advises owners, investors and operators on hotels, resorts, banquets and short stays — from the first feasibility question to opening day.",
    // The practice's own render: the Punarnava lobby, a chandelier over the
    // marble floor and a sculpture at its centre.
    image: {
      src: "/images/hospitality/punarnava/hero.jpg",
      alt: "The lobby of the new building at Punarnava: a chandelier over a marble floor, a sculpture at its centre and lounges to either side",
      position: "50% 55%",
    },
  },
  story: {
    eyebrow: "Our Story",
    title: "Planning first. Design follows.",
    body: [
      "Most hospitality projects go wrong long before the first tile is laid: in the wrong room mix, the wrong concept or the wrong market. Atmosfere Hospitality was started to put the business question first, so that every design decision traces back to a decision about how the property will earn.",
      "We begin with the site, the market and the numbers, then plan the concept, the programme and the layouts that make them work. When the plan is agreed, Atmosfere Spaces carries it into design and execution, so the property that opens is the property that was planned.",
    ],
    // The practice's own render: the Evara Bliss venue at night.
    image: {
      src: "/images/hospitality/evara-bliss/concept.jpg",
      alt: "The Evara Bliss venue at night: the glass-fronted hall glowing under its sculpted gilded forms, with lit trees and a water feature in front",
    },
    link: { label: "See our case studies", href: "/hospitality/case-studies" },
  },
  principles: {
    eyebrow: "What we believe",
    title: "Three promises we make on every property.",
    items: [
      {
        title: "The question comes before the drawing.",
        text: "We decide what a property should be — hotel, resort, venue or stay — and plan it to perform, before anyone designs a room.",
      },
      {
        title: "Every plan has its numbers attached.",
        text: "Room mix, areas, flows and phasing are set against the market and the budget, so the owner knows what the plan earns, not just how it looks.",
      },
      {
        title: "Planned, then carried to opening.",
        text: "The same house that plans the property can design and build it, so nothing is lost between the advisory report and the opening day.",
      },
    ],
  },
};
