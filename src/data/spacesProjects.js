import { unsplash } from "@/lib/images";

// Atmosfere Spaces portfolio. Every project page follows the same six stages
// (Brief → Outcome). Names, figures, quotes and photographs are placeholders
// until the studio supplies its real portfolio.

const img = (id, alt) => ({ src: unsplash(id), alt });
// Local photographs (real projects) live under /public/images; run
// `npm run images` after adding any so their resized variants exist.
const photo = (file, alt) => ({ src: `/images/spaces/${file}`, alt });

export const spacesProjects = [
  {
    // Real engagement for a high-rise developer. Key facts from the studio;
    // renders by the studio.
    slug: "the-aranya",
    name: "The Aranya",
    type: "commercial",
    category: "Sample flat",
    location: "Noida Extension",
    size: "1,100 sq ft",
    timeline: "Ongoing",
    image: photo("the-aranya/hero.jpg", "The living room of the sample flat: pale sofas on a marble-veined wall, black coffee tables and a fluted oak screen"),
    lead: "A 2BHK sample flat for a high-rise developer, designed to show buyers a home they can actually have — 1,100 sq ft, finished for under ₹10 lakh.",
    summary:
      "Unnati Fortune Group, the developer behind The Aranya in Noida Extension, asked us to design the sample flat for their high-rise. Sample flats are usually dressed to impress and impossible to repeat. We designed this one the other way round: a 1,100 sq ft 2BHK that looks aspirational but is built from what buyers actually need, at a finish cost under ₹10 lakh that any flat in the tower can match.",
    scope: ["Interior design", "Space planning", "Budget-led material selection", "Furniture & décor", "Lighting design"],
    chapters: [
      { title: "A flat that has to sell a building.", image: photo("the-aranya/chapter-1.jpg", "The living room's TV wall, with fluted oak slats, marble and a low white console") },
      { title: "Design for what buyers actually need.", image: photo("the-aranya/chapter-2.jpg", "The master bedroom, with a floating bed, a timber headboard wall and soft cove lighting") },
      { title: "Finishes that stay under ten lakh.", image: photo("the-aranya/chapter-3.jpg", "The kitchen in white and grey, with marble splashbacks and a dark fridge column") },
    ],
    mosaic: [
      photo("the-aranya/mosaic-1.jpg", "The second bedroom, with a tan headboard, curtains and a full-height oak wardrobe"),
      photo("the-aranya/mosaic-2.jpg", "The media wall, with dark slats, brass figures and a floating console"),
      photo("the-aranya/mosaic-3.jpg", "A bedroom corner with the television, sheer curtains and open shelving"),
    ],
    concept: {
      title: "Aspirational, and actually achievable.",
      text: "Most sample flats sell a fantasy: finishes nobody will buy, a layout nobody will get. Ours shows the real flat. The rooms are the real sizes, the storage is built in where a family will need it, and the finishes are the ones a buyer can afford — marble where the eye lands, fluted oak on the walls you touch, warm white everywhere else. It looks like a step up, and it costs under ₹10 lakh to repeat.",
      image: photo("the-aranya/concept.jpg", "The dining room, with a round table, green chairs, curtains and framed prints on the wall"),
      palette: [
        { name: "Veined marble", note: "Only where it is seen first: the TV wall and kitchen splashback", color: "#e9e4dc" },
        { name: "Fluted oak", note: "TV wall, headboards and wardrobe fronts", color: "#c9a874" },
        { name: "Warm white plaster", note: "Walls and ceilings, with cove lighting", color: "#f2eee8" },
        { name: "Olive velvet", note: "Dining chairs and throws", color: "#6f7d5c" },
        { name: "Black metal", note: "Coffee tables, handles and the shelving", color: "#2b2b2b" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "A high-rise developer needed a sample flat for The Aranya: a 2BHK of 1,100 sq ft that would help sell the tower, finished within ₹10 lakh.",
        points: ["Client: a high-rise developer", "A 2BHK sample flat of 1,100 sq ft", "A finish budget under ₹10 lakh"],
      },
      {
        title: "Challenge",
        text: "A sample flat is judged in minutes, and the easy way to win those minutes is to over-promise — finishes and a plan the real flats will never have. The budget ruled that out, and so did we.",
        points: ["The temptation to show an unrealistic flat", "Every rupee counted", "Real room sizes, no tricks"],
      },
      {
        title: "Approach",
        text: "We designed for what buyers actually need rather than what a showroom usually shows: a plan a family would live in, storage where it is used, and money spent only where the eye lands.",
        points: ["Needs first, show second", "Feature surfaces, plain backgrounds", "A short material list the developer can repeat"],
      },
      {
        title: "Design Decisions",
        text: "A marble and fluted-oak TV wall, a floating bed with a timber headboard wall, full-height wardrobes in both bedrooms, a white kitchen with a marble splashback, and cove lighting that makes modest rooms feel generous.",
        points: ["Marble and oak feature walls", "Built-in storage in both bedrooms", "Cove lighting and warm white throughout"],
      },
      {
        title: "Execution",
        text: "Our drawings, finish schedules and furniture selections are guiding the fit-out on site, with the costs tracked against the ₹10 lakh line.",
        points: ["Design intent and detailed drawings issued", "Finish and furniture schedules with costs", "Execution ongoing"],
      },
      {
        title: "Outcome",
        text: "A sample flat that is honest and repeatable: buyers see a modern, warm 2BHK, and the developer has a finish standard that every flat in the tower can match for under ₹10 lakh.",
        points: ["Aspirational, at a price that holds", "A standard the whole tower can follow", "One cohesive theme, door to kitchen"],
      },
    ],
    results: [
      { value: "1,100", label: "sq ft, 2BHK sample flat" },
      { value: "₹10L", label: "Finish budget, kept — and repeatable" },
      { value: "2", label: "Bedrooms, both with built-in storage" },
    ],
  },
  {
    // Real engagement. Key facts from the studio; renders from atmosfere.in's
    // portfolio page.
    slug: "villa-rise-resort-residency",
    name: "Villa at Rise Resorts",
    type: "residential",
    category: "Villa",
    location: "Greater Noida West",
    size: "5,800 sq ft",
    timeline: "Ongoing",
    image: photo("villa-rise-resort-residency/hero.jpg", "The living room: tan leather sofas, a cowhide rug and full-height curtains opening to the garden"),
    lead: "An ultra-luxury villa of 5,800 sq ft at Rise Resorts — three floors and a terrace, a pool, a fountain and gardens — planned for one family, from its bachelors to its retired parents.",
    summary:
      "The Aroras' villa at Rise Resorts in Greater Noida West spans three floors including a basement, with a terrace above and landscaped grounds around a pool and a fountain. The brief was ultra-luxury in the materials — Italian marble, natural stone, veneer — and real comfort in the plan: a home that works for three generations under one roof, from the bachelors to the parents to the retired grandparents, each living their own way.",
    scope: ["Full interiors", "Space planning across four levels", "Landscape, pool & fountain", "Material curation", "Custom joinery", "Lighting design"],
    chapters: [
      { title: "Three generations, four levels.", image: photo("villa-rise-resort-residency/chapter-1.jpg", "Living and dining as one room, with the garden beyond and a chandelier over the dining table") },
      { title: "Italian marble, stone and veneer.", image: photo("villa-rise-resort-residency/chapter-2.jpg", "The living-room TV wall in book-matched Italian marble between fluted panels") },
      { title: "A pool, a fountain and the garden.", image: photo("villa-rise-resort-residency/chapter-3.jpg", "The slate-blue kitchen with a marble-topped breakfast counter and tan stools") },
    ],
    mosaic: [
      photo("villa-rise-resort-residency/mosaic-1.jpg", "The dining table with grey chairs, the kitchen beyond"),
      photo("villa-rise-resort-residency/mosaic-2.jpg", "The entrance foyer: an oval mirror on a panelled wall and a black console"),
      photo("villa-rise-resort-residency/mosaic-3.jpg", "The shaker kitchen with white tile and marble counters"),
    ],
    concept: {
      title: "Ultra-luxury, planned for everyday family life.",
      text: "Luxury here is in the materials — Italian marble underfoot and book-matched on the walls, natural stone outside and around the fountain, veneer on every panel and wardrobe — but the plan is about the family. Each generation gets a level that suits how it lives, the pool, fountain and garden are the ground everyone shares, and one material language runs from the basement to the terrace so the house reads as a single home.",
      image: photo("villa-rise-resort-residency/concept.jpg", "The entrance foyer, with a console, a framed artwork and an oval mirror under a coffered ceiling"),
      palette: [
        { name: "Italian marble", note: "Floors throughout, book-matched on feature walls", color: "#e6ddd2" },
        { name: "Natural stone", note: "Exterior cladding, the fountain and the pool surround", color: "#b9ad9c" },
        { name: "Walnut veneer", note: "Wall panelling, wardrobes and doors", color: "#7a5236" },
        { name: "Tan leather", note: "Living-room sofas and armchairs", color: "#b8824f" },
        { name: "Champagne gold", note: "Wall lights, handles and the chandelier", color: "#b99a5e" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "A 5,800 sq ft villa at Rise Resorts — three floors including a basement, plus a terrace — to be designed as an ultra-luxury home for a family that spans bachelors, parents and retired grandparents.",
        points: ["5,800 sq ft over three floors and a terrace", "Ultra-luxury materials throughout", "Three generations under one roof"],
      },
      {
        title: "Challenge",
        text: "One house, three very different lives: late nights and friends for the bachelors, hosting and quiet for the parents, ease and accessibility for the grandparents — and four levels that still had to feel like one home.",
        points: ["Different routines on different floors", "Luxury that stays coherent across four levels", "Outdoor spaces that everyone uses"],
      },
      {
        title: "Approach",
        text: "We zoned the villa by generation and gave the family its shared ground outside: the grandparents close to the garden, the parents' suite with the formal living and dining, the bachelors upstairs with their own lounge, and the basement for entertaining.",
        points: ["A level for each way of living", "Pool, fountain and lawns as the shared ground", "One material language from basement to terrace"],
      },
      {
        title: "Design Decisions",
        text: "Italian marble floors and book-matched marble walls, natural stone outside and around the fountain, walnut veneer panelling and wardrobes, tan leather seating, a pool with its deck, a fountain at the arrival, and landscaped lawns around the house.",
        points: ["Italian marble, stone and veneer", "Pool, fountain and landscaped grounds", "A terrace planned for evenings"],
      },
      {
        title: "Execution",
        text: "The design is complete and the villa is under execution, with our drawings, stone and marble schedules, joinery details and landscape plan guiding the site.",
        points: ["Design intent and detailed drawings issued", "Stone, marble and joinery schedules", "Execution ongoing"],
      },
      {
        title: "Outcome",
        text: "A villa that reads as one ultra-luxury home and lives as three — each generation with its own floor, and the pool, fountain and garden bringing the family together.",
        points: ["One home, three ways of living", "Luxury in the materials, comfort in the plan", "Shared outdoor life around the pool"],
      },
    ],
    results: [
      { value: "5,800", label: "sq ft over three floors and a terrace" },
      { value: "3", label: "Generations, each with their own level" },
      { value: "1", label: "Pool, fountain and garden, shared by all" },
    ],
  },
  {
    // Real engagement. Key facts from the studio; renders by the studio.
    // City and stage to be confirmed.
    slug: "tower-10-202",
    name: "Tower 10 – 202",
    type: "residential",
    category: "Apartment",
    location: "Delhi NCR",
    size: "1,985 sq ft",
    timeline: "Ongoing",
    image: photo("tower-10-202/hero.jpg", "The living room: a pale sofa under a branching chandelier, a marble-effect feature wall and the TV unit beyond"),
    lead: "A 3BHK of 1,985 sq ft for a family of four — an ultra-luxury look on a ₹35 lakh budget, designed around the family's daily routine rather than aesthetics alone.",
    summary:
      "The family of four in flat 202 wanted their 3BHK to look ultra-luxury, stay low-maintenance and suit a decent household — all within ₹35 lakh. So we started with how they live, not with how the rooms would photograph: the morning rush, meals, prayer, homework, guests, rest. The plan and the storage follow that routine; the look follows the plan. The result reads as luxury, costs what it should, and is easy to keep.",
    scope: ["Full interiors", "Space planning", "Budget-led material selection", "Custom joinery", "Lighting design"],
    chapters: [
      { title: "Four people, one routine.", image: photo("tower-10-202/chapter-1.jpg", "The living room, wide: two fans, the chandelier, pale sofas and the rug") },
      { title: "Function first, then the look.", image: photo("tower-10-202/chapter-2.jpg", "The kitchen and the dining nook, with a banquette and green chairs") },
      { title: "Luxury that stays easy to keep.", image: photo("tower-10-202/chapter-3.jpg", "The master bedroom, with a marble-effect TV wall and curtains to the balcony") },
    ],
    mosaic: [
      photo("tower-10-202/mosaic-1.jpg", "The dining table in walnut with green chairs, the living room beyond"),
      photo("tower-10-202/mosaic-2.jpg", "The TV unit and display shelving, with the dining nook behind"),
      photo("tower-10-202/mosaic-3.jpg", "A bedroom with an upholstered headboard, framed art and a balcony"),
    ],
    concept: {
      title: "Designed for the day, not just the photo.",
      text: "Every decision started with a question about daily life: where the family eats on a weekday, where the children do homework, where the morning prayer happens, what gets cleaned every day. The answers gave us a banquette dining nook, a pooja unit with its own screen, wardrobes that swallow everything, and finishes that wipe clean. The luxury is in the proportions, the lighting and a few marble-effect surfaces — not in materials that need looking after.",
      image: photo("tower-10-202/concept.jpg", "The pooja unit: an embroidered backdrop behind curtains, two stools and a slatted timber screen"),
      palette: [
        { name: "Marble-effect panels", note: "Feature walls in the living room and bedroom, no sealing needed", color: "#e4ded6" },
        { name: "Champagne laminate", note: "Wardrobes and kitchen shutters, wipe-clean", color: "#d8c7ae" },
        { name: "Walnut-toned slats", note: "Screens, the pooja unit and the dining table", color: "#8a5f3c" },
        { name: "Olive green upholstery", note: "Dining chairs, the banquette and cushions", color: "#6f7b55" },
        { name: "Brass accents", note: "The chandelier, handles and trims", color: "#b9985a" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "A family of four, a 3BHK of 1,985 sq ft, and a budget of ₹35 lakh: they wanted an ultra-luxury look that would stay low-maintenance and feel right for a decent household.",
        points: ["3BHK, 1,985 sq ft, family of four", "Ultra-luxury look within ₹35 lakh", "Low maintenance, everyday practicality"],
      },
      {
        title: "Challenge",
        text: "Luxury finishes usually cost more and ask for more care, and a show-home plan rarely survives a real family's week.",
        points: ["Look expensive without spending like it", "Surfaces that forgive daily use", "A plan that works on a Tuesday, not just at a party"],
      },
      {
        title: "Approach",
        text: "We put function before aesthetics. We mapped the family's daily routine and needs first, planned the rooms and storage around them, and only then chose the look.",
        points: ["Daily routine mapped room by room", "Storage sized to what the family owns", "Aesthetics layered on a working plan"],
      },
      {
        title: "Design Decisions",
        text: "A living room with a marble-effect feature wall and a branching chandelier, a banquette dining nook off the kitchen, a pooja unit behind a slatted screen, bedrooms with full-height wardrobes and TV walls, and wipe-clean laminates where hands and water go.",
        points: ["Banquette dining nook for weekday meals", "Pooja unit with its own screen", "Full-height wardrobes in every bedroom"],
      },
      {
        title: "Execution",
        text: "Our drawings, joinery details and finish schedules are guiding the fit-out, with costs tracked against the ₹35 lakh line.",
        points: ["Detailed drawings and joinery", "Finish schedules with costs", "Execution ongoing"],
      },
      {
        title: "Outcome",
        text: "A home that looks ultra-luxury, costs what it should, and is easy to live in and keep — because it was designed for the family's day first.",
        points: ["Luxury look, held to ₹35 lakh", "Low-maintenance finishes throughout", "A plan built on the family's routine"],
      },
    ],
    results: [
      { value: "1,985", label: "sq ft, 3BHK" },
      { value: "₹35L", label: "Budget, with an ultra-luxury look" },
      { value: "4", label: "People, one routine the plan follows" },
    ],
  },
  {
    // Real engagement, completed. Key facts from the studio; photographs of
    // the finished store (AI-enhanced) and the studio's renders.
    slug: "lajpat-nagar-boutique",
    name: "Suneja Card Creations, Lajpat Nagar",
    type: "commercial",
    category: "Retail boutique",
    location: "Lajpat Nagar, New Delhi",
    size: "700 sq ft",
    timeline: "Completed",
    image: photo("lajpat-nagar/hero.jpg", "The finished store: shelves of wedding cards and gift boxes down both walls, marble-topped counters with cane chairs, and a chandelier under the ceiling medallion"),
    lead: "A 700 sq ft wedding-card and gifting boutique planned around how a customer moves from the door to one of three counters — with minimal, traditional shelving that keeps the eye on the products, and a visual identity built from scratch.",
    summary:
      "Suneja Card Creations sells wedding cards and gift boxes that are themselves the decoration, so the store had one job: get each customer from the entrance to the right counter without a queue, and never compete with what is on the shelves. In 700 sq ft we planned three counters with seating for about twelve customers, lined the walls with minimal shelving in a traditional language, and built the brand's visual identity from scratch — traditional prints on a clean, pale background, carried from the shelves to the signage.",
    scope: ["Retail planning & circulation", "Interior design", "Custom shelving & counters", "Brand visual identity", "Lighting design", "Execution"],
    chapters: [
      { title: "From the door to the right counter.", image: photo("lajpat-nagar/chapter-1.jpg", "The design render: the central aisle from the entrance, with counters down the middle and shelving on both walls") },
      { title: "Shelves that stay out of the way.", image: photo("lajpat-nagar/chapter-2.jpg", "The length of the store: cards and boxes on pale shelving down the wall, marble counters and cane chairs, the chandelier above") },
      { title: "An identity from scratch.", image: photo("lajpat-nagar/chapter-3.jpg", "A marble-topped counter with cane-backed chairs, the shelves of boxes behind") },
    ],
    mosaic: [
      photo("lajpat-nagar/mosaic-1.jpg", "Gift boxes in traditional prints on the shelves, lit from above"),
      photo("lajpat-nagar/mosaic-2.jpg", "A counter with cane-backed chairs and a marble top, the shelves of cards and boxes behind"),
      photo("lajpat-nagar/mosaic-3.jpg", "A display shelf of printed boxes and trays over cane-fronted cabinets"),
    ],
    concept: {
      title: "Let the products do the decorating.",
      text: "Every card and box in this store is printed, embroidered or gilded, so the interior had to be the calm behind them. The shelving is minimal and traditional at once — pale timber, slim brass uprights, cane-fronted cabinets below — and the walls are kept plain so colour comes only from the stock. Three counters sit in the middle of the room, each with its own seating, so a customer walks in, is shown to a counter, and sits with the collection in front of them. Traditional prints appear in the brand's identity rather than on the walls: on the signage, the packaging and the small details.",
      image: photo("lajpat-nagar/chapter-2.jpg", "The length of the store: shelving, counters and the chandelier"),
      palette: [
        { name: "Pale timber", note: "Shelving, counters and cabinet frames", color: "#d9c4a0" },
        { name: "Slim brass", note: "Shelf uprights, trims and lighting", color: "#b9985a" },
        { name: "Cane", note: "Cabinet fronts and the chair backs", color: "#c8a877" },
        { name: "White marble", note: "Counter tops", color: "#ece8e1" },
        { name: "Sage green", note: "Chair seats, the one colour the interior keeps", color: "#8e9a7b" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "A 700 sq ft store in Lajpat Nagar for a wedding-card and gifting brand, with three different counters, seating for around twelve customers, and a visual identity that did not yet exist.",
        points: ["700 sq ft retail space", "Three counters, about twelve seats", "Brand identity to be built from scratch"],
      },
      {
        title: "Challenge",
        text: "Card and gift customers browse, compare and sit for a while, so a small store can jam at the door — and anything decorative on the walls fights with stock that is decorative by nature.",
        points: ["Customers who sit, not just browse", "No room for a queue at the entrance", "Products that are already ornate"],
      },
      {
        title: "Approach",
        text: "We planned the store as a route: from the entrance, a clear aisle leads to the three counters in turn, each with its own seating, with shelving along both walls to browse on the way. The interior stays minimal and traditional so the focus remains on the products, and the traditional prints go into the brand identity instead.",
        points: ["Circulation from entry to a designated counter", "Minimal, traditional shelving", "Prints in the identity, not on the walls"],
      },
      {
        title: "Design Decisions",
        text: "Pale timber shelving with slim brass uprights and cane-fronted cabinets, three marble-topped counters with cane-backed chairs, a fluted ceiling medallion with a chandelier, and a clean signage and print language for the brand.",
        points: ["Shelving in pale timber, brass and cane", "Three marble counters with cane chairs", "Brand identity: traditional prints, clean type"],
      },
      {
        title: "Execution",
        text: "We delivered the store end to end — civil work, joinery, lighting and signage — and the brand identity alongside it.",
        points: ["Joinery made to our drawings", "Lighting focused on the shelves", "Identity applied to signage and packaging"],
      },
      {
        title: "Outcome",
        text: "A store where customers are seated at a counter within a few steps of the door, where the products are the only decoration, and where the brand finally looks like what it sells.",
        points: ["Three counters, twelve seats, no queue", "Shelves that show the stock, not themselves", "A brand identity from zero"],
      },
    ],
    results: [
      { value: "700", label: "sq ft, planned as one clear route" },
      { value: "3", label: "Counters, with seating for about twelve" },
      { value: "1", label: "Brand identity, built from scratch" },
    ],
  },
  {
    // Real engagement, under execution. Key facts from the studio; renders
    // from the studio's 3D-view decks and folder (construction photos not
    // used). City to be confirmed.
    slug: "chelvets",
    name: "Chelvets",
    type: "commercial",
    category: "Workplace & studio",
    location: "Sector 88, Delhi NCR",
    size: "2 floors · 2,500 sq ft each",
    timeline: "Under execution",
    image: photo("chelvets/hero.jpg", "The creative team's floor: open workstations in long runs under timber slats, with the brand's displays along the wall"),
    lead: "Two floors of 2,500 sq ft for a fashion brand — one for its creative designers, one for its exclusive display, photoshoot studio and business office — designed around the brand's existing identity.",
    summary:
      "Chelvets needed a home for both halves of the business under one roof. The first floor is for the creative designers' team, planned as open workstations so ideas move across the room and brainstorming happens in the open. The second floor is the brand's public face and its back office: an exclusive display, a photoshoot area and the business office, with private conference rooms, a manager's cabin and a director's cabin where quiet is needed. Everything is designed to the brand's existing identity, so the office looks like the label.",
    scope: ["Workplace interiors", "Space planning across two floors", "Display & photoshoot studio", "Brand-led material direction", "Custom joinery", "Lighting design"],
    chapters: [
      { title: "A floor for the creative team.", image: photo("chelvets/chapter-1.jpg", "Open workstations with monitors along the window wall, a mannequin and shelving at the far end") },
      { title: "Display, shoot, sell.", image: photo("chelvets/chapter-2.jpg", "The photoshoot area: mannequins in brass-framed cages, studio lights and leather ottomans") },
      { title: "Quiet where it is needed.", image: photo("chelvets/chapter-3.jpg", "The conference room: a white table, grey chairs and a screen on the timber wall") },
    ],
    mosaic: [
      photo("chelvets/mosaic-1.jpg", "The director's cabin: a desk against a timber wall with a dark chevron inlay"),
      photo("chelvets/mosaic-2.jpg", "The podcast and lounge corner, with the brand's neon sign and a sofa"),
      photo("chelvets/mosaic-3.jpg", "Workstations with monitors under the slatted ceiling"),
    ],
    concept: {
      title: "The office should look like the label.",
      text: "A fashion brand's office is part of its identity, so the materials, colours and details come from Chelvets' own look rather than from a generic workplace. The creative floor stays open — long runs of workstations, no partitions, a brainstorm never more than a turn of the chair away — while the second floor gives the brand its stage: a display that reads like a store, a photoshoot area ready for a campaign, and the business office behind glass.",
      image: photo("chelvets/concept.jpg", "The display: garments on brass rails and shelving, a leather ottoman in front"),
      palette: [
        { name: "Pale timber", note: "Wall panelling, slats and desks", color: "#c9a97a" },
        { name: "Brass frames", note: "Display rails and the photoshoot cages", color: "#b9985a" },
        { name: "Striped carpet tile", note: "Workstation floors", color: "#8d7b68" },
        { name: "Charcoal", note: "Exposed ceiling and the chevron inlays", color: "#2f3134" },
        { name: "Tan leather", note: "Ottomans and lounge seating", color: "#b8824f" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Two floors of 2,500 sq ft each for Chelvets: one for the creative designers' team, one for the brand's exclusive display, its photoshoot area and the business office — all in keeping with the brand's existing identity.",
        points: ["Two floors, 2,500 sq ft each", "Creative team on one, display, shoot and office on the other", "Designed to the existing brand identity"],
      },
      {
        title: "Challenge",
        text: "Designers need openness to think together; a display and a photoshoot need a stage; managers and directors need doors. All three had to share 5,000 sq ft and still read as one brand.",
        points: ["Open creativity versus private meetings", "A shoot-ready studio inside an office", "One identity across very different rooms"],
      },
      {
        title: "Approach",
        text: "We split the programme by floor and by mood: the creative floor open and unpartitioned for better creativity and open brainstorming; the second floor staged for display and photography, with the private rooms grouped at one end.",
        points: ["Open workstations for the creative team", "Display and photoshoot area as the brand's stage", "Conference rooms, manager's and director's cabins grouped"],
      },
      {
        title: "Design Decisions",
        text: "Long runs of workstations under timber slats, brass-framed display rails and photoshoot cages, a glass-fronted conference room, a director's cabin with a chevron timber wall, and a podcast and lounge corner under the brand's neon sign.",
        points: ["Timber slats, brass and striped carpet", "Glass-fronted conference rooms", "A podcast corner for the brand's content"],
      },
      {
        title: "Execution",
        text: "Civil work is under way on site, with our drawings, joinery details and finish schedules guiding the fit-out floor by floor.",
        points: ["Detailed drawings and joinery issued", "Finish schedules per floor", "Execution ongoing"],
      },
      {
        title: "Outcome",
        text: "A workplace that works like the brand: open where ideas are made, staged where the collection is shown, and private where decisions are taken.",
        points: ["Creative floor built for brainstorming", "Display and studio ready for campaigns", "Cabins and conference rooms for the business"],
      },
    ],
    voiceImage: photo("chelvets/voice.jpg", "The open office looking towards the artwork wall, workstations on both sides"),
    results: [
      { value: "2", label: "Floors of 2,500 sq ft each" },
      { value: "1", label: "Floor kept fully open for the creative team" },
      { value: "3", label: "Private rooms: conference, manager, director" },
    ],
  },
  {
    // Real engagement. Key facts from the studio; renders by the studio
    // (the owner's floor). City to be confirmed.
    slug: "arihant",
    name: "Arihant",
    type: "commercial",
    category: "Commercial compound",
    location: "Delhi NCR",
    size: "10,000 sq ft",
    timeline: "Design & specification",
    image: photo("arihant/hero.jpg", "The owner's floor: rows of white workstations under green acoustic baffles, with a timber breakfast-bar table for breaks"),
    lead: "A 10,000 sq ft commercial compound — two basements, seven floors and the entry court — planned so one floor serves the owner, six earn rent, and the ground floor earns on its own.",
    summary:
      "Arihant asked us to design a whole commercial compound: 10,000 sq ft across two basements, seven floors and the compound entry. One floor is the owner's own office. The other six are let out, so we planned them to flex with each tenant's needs and the owner's budget, and specified materials by what the business needs to earn back — return on investment, not just looks. Then we gave the compound a ground floor that makes money and makes the place feel alive: a reception, a cafeteria and a gym inside, a food kiosk and outdoor seating in the court.",
    scope: ["Compound master plan", "Office interiors", "Tenant-floor planning", "ROI-led material specification", "Ground-floor amenities", "Compound entry & landscape"],
    chapters: [
      { title: "Seven floors, two basements, one compound.", image: photo("arihant/chapter-1.jpg", "Workstations in long runs facing the 'Team Work' feature wall on the owner's floor") },
      { title: "One floor for the owner, six for tenants.", image: photo("arihant/chapter-2.jpg", "Workstations beside a teal wall, under timber slats and green baffles") },
      { title: "A ground floor that earns.", image: photo("arihant/chapter-3.jpg", "The boardroom: a long white table, a ring light and a screen at the end") },
    ],
    mosaic: [
      photo("arihant/mosaic-1.jpg", "Reception, with the logo on a perforated wall, a stone desk and a linen sofa"),
      photo("arihant/mosaic-2.jpg", "The director's cabin on the owner's floor, with a white desk, oak shelving and a small lounge"),
      photo("arihant/mosaic-3.jpg", "Workstations beside the timber breakout table and the teal wall"),
    ],
    concept: {
      title: "Plan the building like a business.",
      text: "A commercial compound has to pay for itself, so every decision was weighed as an investment. The owner's floor is designed to the last detail; the six tenant floors are planned as flexible shells that fit out quickly for whoever signs, within the owner's budget. Materials are specified for how long they last and what they return, not for show. And the ground floor and the court are given to the things that bring people in and keep them there: reception, a cafeteria, a gym, a food kiosk and outdoor seating.",
      image: photo("arihant/concept.jpg", "The entrance lobby, with glass doors into the boardroom, a timber display wall and carpet tiles"),
      palette: [
        { name: "Natural oak", note: "Desk frames, slatted walls and the breakout table", color: "#c4a070" },
        { name: "Moss-green felt", note: "Acoustic baffles across the owner's floor", color: "#9bb07a" },
        { name: "Striped carpet tile", note: "Hard-wearing floors on every office level", color: "#8d7b68" },
        { name: "Teal accent", note: "Feature walls at the breakout and the cabins", color: "#5f9aa0" },
        { name: "Warm white", note: "Desktops, walls and the boardroom", color: "#f1ede6" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Arihant needed a complete commercial compound designed: 10,000 sq ft over two basements and seven floors, plus the compound entry, with their own office on one floor and the rest to be let.",
        points: ["Two basements, seven floors and the entry court", "One floor for the owner's office", "Six floors to rent out"],
      },
      {
        title: "Challenge",
        text: "Six of the seven floors had no tenant yet, so they could not be designed for anyone in particular — but they still had to be ready to let, within the owner's budget, and the whole compound had to earn more than rent alone.",
        points: ["Tenant floors with unknown tenants", "A fixed budget for a large building", "Revenue needed beyond the rent"],
      },
      {
        title: "Approach",
        text: "We treated the compound as a business plan: a fully designed owner's floor, flexible tenant floors that fit out to each tenant's need, materials specified by return on investment, and a ground floor planned as a revenue scheme in its own right.",
        points: ["Flexible shells for the six tenant floors", "Material specifications tied to ROI", "Amenities that bring in income"],
      },
      {
        title: "Design Decisions",
        text: "An open owner's floor with workstations under green acoustic baffles, a boardroom and a director's cabin; tenant floors kept simple and quick to fit out; and a ground floor with reception, a cafeteria and a gym, with a food kiosk and outdoor seating in the court.",
        points: ["Owner's floor: open desks, boardroom, cabin, reception", "Ground floor: reception, cafeteria, gym", "Court: food kiosk and outdoor seating"],
      },
      {
        title: "Execution",
        text: "We delivered the compound plan, the owner's-floor interiors and the material specifications for every level, giving Arihant a basis to fit out floors as tenants sign.",
        points: ["Master plan for the whole compound", "Detailed design for the owner's floor", "Specifications for tenant floors and amenities"],
      },
      {
        title: "Outcome",
        text: "A compound that works as a business: an owner's office with a character of its own, six floors ready to let on the owner's terms, and a ground floor and court that add revenue and give the place a lively corporate life.",
        points: ["Six lettable floors, fitted to need and budget", "New revenue from the ground floor", "A compound people want to spend time in"],
      },
    ],
    results: [
      { value: "10,000", label: "sq ft: two basements, seven floors, the entry court" },
      { value: "6", label: "Floors let out, fitted to each tenant's need" },
      { value: "3", label: "Ground-floor earners: reception, cafeteria, gym" },
    ],
  },
  {
    // Real engagement: an independent house in Sector 14, Noida. Site
    // photographs by the studio; the brief is written from the finished house.
    slug: "d-3-10-sector-14-noida",
    name: "D-3/10, Sector 14",
    type: "residential",
    category: "Independent house",
    location: "Sector 14, Noida",
    size: "3 floors & a terrace",
    timeline: "Completed",
    image: photo("d-3-10-sector-14/hero.jpg", "The living room: cream sofas and timber-framed armchairs against a textured wallpaper panel lit from its edges"),
    lead: "A family house in one of Noida's oldest sectors, rebuilt inside as a calm, classic home — marble floors, panelled timber doors, soft cream rooms — with the roof turned into a lit terrace lounge for the evenings.",
    summary:
      "The house at D-3/10 is a three-storey family home on a tree-lined street in Sector 14. The family wanted it to feel settled rather than showy: rooms that would still look right in twenty years, materials that age well, and a roof they could actually use. Inside, the ground floor opens from a foyer lined in navy block-print wallpaper onto a marble floor with a black inlaid border, through to the living and dining rooms in cream, timber and brass. Upstairs the bedrooms stay quiet and warm. On the roof, a pergola with a glass top, a timber deck, loungers and a swing on turf give the family an outdoor room that comes alive after dark.",
    scope: ["Full-house interiors", "Space planning across three floors", "Terrace & pergola design", "Custom doors and joinery", "Loose furniture", "Lighting design"],
    chapters: [
      { title: "A foyer that sets the tone.", image: photo("d-3-10-sector-14/chapter-1.jpg", "The foyer: navy block-print wallpaper, a marble floor with a black inlaid border and the dining room beyond") },
      { title: "The roof becomes a room.", image: photo("d-3-10-sector-14/chapter-2.jpg", "The terrace at dusk: a pergola with a timber deck, loungers and a stone-clad wall against the sunset") },
      { title: "Corners to sit in.", image: photo("d-3-10-sector-14/chapter-3.jpg", "A lounge corner with a beige and a blue armchair, a sculpted side table and a chequered marble runner") },
    ],
    mosaic: [
      photo("d-3-10-sector-14/mosaic-1.jpg", "The main door: panelled dark timber with brass lining and an oval brass handle"),
      photo("d-3-10-sector-14/mosaic-2.jpg", "The crockery unit, with glass cabinets either side of a lit stone niche"),
      photo("d-3-10-sector-14/mosaic-3.jpg", "Two armchairs and a sculpted side table in front of the gold curtains"),
    ],
    concept: {
      title: "Classic rooms, a modern roof.",
      text: "Downstairs the house leans classic: panelled doors, marble with a dark border, block-print wallpaper and cream upholstery with timber frames. The roof takes the opposite view. A glass-topped pergola, a timber deck, turf and a swing make a second living room in the open air, lit so the family can use it long after sunset. The two halves share a palette — dark timber, brass, cream and stone — so the house reads as one.",
      image: photo("d-3-10-sector-14/concept.jpg", "The terrace lounge at night: swivel chairs on the timber deck under the lit pergola, plants along the glass"),
      palette: [
        { name: "Dark walnut", note: "Doors, frames and the pergola's fascia", color: "#4a3426" },
        { name: "Brass", note: "Door handles, inlays and the sideboard's grips", color: "#b08d4b" },
        { name: "Cream", note: "Sofas, armchairs and the fluted sideboard", color: "#e8dfcf" },
        { name: "Navy block print", note: "The foyer's wallpaper", color: "#1f2a4a" },
        { name: "Marble", note: "Floors with a black inlaid border", color: "#d9d3c7" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Redo the interiors of a three-storey family house in Sector 14, Noida, with a classic, long-lasting feel inside and a terrace the family could use as an outdoor room.",
        points: ["Three floors and a roof terrace", "A calm, classic look that will last", "The roof made usable in the evenings"],
      },
      {
        title: "Challenge",
        text: "An older house with a fixed structure: columns in the ground-floor plan, modest ceiling heights and a bare roof slab exposed to Noida's sun. The design had to make the rooms feel generous and the roof feel sheltered.",
        points: ["Columns and beams to work around", "Ceiling heights to keep light", "A roof exposed to sun and heat"],
      },
      {
        title: "Approach",
        text: "We kept the ground floor flowing — foyer to dining to living — and used floor inlays and ceiling coves to mark rooms instead of walls. On the roof we built a pergola with a glass top and a slatted ceiling so the deck is shaded by day and lit by night.",
        points: ["Open ground floor, rooms marked by the floor and ceiling", "Bedrooms kept quiet and warm", "A pergola that shades by day and glows by night"],
      },
      {
        title: "Design Decisions",
        text: "Marble floors with a black border inlay, navy block-print wallpaper in the foyer, a panelled main door with an oval brass handle, cream seating on timber frames under a ring chandelier, a fluted white sideboard with brass grips, and timber-and-steel gates with a green wall outside.",
        points: ["Marble with a dark inlaid border", "Panelled doors, brass handles and inlays", "Cream upholstery on timber frames"],
      },
      {
        title: "Execution",
        text: "The house was built floor by floor from our drawings, with doors, the sideboard and the crockery unit made to detail and the terrace pergola fabricated on site.",
        points: ["Custom doors and joinery made to drawing", "Terrace pergola fabricated on site", "Loose furniture selected and placed"],
      },
      {
        title: "Outcome",
        text: "A family home that feels settled from the front gate to the roof: classic rooms downstairs, warm bedrooms above and a terrace lounge the family uses every evening.",
        points: ["Three finished floors", "A terrace lounge with a swing and loungers", "One palette from the gate to the roof"],
      },
    ],
    voiceImage: photo("d-3-10-sector-14/voice.jpg", "The living room from the dining side: cream sofas and armchairs around a brass table"),
    results: [
      { value: "3", label: "Floors redesigned, plus the roof" },
      { value: "1", label: "Terrace lounge under a glass-topped pergola" },
      { value: "100%", label: "Doors and joinery made to our drawings" },
    ],
    gallery: [
      photo("d-3-10-sector-14/gallery-1.jpg", "The swing on the terrace under the pergola's lit beams at dusk"),
      photo("d-3-10-sector-14/gallery-2.jpg", "The entrance: a dark glazed door under a timber-slat ceiling beside a stone-clad wall"),
      photo("d-3-10-sector-14/gallery-4.jpg", "A bedroom with a cove-lit ceiling, a padded headboard wall and cream wardrobes"),
    ],
  },
  {
    // Real engagement: a travel agency's office. Renders by the studio,
    // graded for the site; the brief is written from the design.
    slug: "eji-travel-solutions",
    name: "Eji Travel Solutions",
    type: "commercial",
    category: "Office",
    location: "Delhi NCR",
    size: "Single-floor office",
    timeline: "Design complete",
    image: photo("eji-travel-solutions/hero.jpg", "The consultation counter: three orange chairs at a white desk, airport-style signage overhead and a cork pinboard wall behind"),
    lead: "An office for a travel company designed to feel like the start of a journey — airport signage, an arrivals board, world clocks and a cork wall of destinations — with proper desks for the team and a calm cabin and lounge for the people who run it.",
    summary:
      "Eji Travel Solutions sells journeys, so its office should feel like one. The plan is a single open floor with the team's workstations along the walls under white cabinets, and a consultation counter in the middle where clients sit on orange chairs across from the advisors. The travel theme is in the details rather than slogans: departure-board signage over the counter, an arrivals screen by the entrance, a row of world clocks, and a long cork wall pinned with maps and postcards above every desk. The director's cabin and a small lounge in warm yellow and orange, with a rattan armchair and a sofa on a chevron timber floor, give the leadership somewhere quieter to meet.",
    scope: ["Workplace interiors", "Space planning", "Consultation counter design", "Custom joinery and storage", "Brand-led art direction", "Lighting design"],
    chapters: [
      { title: "One floor, one team.", image: photo("eji-travel-solutions/chapter-1.jpg", "The open office: workstations down both walls under white cabinets, the consultation counter in the middle") },
      { title: "A cabin for the director.", image: photo("eji-travel-solutions/chapter-2.jpg", "The director's cabin: a desk with two tan chairs, oak shelving and a glazed wall to the office") },
      { title: "Somewhere quieter to talk.", image: photo("eji-travel-solutions/chapter-3.jpg", "The lounge: a sofa and a rattan armchair on an orange rug under a yellow ceiling") },
    ],
    mosaic: [
      photo("eji-travel-solutions/mosaic-1.jpg", "Workstations under the cork wall, with a column of world clocks by the door"),
      photo("eji-travel-solutions/mosaic-2.jpg", "The entrance, with an arrivals board on the wall and a desk beyond"),
      photo("eji-travel-solutions/mosaic-3.jpg", "Three workstations along a wall, with a small shrine niche in the corner"),
    ],
    concept: {
      title: "The office as a departure lounge.",
      text: "Travel is the product, so the office borrows the language of airports without copying one: a departure board over the counter, an arrivals screen at the door, clocks set to the world's cities and a cork wall that fills up with the places clients have been. Underneath, it is a well-organised office — long desks, closed storage overhead, good task lighting — in oak, white and a warm yellow that keeps it from feeling corporate.",
      image: photo("eji-travel-solutions/chapter-1.jpg", "The open office: workstations down both walls under white cabinets, the consultation counter in the middle"),
      palette: [
        { name: "Oak", note: "Desks, shelving and the chevron floor in the cabin", color: "#c8a97e" },
        { name: "White", note: "Overhead cabinets, counters and the floor tiles", color: "#f1efea" },
        { name: "Sun yellow", note: "Ceiling bands and the lounge walls", color: "#f2d35a" },
        { name: "Orange", note: "Client chairs, the rug and cushions", color: "#d9743a" },
        { name: "Cork", note: "The pinboard wall above every desk", color: "#b58a5a" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Design an office for a travel company where clients are advised across a counter, the team works at proper desks and the leadership has a cabin and a lounge — and make it feel like travel.",
        points: ["A consultation counter for clients", "Workstations for the full team", "A director's cabin and a lounge"],
      },
      {
        title: "Challenge",
        text: "One open floor had to hold public and private work at once: clients at the counter, advisors on calls, the director in meetings. And a 'travel' theme is easy to overdo.",
        points: ["Clients and staff sharing one floor", "A cabin that is private yet connected", "A theme that stays tasteful"],
      },
      {
        title: "Approach",
        text: "We put the team's desks along the walls and the client counter in the middle, so advisors turn from their screens to the counter without moving rooms. The cabin and lounge sit behind glass at one end. The theme lives in signage, screens and the cork wall, not in the architecture.",
        points: ["Desks on the walls, counter in the centre", "Cabin and lounge behind glass", "Theme carried by details"],
      },
      {
        title: "Design Decisions",
        text: "Departure-board signage over the counter, an arrivals screen at the door, a column of world clocks, cork pinboards the length of every desk, white overhead cabinets for the paperwork, orange client chairs, and a cabin and lounge in oak with yellow walls and an orange rug.",
        points: ["Airport signage and an arrivals screen", "Cork wall and world clocks", "Oak, white, yellow and orange"],
      },
      {
        title: "Execution",
        text: "Working drawings, joinery details and the lighting layout are ready for the fit-out, with the counter and the desk runs detailed as continuous joinery.",
        points: ["Joinery and counter detailed", "Lighting layout issued", "Ready for fit-out"],
      },
      {
        title: "Outcome",
        text: "An office that sells the idea of going somewhere the moment a client walks in, and that works as a disciplined workplace for the people who make the trips happen.",
        points: ["A counter built for conversations", "Every desk with storage and a pinboard", "A cabin and lounge for the leadership"],
      },
    ],
    voiceImage: photo("eji-travel-solutions/voice.jpg", "The director's cabin from the door: a tan leather chair at the desk, the lounge beyond"),
    results: [
      { value: "1", label: "Open floor for clients and team together" },
      { value: "3", label: "Client seats at the consultation counter" },
      { value: "2", label: "Private rooms: the director's cabin and lounge" },
    ],
  },
  {
    // Real engagement: apartment 1803/04 at Express One, Ghaziabad, photographed
    // and filmed on site at handover. Clips play on the gallery page; the frames
    // lifted from them (marked `still`) serve only the written case study.
    slug: "express-one-1803-04",
    name: "Express One 1803/04",
    type: "residential",
    category: "Apartment",
    location: "Express One, Ghaziabad",
    size: "High-rise apartment",
    timeline: "Handover",
    image: photo("express-one-1803-04/hero.jpg", "The living hall: white moulded wall panels with black inlay lines, brass sconces, a walnut door and a grey marble floor"),
    lead: "A high-rise apartment finished in a quiet classic language — white panelled walls with a black inlay line, grey marble underfoot, coffered ceilings with hidden coves — and bedrooms softened with curved upholstered headboards and timber floors.",
    summary:
      "The family wanted an apartment that felt composed rather than decorated. We gave the living hall a single idea and carried it through: full-height wall panels in white with a thin black inlay, brass sconces in the panels, walnut doors, and a grey-veined marble floor under a coffered ceiling lit from its coves. The bedrooms take a softer version of the same discipline, with curved upholstered headboards that wrap into bedside storage, wardrobes with slim brass pulls, a dressing unit by the window and timber flooring in place of the marble. The clips were shot on site as the rooms were handed over.",
    scope: ["Full-apartment interiors", "Wall panelling and ceiling design", "Custom beds, wardrobes and dressers", "Marble and timber flooring", "Lighting design", "Site supervision"],
    chapters: [
      { title: "One language for the hall.", image: photo("express-one-1803-04/chapter-1.jpg", "The panelled wall of the living hall: three white moulded panels edged with a black inlay line") },
      { title: "Bedrooms that wrap around you.", image: { ...photo("express-one-1803-04/chapter-2.jpg", "The master bedroom: a curved upholstered headboard flowing into bedside storage, a timber floor and sheer curtains"), still: true } },
      { title: "Storage that disappears.", image: { ...photo("express-one-1803-04/chapter-3.jpg", "A bedroom with its wardrobe, walnut door and bed under a cove-lit ceiling"), still: true } },
    ],
    mosaic: [
      photo("express-one-1803-04/mosaic-1.jpg", "The hall's panelled wall between two walnut doors under the coffered ceiling"),
      { ...photo("express-one-1803-04/mosaic-2.jpg", "Brass sconces on the panelled wall, with the kitchen beyond"), still: true },
      { ...photo("express-one-1803-04/mosaic-3.jpg", "The hall towards the kitchen, with the lit display niche and the balcony door"), still: true },
    ],
    concept: {
      title: "Composed, not decorated.",
      text: "Everything in the hall comes from one move: the panel. The same white panel with its black inlay line frames the walls, holds the sconces and sets the rhythm of the doors, so the room needs nothing else. The bedrooms soften the idea into curves and timber, keeping the palette of white, walnut and brass.",
      image: photo("express-one-1803-04/hero.jpg", "The living hall: white moulded wall panels with black inlay lines, brass sconces, a walnut door and a grey marble floor"),
      palette: [
        { name: "White", note: "Wall panels and ceilings", color: "#f3f1ec" },
        { name: "Black inlay", note: "The line that edges every panel", color: "#1e1e1e" },
        { name: "Grey marble", note: "The hall floor", color: "#b9b6b0" },
        { name: "Walnut", note: "Doors and wardrobe shutters", color: "#5a3b2a" },
        { name: "Brass", note: "Sconces and wardrobe pulls", color: "#b08d4b" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Finish a high-rise apartment for a family who wanted it calm and classic, with the hall as a single composed room and bedrooms built for comfort and storage.",
        points: ["A classic, composed hall", "Comfortable bedrooms with full storage", "Materials that will last"],
      },
      {
        title: "Challenge",
        text: "A developer's shell with ordinary proportions and a flat slab. Classic panelling can make such rooms feel heavy, and bedrooms with full wardrobes can feel boxed in.",
        points: ["A standard shell with flat ceilings", "Panelling without heaviness", "Storage without closing rooms in"],
      },
      {
        title: "Approach",
        text: "One panel module sets out the whole hall, with the ceiling coffered and lit from its coves to add height. In the bedrooms the headboards curve into the bedside units so the furniture reads as one piece, and the wardrobes sit flush with slim pulls.",
        points: ["One panel module across the hall", "Coffered, cove-lit ceilings for height", "Curved headboards that join the bedside storage"],
      },
      {
        title: "Design Decisions",
        text: "White panels with a black inlay line, brass sconces, walnut doors, grey-veined marble in the hall, timber flooring and sheer curtains in the bedrooms, wardrobes with slim brass pulls and a dressing unit by the window.",
        points: ["White, walnut, brass and grey marble", "Timber floors in the bedrooms", "Flush wardrobes with slim pulls"],
      },
      {
        title: "Execution",
        text: "The panelling, ceilings, beds and wardrobes were built on site to our drawings, with the clips here shot as the rooms were being handed over.",
        points: ["Panelling and joinery built on site", "Beds and wardrobes made to drawing", "Filmed at handover"],
      },
      {
        title: "Outcome",
        text: "An apartment that feels settled the moment the door opens: one calm idea in the hall, and bedrooms that are soft, warm and fully stored.",
        points: ["A hall with one clear idea", "Bedrooms with built-in comfort", "A palette that will age well"],
      },
    ],
    voiceImage: { ...photo("express-one-1803-04/voice.jpg", "The dressing unit by the bedroom window, with the city beyond at dusk"), still: true },
    results: [
      { value: "1", label: "Panel module that sets out the whole hall" },
      { value: "4", label: "Clips shot on site at handover" },
      { value: "100%", label: "Beds, wardrobes and panelling made to our drawings" },
    ],
    videos: [
      { src: "/videos/spaces/express-one-1803-04/clip-1.mp4", poster: "/images/spaces/express-one-1803-04/clip-1-poster.jpg", alt: "Walking into the living hall: panelled walls, brass sconces and the marble floor" },
      { src: "/videos/spaces/express-one-1803-04/clip-2.mp4", poster: "/images/spaces/express-one-1803-04/clip-2-poster.jpg", alt: "The hall towards the kitchen and the lit display niche" },
      { src: "/videos/spaces/express-one-1803-04/clip-3.mp4", poster: "/images/spaces/express-one-1803-04/clip-3-poster.jpg", alt: "The master bedroom: the curved headboard, the bed and the wardrobe" },
      { src: "/videos/spaces/express-one-1803-04/clip-4.mp4", poster: "/images/spaces/express-one-1803-04/clip-4-poster.jpg", alt: "A bedroom from the door: wardrobe, bed and the cove-lit ceiling" },
    ],
  },
  {
    // Real engagement: a family home in B Block, Ramprastha Colony, Ghaziabad,
    // photographed professionally after completion.
    slug: "b-ramprastha-colony",
    name: "B Ramprastha Colony",
    type: "residential",
    category: "Family home",
    location: "Ramprastha Colony, Ghaziabad",
    size: "Three-bedroom home",
    timeline: "Completed",
    image: photo("b-ramprastha-colony/hero.jpg", "The living room: a black marble television wall between glass display cabinets, tan sofas and a brass sputnik chandelier"),
    lead: "A completed family home in Ramprastha Colony where every room has its own colour — a teal-and-marble bedroom, an olive-green bedroom, a sage kitchen, a tropical-mural bathroom — held together by cream marble floors, cove-lit ceilings and polished timber doors.",
    summary:
      "The family wanted a home that felt generous and a little bit festive, with rooms that each had a character of their own. The living and dining space sets the tone: a black-and-gold marble television wall flanked by lit display cabinets, tan sofas on a patterned rug, a brass sputnik chandelier over the dining table. The master bedroom pairs a teal upholstered bed with a book-matched white marble panel and glossy grey wardrobes; a second bedroom goes olive green with fluted panels and a yellow cove; the kitchen is sage green with a stone splashback and a window over the sink. A powder bath gets a hand-drawn tropical mural, the pooja unit is carved and backlit, and the long balcony is lined in travertine under a timber-slat ceiling.",
    scope: ["Full-home interiors", "Space planning", "Custom wardrobes, beds and television units", "Modular kitchen", "Pooja unit and balcony", "Lighting design"],
    chapters: [
      { title: "A living room with a centre.", image: photo("b-ramprastha-colony/chapter-1.jpg", "Dining and living together: a white dining table with tan chairs, the marble television wall and the sofas beyond") },
      { title: "Teal and marble for the master bedroom.", image: photo("b-ramprastha-colony/chapter-2.jpg", "The master bedroom: a teal bed against a white marble panel lit from its edges, grey gloss wardrobes either side") },
      { title: "A kitchen in sage.", image: photo("b-ramprastha-colony/chapter-3.jpg", "The kitchen: sage-green shutters, a white stone counter and splashback, a window over the sink") },
    ],
    mosaic: [
      photo("b-ramprastha-colony/mosaic-1.jpg", "The second bedroom: an olive-green bed and headboard wall with a yellow cove and a wall clock"),
      photo("b-ramprastha-colony/mosaic-2.jpg", "The dressing corner: an arched backlit mirror, grey gloss wardrobes and the television unit"),
      photo("b-ramprastha-colony/mosaic-3.jpg", "The master bedroom from the door, with the television wall and the wardrobe run"),
    ],
    concept: {
      title: "A colour for every room.",
      text: "Rather than one palette for the whole house, each room was given its own: teal and white marble for the master bedroom, olive and yellow for the second, sage for the kitchen, black-and-gold marble for the living room. What keeps them one home is everything else — cream marble floors, the same cove-lit ceiling detail, polished timber doors and black hardware throughout.",
      image: photo("b-ramprastha-colony/concept.jpg", "The balcony: travertine walls, a dark timber floor and a slatted ceiling, looking out to the street"),
      palette: [
        { name: "Cream marble", note: "Floors throughout", color: "#e6dfd2" },
        { name: "Teal", note: "The master bed and side tables", color: "#2f6472" },
        { name: "Olive", note: "The second bedroom's wall and bed", color: "#6b7a2e" },
        { name: "Sage", note: "The kitchen shutters", color: "#8aa08a" },
        { name: "Black marble & brass", note: "The television wall and the chandelier", color: "#1f1f1f" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Design and build a complete family home in Ramprastha Colony: living and dining, three bedrooms, a kitchen, bathrooms, a pooja unit and the balcony, with each room given its own character.",
        points: ["Full home, every room", "Rooms with their own colour and mood", "Built-in storage throughout"],
      },
      {
        title: "Challenge",
        text: "Strong colours in every room can easily turn a house into a set of disconnected boxes, and the floor plate had the usual constraints of a colony plot: long rooms, doors in the corners, a narrow balcony.",
        points: ["Many colours, one home", "Long rooms and corner doors", "A narrow balcony to make useful"],
      },
      {
        title: "Approach",
        text: "We fixed the shared language first — cream marble floors, the cove-lit ceiling detail, polished timber doors, black handles and fittings — and then let each room take its colour. Storage is built into every bedroom wall so the rooms stay clear.",
        points: ["One shared language of floor, ceiling and doors", "One accent colour per room", "Wardrobes built into the walls"],
      },
      {
        title: "Design Decisions",
        text: "A black-and-gold marble television wall with glass display cabinets, a brass sputnik chandelier, a teal bed against book-matched white marble, grey gloss wardrobes, an olive bedroom with fluted panels, a sage kitchen, a hand-painted tropical mural in the powder bath and a backlit carved pooja unit.",
        points: ["Marble television wall with lit cabinets", "Gloss wardrobes with black pulls", "A mural in the powder bath"],
      },
      {
        title: "Execution",
        text: "The home was built and furnished by the studio, with the marble, joinery and lighting completed before the family moved in; the photographs were taken on completion.",
        points: ["Marble and joinery to drawing", "Furnished and styled", "Photographed on completion"],
      },
      {
        title: "Outcome",
        text: "A home where each room has a mood of its own and the whole still reads as one house — the family's brief, delivered room by room.",
        points: ["Three bedrooms, each with its own colour", "A living room built around the television wall", "Storage everywhere, clutter nowhere"],
      },
    ],
    voiceImage: photo("b-ramprastha-colony/voice.jpg", "The living room from the window side: tan sofas, a marble coffee table and the patterned rug"),
    results: [
      { value: "3", label: "Bedrooms, each with its own colour" },
      { value: "1", label: "Black-and-gold marble television wall" },
      { value: "100%", label: "Wardrobes, beds and units made to our drawings" },
    ],
    gallery: [
      photo("b-ramprastha-colony/gallery-1.jpg", "The powder bath: a hand-painted tropical mural, a round mirror and a basin on a stone counter"),
      photo("b-ramprastha-colony/gallery-2.jpg", "The pooja unit: carved, backlit panels and columns in white"),
      photo("b-ramprastha-colony/gallery-3.jpg", "A sitting room with a blue and an olive sofa around a white marble table"),
      photo("b-ramprastha-colony/gallery-4.jpg", "The master bedroom's wardrobe wall, grey gloss shutters with a wall clock"),
    ],
  },
  {
    // Real engagement: a compact office at Gaur City for a cleanroom
    // engineering company (the studio's "Enviro Cleanroom" design intent,
    // June 2026). Renders by the studio, upscaled for the site; the plan
    // and mood board from the deck are not used as photographs.
    slug: "gaur-city-office",
    name: "Gaur City Office",
    type: "commercial",
    category: "Office",
    location: "Gaur City, Greater Noida West",
    size: "Compact office · 6 workstations",
    timeline: "Design intent issued June 2026",
    image: photo("gaur-city-office/hero.jpg", "The meeting table with six blue chairs under a linear light, the MD's glass cubicle beside it and a blue wall at the far end"),
    lead: "A compact office for a cleanroom engineering company, planned down to the inch: six workstations, a managing director's cubicle, a meeting table and a small leisure corner on a balcony, all in a palette of white, grey and the brand's blue.",
    summary:
      "The brief was a long, narrow floor plate at Gaur City and a company that builds cleanrooms for a living, so the office had to feel as precise as the work. The plan runs the six workstations down one side behind a two-foot passage, puts the managing director in a curved glass cubicle where the room turns, and keeps a meeting table and a tall-stool leisure corner by the balcony at the far end. The ceiling stays open and painted dark with the services exposed in red, while the walls, desks and storage are white and pale grey so the blue chairs, the blue end wall and the brand's blue accents carry the identity.",
    scope: ["Workplace interiors", "Space planning", "MD cubicle and meeting area", "Workstation and storage joinery", "Brand-led colour direction", "Lighting design"],
    chapters: [
      { title: "A narrow floor, planned to the inch.", image: photo("gaur-city-office/chapter-1.jpg", "The office from the entrance: the meeting table, the MD's glass cubicle and the workstations under an open ceiling") },
      { title: "Six desks in a row.", image: photo("gaur-city-office/chapter-2.jpg", "Workstations in white with low screens, a pinboard on the wall and a linear pendant above") },
      { title: "A corner to step away.", image: photo("gaur-city-office/chapter-3.jpg", "The leisure corner: two tall stools and a round table against the blue wall") },
    ],
    mosaic: [
      photo("gaur-city-office/mosaic-1.jpg", "The meeting table along the window wall, six blue chairs under the exposed ceiling"),
      photo("gaur-city-office/mosaic-2.jpg", "Inside the MD's cubicle: a walnut desk, two blue chairs and the curved glass wall"),
      photo("gaur-city-office/mosaic-3.jpg", "The leisure corner in daylight, the MD's cubicle beyond"),
    ],
    concept: {
      title: "As precise as a cleanroom.",
      text: "A company that builds controlled environments should work in one. Every element is drawn to a grid: white workstations with low acoustic screens, overhead storage in white, a meeting table that doubles as the entrance's first impression, and the MD's cubicle in curved glass so the director stays part of the room. The dark open ceiling with red services gives the small floor height and honesty, and the brand's blue is used sparingly, where it reads.",
      image: photo("gaur-city-office/hero.jpg", "The meeting table with six blue chairs under a linear light, the MD's glass cubicle beside it and a blue wall at the far end"),
      palette: [
        { name: "Ivory", note: "Walls, desks and overhead storage", color: "#efece6" },
        { name: "Clouds", note: "Acoustic screens and the floor", color: "#c9cfd3" },
        { name: "Sky", note: "Chairs and the leisure corner", color: "#8fb3d6" },
        { name: "Deep ocean", note: "The end wall and the brand strip", color: "#2a4a66" },
        { name: "Walnut", note: "The MD's desk and the leisure table", color: "#6b4a34" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Fit six workstations, a managing director's cubicle, a meeting table and a leisure area into a compact, narrow office at Gaur City for a cleanroom engineering company, and make it look like the company's own work.",
        points: ["Six workstations and an MD cubicle", "A meeting table and a leisure corner", "A compact, narrow floor plate"],
      },
      {
        title: "Challenge",
        text: "The floor is barely nine feet deep along most of its length, with the balcony at the far end. Everything had to sit on one side of a two-foot passage without the room feeling like a corridor.",
        points: ["A long, narrow plan", "A two-foot passage to keep clear", "Daylight only from the balcony end"],
      },
      {
        title: "Approach",
        text: "We lined the workstations along one wall in a single run, placed the MD's cubicle where the plan widens so it anchors the room, and used the balcony end for the meeting table and the leisure stools so the best light goes to the shared spaces.",
        points: ["Workstations in one run", "The MD's cubicle at the turn of the plan", "Meeting and leisure at the balcony end"],
      },
      {
        title: "Design Decisions",
        text: "White desks with pale acoustic screens, white overhead storage with a blue brand strip, curved glass for the MD's cubicle, a dark open ceiling with services painted red, blue task chairs, a blue end wall for the leisure corner and a walnut desk and table for warmth.",
        points: ["White, grey and the brand's blue", "Curved glass MD cubicle", "Open dark ceiling with red services"],
      },
      {
        title: "Execution",
        text: "The design intent was issued in two rounds in June 2026, with the plan, inspiration board and views; working drawings follow for the fit-out.",
        points: ["Design intent issued June 2026", "Plan and views agreed", "Working drawings next"],
      },
      {
        title: "Outcome",
        text: "A small office that reads as organised and confident the moment the door opens, with every seat, screen and shelf accounted for.",
        points: ["Six desks, one MD cubicle, one meeting table", "A leisure corner with daylight", "The brand's blue carried throughout"],
      },
    ],
    voiceImage: photo("gaur-city-office/voice.jpg", "The director's desk at the head of the workstation run, the pinboard and pendant beyond"),
    results: [
      { value: "6", label: "Workstations in a single run" },
      { value: "1", label: "MD cubicle in curved glass" },
      { value: "2", label: "Shared spaces at the balcony end: meeting and leisure" },
    ],
  },
  {
    // Real engagement: an office at Masters Capitol, Sector 63, Noida.
    // Renders by the studio (day and evening sets), upscaled for the site.
    slug: "sector-63-masters-capitol",
    name: "Sector 63 Masters Capitol",
    type: "commercial",
    category: "Office",
    location: "Sector 63, Noida",
    size: "Office floor",
    timeline: "Design complete",
    image: photo("sector-63-masters-capitol/hero.jpg", "The open office: a row of workstations under white overhead storage and an oak strip, a lounge sofa behind a brass-framed glass screen"),
    lead: "An office in Masters Capitol, Sector 63, planned as one calm, well-organised floor: a fluted reception desk, a long run of workstations under white storage, a meeting room in oak and tan leather, and a glass-and-oak display cabinet that doubles as the room's divider.",
    summary:
      "The brief was an office that looks organised the moment you walk in and stays that way. Storage is the architecture: white overhead cabinets run the length of the workstation wall over an oak band, a tall oak-and-glass display cabinet divides the reception from the desks, and a ladder on a brass rail reaches the upper cupboards. The reception desk is fluted oak and white with a brass base; the lounge beside the workstations has a cream sofa, a brass side table and a grid of framed maps. The meeting room keeps the same materials — oak shelving, a white table, tan leather chairs — under a timber-slat blind that softens the window. Services stay exposed and dark above, with a single red line of conduit as the one bold stroke.",
    scope: ["Workplace interiors", "Space planning", "Reception and display joinery", "Workstation storage wall", "Meeting room", "Lighting design"],
    chapters: [
      { title: "Storage as architecture.", image: photo("sector-63-masters-capitol/chapter-1.jpg", "The reception: a fluted oak-and-white desk, open shelves and the tall oak-and-glass display cabinet beside it") },
      { title: "A meeting room in oak and tan.", image: photo("sector-63-masters-capitol/chapter-2.jpg", "The meeting room: a white table, tan leather chairs, oak shelving and a timber-slat blind over the window") },
      { title: "Desks in one long run.", image: photo("sector-63-masters-capitol/chapter-3.jpg", "The workstation row seen from the cabin, laptops on white desks under the oak-fronted storage wall") },
    ],
    mosaic: [
      photo("sector-63-masters-capitol/mosaic-1.jpg", "The display cabinet in oak and glass, the ladder on its brass rail and the storage wall beyond"),
      photo("sector-63-masters-capitol/mosaic-2.jpg", "The fluted reception desk with its brass base, open oak shelving behind"),
      photo("sector-63-masters-capitol/mosaic-3.jpg", "The lounge: a cream sofa, a brass side table and framed maps behind a brass-framed glass screen"),
    ],
    concept: {
      title: "Everything in its place.",
      text: "The office is organised by its storage. One white cabinet run with an oak band ties the whole workstation wall together, a tall display cabinet stands in for a partition, and the ladder on its brass rail turns the upper cupboards into part of the room rather than dead space. Oak, white and brass repeat in the reception desk, the meeting room and the lounge, so the floor reads as one piece.",
      image: photo("sector-63-masters-capitol/hero.jpg", "The open office: a row of workstations under white overhead storage and an oak strip, a lounge sofa behind a brass-framed glass screen"),
      palette: [
        { name: "White", note: "Overhead cabinets, desks and the meeting table", color: "#f2f0eb" },
        { name: "Oak", note: "Storage fronts, shelving and the reception desk", color: "#c8a878" },
        { name: "Brass", note: "Rails, frames and the desk base", color: "#b8954f" },
        { name: "Tan leather", note: "Meeting chairs", color: "#b5633a" },
        { name: "Charcoal", note: "The exposed ceiling", color: "#3a3a3a" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Design an office floor at Masters Capitol, Sector 63, with a reception, a team workstation run, a meeting room and a lounge, with enough storage that the floor never looks cluttered.",
        points: ["Reception, workstations, meeting room, lounge", "Storage for the whole team's paperwork", "A calm, consistent look"],
      },
      {
        title: "Challenge",
        text: "A tall floor with services overhead and a long workstation wall: storage had to be generous without boxing the room in, and the reception needed a partition without losing light.",
        points: ["A long wall of desks", "Overhead height to use well", "A partition that keeps the light"],
      },
      {
        title: "Approach",
        text: "We turned storage into the architecture: overhead cabinets along the desks with a ladder on a rail, a glass display cabinet as the divider, and one material palette — oak, white, brass — from the reception to the meeting room.",
        points: ["Overhead cabinets with a ladder rail", "A display cabinet instead of a wall", "One palette throughout"],
      },
      {
        title: "Design Decisions",
        text: "A fluted oak reception desk on a brass base, white cabinet fronts over an oak band, an oak-and-glass display cabinet, a brass-framed glass screen to the lounge, tan leather meeting chairs under a timber-slat blind, and the ceiling left dark with one red conduit line.",
        points: ["Fluted desk and brass base", "White storage over an oak band", "Tan leather in the meeting room"],
      },
      {
        title: "Execution",
        text: "Day and evening views were issued with the plan; the joinery is detailed as continuous runs so the storage wall, the display cabinet and the reception desk can be built as one set.",
        points: ["Joinery detailed as continuous runs", "Day and evening views issued", "Ready for fit-out"],
      },
      {
        title: "Outcome",
        text: "An office that stays tidy by design: every file has a cupboard, every seat has its place, and the whole floor shares one warm, clear language.",
        points: ["A storage wall the length of the desks", "A reception that doubles as display", "Meeting room and lounge in the same palette"],
      },
    ],
    voiceImage: photo("sector-63-masters-capitol/voice.jpg", "The meeting table from the shelving side, tan leather chairs and the slatted blind beyond"),
    results: [
      { value: "1", label: "Storage wall the full length of the workstations" },
      { value: "1", label: "Display cabinet that stands in for a partition" },
      { value: "3", label: "Materials carried through: oak, white and brass" },
    ],
  },
  {
    // Real engagement: apartment 912 at SKA. Renders by the studio (April
    // 2026), with four views re-rendered photographically; upscaled for the site.
    slug: "ska-912",
    name: "SKA 912",
    type: "residential",
    category: "Apartment",
    location: "SKA, Greater Noida West",
    size: "Apartment",
    timeline: "Design complete",
    image: photo("ska-912/hero.jpg", "Living and dining as one room: a cream sofa, a wall of framed photographs, a timber dining table and a cove-lit ceiling"),
    lead: "A warm, pale apartment where the living and dining share one room, a green-marble feature wall holds the television, a daybed room doubles as a guest room, and the bedroom pairs a tan upholstered bed with a curved dressing corner — all in cream, oak and soft green.",
    summary:
      "The family wanted calm rather than colour, with every room feeling warm. The living and dining room is one long space: a cream sofa and dark-framed armchairs at one end, a timber dining table under a wall of framed photographs at the other, with a fluted panel and a cove-lit ceiling tying them together. The television sits on a wall of soft green marble veining with a curved cream unit beneath. The kitchen is small and glossy, with a patterned splashback, pendant cages over the counter and a breakfast ledge. A second room takes an olive daybed under a hand-drawn green mural so it works as a sitting room by day and a guest room by night. The bedroom pairs a tan upholstered bed and a fluted headboard with a curved dressing table and a rose-pink stool, the one playful note.",
    scope: ["Full-apartment interiors", "Space planning", "Feature walls and ceilings", "Custom beds, units and dressers", "Modular kitchen", "Lighting design"],
    chapters: [
      { title: "One room for living and dining.", image: photo("ska-912/chapter-1.jpg", "The living room: a cream sofa with dark cushions, two dark-framed armchairs, a fluted panel and a cove-lit ceiling") },
      { title: "Tan, oak and a curve.", image: photo("ska-912/chapter-2.jpg", "The bedroom: a tan upholstered bed with a fluted headboard, a curved dressing table and a pink stool by the window") },
      { title: "A small kitchen with character.", image: photo("ska-912/chapter-3.jpg", "The kitchen: glossy cream shutters, a patterned splashback, cage pendants and a breakfast ledge") },
    ],
    mosaic: [
      photo("ska-912/mosaic-1.jpg", "The television wall: soft green marble veining with a curved cream unit beneath"),
      photo("ska-912/mosaic-2.jpg", "The study corner: a floating desk, a curved stool and the television on a blush wall"),
      photo("ska-912/mosaic-3.jpg", "The daybed room: an olive daybed under a green mural, a rattan pendant and a timber door"),
    ],
    concept: {
      title: "Warm, pale and soft.",
      text: "The apartment is built on three tones — cream walls and floors, oak doors and tables, and a soft green that appears as marble veining on the television wall and as a mural in the daybed room. Curves soften the joinery: the television unit, the dressing table, the stools. Light comes from coves rather than fittings, so every room glows evenly.",
      image: photo("ska-912/hero.jpg", "Living and dining as one room: a cream sofa, a wall of framed photographs, a timber dining table and a cove-lit ceiling"),
      palette: [
        { name: "Cream", note: "Walls, floors and the sofa", color: "#ece4d6" },
        { name: "Oak", note: "Doors, the dining table and frames", color: "#c49a6c" },
        { name: "Soft green", note: "The marble wall and the mural", color: "#b7c49a" },
        { name: "Tan", note: "The bed and armchair frames", color: "#b58a62" },
        { name: "Blush", note: "The dressing stool and the study wall", color: "#e2b8a8" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Design a complete apartment at SKA for a family who wanted it warm and calm: living and dining, a kitchen, a bedroom, and a second room that works for guests and for sitting.",
        points: ["Full apartment", "Warm and calm rather than colourful", "A guest room that is also a sitting room"],
      },
      {
        title: "Challenge",
        text: "A compact plan with the living and dining in one room and a small kitchen: the rooms had to feel generous without strong colour to lean on.",
        points: ["Living and dining in one room", "A small kitchen", "Generosity without colour"],
      },
      {
        title: "Approach",
        text: "We kept the palette to cream, oak and one soft green, used coves instead of fittings so the ceilings glow, and gave each room a single feature — the marble wall, the mural, the curved dressing corner — rather than many.",
        points: ["Three tones only", "Cove-lit ceilings throughout", "One feature per room"],
      },
      {
        title: "Design Decisions",
        text: "A green-veined marble television wall with a curved unit, a wall of framed photographs over the dining table, a fluted panel in the living room, a daybed under a mural, a tan bed with a fluted headboard, a curved dressing table with a blush stool, and cage pendants in the kitchen.",
        points: ["Marble wall and curved unit", "Daybed under a mural", "Curved dressing table and blush stool"],
      },
      {
        title: "Execution",
        text: "The design views were issued in April 2026 with four of them re-rendered photographically for the family; working drawings follow for the fit-out.",
        points: ["Views issued April 2026", "Photographic re-renders of key rooms", "Working drawings next"],
      },
      {
        title: "Outcome",
        text: "An apartment that feels soft and warm in every room, with just enough feature to remember each one by.",
        points: ["Living and dining that read as one calm room", "A guest room that earns its keep", "A bedroom with one playful note"],
      },
    ],
    voiceImage: photo("ska-912/voice.jpg", "The living room from the dining end: the sofa, the dark armchairs and the television on its wall"),
    results: [
      { value: "3", label: "Tones across the whole apartment: cream, oak, green" },
      { value: "1", label: "Feature per room, no more" },
      { value: "2", label: "Rooms in one: the daybed room sits and sleeps" },
    ],
  },
  {
    // Real engagement: an apartment at SKA Orion. Renders by the studio
    // (December 2025 set and the later living-room revisions); HD sources,
    // resampled for the site.
    slug: "ska-orion",
    name: "SKA Orion",
    type: "residential",
    category: "Apartment",
    location: "SKA Orion, Greater Noida West",
    size: "Apartment",
    timeline: "Design complete",
    image: photo("ska-orion/hero.jpg", "The living room: a marble television panel between white moulded walls, blue armchairs, a cream sofa and the dining table beyond"),
    lead: "A classic-contemporary apartment at SKA Orion: white moulded panels and oak doors, a book-matched marble television wall, a brass-wrapped console at the entrance, dusty-blue armchairs against cream, and bedrooms that each take one soft colour.",
    summary:
      "The family asked for an apartment that felt elegant without being formal. The living room sets the language: white wall panels with slim mouldings, fluted panels at the corners, oak doors with a brass inlay line, and a book-matched marble panel for the television. Dusty-blue armchairs and a cream modular sofa sit on a Berber rug under brass sconces and a mushroom floor lamp. The entrance is marked by a curved console wrapped in brass; the dining corner has a round oak table, a glazed bar cabinet and a wall of framed photographs, with the kitchen seen through a soft arch. The master bedroom runs wardrobes and a dressing table along one wall under a cove-lit ceiling; a second bedroom goes peach with an arched television niche and a floating console; the study has a floating oak desk and open shelves.",
    scope: ["Full-apartment interiors", "Space planning", "Wall panelling and feature walls", "Custom wardrobes, consoles and units", "Modular kitchen", "Lighting design"],
    chapters: [
      { title: "Panelled, fluted and brass-lined.", image: photo("ska-orion/chapter-1.jpg", "The living room: cream sofa and blue armchairs under brass sconces, moulded panels and oak doors behind") },
      { title: "A bedroom wall that does everything.", image: photo("ska-orion/chapter-2.jpg", "The master bedroom: a grey upholstered bed, a wall of wardrobes and a dressing table under a cove-lit ceiling") },
      { title: "Kitchen through an arch.", image: photo("ska-orion/chapter-3.jpg", "The dining corner: a round oak table, a glazed bar cabinet and the blush kitchen seen through a soft arch") },
    ],
    mosaic: [
      photo("ska-orion/mosaic-1.jpg", "The television wall: a white panel between brass strips and fluted oak, a floating console beneath"),
      photo("ska-orion/mosaic-2.jpg", "The second bedroom: a peach arch holding the television, a floating oak console and a curved headboard"),
      photo("ska-orion/mosaic-3.jpg", "The study: a floating oak desk, open shelves and a monitor by the window"),
    ],
    concept: {
      title: "Elegant, not formal.",
      text: "The apartment borrows the vocabulary of a classic home — mouldings, fluting, brass sconces, a marble panel — and uses it lightly: white on white, oak instead of dark timber, and one soft colour per room so nothing feels heavy. Brass runs through as the fine line that ties it together, from the inlay on the doors to the wrapped console and the strips on the television wall.",
      image: photo("ska-orion/concept.jpg", "The hallway: oak doors with a brass inlay between moulded panels, brass sconces and a sculptural console"),
      palette: [
        { name: "White", note: "Moulded and fluted wall panels", color: "#f3f0ea" },
        { name: "Oak", note: "Doors, the dining table and the desks", color: "#cfae82" },
        { name: "Brass", note: "Inlays, sconces, strips and the console wrap", color: "#b8954f" },
        { name: "Dusty blue", note: "The armchairs", color: "#5f8aa3" },
        { name: "Peach", note: "The second bedroom's arch", color: "#e3b59a" },
      ],
    },
    stages: [
      {
        title: "Brief",
        text: "Design a complete apartment at SKA Orion for a family who wanted it elegant and welcoming: living and dining, a kitchen, a master bedroom, a second bedroom and a study.",
        points: ["Full apartment", "Elegant but relaxed", "A study for working from home"],
      },
      {
        title: "Challenge",
        text: "Classic detailing can quickly make a developer apartment feel small and fussy; the mouldings, fluting and brass had to add richness without taking space or light.",
        points: ["Detail without fuss", "Keeping the rooms light", "One language across very different rooms"],
      },
      {
        title: "Approach",
        text: "We kept the shell white and used the detail as line rather than mass: slim mouldings, shallow fluting, a brass inlay on every door. Each room then takes a single soft colour, and the marble television panel gives the living room its one bold moment.",
        points: ["Detail as line, not mass", "One soft colour per room", "One bold panel in the living room"],
      },
      {
        title: "Design Decisions",
        text: "A book-matched marble television panel, white moulded and fluted panels, oak doors with a brass inlay, a brass-wrapped curved console, dusty-blue armchairs on a Berber rug, a round oak dining table with a photo wall, a peach arch in the second bedroom and a floating oak desk in the study.",
        points: ["Marble panel and brass strips", "Brass-wrapped console at the entrance", "A peach arch for the second bedroom"],
      },
      {
        title: "Execution",
        text: "The first set of views was issued in December 2025 and the living room revised afterwards with the marble panel and the console; working drawings follow for the fit-out.",
        points: ["Views issued December 2025", "Living room revised", "Working drawings next"],
      },
      {
        title: "Outcome",
        text: "An apartment that reads as classic the moment you enter and as easy the moment you sit down.",
        points: ["Classic detail, light rooms", "One colour to remember each room by", "Brass as the thread throughout"],
      },
    ],
    voiceImage: photo("ska-orion/voice.jpg", "The guest bedroom: a grey bed with a rust throw, a floating desk and shelves by the window"),
    results: [
      { value: "1", label: "Marble panel as the living room's single bold move" },
      { value: "3", label: "Bedrooms and a study, each with one soft colour" },
      { value: "100%", label: "Panelling, consoles and wardrobes made to our drawings" },
    ],
    gallery: [
      photo("ska-orion/gallery-1.jpg", "The dining corner: a round oak table, a glazed bar cabinet and a wall of framed photographs"),
      photo("ska-orion/gallery-2.jpg", "The marble television panel up close, with its floating console and the sheer curtains beside it"),
      photo("ska-orion/gallery-3.jpg", "Living and dining together: the bar cabinet, the round table and the television on its panel"),
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
