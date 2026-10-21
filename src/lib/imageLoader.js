"use client";

// Widths of the WebP variants that scripts/build-images.mjs writes beside
// each local photograph (name-640.webp … name-2560.webp).
const LOCAL_WIDTHS = [640, 1080, 1920, 2560];

// Unsplash's CDN (imgix) resizes and re-encodes on its side, serving AVIF/WebP
// at exactly the width next/image asks for — sharper and far lighter than
// optimizing locally. Our own photographs under /images are served from
// pre-generated WebP variants: the smallest one at least as wide as the
// request (see scripts/build-images.mjs). Anything else is served as-is.
export default function imageLoader({ src, width, quality }) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality || 80));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    return url.toString();
  }
  if (src.startsWith("/images/") && /\.(jpe?g|png|webp)$/i.test(src)) {
    const w = LOCAL_WIDTHS.find((s) => s >= width) ?? LOCAL_WIDTHS[LOCAL_WIDTHS.length - 1];
    return src.replace(/\.(jpe?g|png|webp)$/i, `-${w}.webp`);
  }
  return `${src}?w=${width}`;
}
