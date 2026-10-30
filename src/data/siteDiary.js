// Behind the scenes on /spaces/process: the studio's own site team at work,
// photographed on the projects while they were being built. Every tile names
// its project and the stage of work. Files live under
// /public/images/spaces/site-diary and /public/videos/spaces/site-diary.

const photo = (file, project, stage, alt) => ({ kind: "photo", src: `/images/spaces/site-diary/${file}`, project, stage, alt });
const clip = (file, poster, project, stage, alt) => ({ kind: "clip", src: `/videos/spaces/site-diary/${file}`, poster: `/images/spaces/site-diary/${poster}`, project, stage, alt });

export const siteDiary = {
  eyebrow: "Behind the scenes",
  title: "Our team, on site.",
  intro:
    "Every project we design is built by our own site team. These are the people doing it: the first fix, the joinery, the ceilings, the finishing. Tap any one to see it large.",
  items: [
    photo("evara-1.jpg", "Evara Bliss", "Facade sculpture", "The site team carrying one of the sculpted facade leaves across the floor of the hall"),
    photo("arihant-1.jpg", "Arihant", "Flooring", "The Atmosfere team laying the floor tiles under the coloured acoustic ceiling"),
    photo("lajpat-2.jpg", "Suneja Card Creations", "Ceiling and shelving", "The team at work under the fluted ceiling medallion, the shelving carcasses going in"),
    photo("veridia-1.jpg", "Veridia Wave City", "Ceiling", "Finishing the curved cove ceiling from the ladder"),
    clip("evara-c2.mp4", "evara-c2.jpg", "Evara Bliss", "Hall, before the fit-out", "A walk through the grand hall before the floors and the finishes"),
    photo("krishna-1.jpg", "Krishna Nagar Jewellery Store", "Facade frame", "The steel frame of the new shopfront going up behind the scaffold"),
    photo("veridia-4.jpg", "Veridia Wave City", "Doors", "Fitting the arched glazed door beside the walnut entrance door"),
    photo("lajpat-4.jpg", "Suneja Card Creations", "Shelving", "Fitting the cabinet fronts below the brass-trimmed shelves"),
    photo("arihant-2.jpg", "Arihant", "Cabling", "Running the network cabling under the floor before the desks go in"),
    photo("evara-2.jpg", "Evara Bliss", "Steelwork", "Welding the steel frame for the facade screens"),
    clip("express-c1.mp4", "express-c1.jpg", "Express One", "Finishing", "A walk through the hall as the panelled wall and lighting are finished"),
    photo("veridia-3.jpg", "Veridia Wave City", "Joinery", "The team assembling the wardrobe carcass in the bedroom"),
    photo("lajpat-3.jpg", "Suneja Card Creations", "Counters", "Fitting the timber counter against the shelving wall"),
    photo("express-2.jpg", "Express One", "Flooring", "The team laying the marble floor in the hall, the moulded wall panels already up"),
    photo("veridia-5.jpg", "Veridia Wave City", "Ceiling framework", "Lifting the ceiling framework into place"),
    photo("evara-4.jpg", "Evara Bliss", "Sculpture", "A fitter up the sculpted leaf, fixing it to the structure"),
    photo("lajpat-1.jpg", "Suneja Card Creations", "Shell", "The team in the store shell, marking out the counters"),
    photo("veridia-6.jpg", "Veridia Wave City", "Wardrobes", "Fitting the wardrobe shutters in the bedroom"),
    clip("evara-c1.mp4", "evara-c1.jpg", "Evara Bliss", "Facade sculpture", "Fitting the sculpted forms over the entrance"),
    photo("arihant-3.jpg", "Arihant", "Workstations", "The team setting up the first run of workstations"),
    photo("veridia-2.jpg", "Veridia Wave City", "Boards", "Carrying the ply boards in for the joinery"),
    photo("evara-3.jpg", "Evara Bliss", "Sculpture", "Fixing a sculpted leaf to the facade from the scaffold"),
    photo("veridia-7.jpg", "Veridia Wave City", "Setting out", "Checking the drawings against the work on site"),
    photo("lajpat-5.jpg", "Suneja Card Creations", "Cane fronts", "Fitting the brass handles on the cane-fronted cabinets"),
    photo("evara-5.jpg", "Evara Bliss", "Entrance lighting", "Rigging the lights at the entrance between the marble lantern columns, before an event"),
    photo("nri-1.jpg", "NRI Residency", "Wall panelling", "Checking the black-and-gold chevron panel as it goes on the wall"),
  ],
};
