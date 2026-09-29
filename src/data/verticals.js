import { unsplash } from "@/lib/images";

// The three Atmosfere verticals shown on the atmosfere.in hub.
// `href: null` marks a vertical that isn't live yet (rendered, not clickable).

export const verticals = [
  {
    id: "spaces",
    index: "01",
    name: "Spaces",
    tagline: "Design & Execute",
    description: "Turnkey interiors for homes and commercial spaces.",
    href: "/spaces",
    image: {
      src: unsplash("1564078516393-cf04bd966897"),
      alt: "A double-height living room glowing with warm light at dusk",
      position: "50% 60%",
    },
  },
  {
    id: "hospitality",
    index: "02",
    name: "Hospitality",
    tagline: "Plan & Advise",
    description: "Planning for hotels, resorts, villas, cafés and banquets.",
    href: "/hospitality",
    image: {
      src: unsplash("1544984243-ec57ea16fe25"),
      alt: "A villa terrace and pool under a violet sunset sky",
      position: "50% 50%",
    },
  },
  {
    id: "living",
    index: "03",
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
