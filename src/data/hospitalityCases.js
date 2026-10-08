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
    // Flagship case study: full long-form content for client demos.
    slug: "olive-court",
    name: "Olive Court",
    planningType: "hotel-resort",
    category: "Heritage boutique hotel",
    location: "Jaipur",
    size: "18 keys",
    engagement: "Concept → opening",
    image: img("1570133435807-5feefeb2d196", "A tiled courtyard with a pool, palms and carved arches"),
    lead: "A family haveli turned into an 18-key heritage hotel — by restoring its two courtyards instead of filling them with rooms.",
    summary:
      "Investors had proposed 40 rooms built over the courtyards. Our feasibility study showed that a smaller hotel, which protected the architecture guests would travel for, would earn more — and keep the family's home intact.",
    scope: ["Market feasibility", "Option testing", "Heritage-sensitive planning", "Room mix", "F&B concept", "Design brief", "Opening support"],
    glance: [
      { label: "Client", value: "Owner family, third generation" },
      { label: "Property", value: "1890s haveli, two courtyards" },
      { label: "Location", value: "Old City, Jaipur" },
      { label: "Keys", value: "18, in the original rooms" },
      { label: "Engagement", value: "22 months, concept to opening" },
      { label: "Operation", value: "Owner-run, boutique sales partner" },
    ],
    gallery: [
      img("1682414181845-a725f154a14a", "A painted haveli courtyard ringed by arched galleries"),
      img("1601504410148-0c269aafd95c", "An arched corridor framed by bougainvillea"),
      img("1695347597952-f8626d36ffb0", "A carved haveli door with brass rings and studs"),
    ],
    context: {
      title: "Keep the haveli. Make it pay for itself.",
      body: [
        "The haveli had been in the family for five generations. Half of it stood empty, the upkeep was rising every year, and three generations disagreed on what to do with it.",
        "An investor group had offered to fund a 40-room hotel — by building new floors over both courtyards. The family came to us with one question: was there a way to keep the house and still make it work as a business?",
      ],
      constraints: [
        { title: "A protected structure", text: "Heritage rules limited new construction and required traditional lime and stone." },
        { title: "Narrow old-city lanes", text: "No vehicle access to the door, so arrival and luggage needed a plan of their own." },
        { title: "Rooms of every size", text: "Original rooms ranged from 140 to 620 sq ft, with no two alike." },
        { title: "A family still at home", text: "The owners wanted to keep living on the top floor after opening." },
      ],
    },
    tables: [
      {
        eyebrow: "What we tested",
        title: "Three ways to turn the haveli into a hotel.",
        intro: "We modelled each option against the old city's boutique market — rates, occupancy and what guests say they travel for.",
        columns: ["Option", "Keys", "Expected rate", "Occupancy", "What it meant"],
        rows: [
          ["Build over the courtyards", "40", "Mid-market", "Moderate", "Highest cost, loses the courtyards guests travel for"],
          ["Guesthouse in existing rooms", "24", "Budget", "High", "Low investment, but rooms too uneven for the rate"],
          ["Heritage hotel, courtyards restored", "18", "Premium", "High", "Fewer keys, highest earnings per key and per year"],
        ],
        highlight: 2,
        note: "Indicative figures from the feasibility study, shown as ranges for confidentiality.",
      },
      {
        eyebrow: "The room mix",
        title: "Eighteen keys, each with its own character.",
        columns: ["Category", "Keys", "Size", "Where"],
        rows: [
          ["Courtyard rooms", "8", "300–340 sq ft", "Ground floor, opening onto the first courtyard"],
          ["Heritage suites", "6", "450–520 sq ft", "First floor, with original painted ceilings"],
          ["Terrace suites", "3", "540–620 sq ft", "Second floor, with private terraces"],
          ["The Zenana suite", "1", "680 sq ft", "The old women's quarters, overlooking both courtyards"],
        ],
      },
    ],
    concept: {
      title: "Let the haveli be the hotel.",
      text: "Rather than decorating over the building, we planned around what was already there: two courtyards as the hotel's living rooms, a rooftop for dining at sunset, and the old water tank revived as a courtyard pool. New additions are honest and reversible; everything original is restored by hand.",
      image: img("1573363059771-8b2b53b492ff", "A formal palace courtyard garden with a long central pool"),
      palette: [
        { name: "Pink lime plaster", note: "Traditional araish finish, restored by hand", color: "#e2b9a5" },
        { name: "Kota stone", note: "Floors and courtyard paving, honed", color: "#9aa395" },
        { name: "Carved sandstone", note: "Jharokhas and brackets, repaired locally", color: "#d4b48c" },
        { name: "Indigo block print", note: "Bed linen and drapery from Bagru printers", color: "#3e4f6b" },
        { name: "Hammered brass", note: "Door rings, lamps and bath fittings", color: "#b08a4f" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Three generations, one haveli and one question: how do we keep the house and make it earn its keep?",
        image: img("1720070143795-52e5f5ed7eaf", "An ornate heritage facade in warm sandstone"),
        points: ["Building survey and heritage assessment", "Family workshops to agree what must not change", "Review of the investor's 40-room proposal"],
      },
      {
        title: "Challenge",
        text: "A protected building in narrow lanes, rooms of every size, and an offer on the table that would have meant losing the courtyards.",
        points: ["No vehicle access to the front door", "Original rooms from 140 to 620 sq ft", "The family staying on the top floor"],
      },
      {
        title: "Approach",
        text: "We benchmarked the old city's boutique hotels and modelled three options side by side, so the family could compare them on numbers, not opinions.",
        points: ["Rate and occupancy study across 14 comparable properties", "Three options modelled over ten years", "Guest research: what people travel to Jaipur for"],
      },
      {
        title: "Design Decisions",
        text: "Eighteen keys in the existing rooms, both courtyards restored, a rooftop dining terrace and a courtyard pool where the old water tank stood.",
        image: img("1608198399988-341f712c3711", "A heritage hotel room with arched windows and jewel-toned textiles"),
        points: ["Small rooms combined into suites; no new floors added", "Arrival lounge and luggage service from the lane", "Owner's quarters kept private with their own stair"],
      },
      {
        title: "Execution",
        text: "Restoration by local lime and stone craftspeople; Atmosfere Spaces delivered the interiors, services and furnishings to the brief we wrote.",
        points: ["Painted ceilings restored by a conservation team", "Services hidden in old drains and niches", "Staff hired and trained 8 weeks before opening"],
      },
      {
        title: "Outcome",
        text: "Opened at a rate well above the city's boutique average, with strong occupancy from the first season — and the family still living upstairs.",
        image: img("1723108034000-e7fd897e3be0", "A sunlit haveli courtyard with carved balconies"),
      },
    ],
    feature: {
      image: img("1712661198955-b37aae39a714", "Deep red arched galleries lit warmly at night"),
      line: "The courtyards were never wasted space. They were the hotel.",
      caption: "The first-floor gallery at dusk",
    },
    phases: [
      { phase: "Feasibility", when: "Months 1–3", text: "Survey, market study and three options modelled." },
      { phase: "Concept & approvals", when: "Months 4–7", text: "Room mix, design brief and heritage permissions." },
      { phase: "Restoration", when: "Months 8–17", text: "Lime, stone and painted ceilings restored by hand." },
      { phase: "Interiors & services", when: "Months 15–20", text: "Rooms fitted out, pool revived, kitchens installed." },
      { phase: "Pre-opening", when: "Months 21–22", text: "Team trained, soft opening, first guests." },
    ],
    details: [
      { ...img("1657349226767-66c983d7df39", "A heritage hotel room with a carved bed and warm lamps"), caption: "A heritage suite: restored ceilings, block-printed linen." },
      { ...img("1711707246899-cf0d1a5d0472", "A stone-edged pool beside a sandstone palace wall"), caption: "The old water tank, revived as the courtyard pool." },
      { ...img("1655323193437-c68a5b3281f3", "A courtyard fountain surrounded by arches and planting"), caption: "The second courtyard: breakfast in the mornings, music after dark." },
    ],
    quote: {
      text: "Everyone else wanted to fill the courtyards with rooms. They showed us the courtyards were the hotel.",
      name: "Owner family, Olive Court",
    },
    results: [
      { value: "18", label: "Keys in the original rooms" },
      { value: "+60%", label: "Rate vs city boutique average" },
      { value: "2", label: "Courtyards restored, not built over" },
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
