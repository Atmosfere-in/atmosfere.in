/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    // Placeholder photography is served straight from Unsplash's CDN, which
    // resizes and compresses per request (see src/lib/imageLoader.js).
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.js",
    // 90 for full-bleed photography, 80 for everything else.
    qualities: [80, 90],
  },
};

export default nextConfig;
