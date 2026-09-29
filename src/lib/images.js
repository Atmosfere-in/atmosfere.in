// Placeholder photography from Unsplash (free to use). The custom image
// loader sets width/quality per request, so only the photo id matters here.
export function unsplash(id) {
  return `https://images.unsplash.com/photo-${id}`;
}
