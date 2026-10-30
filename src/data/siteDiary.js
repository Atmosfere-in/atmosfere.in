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
  items: [],
};
