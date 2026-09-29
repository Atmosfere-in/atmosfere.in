"use client";

// Unsplash's CDN (imgix) resizes and re-encodes on its side, serving AVIF/WebP
// at exactly the width next/image asks for — sharper and far lighter than
// optimizing locally. Local /public images are served as-is (the width
// param is ignored by the static server but keeps srcset entries distinct).
export default function imageLoader({ src, width, quality }) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality || 80));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    return url.toString();
  }
  return `${src}?w=${width}`;
}
