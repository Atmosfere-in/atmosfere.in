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
      { title: "Shelves that stay out of the way.", image: photo("lajpat-nagar/chapter-2.jpg", "The built store: pale shelving with slim brass uprights, cards and boxes lined along both walls") },
      { title: "An identity from scratch.", image: photo("lajpat-nagar/chapter-3.jpg", "A marble-topped counter with cane-backed chairs, the shelves of boxes behind") },
    ],
    mosaic: [
      photo("lajpat-nagar/mosaic-1.jpg", "Gift boxes in traditional prints on the shelves, lit from above"),
      photo("lajpat-nagar/mosaic-2.jpg", "The fluted ceiling medallion with the chandelier at its centre"),
      photo("lajpat-nagar/mosaic-3.jpg", "A display shelf of printed boxes and trays over cane-fronted cabinets"),
    ],
    concept: {
      title: "Let the products do the decorating.",
      text: "Every card and box in this store is printed, embroidered or gilded, so the interior had to be the calm behind them. The shelving is minimal and traditional at once — pale timber, slim brass uprights, cane-fronted cabinets below — and the walls are kept plain so colour comes only from the stock. Three counters sit in the middle of the room, each with its own seating, so a customer walks in, is shown to a counter, and sits with the collection in front of them. Traditional prints appear in the brand's identity rather than on the walls: on the signage, the packaging and the small details.",
      image: photo("lajpat-nagar/concept.jpg", "The shelf wall: printed gift boxes on pale timber shelves with brass uprights, cane-fronted cabinets below"),
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
    voiceImage: photo("lajpat-nagar/voice.jpg", "A counter with cane-backed chairs and a marble top, the shelves of cards and boxes behind"),
    results: [
      { value: "700", label: "sq ft, planned as one clear route" },
      { value: "3", label: "Counters, with seating for about twelve" },
      { value: "1", label: "Brand identity, built from scratch" },
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
];

export const spacesProjectFilters = [
  { label: "All work", value: null },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
];

export function getSpacesProject(slug) {
  return spacesProjects.find((p) => p.slug === slug);
}
