import { unsplash } from "@/lib/images";

// Atmosfere Hospitality case studies. Each follows the same six stages
// (Brief → Outcome). Names, figures, quotes and photographs are placeholders
// until the practice supplies its real engagements.
// planningType links a case to its page under /hospitality/<slug>.

const img = (id, alt) => ({ src: unsplash(id), alt });

export const hospitalityCases = [
  {
    slug: "the-dusk-pool-retreat",
    name: "The Dusk Pool Retreat",
    planningType: "hotel-resort",
    category: "Resort",
    location: "Konkan coast",
    size: "24 keys",
    engagement: "Feasibility → opening",
    image: img("1759805583291-704d7af07682", "Lounge chairs and umbrellas beside a resort pool at dusk"),
    lead: "A plot zoned for eight villas, re-planned as a 24-key retreat whose pool terrace now draws guests who aren't even staying.",
    summary:
      "The owners came to us with villa drawings already done. Our feasibility study showed a small resort would earn far more on the same land — and that the pool terrace, not the rooms, should be the property's reason to visit.",
    scope: ["Market feasibility", "Concept & positioning", "Master planning", "Room mix", "Design brief"],
    gallery: [
      img("1551882547-ff40c63fe5fa", "A resort pool among palms at dusk"),
      img("1596178067639-5c6e68aea6dc", "A villa pool terrace with loungers and tropical planting"),
      img("1543489822-c49534f3271f", "A cliff-top infinity pool overlooking the sea"),
    ],
    stages: [
      { title: "Brief", text: "Owners of a two-acre coastal plot wanted to build eight private villas for sale or rental, with drawings already prepared." },
      { title: "Challenge", text: "The villa plan left most of the sea frontage to private gardens, and comparable villas nearby were struggling to fill weekdays." },
      { title: "Approach", text: "We studied demand from Mumbai and Pune weekenders, then modelled three concepts: villas, a 16-key boutique hotel and a 24-key retreat." },
      { title: "Design Decisions", text: "A 24-key retreat stepping down the slope, with one shared pool terrace on the best sea view and a dusk-to-dinner bar open to day guests." },
      { title: "Execution", text: "We wrote the design brief and room-mix schedule, then delivered the build with Atmosfere Spaces in 20 months." },
      { title: "Outcome", text: "Weekend occupancy above 85% in the first season, and the terrace bar now earns a quarter of revenue from non-resident guests." },
    ],
    quote: {
      text: "We came in wanting eight villas. They showed us why a 24-key retreat would earn more — and they were right.",
      name: "Owner, The Dusk Pool Retreat",
    },
    results: [
      { value: "24", label: "Keys, up from 8 villas" },
      { value: "85%", label: "Weekend occupancy, year one" },
      { value: "25%", label: "Revenue from day guests" },
    ],
  },
  {
    slug: "the-cabana-resort",
    name: "The Cabana Resort",
    planningType: "hotel-resort",
    category: "Resort",
    location: "Goa",
    size: "42 keys",
    engagement: "Repositioning",
    image: img("1571003123894-1f0594d2b5d9", "Draped poolside cabanas along an infinity pool at dusk"),
    lead: "A tired 1990s beach hotel re-planned around its pool — turning a budget property into a resort couples book a year ahead.",
    summary:
      "The hotel had a good beach and a dated product. We repositioned it for couples, cut keys to create larger rooms, and made the pool a destination with private cabanas.",
    scope: ["Repositioning study", "Room re-planning", "Amenity strategy", "Design brief", "Operator advice"],
    gallery: [
      img("1540541338287-41700207dee6", "An aerial view of a resort with a lagoon pool and the sea beyond"),
      img("1584132967334-10e028bd69f7", "Sun loungers and umbrellas on a quiet beach"),
      img("1527206363095-ca2f054128b0", "A thatched beach umbrella and loungers on white sand"),
    ],
    stages: [
      { title: "Brief", text: "A family-owned beach hotel was losing rate to newer resorts and asked whether to renovate room by room." },
      { title: "Challenge", text: "Small rooms, a featureless pool deck and a guest mix with no clear target meant renovation alone wouldn't move the rate." },
      { title: "Approach", text: "We benchmarked twelve competing resorts and proposed a single target guest — couples on short breaks — and re-planned around them." },
      { title: "Design Decisions", text: "56 rooms combined into 42 larger ones; eight private pool cabanas; an adults-only pool zone and an all-day restaurant facing the water." },
      { title: "Execution", text: "Works were phased across two monsoon seasons so the hotel never fully closed; Atmosfere Spaces delivered the interiors." },
      { title: "Outcome", text: "Average room rate more than doubled, and cabanas sell out most weekends in season." },
    ],
    results: [
      { value: "2.2×", label: "Average room rate" },
      { value: "56→42", label: "Larger, better rooms" },
      { value: "8", label: "Private pool cabanas" },
    ],
  },
  {
    slug: "olive-court",
    name: "Olive Court",
    planningType: "hotel-resort",
    category: "Heritage boutique hotel",
    location: "Jaipur",
    size: "18 keys",
    engagement: "Concept → opening",
    image: img("1570133435807-5feefeb2d196", "A tiled courtyard with a pool, palms and carved arches"),
    lead: "A family haveli turned into an 18-key heritage hotel — restoring the courtyards rather than filling them with rooms.",
    summary:
      "The family wanted to keep the haveli and make it pay for itself. We planned a small heritage hotel that protects its two courtyards and lets the architecture be the experience.",
    scope: ["Feasibility", "Heritage-sensitive planning", "Room mix", "F&B concept", "Design brief"],
    gallery: [
      img("1720070143795-52e5f5ed7eaf", "An ornate heritage palace facade in warm stone"),
      img("1723108034000-e7fd897e3be0", "A yellow-walled courtyard with carved balconies"),
      img("1655323193437-c68a5b3281f3", "A courtyard fountain surrounded by arches and planting"),
    ],
    stages: [
      { title: "Brief", text: "A family-owned haveli in the old city, partly empty and costly to maintain, with three generations wanting to keep it." },
      { title: "Challenge", text: "Investors had proposed 40 rooms by building over the courtyards — destroying the very thing guests would come for." },
      { title: "Approach", text: "We modelled a smaller, higher-rate hotel and showed it out-earned the 40-room plan once the heritage premium was priced in." },
      { title: "Design Decisions", text: "18 keys in the existing rooms, both courtyards restored, a rooftop dining terrace and a courtyard pool where the old tank stood." },
      { title: "Execution", text: "Conservation-grade restoration with local craftspeople; Atmosfere Spaces handled interiors and services integration." },
      { title: "Outcome", text: "Opened at a rate 60% above the city's boutique average, with the family still living on the top floor." },
    ],
    quote: {
      text: "Everyone else wanted to fill the courtyards with rooms. They showed us the courtyards were the hotel.",
      name: "Owner family, Olive Court",
    },
    results: [
      { value: "18", label: "Keys in the original rooms" },
      { value: "+60%", label: "Rate vs city boutique average" },
      { value: "2", label: "Courtyards restored" },
    ],
  },
  {
    slug: "the-linden-rooms",
    name: "The Linden Rooms",
    planningType: "hotel-resort",
    category: "Boutique hotel",
    location: "Shimla",
    size: "12 keys",
    engagement: "Repositioning",
    image: img("1761757821641-3b347c034042", "A boutique hotel bedroom with a metal bed frame and framed artwork"),
    lead: "A tired guesthouse repositioned as 12 boutique rooms — fewer keys, a far higher rate, and a waitlist in season.",
    summary:
      "The guesthouse competed on price with dozens of others. We cut rooms, added a library lounge and turned every room toward the valley — and stopped competing on price.",
    scope: ["Repositioning study", "Room re-planning", "Guest experience", "Design brief"],
    gallery: [
      img("1615880484746-a134be9a6ecf", "A balcony with seating overlooking forested mountains"),
      img("1573052905904-34ad8c27f0cc", "A hotel room with an arched window and warm lighting"),
      img("1759264244741-7175af0b7e75", "A quiet hotel room corner with a writing desk"),
    ],
    stages: [
      { title: "Brief", text: "An 18-room guesthouse with steady summer bookings and empty winters asked how to lift year-round income." },
      { title: "Challenge", text: "Half the rooms faced the road, rates were set by the cheapest competitor, and there was nowhere for guests to spend an evening." },
      { title: "Approach", text: "We profiled the guests who did pay more — couples and remote workers — and designed the property around them." },
      { title: "Design Decisions", text: "18 rooms became 12, all facing the valley; road-side rooms became a library lounge, a breakfast room and storage." },
      { title: "Execution", text: "Re-planning and interiors delivered with Atmosfere Spaces across one winter closure." },
      { title: "Outcome", text: "Average rate tripled, winter occupancy rose sharply, and summer weekends now carry a waitlist." },
    ],
    quote: {
      text: "The feasibility study alone saved us from the wrong operator. Everything after that was planned around real numbers.",
      name: "Investor, The Linden Rooms",
    },
    results: [
      { value: "3×", label: "Average room rate" },
      { value: "18→12", label: "Keys, all valley-facing" },
      { value: "1", label: "Winter to deliver" },
    ],
  },
  {
    slug: "the-pink-house",
    name: "The Pink House",
    planningType: "villa-cottage",
    category: "Private villa stay",
    location: "Udaipur",
    size: "5 suites",
    engagement: "Concept → launch",
    image: img("1683914791856-040e5de792b3", "A pink-walled villa with a pool and garden umbrella"),
    lead: "A family's second home planned to host — five suites that live like a private residence and earn like a boutique hotel.",
    summary:
      "The owners used the house a few weeks a year. We planned it so they could keep it as a home, and rent it whole, with staff and an experience that justifies a premium rate.",
    scope: ["Rental strategy", "Suite planning", "Guest experience", "Styling brief", "Listing launch"],
    gallery: [
      img("1699949985517-cfcd9a3b154c", "A lake palace on still water at golden hour"),
      img("1776763255431-633c91b6b4b6", "A sunlit courtyard with a plunge pool and planting"),
    ],
    stages: [
      { title: "Brief", text: "A family's holiday villa sat empty most of the year; they wanted income without losing it as a home." },
      { title: "Challenge", text: "Uneven bedrooms, one shared bathroom and no staff quarters made it hard to rent to groups at a good rate." },
      { title: "Approach", text: "We planned it as a whole-house rental for families and small celebrations, priced against boutique hotels, not homestays." },
      { title: "Design Decisions", text: "Five equal suites each with their own bath, a lockable owners' wing, staff quarters, and the pool courtyard as the social heart." },
      { title: "Execution", text: "Interiors and styling by Atmosfere Spaces; we wrote the listing, the house manual and the pricing calendar." },
      { title: "Outcome", text: "Booked for 70% of available nights in its first year, with the family still using it every Diwali." },
    ],
    results: [
      { value: "5", label: "Equal suites" },
      { value: "70%", label: "Nights booked, year one" },
      { value: "1", label: "Owners' wing kept private" },
    ],
  },
  {
    slug: "horizon-villas",
    name: "Horizon Villas",
    planningType: "villa-cottage",
    category: "Villa stays",
    location: "Kerala",
    size: "6 villas",
    engagement: "Feasibility → opening",
    image: img("1782113286208-06b91ed3ad05", "A curved lounge beside an infinity pool overlooking the sea"),
    lead: "Six villas placed along a ridge so every one has the horizon to itself — planned for privacy first, then everything else.",
    summary:
      "The site had sweeping views but a steep slope. We sited each villa individually, planned shared services out of sight, and set a concept around complete privacy.",
    scope: ["Site feasibility", "Villa siting", "Concept", "Operations planning", "Design brief"],
    gallery: [
      img("1718821585734-e22a8fc425a2", "A backwater resort with cottages reflected in calm water"),
      img("1692736933760-8a8a9b8c1b6f", "A private villa pool framed by tropical planting"),
    ],
    stages: [
      { title: "Brief", text: "An investor bought a ridge-top plot and asked how many villas it could hold — and whether they'd sell or rent better." },
      { title: "Challenge", text: "A steep, narrow ridge where most layouts put villas looking into each other's pools." },
      { title: "Approach", text: "We surveyed view lines from every buildable point and designed around six positions with unbroken horizon views." },
      { title: "Design Decisions", text: "Six villas with private pools, a single arrival pavilion, and kitchens and staff paths tucked below the ridge line." },
      { title: "Execution", text: "Villas built in two phases with Atmosfere Spaces, so the first three earned while the rest were completed." },
      { title: "Outcome", text: "Positioned as a rental collection rather than plots for sale, now one of the region's highest-rated villa stays." },
    ],
    results: [
      { value: "6", label: "Villas, each with the horizon" },
      { value: "2", label: "Phases, earning from phase one" },
      { value: "4.9", label: "Average guest rating" },
    ],
  },
  {
    slug: "skylight-hall",
    name: "Skylight Hall",
    planningType: "banquet",
    category: "Banquet",
    location: "Indore",
    size: "600 guests",
    engagement: "Repositioning",
    image: img("1762765685329-97e0af04050c", "An elegant banquet hall with long dining tables beneath skylights"),
    lead: "A single-use wedding hall repositioned for weekday conferences and private events — same footprint, twice the bookings.",
    summary:
      "The hall earned only on wedding dates. We re-planned it to divide into three rooms, added daylight and pre-function space, and opened a weekday corporate market.",
    scope: ["Market study", "Hall re-planning", "Flexible partitioning", "AV & lighting brief", "Design brief"],
    gallery: [
      img("1779308936221-89739e035a53", "A wedding reception with floral arches and set tables"),
      img("1762765684665-6b6855bb6fe6", "A long hall with skylights and rows of tables"),
      img("1783314863884-be035ed5ed5c", "A warm-lit banquet room set for dinner"),
    ],
    stages: [
      { title: "Brief", text: "A 600-guest wedding hall stood empty on most weekdays and outside the wedding season." },
      { title: "Challenge", text: "One windowless box with fixed décor that suited weddings only, and no space for registrations or breakouts." },
      { title: "Approach", text: "We studied corporate event demand in the city and planned a hall that could change shape between a wedding and a conference." },
      { title: "Design Decisions", text: "Acoustic partitions to create three rooms, new skylights, a pre-function lobby, and neutral finishes dressed up with lighting scenes." },
      { title: "Execution", text: "Delivered with Atmosfere Spaces between wedding seasons, with no lost booking dates." },
      { title: "Outcome", text: "Bookings doubled within a year, with weekday conferences and private dinners now filling the calendar." },
    ],
    quote: {
      text: "Our hall only earned on wedding weekends. Their re-plan made it work for conferences and private dinners too — it's booked most weekdays now.",
      name: "Venue owner, Skylight Hall",
    },
    results: [
      { value: "2×", label: "Bookings per year" },
      { value: "3", label: "Rooms from one hall" },
      { value: "0", label: "Wedding dates lost" },
    ],
  },
];

export const hospitalityCaseFilters = [
  { label: "All", value: null },
  { label: "Hotels & Resorts", value: "hotel-resort" },
  { label: "Villas", value: "villa-cottage" },
  { label: "Banquets", value: "banquet" },
];

export function getHospitalityCase(slug) {
  return hospitalityCases.find((c) => c.slug === slug);
}
