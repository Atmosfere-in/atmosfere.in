import { unsplash } from "@/lib/images";

// The three Atmosfere verticals shown on the atmosfere.in hub.
// `href: null` marks a vertical that isn't live yet (rendered, not clickable).

export const verticals = [
  {
    id: "spaces",
    name: "Spaces",
    tagline: "Design & Execute",
    description: "Turnkey interiors for homes and commercial spaces.",
    href: "/spaces",
    image: {
      src: "/images/home/spaces.jpg",
      alt: "A finished master bedroom at Tower 10: a tufted bed under a cove-lit ceiling, a timber-slat wall and curtains to the balcony",
      position: "50% 50%",
    },
  },
  {
    id: "hospitality",
    name: "Hospitality",
    tagline: "Plan & Advise",
    description: "Planning for hotels, resorts and banquets.",
    href: "/hospitality",
    image: {
      src: "/images/home/hospitality.jpg",
      alt: "The pool at The Punarnava Resort, Dehradun, ringed by palms and sal trees, with the resort building behind",
      position: "50% 50%",
    },
  },
  {
    id: "living",
    name: "Living",
    tagline: "Style & Shop",
    description: "Curated furniture and decor, styled corner by corner.",
    href: null,
    image: {
      src: unsplash("1774477178005-bff823e43be8"),
      alt: "A sculpted armchair and ottoman beside a floor lamp in soft window light",
      position: "50% 55%",
    },
  },
];
