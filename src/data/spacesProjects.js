import { unsplash } from "@/lib/images";

// Atmosfere Spaces portfolio. Every project page follows the same six stages
// (Brief → Outcome). Names, figures, quotes and photographs are placeholders
// until the studio supplies its real portfolio.

const img = (id, alt) => ({ src: unsplash(id), alt });

export const spacesProjects = [
  {
    slug: "the-linen-house",
    name: "The Linen House",
    type: "residential",
    category: "Residence",
    location: "Gurugram",
    size: "4,200 sq ft",
    timeline: "7 months",
    image: img("1738168279272-c08d6dd22002", "A calm living room with an arc floor lamp, oak floors and linen upholstery"),
    lead: "A family home re-planned around light, linen and a single warm palette — so every room feels like part of the same quiet morning.",
    summary:
      "The owners wanted a home that felt restful without feeling bare. We opened the plan, edited the materials down to oak, lime plaster and natural linen, and drew every piece of joinery so storage disappears into the walls.",
    scope: ["Full interiors", "Space planning", "Custom joinery", "Lighting design", "Styling"],
    gallery: [
      img("1583847268964-b28dc8f51f92", "A bright living room with a cream sofa, soft throws and potted greenery"),
      img("1705326701287-346fc37a2c86", "A curved cream sofa and sculptural coffee table in a neutral lounge"),
      img("1784653548747-dfe7370326b3", "A serene bathroom with a round mirror, fluted vanity and plants"),
    ],
    stages: [
      { title: "Brief", text: "A family of four, two working parents and a home that felt cluttered and dark despite its size. They asked for calm, light and storage for everything." },
      { title: "Challenge", text: "Deep floor plates left the centre of the home without daylight, and the existing walls cut the living, dining and kitchen into three dim rooms." },
      { title: "Approach", text: "We removed two non-structural walls to create one long, light-filled living spine, and pulled every storage need into full-height joinery along its edges." },
      { title: "Design Decisions", text: "A restrained palette of oak, lime plaster and natural linen; warm 2700K lighting on dimmers; and handle-less cabinetry so the walls read as calm planes." },
      { title: "Execution", text: "Our own site team delivered civil work, joinery and finishes in seven months, with weekly walkthroughs and a single point of contact throughout." },
      { title: "Outcome", text: "A home that reads twice its size, with daylight reaching the kitchen for the first time — and not a single loose object left without a place." },
    ],
    quote: {
      text: "They drew it, built it and styled it — and the finished home looks exactly like the drawings we signed off.",
      name: "Homeowners, The Linen House",
    },
    results: [
      { value: "7", label: "Months, concept to keys" },
      { value: "2", label: "Walls removed for light" },
      { value: "100%", label: "Storage built in" },
    ],
  },
  {
    slug: "walnut-and-stone",
    name: "Walnut & Stone",
    type: "residential",
    category: "Apartment",
    location: "Mumbai",
    size: "2,600 sq ft",
    timeline: "5 months",
    image: img("1776935359460-6c789e972e6a", "A grey stone kitchen with a sculpted island, walnut bar stools and pendant lights"),
    lead: "A sea-facing apartment built from two honest materials — dark walnut and honed stone — and detailed so the city fades away inside.",
    summary:
      "For a couple who cook and host, we centred the home on a stone island kitchen that opens to the living room, then carried walnut and stone through every room for a quiet, continuous feel.",
    scope: ["Full interiors", "Kitchen design", "Custom joinery", "Material curation"],
    gallery: [
      img("1759150712537-0e32b6c6a373", "An open kitchen and dining space with a sculptural ring pendant"),
      img("1632583824020-937ae9564495", "A dark kitchen with a ribbon light, timber panelling and bar seating"),
      img("1631889993959-41b4e9c6e3c5", "A dark-tiled bathroom with a freestanding tub and timber vanity"),
    ],
    stages: [
      { title: "Brief", text: "A couple who cook every evening and host every weekend wanted a kitchen at the heart of the home — not hidden behind a wall." },
      { title: "Challenge", text: "Mumbai humidity is hard on timber, and the apartment's narrow galley kitchen had no room for the island they wanted." },
      { title: "Approach", text: "We moved the kitchen into the old dining room, turning it into an open island kitchen, and specified stabilised walnut veneers sealed for coastal air." },
      { title: "Design Decisions", text: "One stone, honed rather than polished, used for counters, island and bathroom vanities; walnut for everything you touch; brass only where light falls." },
      { title: "Execution", text: "Stone was templated digitally and cut off-site, so the island went in as a single slab in one day with no dust in the occupied building." },
      { title: "Outcome", text: "A kitchen that seats eight at the island, and an apartment where every room shares the same two materials and the same calm." },
    ],
    quote: {
      text: "Our apartment finally feels calm. Every cupboard has a purpose and every lamp is exactly where it should be.",
      name: "Homeowners, Walnut & Stone",
    },
    results: [
      { value: "8", label: "Seats at the island" },
      { value: "5", label: "Months on site" },
      { value: "2", label: "Materials, used throughout" },
    ],
  },
  {
    slug: "the-arch-house",
    name: "The Arch House",
    type: "residential",
    category: "Residence",
    location: "New Delhi",
    size: "5,800 sq ft",
    timeline: "11 months",
    image: img("1778731660244-b6e8f905107d", "An arched doorway framing a crystal chandelier and a stair landing"),
    lead: "A classical bungalow given a new rhythm of arches — framing views, softening long corridors and tying three floors into one composed home.",
    summary:
      "The house had grand proportions but no sense of arrival. We introduced a family of arches, a restored stair and a layered lighting plan so each room unfolds into the next.",
    scope: ["Full interiors", "Architectural detailing", "Lighting design", "Furniture & art"],
    gallery: [
      img("1634389312178-50613e56acda", "A dining room with tall arched windows, a round table and patterned chairs"),
      img("1596255955697-49fa5328def9", "A living room with arched windows and soft neutral seating"),
      img("1505693416388-ac5ce068fe85", "A classic bedroom with a tufted headboard and bedside lamps"),
    ],
    stages: [
      { title: "Brief", text: "A multi-generational family wanted their 1980s bungalow to feel timeless — formal enough to entertain, warm enough to live in every day." },
      { title: "Challenge", text: "Long, featureless corridors and mismatched openings on every floor made the house feel like a series of disconnected rooms." },
      { title: "Approach", text: "We drew a single arch profile and repeated it at every threshold, so openings line up across the house and frame views from room to room." },
      { title: "Design Decisions", text: "Lime-washed walls, honed marble floors, and a crystal chandelier restored as the stair's centrepiece; furniture in quiet tones so the architecture leads." },
      { title: "Execution", text: "Arches were formed in-situ by our masons, then plastered by hand; the house stayed partly occupied with phased handovers floor by floor." },
      { title: "Outcome", text: "A home with a clear sense of arrival and flow, and a stair hall that has become the family's favourite room for gatherings." },
    ],
    quote: {
      text: "Every door now frames something beautiful. Guests walk in and stop at the stair — exactly what we hoped for.",
      name: "Homeowners, The Arch House",
    },
    results: [
      { value: "14", label: "New arched openings" },
      { value: "3", label: "Floors, handed over in phases" },
      { value: "11", label: "Months on site" },
    ],
  },
  {
    slug: "the-quiet-study",
    name: "The Quiet Study",
    type: "residential",
    category: "Residence",
    location: "Dehradun",
    size: "3,100 sq ft",
    timeline: "6 months",
    image: img("1737233030536-247c1379d82c", "A study alcove with an arched niche, oak desk and wall lamp"),
    lead: "A hillside home for a writer and an architect, with two studies, deep window seats and rooms tuned for long, focused days.",
    summary:
      "The owners both work from home. We planned two separate, acoustically quiet studies, then shaped the rest of the house around views of the valley and the changing light.",
    scope: ["Space planning", "Acoustic design", "Custom joinery", "Lighting design"],
    gallery: [
      img("1613685303404-19f881533316", "A light-filled home study with a desk, shelving and armchairs"),
      img("1688646953306-5ec93eab8c06", "A soft neutral room with an arched alcove and lounge seating"),
      img("1578683010236-d716f9a3f461", "A bedroom with timber floors and a wall of glass to the outdoors"),
    ],
    stages: [
      { title: "Brief", text: "Two people working from home, full time, needed rooms where calls, writing and drawing could happen at once without interruption." },
      { title: "Challenge", text: "An open-plan layout carried every sound through the house, and the best valley views were from the busiest rooms." },
      { title: "Approach", text: "We carved two studies at either end of the plan with acoustic doors and lined walls, and turned the valley-side wall into a long window seat." },
      { title: "Design Decisions", text: "Arched niches for desks, oak joinery with integrated task lighting, wool rugs and lined curtains to keep rooms quiet and warm in winter." },
      { title: "Execution", text: "Joinery was built in our workshop during monsoon and installed in a fortnight once the site was dry; finishes followed in the clear season." },
      { title: "Outcome", text: "Two studies that can host calls simultaneously, and a house the owners describe as the quietest they have ever lived in." },
    ],
    quote: {
      text: "We work all day at home now and never get in each other's way. The window seat is where every evening ends.",
      name: "Homeowners, The Quiet Study",
    },
    results: [
      { value: "2", label: "Acoustic studies" },
      { value: "6", label: "Months on site" },
      { value: "9 m", label: "Window seat to the valley" },
    ],
  },
  {
    slug: "atelier-dining",
    name: "Atelier Dining",
    type: "commercial",
    category: "Restaurant",
    location: "Gurugram",
    size: "1,900 sq ft",
    timeline: "14 weeks",
    image: img("1753800558729-7929703f81de", "Globe pendant lights over a dining table with sculptural branches"),
    lead: "A 48-cover restaurant designed like a private dining room — low light, soft acoustics and tables you want to stay at.",
    summary:
      "The founders wanted a room that felt intimate on a quiet Tuesday and alive on a full Saturday. We zoned the floor with banquettes, tuned the lighting by hour and designed the bar as the room's warm centre.",
    scope: ["Restaurant interiors", "Lighting design", "Acoustics", "FF&E", "Turnkey execution"],
    gallery: [
      img("1744776411221-702f2848b0b2", "A dark restaurant dining room with set tables and warm lighting"),
      img("1774989423979-6a7bf5add3f0", "A lounge with velvet banquettes, floral arrangements and glowing lamps"),
      img("1551530241-1ccbaa7a9a84", "A warm-lit restaurant with timber shelving and pendant lights"),
    ],
    stages: [
      { title: "Brief", text: "A chef-led restaurant needed 48 covers, a bar that could stand on its own, and a room that photographs well without feeling staged." },
      { title: "Challenge", text: "A long, narrow shell with hard surfaces made the room loud at half capacity and left the back tables feeling like an afterthought." },
      { title: "Approach", text: "We broke the room into three zones — bar, banquettes, private table — so every seat has a wall at its back and a view of the room." },
      { title: "Design Decisions", text: "Velvet banquettes and fabric ceilings for acoustics, globe pendants on scenes that dim through service, and a timber-and-brass bar as the anchor." },
      { title: "Execution", text: "A 14-week fit-out with night shifts in a live mall; kitchen services, FF&E and signage coordinated under one contract." },
      { title: "Outcome", text: "Opened on schedule, fully booked on weekends within a month, and quiet enough for conversation even at full capacity." },
    ],
    quote: {
      text: "Guests ask for 'the corner banquette' by name. The room does half our hospitality for us.",
      name: "Founder, Atelier Dining",
    },
    results: [
      { value: "48", label: "Covers" },
      { value: "14", label: "Weeks to opening" },
      { value: "−9 dB", label: "Noise at full service" },
    ],
  },
  {
    slug: "the-spiral-residence",
    name: "The Spiral Residence",
    type: "residential",
    category: "Residence",
    location: "Chandigarh",
    size: "4,800 sq ft",
    timeline: "10 months",
    image: img("1758801304964-417e328be877", "A sculpted timber spiral staircase in warm light"),
    lead: "Turning a dark, compartmentalised floor plan into one continuous, light-filled volume around a sculpted timber stair.",
    summary:
      "We replaced a boxed-in staircase with an open timber spiral under a new skylight, letting daylight fall through three levels and connecting the family's living spaces vertically.",
    scope: ["Structural re-planning", "Staircase design", "Full interiors", "Skylight"],
    gallery: [
      img("1778640331184-dc4c3e2608e1", "A double-height living room with tall glass doors opening to a garden"),
      img("1526573059328-179b147e1b42", "A sweeping spiral staircase against a dark wall"),
      img("1617126481205-cdf29da03b41", "A timber spiral stair rising through a warm, panelled hall"),
    ],
    stages: [
      { title: "Brief", text: "A three-level family home where the floors felt like separate flats. The owners wanted to see and hear each other across the house." },
      { title: "Challenge", text: "An enclosed concrete stair blocked light at the centre of the plan, and the roof above it had no openings at all." },
      { title: "Approach", text: "With a structural engineer, we removed the stair core, cut a skylight above, and designed a free-standing timber spiral as the home's new centre." },
      { title: "Design Decisions", text: "Steam-bent oak treads on a steel spine, a plaster-white well to bounce daylight down, and living spaces re-oriented to face the stair." },
      { title: "Execution", text: "The stair was prototyped at full scale in our workshop, then assembled on site in nine days; structural works ran under a separate safety plan." },
      { title: "Outcome", text: "Daylight now reaches the ground floor at noon, and the stair has become the sculptural heart of the home." },
    ],
    quote: {
      text: "The house used to feel like three apartments. Now we call to each other up the stair and the whole home lights up at noon.",
      name: "Homeowners, The Spiral Residence",
    },
    results: [
      { value: "3", label: "Levels connected by light" },
      { value: "9", label: "Days to install the stair" },
      { value: "10", label: "Months on site" },
    ],
  },
  {
    slug: "marble-and-brass-office",
    name: "Marble & Brass Office",
    type: "commercial",
    category: "Workplace",
    location: "Bengaluru",
    size: "3,400 sq ft",
    timeline: "12 weeks",
    image: img("1778731525532-d2ab833c8463", "A modern office with a marble desk and a plush chair"),
    lead: "A founder's office that had to host board meetings and quiet focus — resolved with zoning, acoustics and a single marble plinth.",
    summary:
      "We planned the floor as a sequence: a welcoming lounge, a boardroom that doubles as a dining room, and a private study at the far end — all bound by marble, brass and walnut.",
    scope: ["Workplace interiors", "Acoustics", "Custom furniture", "Turnkey execution"],
    gallery: [
      img("1623351143485-b1d4937747f3", "A dark, panelled office with a long table and patterned screens"),
      img("1758448511255-ac2a24a135d7", "A bright reception lounge with a sculptural ring light"),
    ],
    stages: [
      { title: "Brief", text: "A founder needed one floor to work as an office, a boardroom and a place to host investors over dinner." },
      { title: "Challenge", text: "An open shell with glass on three sides offered great views, but no privacy and harsh afternoon glare." },
      { title: "Approach", text: "We zoned the floor from public to private and used fluted glass and drapery to soften light without losing the views." },
      { title: "Design Decisions", text: "A marble plinth desk, a walnut boardroom table that extends for dinners, and brass detailing kept to handles, lamps and trims." },
      { title: "Execution", text: "Delivered in 12 weeks with weekend-only noisy works so neighbouring tenants were never disturbed." },
      { title: "Outcome", text: "An office the founder now uses for every investor meeting — and, on Fridays, for team dinners." },
    ],
    quote: {
      text: "One point of contact for the whole project. Weekly updates, no surprises on cost, and a handover date they actually met.",
      name: "Founder, design-led startup",
    },
    results: [
      { value: "12", label: "Weeks to handover" },
      { value: "3", label: "Zones on one floor" },
      { value: "0", label: "Days over schedule" },
    ],
  },
  {
    slug: "the-walnut-kitchen",
    name: "The Walnut Kitchen",
    type: "residential",
    category: "Residence",
    location: "Pune",
    size: "1,100 sq ft (kitchen & dining)",
    timeline: "10 weeks",
    image: img("1737898378296-94dc316cd443", "A walnut-panelled kitchen and dining room in soft daylight"),
    lead: "A cramped kitchen opened into one walnut-lined room for cooking, dining and hosting — with storage that hides everything.",
    summary:
      "We merged a closed kitchen, a store and a formal dining room into one generous space, lined in walnut, with a pantry wall that swallows every appliance.",
    scope: ["Kitchen & dining", "Custom joinery", "Appliance planning", "Lighting design"],
    gallery: [
      img("1696986681606-b156ccd761c5", "A modern kitchen with a stone island and black fittings"),
      img("1611095210561-67f0832b1ca3", "A grey and timber kitchen with a waterfall island and pendant lights"),
      img("1752004028694-72610be3604e", "A bright dining room with a long table and neutral chairs"),
    ],
    stages: [
      { title: "Brief", text: "A family that cooks together wanted to stop eating in shifts — one room where everyone could cook, eat and talk." },
      { title: "Challenge", text: "Three small rooms, two load-bearing walls and a kitchen with no natural ventilation." },
      { title: "Approach", text: "We kept the structure, reworked openings within it, and moved cooking to the window wall for light and cross-ventilation." },
      { title: "Design Decisions", text: "Walnut on every vertical surface, a full-height pantry wall with pocket doors, and a long dining table that meets the island." },
      { title: "Execution", text: "Ten weeks from demolition to handover, with a temporary kitchen set up so the family kept cooking throughout." },
      { title: "Outcome", text: "A kitchen-dining room that seats twelve, with nothing on the counters but what's being cooked." },
    ],
    results: [
      { value: "12", label: "Seats at the table" },
      { value: "10", label: "Weeks to handover" },
      { value: "3→1", label: "Rooms combined" },
    ],
  },
];

export const spacesProjectFilters = [
  { label: "All work", value: null },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
];

export function getSpacesProject(slug) {
  return spacesProjects.find((p) => p.slug === slug);
}
