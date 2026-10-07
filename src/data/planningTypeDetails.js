import { unsplash } from "@/lib/images";

// Long-form content for /hospitality/<planning-type>. Keyed by the slugs in
// src/data/planningTypes.js.

const img = (id, alt) => ({ src: unsplash(id), alt });

export const planningTypeDetails = {
  "hotel-resort": {
    noun: "hotel and resort",
    question: "What should this hotel become?",
    intro:
      "Room mix, guest flow and amenities planned around the market you're entering — before a single room is designed.",
    hero: img("1677129667171-92abd8740fa3", "A grand hotel lobby with a mirrored ceiling and golden lighting"),
    story: {
      eyebrow: "The question",
      title: "A hotel succeeds or fails on decisions made before design.",
      body: [
        "How many keys, at what size, for which guest? Which amenities earn their space, and which only cost to run? The answers decide the rate a hotel can charge for the next twenty years.",
        "We test the market, the site and the numbers first — then hand a clear brief to design, so every square foot is working for the guest you actually want.",
      ],
      image: img("1731336478850-6bce7235e320", "A hotel suite with a sculpted timber headboard wall and soft lighting"),
    },
    plan: [
      { title: "Market & positioning", text: "Who the guest is, what they pay nearby, and the gap your property can own." },
      { title: "Room mix & keys", text: "How many rooms, which categories, and the sizes that maximise revenue per square foot." },
      { title: "Guest journey", text: "Arrival, circulation and the moments that make guests return and review well." },
      { title: "Amenities that earn", text: "Pools, spas, F&B and event space sized to the revenue they bring." },
      { title: "Back of house", text: "Kitchens, laundry, stores and staff routes planned to run efficiently from day one." },
      { title: "Operator & phasing", text: "Brand, management model and a build sequence that protects cash flow." },
    ],
  },
  "villa-cottage": {
    noun: "villa and cottage",
    question: "Should this villa be a home, a rental, or both?",
    intro: "Private stays that feel like homes — and earn like boutique hotels.",
    hero: img("1613977257365-aaae5a9817ff", "A white modern villa with a swimming pool"),
    story: {
      eyebrow: "The question",
      title: "The best villas are planned as homes that can host.",
      body: [
        "A villa that rents well isn't just a beautiful house. Suites need equal standing, staff need their own routes, and the owners may want a corner that stays theirs.",
        "We plan villas and cottages so they live like private residences and perform like boutique hotels — whether you rent one villa or a collection.",
      ],
      image: img("1692736933760-8a8a9b8c1b6f", "A private villa pool framed by tropical planting"),
    },
    plan: [
      { title: "Rental strategy", text: "Whole-house or by-the-room, seasonal or year-round, and the rate each can command." },
      { title: "Suite planning", text: "Bedrooms of equal standing, each with its own bath, so groups book with confidence." },
      { title: "Owners' privacy", text: "A lockable wing or cottage that keeps the house yours when guests are in." },
      { title: "Staff & service", text: "Quarters, kitchens and service paths that keep hospitality invisible." },
      { title: "Siting & views", text: "For collections: where each villa sits so every one has privacy and a view." },
      { title: "Launch", text: "Listing, pricing calendar and house manual ready for the first guest." },
    ],
  },
  banquet: {
    noun: "banquet hall",
    question: "How many days a week can this hall earn?",
    intro: "Flexible halls that host a wedding on Saturday and a conference on Monday.",
    hero: img("1554009975-d74653b879f1", "Rows of glowing pendant lamps in a tall hall"),
    story: {
      eyebrow: "The question",
      title: "A banquet hall is only as good as its calendar.",
      body: [
        "Most halls are designed for one perfect wedding and sit empty the rest of the week. The difference between a struggling venue and a thriving one is flexibility.",
        "We plan halls that divide, re-dress and re-light quickly — so the same space serves weddings, conferences, launches and private dinners.",
      ],
      image: img("1783314863884-be035ed5ed5c", "A warm-lit banquet room set for dinner"),
    },
    plan: [
      { title: "Event market", text: "Which events your city books, on which days, and what they pay." },
      { title: "Divisible space", text: "Acoustic partitions and layouts that turn one hall into several rooms." },
      { title: "Arrival & pre-function", text: "Lobbies and registration space that make big events run smoothly." },
      { title: "Kitchens & service", text: "Catering routes sized for 600 covers without crossing guest paths." },
      { title: "Light & sound", text: "Lighting scenes and AV that let one room feel like a wedding or a boardroom." },
      { title: "Parking & access", text: "Drop-off, parking and guest flow planned for peak nights." },
    ],
  },
  airbnb: {
    noun: "short stay",
    question: "What will make this stay book out?",
    intro: "Short-stay homes styled to photograph well, review well and book out.",
    hero: img("1599777560450-e462cffc5368", "A stay with an infinity pool reflecting the evening sky"),
    story: {
      eyebrow: "The question",
      title: "Short stays are won in the photographs and kept in the reviews.",
      body: [
        "Guests choose a short stay in seconds, from a single photograph — and decide whether to recommend it from the details: a good shower, a real workspace, a bed they slept well in.",
        "We plan and style apartments and homes for short-stay platforms so they stand out in search, earn five-star reviews and stay booked.",
      ],
      image: img("1705326701287-346fc37a2c86", "A curved cream sofa and sculptural coffee table in a neutral lounge"),
    },
    plan: [
      { title: "Market & pricing", text: "What similar stays earn nearby, and the rate your space can reach." },
      { title: "Guest profile", text: "Couples, families or remote workers — and what each will pay more for." },
      { title: "Layout for stays", text: "Sleeping capacity, storage and a real workspace without crowding the home." },
      { title: "Durable styling", text: "Finishes and furniture that photograph beautifully and survive heavy use." },
      { title: "The hero shot", text: "One unforgettable view or moment that sells the listing in search." },
      { title: "Launch kit", text: "Photography brief, listing copy, house rules and a cleaning checklist." },
    ],
  },
};
