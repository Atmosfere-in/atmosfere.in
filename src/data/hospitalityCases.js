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
      { title: "Five elements, one plan.", image: photo("punarnava/chapter-2.jpg", "The finished lounge: curved cream sofas and rose armchairs around a marble-topped table on a patterned rug") },
      { title: "Guest side, staff side.", image: photo("punarnava/chapter-3.jpg", "A finished guest room: a hand-painted foliage mural behind the bed, timber posts and brass wall lights") },
    ],
    mosaic: [
      photo("punarnava/mosaic-1.jpg", "The reception as built: a stone wall, a crystal chandelier and the timber desk with carved figures"),
      photo("punarnava/mosaic-2.jpg", "A seating group against the lit timber-and-brass slatted wall"),
      photo("punarnava/mosaic-3.jpg", "A guest room with its mural headboard wall, timber-panelled ceiling and crisp white bedding"),
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
    layouts: {
      title: "Six levels, planned floor by floor.",
      intro: "From the ground floor to the rooftop terrace, every level places guest and staff spaces around the same five-element idea. Click a plan to open it at full size.",
      items: [
        { ...photo("punarnava/layouts/ground-floor.jpg", "Ground floor plan"), label: "Ground floor" },
        { ...photo("punarnava/layouts/upper-ground-floor.jpg", "Upper ground floor plan"), label: "Upper ground floor" },
        { ...photo("punarnava/layouts/first-floor.jpg", "First floor plan"), label: "First floor" },
        { ...photo("punarnava/layouts/second-floor.jpg", "Second floor plan"), label: "Second floor" },
        { ...photo("punarnava/layouts/third-floor.jpg", "Third floor plan"), label: "Third floor" },
        { ...photo("punarnava/layouts/fourth-floor.jpg", "Fourth floor plan: the rooftop terrace"), label: "Fourth floor" },
      ],
    },
    voiceImage: photo("punarnava/voice.jpg", "The reception desk, with a brass mandala on a stone wall, glass pendants and three clocks above"),
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
    image: photo("jim-corbett-resort-dhela/hero.jpg", "The four-bedroom duplex villa: a hipped roof over tall glazed walls, set among forest trees"),
    lead: "A forest-edge plot at Dhela planned as a harmonious retreat rooted in nature: cottages and a villa around a central pool, a banquet hall and cafe at the arrival, and a meandering path tying it all together.",
    summary:
      "The owners of an irregular plot at Dhela, on the edge of Jim Corbett, asked what it should become. We planned a 15-key resort with its living in the middle — a central pool with floating decks, fourteen two-bedroom cottages and a four-bedroom duplex villa nestled in landscape — and its public life at the gate: a round reception and cafe, a 5,600 sq ft banquet hall and a welcoming arrival court. The forest land stays as it is.",
    scope: ["Site analysis", "Zoning & master plan", "Area programme", "Concept & design intent", "Inspiration boards"],
    chapters: [
      { title: "A plot on the edge of the forest.", image: photo("jim-corbett-resort-dhela/chapter-1.jpg", "The gateway: a stone path passing between two split boulders into the resort") },
      { title: "Everything around the pool.", image: photo("jim-corbett-resort-dhela/chapter-2.jpg", "A row of two-storey cottages with tiled roofs and balconies, lit at dusk") },
      { title: "From the gate to the deck.", image: photo("jim-corbett-resort-dhela/chapter-3.jpg", "The banquet hall: a soaring bamboo-arched pavilion among palms") },
    ],
    mosaic: [
      photo("jim-corbett-resort-dhela/mosaic-1.jpg", "Floating timber decks curving over the water, with a sunken lounge"),
      photo("jim-corbett-resort-dhela/mosaic-2.jpg", "A bamboo-shaded deck with loungers beside the stream"),
      photo("jim-corbett-resort-dhela/mosaic-3.jpg", "A private garden deck: timber loungers and a swing among planting"),
    ],
    concept: {
      title: "A harmonious retreat, rooted in nature.",
      text: "Private villas and cottages sit secluded in lush landscape, a central pool with deck and lounge spaces holds the middle of the site, and intimate courtyards and gardens run throughout. One curated, meandering pathway connects every space, from a welcoming arrival with feature landscaping to a private deck a level below the site, with the forest land left untouched beyond.",
      image: photo("jim-corbett-resort-dhela/concept.jpg", "The round reception and cafe: a thatched roof over two glazed floors and a balcony"),
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
    layouts: {
      title: "The site, planned.",
      intro: "Cottages and the villa around the central pool, the banquet hall and reception at the arrival, and one meandering path through it all. Click the plan to open it at full size.",
      items: [{ ...photo("jim-corbett-resort-dhela/layouts/site-plan.jpg", "Conceptual site plan of the resort"), label: "Conceptual site plan" }],
    },
    voiceImage: photo("jim-corbett-resort-dhela/voice.jpg", "The cafe counter: a woven wall with round windows, a stone bar and log stools"),
    results: [
      { value: "15", label: "Keys: 14 cottages and a 4BHK villa" },
      { value: "5,600", label: "sq ft banquet hall" },
      { value: "1", label: "Central pool with floating decks" },
    ],
  },
  {
    // Real engagement, at design-intent stage (Sept 2025 → Jan 2026). Copy
    // from the studio's design-intent decks; exterior renders by the studio,
    // interiors from the decks' inspiration boards.
    slug: "moradabad-sourcing-convention-centre",
    name: "Moradabad Sourcing & Convention Centre",
    planningType: "banquet",
    category: "Convention centre & hotel",
    location: "Moradabad",
    size: "2,21,522 sq ft · 70 keys",
    engagement: "Design intent",
    image: photo("moradabad-sourcing-convention-centre/hero.jpg", "The proposed building: a white rendered block with a brass-toned lattice tower and a glass rotunda at the corner, seen from the road"),
    // The page opens on the deck's area programme drawing rather than the render.
    heroDrawing: true,
    heroImage: { width: 2937, height: 1596, ...photo("moradabad-sourcing-convention-centre/area-programme.jpg", "The area programme: the building drawn floor by floor on its site, from the retail and exhibition basement up through the reception and convention halls, two floors of rooms and the open exhibition rooftop, each level colour-coded in the legend") },
    lead: "A 1,26,600 sq ft plot in India's brass city, planned as the place where buyers come to see, source, meet and stay: exhibition and retail below, convention halls in the middle, 70 rooms above and an open exhibition deck on the roof.",
    summary:
      "Moradabad is a city of exporters whose buyers fly in to source brassware and handicrafts, with nowhere built for that visit. The plan gives them one address: a sourcing and convention centre with a hotel inside it. Across six levels and 2,21,522 sq ft, seventy per cent of the building is given to exhibition and convention space and thirty per cent to rooms, cafés and retail, so a buyer can walk the shops in the basement, sit in a convention hall upstairs, and sleep two floors above.",
    scope: ["Market study", "Zoning & master plan", "Area programme", "Concept & facade intent", "Floor layouts", "Interior inspiration boards"],
    chapters: [
      { title: "A site in the brass city.", image: photo("moradabad-sourcing-convention-centre/chapter-1.jpg", "The building along the road, with the hotel wing, the lattice tower and the glass rotunda") },
      { title: "Show, sell, meet, stay.", image: photo("moradabad-sourcing-convention-centre/chapter-2.jpg", "The front elevation: hotel floors over the convention levels, with the lattice and the rotunda at the corner") },
      { title: "A building that announces itself.", image: photo("moradabad-sourcing-convention-centre/chapter-3.jpg", "The glass rotunda at the entrance, with the canopy and the drop-off below") },
    ],
    mosaic: [
      photo("moradabad-sourcing-convention-centre/mosaic-1.jpg", "Convention hall intent: a stage under rings of light, with a white runway between the tables"),
      photo("moradabad-sourcing-convention-centre/mosaic-2.jpg", "Reception intent: a sculptural white centrepiece under curtains of light"),
      photo("moradabad-sourcing-convention-centre/mosaic-3.jpg", "Room intent: a cane headboard, bolster cushions and a timber bed base"),
    ],
    concept: {
      title: "Moradabad's trade, under one roof.",
      text: "The city sells brass to the world, but its buyers have had to see it in scattered workshops and stay wherever they can. The plan stacks the whole journey in one building: 116 shops and an exhibit hall in the basement, a 20,600 sq ft convention hall at the ground floor with its own entrance, two more halls on the first, rooms, a gym and a spa on the second, rooms, a café and a display gallery on the third, and an open exhibition deck with a live kitchen and seating for 300 on the roof. The facade says what the building is: a brass-toned lattice tower on white render, and a glass rotunda that shows the floors inside.",
      image: photo("moradabad-sourcing-convention-centre/concept.jpg", "The brass-toned lattice tower on the white facade, with the drop-off and cars below"),
      palette: [
        { name: "Brass lattice", note: "The facade tower, in the metal the city is known for", color: "#b8864a" },
        { name: "White render", note: "The main body of the building", color: "#efece6" },
        { name: "Clear glass", note: "The rotunda and the hotel floors", color: "#c7d3d8" },
        { name: "Charcoal frame", note: "Rotunda structure and window surrounds", color: "#3a3d40" },
        { name: "Warm timber", note: "Halls, lobbies and the rooftop deck", color: "#a4784e" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "A 1,26,600 sq ft plot in Moradabad, and a question from the owners: what should it become to serve the city's export trade and the buyers who visit it?",
        points: ["Plot of 1,26,600 sq ft", "A sourcing, convention and hotel programme", "Planned around what the city needs"],
      },
      {
        title: "Challenge",
        text: "Moradabad's economy is export: buyers arrive to source brass and handicrafts, but the city has no single place to show them the trade, host their meetings and put them up.",
        points: ["Buyers with nowhere built for sourcing", "Exhibition, meetings and rooms in separate places", "Revenue needed from more than rooms"],
      },
      {
        title: "Approach",
        text: "We planned the building around the buyer's visit: exhibition and retail at the base, convention halls in the middle, rooms above, and an open exhibition deck on the roof — seventy per cent of the area for showing and meeting, thirty for staying and eating.",
        points: ["Programme set by the sourcing journey", "70% exhibition and convention, 30% commercial", "Six levels, 2,21,522 sq ft in all"],
      },
      {
        title: "Design Decisions",
        text: "116 shops and a 4,700 sq ft exhibit hall in the basement; a 20,600 sq ft convention hall with its own entrance at ground; two halls of 12,300 and 9,900 sq ft on the first floor; 35 rooms with a gym, spa and yoga area on the second; 35 rooms, a 4,700 sq ft café and a display gallery on the third; and a rooftop exhibition deck with a live kitchen for 300.",
        points: ["Three convention halls, 42,800 sq ft together", "70 rooms in three sizes across two floors", "A rooftop that exhibits and feeds 300"],
      },
      {
        title: "Execution",
        text: "The design intent covers zoning, the area programme, floor layouts, the facade concept and interior inspiration for every part of the building.",
        points: ["Design intent issued January 2026", "Zoning, area programme and floor layouts", "Facade concept and interior intent per floor"],
      },
      {
        title: "Outcome",
        text: "A plan that fits the city: a building where Moradabad's exporters can show their work and their buyers can source, meet and stay in one place — and that earns from all four, not from rooms alone.",
        points: ["One address for the city's trade", "Revenue from exhibition, halls, retail and rooms", "A facade in the city's own metal"],
      },
    ],
    voiceImage: photo("moradabad-sourcing-convention-centre/voice.jpg", "The glass rotunda from below, with its floors showing through the glazing"),
    results: [
      { value: "2.2L", label: "sq ft over six levels, 70% for exhibition and convention" },
      { value: "70", label: "Rooms across two floors" },
      { value: "3", label: "Convention halls, 42,800 sq ft together" },
    ],
  },
  {
    // Real engagement, built. Brief and figures from the studio (October
    // 2026); photographs of the finished venue by the studio.
    slug: "evara-bliss",
    name: "Evara Bliss",
    planningType: "banquet",
    category: "Banquet destination",
    location: "Vasundhara, Ghaziabad",
    size: "5,000 sq yd · two halls · 4 keys",
    engagement: "Architecture & banquet design",
    image: photo("evara-bliss/hero.jpg", "The grand hall set for a wedding: the stage under its sculpted arch, dressed in flowers, with the patterned stone floor in front"),
    lead: "A 5,000 sq yd plot in Vasundhara, Ghaziabad, built as a destination for celebrations of every scale: a 22,000 sq ft grand banquet, a 7,000 sq ft intimate hall, four guest rooms, offices and food-tasting rooms, under one architectural identity.",
    summary:
      "Evara Bliss is a purpose-built venue for celebrations, planned so that events of very different sizes can run side by side without losing a sense of place. Two banquet halls, of about 22,000 and 7,000 sq ft, take the grand wedding and the intimate function; four guest rooms, administrative offices and dedicated food-tasting rooms carry the operational side, so a host can plan the menu, stay the night and hold the event at one address. The architecture is part of the experience: the massing, the facade and the lighting are composed to make arrival feel like the first act of the celebration, and the interiors carry that drama through the halls, the lounge and the corridors.",
    scope: ["Hospitality architecture", "Site & circulation planning", "Two banquet halls", "Guest rooms & offices", "Food-tasting rooms", "Facade, interiors & lighting"],
    chapters: [
      { title: "Arrival as the first act.", image: photo("evara-bliss/chapter-1.jpg", "The entrance at night: the Evara name in brass over the glass front, with the patterned screens and lanterns lit") },
      { title: "Everything around the celebration.", image: photo("evara-bliss/chapter-2.jpg", "The lounge: curved sofas on the patterned floor, under the tall panelled wall with its brass-edged leaves") },
      { title: "Light as architecture.", image: photo("evara-bliss/chapter-3.jpg", "The hall wall at night: tall lit panels behind the patterned screens, with the lounge seating below") },
    ],
    mosaic: [
      photo("evara-bliss/mosaic-1.jpg", "The sculpted ceiling: a tree of leaves rising to the ring of light above the hall"),
      photo("evara-bliss/mosaic-2.jpg", "A tiered crystal chandelier against the dark panelled wall"),
      photo("evara-bliss/mosaic-3.jpg", "A guest corridor: brass wall lights, panelled walls and the inlaid marble floor"),
    ],
    concept: {
      title: "Two halls, one identity.",
      text: "The brief was grandeur, function and operation in one building. Two halls of very different sizes are planned to work independently, with their own arrival, circulation and service, while the facade, the materials and the lighting hold them as one destination. The guest rooms, offices and tasting rooms make the venue a place to plan an event as well as hold it.",
      image: photo("evara-bliss/concept.jpg", "The design view of the venue at night: the glass-fronted hall under sculpted gilded forms, with lit trees and a water feature in front"),
      palette: [
        { name: "Warm brass", note: "The name, the lantern frames and the trims", color: "#b9924f" },
        { name: "Patterned stone", note: "The hall and lounge floors", color: "#c9c2b6" },
        { name: "Deep bronze", note: "Panelled walls and screens", color: "#5a4634" },
        { name: "Ivory plaster", note: "The sculpted ceilings", color: "#efe9df" },
        { name: "Warm light", note: "The facade and the halls after dark", color: "#f2c98a" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "A 5,000 sq yd plot in Vasundhara, Ghaziabad, to become a destination for celebrations: two banquet halls of different scales, guest rooms, offices and food-tasting rooms in one development.",
        points: ["Plot of 5,000 sq yd", "Halls of 22,000 and 7,000 sq ft", "Rooms, offices and tasting rooms alongside"],
      },
      {
        title: "Challenge",
        text: "Two halls of very different sizes had to hold different events at the same time, each with its own arrival and service, without the venue reading as two separate buildings.",
        points: ["Events of different scale side by side", "Separate arrival, circulation and service", "One architectural identity"],
      },
      {
        title: "Approach",
        text: "The planning followed the guest: arrival, the route to each hall, and the relationship between public, private and service functions. The offices and tasting rooms were placed to support operations, the guest rooms to serve hosts and visitors.",
        points: ["Planned from the guest's arrival", "Public, private and service kept apart", "Operations designed in, not added"],
      },
      {
        title: "Design Decisions",
        text: "A facade composed of massing, patterned screens, lantern panels and light, so the building announces itself before anyone goes in; halls with sculpted ceilings, patterned stone floors and tall lit panels; a lounge, guest corridors and rooms in the same language.",
        points: ["A facade that makes the arrival", "Sculpted ceilings and patterned floors", "Lighting as part of the architecture"],
      },
      {
        title: "Execution",
        text: "The venue was built as designed, from the structure and the facade screens to the hall interiors, the lounge, the rooms and the lighting, and is now hosting events.",
        points: ["Structure, facade and interiors delivered", "Halls, lounge, rooms and corridors fitted out", "Open and hosting celebrations"],
      },
      {
        title: "Outcome",
        text: "A venue that serves the grand wedding and the intimate function alike, plans the event under its own roof, and is recognised from the road.",
        points: ["Two halls, every scale of celebration", "Planning, tasting and staying at one address", "A destination with a face of its own"],
      },
    ],
    voiceImage: photo("evara-bliss/voice.jpg", "The venue from the street at night, its name lit over the entrance and the gardens lit in colour"),
    results: [
      { value: "22,000", label: "sq ft grand banquet hall" },
      { value: "7,000", label: "sq ft intimate hall" },
      { value: "4", label: "Guest rooms, with offices and tasting rooms" },
    ],
  },
];

export const hospitalityCaseFilters = [
  { label: "All", value: null },
  { label: "Hotels & Resorts", value: "hotel-resort" },
  { label: "Banquets & Conventions", value: "banquet" },
];

export function getHospitalityCase(slug) {
  return hospitalityCases.find((c) => c.slug === slug);
}
