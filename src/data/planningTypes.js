import { unsplash } from "@/lib/images";

// The two hospitality planning types. Shared by the Hospitality homepage
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
    slug: "banquet",
    name: "Banquet",
    text: "Flexible halls that host a wedding on Saturday and a conference on Monday.",
    image: {
      src: unsplash("1554009975-d74653b879f1"),
      alt: "Rows of glowing pendant lamps in a tall hall",
    },
  },
];
