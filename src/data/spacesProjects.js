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
    image: img("1705326701287-346fc37a2c86", "A calm living room with curved cream sofas and a sculptural coffee table"),
    lead: "A family home re-planned around light, linen and a single warm palette — so every room feels like part of the same quiet morning.",
    summary:
      "The owners wanted a home that felt restful without feeling bare. We opened the plan, edited the materials down to oak, lime plaster and natural linen, and drew every piece of joinery so storage disappears into the walls.",
    scope: ["Full interiors", "Space planning", "Custom joinery", "Lighting design", "Styling"],
    gallery: [
      img("1583847268964-b28dc8f51f92", "A bright living room with a cream sofa, soft throws and potted greenery"),
      img("1738168279272-c08d6dd22002", "A living room with an arc floor lamp, oak floors and linen upholstery"),
      img("1784653548747-dfe7370326b3", "A serene bathroom with a round mirror, fluted vanity and plants"),
    ],
    chapters: [
      { title: "Big, dark and full of things.", image: img("1583847268964-b28dc8f51f92", "A bright living room with a cream sofa, soft throws and potted greenery") },
      { title: "One light-filled spine.", image: img("1738168279272-c08d6dd22002", "A living room with an arc floor lamp, oak floors and linen upholstery") },
      { title: "Everything in its place.", image: img("1784653548747-dfe7370326b3", "A serene bathroom with a round mirror, fluted vanity and plants") },
    ],
    concept: {
      title: "One quiet palette, drawn to the last hinge.",
      text: "Calm comes from fewer decisions, made well. Three materials run through every room, storage is built into the walls rather than placed in front of them, and the lighting is warm and dimmable so the house feels the same at dawn as it does at dinner. Nothing shouts, so the light gets to lead.",
      image: img("1596255955697-49fa5328def9", "A living room with tall arched windows and soft neutral seating"),
      palette: [
        { name: "White oak", note: "Floors, joinery fronts and the dining table", color: "#c9b48e" },
        { name: "Lime plaster", note: "Every wall, hand-finished", color: "#ece6da" },
        { name: "Natural linen", note: "Sofas, drapery and bed linen", color: "#d8cfbd" },
        { name: "Warm brass", note: "Taps, lamps and the few visible handles", color: "#b08d57" },
        { name: "Travertine", note: "Kitchen counters and bathroom floors", color: "#d6cbb8" },
      ],
    },
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
    image: img("1688647063090-36f36f692d95", "A living room with a walnut and stone wall of lit shelving and soft grey sofas"),
    lead: "A sea-facing apartment built from two honest materials — dark walnut and honed stone — and detailed so the city fades away inside.",
    summary:
      "For a couple who cook and host, we centred the home on a stone island kitchen that opens to the living room, then carried walnut and stone through every room for a quiet, continuous feel.",
    scope: ["Full interiors", "Kitchen design", "Custom joinery", "Material curation"],
    gallery: [
      img("1776935359460-6c789e972e6a", "A grey stone kitchen with a sculpted island, walnut bar stools and pendant lights"),
      img("1632583824020-937ae9564495", "A dark kitchen with a ribbon light, timber panelling and bar seating"),
      img("1631889993959-41b4e9c6e3c5", "A dark-tiled bathroom with a freestanding tub and timber vanity"),
    ],
    chapters: [
      { title: "A kitchen hidden behind a wall.", image: img("1776935359460-6c789e972e6a", "A grey stone kitchen with a sculpted island, walnut bar stools and pendant lights") },
      { title: "Two materials, honestly used.", image: img("1632583824020-937ae9564495", "A dark kitchen with a ribbon light, timber panelling and bar seating") },
      { title: "One slab, one day.", image: img("1631889993959-41b4e9c6e3c5", "A dark-tiled bathroom with a freestanding tub and timber vanity") },
    ],
    concept: {
      title: "Two materials, and the city left outside.",
      text: "Walnut for everything the hand touches, stone for everything that takes a knife, a glass or a bath. Keeping to two materials lets the apartment read as one continuous room, and the honed finishes swallow Mumbai's glare instead of bouncing it. Brass appears only where light falls on it.",
      image: img("1611095210561-67f0832b1ca3", "A grey and timber kitchen with a waterfall island and pendant lights"),
      palette: [
        { name: "Dark walnut", note: "Stabilised veneers, sealed for coastal air", color: "#5a3e2b" },
        { name: "Honed grey stone", note: "Counters, island and bathroom vanities", color: "#8c8c88" },
        { name: "Smoked glass", note: "Cabinet fronts and the shower screen", color: "#4a4f55" },
        { name: "Brushed brass", note: "Taps, pendants and drawer pulls", color: "#a88a5c" },
        { name: "Charcoal wool", note: "Sofas and the bedroom rug", color: "#3f3f42" },
      ],
    },
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
    // Flagship case study: full long-form content for client demos.
    slug: "the-arch-house",
    name: "The Arch House",
    type: "residential",
    category: "Residence",
    location: "New Delhi",
    size: "5,800 sq ft",
    timeline: "11 months",
    image: img("1750420556288-d0e32a6f517b", "A bedroom with an arched timber headboard wall and soft cove lighting"),
    lead: "A 1980s bungalow given a single, repeated arch — framing views, softening long corridors and tying three floors into one composed family home.",
    summary:
      "Three generations shared a house with grand proportions and no sense of arrival. We drew one arch profile, repeated it at every threshold, restored the stair as the home's centrepiece and layered light so each room unfolds into the next.",
    scope: ["Full interiors", "Architectural detailing", "Custom joinery", "Lighting design", "Furniture & art", "Turnkey execution"],
    glance: [
      { label: "Client", value: "Family of six, three generations" },
      { label: "Location", value: "South Delhi" },
      { label: "Built-up area", value: "5,800 sq ft over 3 floors" },
      { label: "Design", value: "10 weeks" },
      { label: "Build", value: "9 months, phased" },
      { label: "Team", value: "Design lead, 2 designers, PM, 14 on site" },
    ],
    gallery: [
      img("1634389312178-50613e56acda", "A dining room with tall arched windows, a round table and patterned chairs"),
      img("1778731660244-b6e8f905107d", "An arched doorway framing a crystal chandelier and a stair landing"),
      img("1770107830461-f61bdc31f1e5", "A long hallway framed by a sequence of plastered arches"),
      img("1554703752-4a82234d396e", "A sweeping marble staircase with a carved balustrade"),
      img("1505693416388-ac5ce068fe85", "The grandparents' suite with a tufted headboard and bedside lamps"),
      img("1761509844502-a2543f6f1df2", "A smoked-oak door set into an arched opening"),
    ],
    chapters: [
      { title: "Good bones, no rhythm.", image: img("1770107830461-f61bdc31f1e5", "A long hallway framed by a sequence of plastered arches") },
      { title: "One arch, drawn once.", image: img("1554703752-4a82234d396e", "A sweeping marble staircase with a carved balustrade") },
      { title: "Handed over floor by floor.", image: img("1634389312178-50613e56acda", "A dining room with tall arched windows, a round table and patterned chairs") },
    ],
    mosaic: [
      img("1778731660244-b6e8f905107d", "An arched doorway framing a crystal chandelier and a stair landing"),
      img("1505693416388-ac5ce068fe85", "The grandparents' suite with a tufted headboard and bedside lamps"),
      img("1761509844502-a2543f6f1df2", "A smoked-oak door set into an arched opening"),
    ],
    context: {
      title: "A house of good bones and no rhythm.",
      body: [
        "The family had lived in the bungalow for thirty years. Each generation had added a room, a door or a false ceiling, until the house felt like a sequence of unrelated spaces joined by long, dark corridors.",
        "They asked for a home that felt timeless rather than trendy — formal enough to host 40 guests at Diwali, warm enough for grandchildren to run through every day, and calm enough for the grandparents' morning prayers.",
      ],
      constraints: [
        { title: "Mismatched openings", text: "Twenty-three doorways of nine different widths and heights across three floors." },
        { title: "Long, dark corridors", text: "A 38-foot ground-floor passage with no daylight and no reason to pause." },
        { title: "Low upper ceilings", text: "The second floor sat 30 cm lower than the ground floor, making it feel cramped." },
        { title: "A family in residence", text: "The grandparents could not move out, so work had to be phased floor by floor." },
      ],
    },
    concept: {
      title: "One arch, repeated — and a palette that lets it lead.",
      text: "Every threshold was redrawn to a single proportion: a semicircular arch, 1.2 m wide, 2.6 m to the crown. Repeated through the house, it lines openings up on axis, frames views from room to room and turns the old corridor into a gallery. Materials stay quiet so the architecture can speak.",
      image: img("1777284860318-a5130ef99be2", "A warm arched timber doorway set into a plastered wall"),
      palette: [
        { name: "Lime-wash plaster", note: "Hand-troweled walls with soft movement", color: "#e8e0d2" },
        { name: "Honed Botticino", note: "Floors and stair treads, matte finish", color: "#ddd2bf" },
        { name: "Smoked oak", note: "Doors, joinery and the stair handrail", color: "#6a4e38" },
        { name: "Aged brass", note: "Handles, lamps and arch trims only", color: "#a8824e" },
        { name: "Ivory linen", note: "Upholstery and full-height drapery", color: "#efe8db" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Six people, three generations, one house. We spent two weeks living with the family's routines — mornings, meals, festivals — before drawing a single line.",
        image: img("1596255955697-49fa5328def9", "A living room with tall arched windows and soft neutral seating"),
        points: ["Measured survey of all three floors", "Interviews with every member of the family", "A shared list of rooms to keep, change and remove"],
      },
      {
        title: "Challenge",
        text: "Openings of nine different sizes, a windowless corridor and a lower upper floor made the house feel disjointed and dark despite its size.",
        image: img("1789986186710-6a87e6422102", "A long, dim corridor of arches and pendant lights"),
        points: ["23 doorways, no two alike", "No daylight in the central passage", "Phased works with grandparents in residence"],
      },
      {
        title: "Approach",
        text: "We drew one arch profile and applied it to every threshold, aligning openings on axis so that each room frames a view of the next.",
        image: img("1688646953306-5ec93eab8c06", "A soft neutral room seen through an arched alcove"),
        points: ["14 new arched openings; 9 doorways closed or moved", "Corridor re-planned as a lit picture gallery", "Upper-floor ceilings raised by removing old false ceilings"],
      },
      {
        title: "Design Decisions",
        text: "Lime-washed walls, honed marble and smoked oak, with brass kept for what the hand touches. The stair's crystal chandelier was restored as the home's centrepiece.",
        image: img("1745301558339-44eb3217d5da", "A pale living room with a carved arch feature wall and marble floor"),
        points: ["Three-layer lighting: cove, wall wash and lamps on scenes", "Furniture in quiet tones so the arches lead", "Art placed on the axis of every arch"],
      },
      {
        title: "Execution",
        text: "Arches were formed in-situ by our masons and plastered by hand. The house stayed lived-in, with each floor handed over before the next began.",
        image: img("1784400340288-a429a0c1f4d8", "A warmly lit sequence of plastered arches and a polished floor"),
        points: ["Full-scale arch mock-up approved on site in week 11", "Dust-sealed zones and night-time noisy works", "Weekly walkthroughs with the family"],
      },
      {
        title: "Outcome",
        text: "A home with a clear sense of arrival and flow, a gallery where there was once a corridor, and a stair hall the family now uses for every gathering.",
        image: img("1696413542101-2479dd479982", "A finished lounge with arched niches, soft seating and warm lamps"),
      },
    ],
    feature: {
      image: img("1780245997131-1af7a8de9538", "A curving stair rising beside a tall arched window"),
      line: "One arch, drawn once, repeated fourteen times.",
      caption: "The restored stair hall",
    },
    voiceImage: img("1758448755952-42b404bc6f39", "A finished living room with a crystal chandelier and warm lighting"),
    quote: {
      text: "Every door now frames something beautiful. Guests walk in and stop at the stair — exactly what we hoped for.",
      name: "Homeowners, The Arch House",
    },
    results: [
      { value: "14", label: "New arched openings" },
      { value: "3", label: "Floors, handed over in phases" },
      { value: "11", label: "Months, concept to keys" },
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
    image: img("1642541070065-3912f347e7c6", "A quiet bedroom with a fluted wall, abstract art and a halo pendant"),
    lead: "A hillside home for a writer and an architect, with two studies, deep window seats and rooms tuned for long, focused days.",
    summary:
      "The owners both work from home. We planned two separate, acoustically quiet studies, then shaped the rest of the house around views of the valley and the changing light.",
    scope: ["Space planning", "Acoustic design", "Custom joinery", "Lighting design"],
    gallery: [
      img("1613685303404-19f881533316", "A light-filled home study with a desk, shelving and armchairs"),
      img("1737233030536-247c1379d82c", "A study alcove with an arched niche, oak desk and wall lamp"),
      img("1578683010236-d716f9a3f461", "A bedroom with timber floors and a wall of glass to the outdoors"),
    ],
    chapters: [
      { title: "Two people, one open plan.", image: img("1613685303404-19f881533316", "A light-filled home study with a desk, shelving and armchairs") },
      { title: "A study at each end.", image: img("1737233030536-247c1379d82c", "A study alcove with an arched niche, oak desk and wall lamp") },
      { title: "Built in the workshop, fitted in a fortnight.", image: img("1578683010236-d716f9a3f461", "A bedroom with timber floors and a wall of glass to the outdoors") },
    ],
    concept: {
      title: "Two quiet rooms, and a seat for the view.",
      text: "The plan pulls the two studies to opposite ends of the house, each behind an acoustic door and lined walls, so a call in one is silence in the other. Everything between them is given to the valley: a nine-metre window seat, deep enough to work from, where the house gathers at the end of the day.",
      image: img("1696413542101-2479dd479982", "A finished lounge with arched niches, soft seating and warm lamps"),
      palette: [
        { name: "Natural oak", note: "Desks, shelving and the window seat", color: "#c4a16f" },
        { name: "Wool felt", note: "Acoustic wall linings in both studies", color: "#9a9185" },
        { name: "Deodar green", note: "Study walls and the lined curtains", color: "#5f6e5a" },
        { name: "Chalk plaster", note: "Living spaces, left matte", color: "#ebe7df" },
        { name: "Lined linen", note: "Curtains that keep rooms quiet and warm", color: "#d5ccbb" },
      ],
    },
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
    chapters: [
      { title: "Forty-eight covers in a narrow shell.", image: img("1744776411221-702f2848b0b2", "A dark restaurant dining room with set tables and warm lighting") },
      { title: "Three zones, every seat with a back.", image: img("1774989423979-6a7bf5add3f0", "A lounge with velvet banquettes, floral arrangements and glowing lamps") },
      { title: "Open on schedule, full in a month.", image: img("1551530241-1ccbaa7a9a84", "A warm-lit restaurant with timber shelving and pendant lights") },
    ],
    concept: {
      title: "A private dining room, forty-eight times over.",
      text: "Every table gets what a private room gives: a wall at its back, a view of the room and light that falls on the table rather than the guest. Velvet, fabric ceilings and timber take the noise out of a hard shell, and the lighting dims through the evening so the room feels different at seven and at eleven.",
      image: img("1623351143485-b1d4937747f3", "A dark, panelled room with a long table and patterned screens"),
      palette: [
        { name: "Bottle-green velvet", note: "Banquettes and the private-table chairs", color: "#2f4f44" },
        { name: "Fumed oak", note: "Bar front, shelving and table tops", color: "#5b4634" },
        { name: "Antique brass", note: "Bar rail, pendants and sconces", color: "#a07f4a" },
        { name: "Burgundy leather", note: "Bar stools and menu covers", color: "#5e2f33" },
        { name: "Plaster, dimmed", note: "Walls lit low so the tables glow", color: "#cdbfa8" },
      ],
    },
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
    image: img("1719941069639-e6735f177812", "A sculpted white spiral stair washed in warm hidden light"),
    lead: "Turning a dark, compartmentalised floor plan into one continuous, light-filled volume around a sculpted timber stair.",
    summary:
      "For thirty years a concrete stair core sat at the centre of this family home, blocking light and splitting three floors into three separate flats. We took it out, opened the roof above it, and set a single sculpted timber spiral in its place — now the brightest, most loved room in the house.",
    scope: ["Structural re-planning", "Staircase design", "Full interiors", "Skylight"],
    chapters: [
      {
        title: "A house split in three.",
        image: img("1695319117132-a946ec83785e", "Concrete stairs and planting caught between light and shadow"),
      },
      {
        title: "One stair, under the sky.",
        image: img("1711963224442-f6eb1329e8c6", "A brick-walled stairwell open to the sky, with planting below"),
      },
      {
        title: "Built at full scale, twice.",
        image: img("1590880795696-20c7dfadacde", "A sunlit joinery workshop with timber, benches and hand tools"),
      },
    ],
    gallery: [
      img("1778640331184-dc4c3e2608e1", "A double-height living room with tall glass doors opening to a garden"),
      img("1526573059328-179b147e1b42", "A sweeping spiral staircase against a dark wall"),
      img("1617126481205-cdf29da03b41", "A timber spiral stair rising through a warm, panelled hall"),
    ],
    mosaic: [
      img("1778640331184-dc4c3e2608e1", "The double-height living room, now open to the stair and the garden"),
      img("1572558651886-d44748e0e3dd", "The timber spiral seen from the top landing"),
      img("1617126481205-cdf29da03b41", "Steam-bent oak treads rising through the hall"),
    ],
    concept: {
      title: "Take out the core. Let the light down.",
      text: "The idea is one subtraction and one addition. Remove the concrete stair that blocked the centre of the house, open the roof above it, and set a single timber spiral in the light that pours down. The well is kept plaster-white and empty of anything else, so the stair reads as sculpture and the daylight reaches the ground floor.",
      image: img("1526573059328-179b147e1b42", "A sweeping spiral staircase against a dark wall"),
      palette: [
        { name: "Steam-bent oak", note: "Treads and handrail, hand-oiled", color: "#b58a5a" },
        { name: "Plaster white", note: "The stairwell, to bounce light down", color: "#f1ede6" },
        { name: "Blackened steel", note: "The single spine that carries the stair", color: "#2f3134" },
        { name: "Clear glass", note: "Balustrade and the skylight above", color: "#c9d6d8" },
        { name: "Pale limestone", note: "Ground-floor paving under the stair", color: "#ddd5c6" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "A three-level family home where every floor felt like its own flat. The owners wanted to see and hear each other across the house again.",
        points: ["Three generations under one roof", "A wish for light at the centre of the plan", "No loss of bedrooms"],
      },
      {
        title: "Challenge",
        text: "An enclosed concrete stair blocked daylight at the heart of the plan, and the roof above it had no openings at all.",
        points: ["Load-bearing stair core", "No natural light below the top floor", "A family living in during works"],
      },
      {
        title: "Approach",
        text: "With a structural engineer, we removed the stair core, cut a skylight above it, and designed a free-standing timber spiral as the home's new centre.",
        points: ["New steel frame to carry the floors", "A 2.4 m skylight above the stairwell", "Living spaces re-oriented to face the stair"],
      },
      {
        title: "Design Decisions",
        text: "Steam-bent oak treads on a single steel spine, a plaster-white well to bounce daylight down, and nothing else competing for attention.",
        points: ["Oak treads with a hand-rubbed oil finish", "A glass balustrade so the curve reads clearly", "Warm 2700K light hidden under every tread"],
      },
      {
        title: "Execution",
        text: "The stair was prototyped at full scale in our workshop, taken apart, and reassembled on site in nine days under a separate safety plan.",
        points: ["Full-size mock-up approved in the workshop", "Nine days from delivery to the last tread", "Structural works phased floor by floor"],
      },
      {
        title: "Outcome",
        text: "Daylight now reaches the ground floor at noon, and the stair has become the sculptural heart of the home — and the place everyone meets.",
        points: ["Light on all three levels", "One connected family home", "Handed over in ten months"],
      },
    ],
    voiceImage: img("1754825653375-775b946849f7", "Timber stair landings rising under a glazed roof"),
    quote: {
      text: "The house used to feel like three apartments. Now we call to each other up the stair, and the whole home lights up at noon.",
      name: "Homeowners, The Spiral Residence",
    },
    results: [
      { value: "3", label: "Levels connected by light" },
      { value: "9", label: "Days to install the stair" },
      { value: "10", label: "Months, brief to handover" },
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
    chapters: [
      { title: "Office, boardroom, dining room.", image: img("1758448511255-ac2a24a135d7", "A bright reception lounge with a sculptural ring light") },
      { title: "Public to private, across one floor.", image: img("1623351143485-b1d4937747f3", "A dark, panelled office with a long table and patterned screens") },
      { title: "Twelve weeks, weekends only.", image: img("1780245997131-1af7a8de9538", "A curving stair rising beside a tall arched window") },
    ],
    concept: {
      title: "One floor, read from public to private.",
      text: "The plan is a sequence. Visitors arrive into a lounge, move to a boardroom whose walnut table extends for dinner, and only the founder goes on to the study at the far end. Fluted glass and drapery soften the glare from three glass walls without giving up the views, and a single marble plinth marks where the work happens.",
      image: img("1752004028694-72610be3604e", "A bright room with a long table and neutral chairs"),
      palette: [
        { name: "Statuario marble", note: "The founder's plinth desk and reception counter", color: "#e9e6e0" },
        { name: "American walnut", note: "The boardroom table and wall panelling", color: "#6e4b35" },
        { name: "Brushed brass", note: "Handles, lamps and trims only", color: "#b4935f" },
        { name: "Fluted glass", note: "Partitions that blur without blocking", color: "#d3dadc" },
        { name: "Slate wool", note: "Lounge seating and the boardroom rug", color: "#596066" },
      ],
    },
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
    chapters: [
      { title: "Eating in shifts.", image: img("1696986681606-b156ccd761c5", "A modern kitchen with a stone island and black fittings") },
      { title: "Walnut on every wall.", image: img("1611095210561-67f0832b1ca3", "A grey and timber kitchen with a waterfall island and pendant lights") },
      { title: "Ten weeks, and the kitchen never closed.", image: img("1752004028694-72610be3604e", "A bright dining room with a long table and neutral chairs") },
    ],
    concept: {
      title: "One room, lined in walnut.",
      text: "Three small rooms become one, and one material holds it together. Walnut runs across every vertical surface, so the pantry wall, the fridge and the appliances disappear behind pocket doors and the counters stay clear. Cooking moves to the window wall for light and air, and the dining table runs straight into the island.",
      image: img("1776935359460-6c789e972e6a", "A grey stone kitchen with a sculpted island, walnut bar stools and pendant lights"),
      palette: [
        { name: "American walnut", note: "Panelling, pantry wall and pocket doors", color: "#6b4a33" },
        { name: "Honed black granite", note: "Island and the cooking counter", color: "#3a3a3a" },
        { name: "Matte black fittings", note: "Taps, handles and the extractor", color: "#1f1f1f" },
        { name: "Off-white plaster", note: "Ceiling and the dining wall", color: "#efeae2" },
        { name: "Rattan", note: "Dining chairs and the pendant shades", color: "#c8a877" },
      ],
    },
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
