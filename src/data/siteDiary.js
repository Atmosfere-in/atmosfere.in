// Behind the scenes on /spaces/process: site photographs and short clips
// from the studio's projects while they were being built. Every tile names
// its project and the stage of work it shows. Files live under
// /public/images/spaces/site-diary and /public/videos/spaces/site-diary.

const photo = (file, project, stage, alt) => ({ kind: "photo", src: `/images/spaces/site-diary/${file}`, project, stage, alt });
const clip = (file, poster, project, stage, alt) => ({ kind: "clip", src: `/videos/spaces/site-diary/${file}`, poster: `/images/spaces/site-diary/${poster}`, project, stage, alt });

export const siteDiary = {
  eyebrow: "Behind the scenes",
  title: "The work, while it was happening.",
  intro:
    "Our own site team builds every project we design. These are the sites as they were: the shells, the first fix, the joinery going in, the finishing. Tap any one to see it large.",
  items: [
    photo("evara-1.jpg", "Evara Bliss", "Facade sculpture", "The site team carrying one of the sculpted facade leaves across the floor of the hall"),
    photo("arihant-2.jpg", "Arihant", "Shell and ceiling", "The office floor as a bare shell, with the ceiling grid and services going in"),
    photo("lajpat-2.jpg", "Suneja Card Creations", "Ceiling", "The store shell with the fluted ceiling medallion cast and the walls still bare"),
    photo("veridia-1.jpg", "Veridia Wave City", "Ceiling framework", "The metal framework of the coved ceiling, wired before the boards go on"),
    clip("evara-c2.mp4", "evara-c2.jpg", "Evara Bliss", "Hall, before the fit-out", "A walk through the grand hall before the floors and the finishes"),
    photo("express-2.jpg", "Express One", "Bedroom joinery", "The curved headboard wall being built in ply, the bed base beside it"),
    photo("t10-202-1.jpg", "Tower 10 – 202", "Shell", "The living room as a shell: plastered walls, boards stacked on the floor, the window to the towers"),
    photo("krishna-2.jpg", "Krishna Nagar Jewellery Store", "Facade", "The shopfront behind scaffolding while the new facade is fitted"),
    photo("arihant-1.jpg", "Arihant", "Flooring", "The Atmosfere team laying the floor tiles under the coloured acoustic ceiling"),
    photo("veridia-2.jpg", "Veridia Wave City", "Joinery", "The television unit and wall panelling built, before the finishes"),
    clip("express-c1.mp4", "express-c1.jpg", "Express One", "Finishing", "A walk through the hall as the panelled wall and lighting are finished"),
    photo("lajpat-3.jpg", "Suneja Card Creations", "Shelving", "The brass-trimmed shelving uprights fitted and taped, the strip lights already on"),
    photo("nri-1.jpg", "NRI Residency", "Wall panelling", "Checking the black-and-gold chevron panel as it goes on the wall"),
    photo("evara-2.jpg", "Evara Bliss", "Facade", "The facade screens behind scaffolding at night, the lanterns lit for the first time"),
    photo("express-3.jpg", "Express One", "Kitchen", "The arched crockery niche and the fridge recess being built beside the kitchen"),
    photo("t10-202-2.jpg", "Tower 10 – 202", "Ceiling", "The cove ceiling plastered and the tracks for the lights marked out"),
    photo("veridia-3.jpg", "Veridia Wave City", "Ceiling", "The curved cove ceiling boarded and plastered, lines marked for the lights"),
    photo("krishna-1.jpg", "Krishna Nagar Jewellery Store", "Facade frame", "The steel frame of the new shopfront going up behind the scaffold"),
    clip("evara-c1.mp4", "evara-c1.jpg", "Evara Bliss", "Facade sculpture", "Fitting the sculpted forms over the entrance"),
    photo("arihant-3.jpg", "Arihant", "Workstations", "The first run of workstations in place, screens and desks going together"),
    photo("express-1.jpg", "Express One", "Wall panels", "The moulded wall panels fitted in the hall, the floor still to be laid"),
    photo("lajpat-1.jpg", "Suneja Card Creations", "Shell", "The store as a shell, the team marking out the counters"),
    photo("nri-2.jpg", "NRI Residency", "Bathroom", "The bathroom tiled and the basin unit in, before the fittings"),
    photo("evara-3.jpg", "Evara Bliss", "Sculpture", "A fitter up the sculpted leaf, fixing it to the structure"),
    photo("villa-1.jpg", "Villa at Rise Resorts", "Structure", "The villa's structure complete, before the facade and the finishes"),
  ],
};
