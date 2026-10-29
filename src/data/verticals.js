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
      alt: "A living room at SKA Orion: blue armchairs and a cream sofa under a panelled wall and a cove-lit ceiling",
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
      alt: "The brass-toned lattice tower of the Moradabad convention centre, with the drop-off below",
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
