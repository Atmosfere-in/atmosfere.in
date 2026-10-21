// Generates the resized WebP variants that src/lib/imageLoader.js serves for
// local photographs. Run after adding or replacing photos:
//
//   npm run images            # every photo under public/images
//   npm run images -- hospitality/punarnava   # one folder only
//
// For each source photo (jpg/jpeg/png/webp that is not itself a variant) it
// writes <name>-640.webp, -1080.webp, -1920.webp and -2560.webp beside it.
// Every name is always written (the loader may ask for any of them), but a
// photo is never upscaled: a 1920px source gives a 1920px "-2560" file.
// Variants already newer than the source are skipped. Sources stay in place
// so the set can be regenerated.
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

export const WIDTHS = [640, 1080, 1920, 2560];
const ROOT = path.resolve("public/images");
const VARIANT = /-(640|1080|1920|2560)\.webp$/;
const SOURCE = /\.(jpe?g|png|webp)$/i;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (SOURCE.test(entry.name) && !VARIANT.test(entry.name)) yield full;
  }
}

async function newer(file, than) {
  try {
    return (await stat(file)).mtimeMs >= than;
  } catch {
    return false;
  }
}

const start = path.join(ROOT, process.argv[2] ?? "");
let written = 0;
for await (const source of walk(start)) {
  const { mtimeMs } = await stat(source);
  const image = sharp(source, { failOn: "none" }).rotate();
  const { width } = await image.metadata();
  const base = source.replace(/\.[^.]+$/, "");
  for (const w of WIDTHS) {
    const out = `${base}-${w}.webp`;
    if (await newer(out, mtimeMs)) continue;
    await image
      .clone()
      .resize({ width: Math.min(w, width), withoutEnlargement: true })
      .webp({ quality: w >= 1920 ? 82 : 80, effort: 5 })
      .toFile(out);
    written++;
    console.log(path.relative(ROOT, out));
  }
}
console.log(`${written} variant(s) written`);
