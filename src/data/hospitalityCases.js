import { unsplash } from "@/lib/images";

// Atmosfere Hospitality case studies. Each follows the same six stages
// (Brief → Outcome). Names, figures, quotes and photographs are placeholders
// until the practice supplies its real engagements.
// planningType links a case to its page under /hospitality/<slug>.

const img = (id, alt) => ({ src: unsplash(id), alt });

// Local photographs (real projects) live under /public/images; run
// `npm run images` after adding any so their resized variants exist.
const photo = (file, alt) => ({ src: `/images/hospitality/${file}`, alt });

export const hospitalityCases = [
  {
    // Real engagement. Copy from atmosfere.in's portfolio page; renders by
    // the studio.
    slug: "the-punarnava-spa-and-resort",
    name: "The Punarnava Spa & Resort",
    planningType: "hotel-resort",
    category: "Wellness resort",
    location: "Dehradun",
    size: "90,000 sq ft approx.",
    engagement: "Space planning & design intent",
    image: photo("punarnava/hero.jpg", "The lobby of the new building: a chandelier over a marble floor, a sculpture at its centre and lounges to either side"),
    lead: "A new building for a wellness resort, planned around the five natural elements so luxury, Ayurveda and everyday operations share one calm design language.",
    summary:
      "The new building at Punarnava Spa & Resort is envisioned as a modern yet serene extension of the resort, designed to align with the core philosophies of Ayurveda and Vedic living. Our work covered space planning and design intent for a wide range of spaces, catering to both guest and staff experiences, so that the building strengthens Punarnava's reputation as a haven of luxury and wellness.",
    scope: ["Space planning", "Design intent", "Guest experience", "Back-of-house planning", "Material & lighting direction"],
    chapters: [
      { title: "A resort that needed room to grow.", image: photo("punarnava/chapter-1.jpg", "The lobby seen from the entrance, with the sculpture on its black marble plinth and seating to each side") },
      { title: "Five elements, one plan.", image: photo("punarnava/chapter-2.jpg", "A curtained lounge opening onto the hills, with blue armchairs and a round table") },
      { title: "Guest side, staff side.", image: photo("punarnava/chapter-3.jpg", "The lobby looking out through the entrance to palms and the hills beyond") },
    ],
    mosaic: [
      photo("punarnava/mosaic-1.jpg", "The lounge under glass pendants, looking through to the meeting room"),
      photo("punarnava/mosaic-2.jpg", "A seating group against the lit timber-and-brass slatted wall"),
      photo("punarnava/mosaic-3.jpg", "The lounge with its blue armchairs and the corridor to the offices"),
    ],
    concept: {
      title: "Let the five elements plan the building.",
      text: "Water, air, fire, earth and space each shape a part of the plan: daylight and cross-ventilation in the lounges, stone and timber underfoot and overhead, warm light at the reception and the spa, and generous open floor at the heart of the lobby. Ayurvedic and Vedic principles set the sequence of spaces; modern materials and detailing make them feel serene rather than ceremonial.",
      image: photo("punarnava/concept.jpg", "The reception desk, with a brass mandala on a stone wall, glass pendants and three clocks above"),
      palette: [
        { name: "Herringbone timber", note: "Ceilings and the lobby's framing beams", color: "#8a5a35" },
        { name: "White marble", note: "Floors, with black marble inlay at the centre", color: "#efe9df" },
        { name: "Grey stone mosaic", note: "The reception wall behind the brass mandala", color: "#a7a39c" },
        { name: "Brushed brass", note: "Mandala, slats, pendants and signage", color: "#b99a5e" },
        { name: "Sky-blue bouclé", note: "Armchairs that lift the neutral lounges", color: "#79b4d8" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Punarnava, an established wellness resort in Dehradun, asked us to plan a new building of roughly 90,000 sq ft as a modern, serene extension of the resort.",
        points: ["A new building beside the existing resort", "Guest spaces and staff spaces in one brief", "Ayurveda and Vedic living as the starting point"],
      },
      {
        title: "Challenge",
        text: "The building had to feel luxurious and calm at once, carry the resort's wellness philosophy into every room, and still work hard for the staff who run it.",
        points: ["Luxury and wellness without contradiction", "Many space types under one roof", "Operations planned, not left to chance"],
      },
      {
        title: "Approach",
        text: "We took the five natural elements — water, air, fire, earth and space — as the organising idea, and planned the building as a sequence of spaces that each express one of them.",
        points: ["Five elements as the planning framework", "Guest journey mapped from arrival to treatment", "Staff flows planned alongside guest flows"],
      },
      {
        title: "Design Decisions",
        text: "A lobby open at its centre, lounges that borrow the hills through tall curtained openings, a reception set against stone and brass, and quiet corridors to the offices and back of house.",
        points: ["Herringbone timber ceilings and marble floors throughout", "A single sculpture as the lobby's focal point", "Blue bouclé seating against a neutral ground"],
      },
      {
        title: "Execution",
        text: "Our scope was space planning and design intent: layouts, material direction and lighting intent for each space, handed to the resort's team as the basis for detailed design.",
        points: ["Layouts for every guest and staff space", "Material and lighting direction per space", "Design inspirations for the resort to build on"],
      },
      {
        title: "Outcome",
        text: "A plan that blends the philosophies of Ayurveda and Vedic living with modern design sensibilities, and a building set to enhance Punarnava's reputation as a haven of luxury and wellness.",
        points: ["One design language from lobby to back of house", "Wellness philosophy built into the plan", "A clear brief for detailed design"],
      },
    ],
    voiceImage: photo("punarnava/voice.jpg", "The lobby from the corner, with the chandelier, the sculpture and tall glazed doors"),
    results: [
      { value: "90,000", label: "sq ft, approx., in the new building" },
      { value: "5", label: "Natural elements shaping the plan" },
      { value: "1", label: "Design language, guest side to staff side" },
    ],
  },
  {
    // Real engagement, at design-intent stage (June 2026). Copy and drawings
    // from the studio's design-intent deck; counts read off the zoning plan.
    slug: "jim-corbett-resort-dhela",
    name: "Jim Corbett Resort, Dhela",
    planningType: "hotel-resort",
    category: "Resort",
    location: "Dhela, Jim Corbett",
    size: "15 keys planned",
    engagement: "Design intent",
    image: photo("jim-corbett-resort-dhela/hero.jpg", "The proposed resort laid over an aerial of the site: cottages around a central pool, with the banquet hall and arrival court by the road"),
    lead: "A forest-edge plot at Dhela planned as a harmonious retreat rooted in nature: cottages and a villa around a central pool, a banquet hall and cafe at the arrival, and a meandering path tying it all together.",
    summary:
      "The owners of an irregular plot at Dhela, on the edge of Jim Corbett, asked what it should become. We planned a 15-key resort with its living in the middle — a central pool with floating decks, fourteen two-bedroom cottages and a four-bedroom duplex villa nestled in landscape — and its public life at the gate: a round reception and cafe, a 5,600 sq ft banquet hall and a welcoming arrival court. The forest land stays as it is.",
    scope: ["Site analysis", "Zoning & master plan", "Area programme", "Concept & design intent", "Inspiration boards"],
    chapters: [
      { title: "A plot on the edge of the forest.", image: photo("jim-corbett-resort-dhela/chapter-1.jpg", "The zoning plan: gateway, reception and cafe, banquet, villa, cottages, pool, open lawn and forest land") },
      { title: "Everything around the pool.", image: photo("jim-corbett-resort-dhela/chapter-2.jpg", "The conceptual site plan: cottages and the villa in planting around the central pool, the banquet hall and reception at the entrance") },
      { title: "From the gate to the deck.", image: photo("jim-corbett-resort-dhela/chapter-3.jpg", "The plan superimposed on the site, showing the resort against the neighbouring fields and buildings") },
    ],
    mosaic: [
      photo("jim-corbett-resort-dhela/mosaic-1.jpg", "The central pool with its floating decks, the row of cottages beside it"),
      photo("jim-corbett-resort-dhela/mosaic-2.jpg", "The arrival court, the round reception and cafe, and the banquet hall"),
      photo("jim-corbett-resort-dhela/mosaic-3.jpg", "The lower cottages along the meandering path"),
    ],
    concept: {
      title: "A harmonious retreat, rooted in nature.",
      text: "Private villas and cottages sit secluded in lush landscape, a central pool with deck and lounge spaces holds the middle of the site, and intimate courtyards and gardens run throughout. One curated, meandering pathway connects every space, from a welcoming arrival with feature landscaping to a private deck a level below the site, with the forest land left untouched beyond.",
      image: photo("jim-corbett-resort-dhela/concept.jpg", "The conceptual site sketch, with its notes on private villas, pool and deck, landscape courtyards, the meandering path and the arrival experience"),
      palette: [
        { name: "Forest grey-green", note: "The planting that wraps every cottage", color: "#a9aea2" },
        { name: "Pale olive", note: "Open lawn and the courtyard gardens", color: "#d8d9bd" },
        { name: "River sand", note: "Paths, decks and the arrival court", color: "#e3d8bf" },
        { name: "Taupe timber", note: "Cottage roofs, decks and screens", color: "#a89383" },
        { name: "Slate blue", note: "The central pool and its floating decks", color: "#9ba6b3" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "An irregular plot at Dhela, with forest land on one side and the village road on the other, and a question: what kind of resort should this be?",
        points: ["A plot on the edge of Jim Corbett", "Forest land adjoining the site", "A resort with rooms, events and a pool"],
      },
      {
        title: "Challenge",
        text: "The site is long and oddly shaped, narrowing to the road, with neighbouring buildings close on two sides — so privacy and arrival both needed careful planning.",
        points: ["An irregular, tapering plot", "Neighbours close to the boundary", "Keeping the forest edge untouched"],
      },
      {
        title: "Approach",
        text: "We zoned the plot in two halves: the public programme at the road end, the guest cottages and pool deep in the site, and one meandering path to connect them.",
        points: ["Arrival, reception, cafe and banquet at the gate", "Cottages and the villa around the pool", "A single curated path through the whole site"],
      },
      {
        title: "Design Decisions",
        text: "Fourteen two-bedroom cottages and a four-bedroom duplex villa, a central pool with floating decks, a 5,600 sq ft banquet hall, a round reception and cafe, an open lawn and a private deck a level down.",
        points: ["Cottages of 529 and 630 sq ft, villa of 1,700 sq ft", "Banquet hall of 78 by 72 feet", "Pool with floating decks at the heart of the plan"],
      },
      {
        title: "Execution",
        text: "The design intent — zoning, master plan, area programme and inspiration boards for each part of the resort — was issued in June 2026 as the basis for detailed design.",
        points: ["Zoning and conceptual site plan", "Area programme for every building", "Inspiration boards: entrance, reception, convention, villa, cottages, decks and pool"],
      },
      {
        title: "Outcome",
        text: "A clear plan for a 15-key retreat that earns from events at the gate and keeps its guests in the quiet of the forest edge.",
        points: ["15 keys around a central pool", "Events and arrival kept at the road end", "Forest land preserved as the setting"],
      },
    ],
    voiceImage: photo("jim-corbett-resort-dhela/voice.jpg", "Detail of the conceptual sketch: the pool, the cottages and the planting between them"),
    results: [
      { value: "15", label: "Keys: 14 cottages and a 4BHK villa" },
      { value: "5,600", label: "sq ft banquet hall" },
      { value: "1", label: "Central pool with floating decks" },
    ],
  },
  {
    slug: "the-dusk-pool-retreat",
    name: "The Dusk Pool Retreat",
    planningType: "hotel-resort",
    category: "Resort",
    location: "Konkan coast",
    size: "24 keys",
    engagement: "Feasibility → opening",
    image: img("1762254923872-5bdc4210eb90", "An infinity pool meeting the sea at sunset"),
    lead: "A plot zoned for eight villas, re-planned as a 24-key retreat whose pool terrace now draws guests who aren't even staying.",
    summary:
      "The owners came to us with villa drawings already done. Our feasibility study showed that a small resort would earn far more on the same land — and that the pool terrace, not the rooms, should be the reason people come. Today the retreat is full most weekends, and a quarter of its revenue walks in at sunset.",
    scope: ["Market feasibility", "Concept & positioning", "Master planning", "Room mix", "Design brief"],
    chapters: [
      {
        title: "Eight villas, or something better?",
        image: img("1561501900-3701fa6a0864", "A coastal resort on the cliffs above the sea at sunset"),
      },
      {
        title: "Plan around the sunset.",
        image: img("1643068730310-e8cff093b7ab", "A resort pool framed by palms under a pink evening sky"),
      },
      {
        title: "A terrace the town comes to.",
        image: img("1779249430124-b5bf40d4f9c9", "A lantern-lit resort terrace and pool at night"),
      },
    ],
    gallery: [
      img("1551882547-ff40c63fe5fa", "A resort pool among palms at dusk"),
      img("1596178067639-5c6e68aea6dc", "A villa pool terrace with loungers and tropical planting"),
      img("1543489822-c49534f3271f", "A cliff-top infinity pool overlooking the sea"),
    ],
    mosaic: [
      img("1571268493589-ec822cf5206c", "The pool terrace in the last light of the evening"),
      img("1774280954999-9758f11f3d41", "A timber-lined guest room opening onto tropical planting"),
      img("1786996969696-27eb56028ae5", "Shaded terrace dining under a woven pendant"),
    ],
    concept: {
      title: "Let the terrace lead.",
      text: "The rooms step down the slope so no roof blocks another's view, and every path on the site ends at one shared terrace placed for the last hour of light. The bar and kitchen sit on that terrace, open to the town as much as to guests, so the resort earns from the sunset even on quiet nights.",
      image: img("1692736933760-8a8a9b8c1b6f", "A private villa pool framed by tropical planting"),
      palette: [
        { name: "Lime-washed walls", note: "Hand-applied, left to weather with the salt air", color: "#ebe4d6" },
        { name: "Weathered teak", note: "Decking, shutters and loungers", color: "#8b6a4e" },
        { name: "Laterite stone", note: "Retaining walls and the terrace steps", color: "#a65d3f" },
        { name: "Pool-blue tile", note: "Hand-glazed, for the pool and the bar front", color: "#5f9ea3" },
        { name: "Sun-faded linen", note: "Canopies, cushions and room drapery", color: "#d9c9ad" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Owners of a two-acre coastal plot planned eight private villas for sale or rent — the drawings were already done.",
        points: ["Two acres on a sea-facing slope", "Villa plans ready to submit", "A goal: steady year-round income"],
      },
      {
        title: "Challenge",
        text: "The villa plan gave most of the sea frontage to private gardens, and similar villas nearby were struggling to fill weekdays.",
        points: ["Best views locked inside private plots", "Weak weekday demand for villas", "Monsoon months with no guests at all"],
      },
      {
        title: "Approach",
        text: "We studied weekend demand from Mumbai and Pune and modelled three concepts — villas, a 16-key boutique hotel and a 24-key retreat.",
        points: ["Demand mapped across 18 nearby properties", "Three concepts modelled over ten years", "Guest research on what brings people back"],
      },
      {
        title: "Design Decisions",
        text: "Twenty-four keys stepping down the slope, with one shared pool terrace on the best view and a dusk-to-dinner bar open to day guests.",
        points: ["Every room with a sea view", "The terrace placed for the sunset, not the noon sun", "A bar and kitchen that work for non-residents"],
      },
      {
        title: "Execution",
        text: "We wrote the design brief and room-mix schedule, then delivered the build with Atmosfere Spaces in twenty months.",
        points: ["Design brief signed off in month four", "Built in two monsoon-safe phases", "Pre-opening team trained on site"],
      },
      {
        title: "Outcome",
        text: "Weekend occupancy above 85% in the first season, and the terrace bar now earns a quarter of revenue from guests who aren't staying.",
        points: ["Three times the keys on the same land", "Full most weekends from year one", "A sunset terrace locals plan evenings around"],
      },
    ],
    voiceImage: img("1551882547-ff40c63fe5fa", "The pool terrace among palms at dusk"),
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
    chapters: [
      { title: "A good beach, a dated hotel.", image: img("1540541338287-41700207dee6", "An aerial view of a resort with a lagoon pool and the sea beyond") },
      { title: "Design for couples, not everyone.", image: img("1584132967334-10e028bd69f7", "Sun loungers and umbrellas on a quiet beach") },
      { title: "Open through the monsoons.", image: img("1527206363095-ca2f054128b0", "A thatched beach umbrella and loungers on white sand") },
    ],
    mosaic: [
      img("1643068730310-e8cff093b7ab", "The pool at dusk under a pink evening sky"),
      img("1551882547-ff40c63fe5fa", "Cabanas among the palms as the lights come on"),
      img("1571268493589-ec822cf5206c", "The pool deck in the last light of the evening"),
    ],
    concept: {
      title: "Make the pool the destination.",
      text: "A beach hotel competes with every other beach hotel. A pool with eight private cabanas, an adults-only end and a restaurant facing the water gives couples a reason to choose this one. The rooms were enlarged by combining pairs, so the building's footprint never changed; only what it offered did.",
      image: img("1596178067639-5c6e68aea6dc", "A villa pool terrace with loungers and tropical planting"),
      palette: [
        { name: "Whitewashed laterite", note: "The original walls, cleaned and limewashed", color: "#e8dfd2" },
        { name: "Sun-bleached teak", note: "Cabana frames, decking and headboards", color: "#a98566" },
        { name: "Canvas canopy", note: "Cabana drapes, replaced each season", color: "#f3eee3" },
        { name: "Sea-glass mosaic", note: "Pool lining and the bar counter", color: "#7fa9a4" },
        { name: "Goan terracotta", note: "Floor tiles in the restaurant and corridors", color: "#c3734f" },
      ],
    },
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
      img("1711707246899-cf0d1a5d0472", "The old water tank revived as a stone-edged courtyard pool"),
      img("1657349226767-66c983d7df39", "A heritage suite with a carved bed and warm lamps"),
      img("1655323193437-c68a5b3281f3", "A courtyard fountain surrounded by arches and planting"),
    ],
    chapters: [
      { title: "One haveli, three generations.", image: img("1682414181845-a725f154a14a", "A painted haveli courtyard ringed by arched galleries") },
      { title: "Fewer keys, both courtyards.", image: img("1711707246899-cf0d1a5d0472", "The old water tank revived as a stone-edged courtyard pool") },
      { title: "Restored by hand.", image: img("1655323193437-c68a5b3281f3", "A courtyard fountain surrounded by arches and planting") },
    ],
    mosaic: [
      img("1712661198955-b37aae39a714", "Deep red arched galleries lit warmly at night"),
      img("1695347597952-f8626d36ffb0", "A carved haveli door with brass rings and studs"),
      img("1657349226767-66c983d7df39", "A heritage suite with a carved bed and warm lamps"),
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
        image: img("1721572322100-014f13725864", "A narrow arched passage with carved stone screens in the old city"),
        points: ["No vehicle access to the front door", "Original rooms from 140 to 620 sq ft", "The family staying on the top floor"],
      },
      {
        title: "Approach",
        text: "We benchmarked the old city's boutique hotels and modelled three options side by side, so the family could compare them on numbers, not opinions.",
        image: img("1545126178-862cdb469409", "Jaipur's Hawa Mahal lit at dusk"),
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
        image: img("1721508490084-1b1de5b230d4", "A craftsman's hands carving a stone panel"),
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
    voiceImage: img("1641443493806-f0a9957d7ec9", "A pink sandstone facade with domed balconies in the old city"),
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
    chapters: [
      { title: "Eighteen rooms, half facing the road.", image: img("1615880484746-a134be9a6ecf", "A balcony with seating overlooking forested mountains") },
      { title: "Twelve rooms, all facing the valley.", image: img("1573052905904-34ad8c27f0cc", "A hotel room with an arched window and warm lighting") },
      { title: "One winter to deliver.", image: img("1759264244741-7175af0b7e75", "A quiet hotel room corner with a writing desk") },
    ],
    mosaic: [
      img("1578683010236-d716f9a3f461", "A valley-facing room with timber floors and a wall of glass"),
      img("1737233030536-247c1379d82c", "A writing alcove with an oak desk and wall lamp"),
      img("1642541070065-3912f347e7c6", "A quiet bedroom with a fluted wall and a halo pendant"),
    ],
    concept: {
      title: "Turn every room toward the valley.",
      text: "Instead of refreshing eighteen rooms, we kept the twelve that could face the view and gave the rest to the guest: a library lounge with a fire, a breakfast room and proper storage. The hotel stopped selling beds and started selling evenings, which is what the guests who paid more had wanted all along.",
      image: img("1608198399988-341f712c3711", "A heritage hotel room with arched windows and jewel-toned textiles"),
      palette: [
        { name: "Deodar timber", note: "Floors, window seats and the library shelves", color: "#8f6b4a" },
        { name: "Slate roof", note: "Repaired with stone from the same quarry", color: "#5c6066" },
        { name: "Himalayan wool", note: "Blankets and rugs woven in Kullu", color: "#cfc4b2" },
        { name: "Moss green", note: "Lounge walls and the lacquered library doors", color: "#6f7d5c" },
        { name: "Oxblood leather", note: "Armchairs and the reading-lamp shades", color: "#6e3a35" },
      ],
    },
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
    chapters: [
      { title: "A house empty most of the year.", image: img("1699949985517-cfcd9a3b154c", "A lake palace on still water at golden hour") },
      { title: "Five equal suites, one private wing.", image: img("1776763255431-633c91b6b4b6", "A sunlit courtyard with a plunge pool and planting") },
      { title: "Rented whole, still a home.", image: img("1723108034000-e7fd897e3be0", "A sunlit haveli courtyard with carved balconies") },
    ],
    mosaic: [
      img("1641443493806-f0a9957d7ec9", "The pink facade with its domed balconies"),
      img("1655323193437-c68a5b3281f3", "The courtyard fountain surrounded by arches and planting"),
      img("1720070143795-52e5f5ed7eaf", "Carved sandstone detail on the entrance front"),
    ],
    concept: {
      title: "A home first, a hotel second.",
      text: "Guests book the whole house, so it has to feel like one: five suites of equal standing around the pool courtyard, a kitchen that cooks for the table rather than a menu, and the owners' wing behind one lockable door. Nothing in the house says hotel, which is exactly why it earns a hotel's rate.",
      image: img("1601504410148-0c269aafd95c", "An arched corridor framed by bougainvillea"),
      palette: [
        { name: "Udaipur pink lime", note: "Exterior walls and the courtyard arches", color: "#e6b8ad" },
        { name: "White marble", note: "Baths, thresholds and the pool surround", color: "#ece8e1" },
        { name: "Mango wood", note: "Beds and wardrobes made in the city", color: "#b07f52" },
        { name: "Lake-blue cotton", note: "Upholstery and the courtyard cushions", color: "#7c9bb3" },
        { name: "Leheriya print", note: "Curtains and table linen from local dyers", color: "#d9a441" },
      ],
    },
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
    chapters: [
      { title: "How many villas can a ridge hold?", image: img("1718821585734-e22a8fc425a2", "A backwater resort with cottages reflected in calm water") },
      { title: "Six positions, six horizons.", image: img("1692736933760-8a8a9b8c1b6f", "A private villa pool framed by tropical planting") },
      { title: "Earning from phase one.", image: img("1543489822-c49534f3271f", "A cliff-top infinity pool overlooking the sea") },
    ],
    mosaic: [
      img("1561501900-3701fa6a0864", "The villas stepping along the ridge above the sea at sunset"),
      img("1596178067639-5c6e68aea6dc", "A private pool terrace with loungers and tropical planting"),
      img("1779249430124-b5bf40d4f9c9", "The arrival pavilion lantern-lit at night"),
    ],
    concept: {
      title: "Give each villa the whole horizon.",
      text: "We surveyed sight lines from every buildable point on the ridge and kept only the six where a villa sees nothing but sea and sky. Kitchens, staff paths and services sit below the ridge line, so from any pool the only building in view is the horizon.",
      image: img("1774280954999-9758f11f3d41", "A timber-lined guest room opening onto tropical planting"),
      palette: [
        { name: "Kerala laterite", note: "Cut on site for the villa walls", color: "#a9593b" },
        { name: "Coconut timber", note: "Rafters, decks and pool pavilions", color: "#8c6a46" },
        { name: "Lime plaster", note: "Interiors, left unpainted", color: "#ede6d8" },
        { name: "Athangudi tile", note: "Hand-made floors in every villa", color: "#6b8a7a" },
        { name: "Kasavu cream", note: "Linen and drapery in the local handloom", color: "#f1e9d2" },
      ],
    },
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
    chapters: [
      { title: "Weddings only, weekdays empty.", image: img("1779308936221-89739e035a53", "A wedding reception with floral arches and set tables") },
      { title: "A hall that changes shape.", image: img("1762765684665-6b6855bb6fe6", "A long hall with skylights and rows of tables") },
      { title: "Twice the bookings.", image: img("1783314863884-be035ed5ed5c", "A warm-lit banquet room set for dinner") },
    ],
    mosaic: [
      img("1744776411221-702f2848b0b2", "The hall set for a private dinner, lights low"),
      img("1774989423979-6a7bf5add3f0", "The pre-function lounge with banquettes and flowers"),
      img("1752004028694-72610be3604e", "A daylit conference setting with long tables"),
    ],
    concept: {
      title: "One hall, three rooms, any occasion.",
      text: "A wedding wants one grand room; a conference wants three smaller ones and somewhere to register. Acoustic partitions, new skylights and a pre-function lobby let the same floor do both. The finishes stay neutral, and lighting scenes do the dressing up, so the hall is never locked into a single look.",
      image: img("1786996969696-27eb56028ae5", "Shaded terrace dining under a woven pendant"),
      palette: [
        { name: "Warm oak", note: "Wall panelling and the lobby floor", color: "#b08a5e" },
        { name: "Acoustic felt", note: "Movable partitions and ceiling baffles", color: "#8e8a84" },
        { name: "Brushed brass", note: "Door furniture, rails and light fittings", color: "#b9985a" },
        { name: "Chalk white", note: "Walls that take any lighting scene", color: "#f2efe9" },
        { name: "Charcoal", note: "Stage surround and AV housings", color: "#3a3a3c" },
      ],
    },
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
