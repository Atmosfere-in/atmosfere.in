import { unsplash } from "@/lib/images";

// The five hospitality planning types. Shared by the Hospitality homepage
// (anchored tiles) and the Spaces cross-sell, which deep-links into them.

export const planningTypes = [
  {
    slug: "hotel-resort",
    name: "Hotel / Resort",
    text: "Room mix, guest flow and amenities planned around the market you're entering.",
    image: {
      src: unsplash("1605346434674-a440ca4dc4c0"),
      alt: "A crisp hotel bed beside a dark timber nightstand",
    },
  },
  {
    slug: "villa-cottage",
    name: "Villa / Cottage",
    text: "Private stays that feel like homes — and earn like boutique hotels.",
    image: {
      src: unsplash("1613977257365-aaae5a9817ff"),
      alt: "A white modern villa with a swimming pool",
    },
  },
  {
    slug: "restaurant-cafe",
    name: "Restaurant / Café",
    text: "Concept, kitchen-to-table flow and seating that turns tables without feeling rushed.",
    image: {
      src: unsplash("1631615535272-1106aa1b3854"),
      alt: "A restaurant lit by clusters of amber pendant lights",
    },
  },
  {
    slug: "banquet",
    name: "Banquet",
    text: "Flexible halls that host a wedding on Saturday and a conference on Monday.",
    image: {
      src: unsplash("1554009975-d74653b879f1"),
      alt: "Rows of glowing pendant lamps in a tall hall",
    },
  },
  {
    slug: "airbnb",
    name: "Airbnb",
    text: "Short-stay homes styled to photograph well, review well and book out.",
    image: {
      src: unsplash("1599777560450-e462cffc5368"),
      alt: "A stay with an infinity pool reflecting the evening sky",
    },
  },
];
