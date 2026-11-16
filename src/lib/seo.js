// Search-engine helpers: one place that builds a page's metadata (title,
// description, canonical address and share image) and the structured data
// (JSON-LD) that tells Google who Atmosfere is and where a page sits.
import { SITE_URL } from "@/lib/site";
import { contact } from "@/data/contact";

// Shown when a page has no photograph of its own to share.
const SHARE_IMAGE = {
  url: "/images/spaces/hero.jpg",
  width: 2560,
  height: 1440,
  alt: "A living room designed and built by Atmosfere",
};

// Search results show about 160 characters of a description; a longer one is
// cut at a word so it never ends mid-word.
export function clip(text = "", max = 158) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:—–-]+$/, "")}…`;
}

// Metadata for one page. `path` is the page's own address ("/spaces/about"):
// it becomes the canonical link, so filtered or tracked URLs (?type=…) all
// count as the one page. `image` ({ src, alt }) is the picture shown when the
// page is shared; openGraph is replaced whole by a child segment, so the
// site-wide fields are repeated here.
export function pageMeta({ title, description, path, image }) {
  const meta = {
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Atmosfere",
      locale: "en_IN",
      url: path,
      images: [image?.src ? { url: image.src, alt: image.alt } : SHARE_IMAGE],
    },
  };
  if (title) meta.title = title;
  if (description) meta.description = clip(description);
  return meta;
}

// The part of a location a project's name does not already say:
// "SKA Orion" in "SKA Orion, Greater Noida West" gives "Greater Noida West".
export function placeOf(name, location = "") {
  const said = name.toLowerCase();
  return location
    .split(", ")
    .filter((part) => part && !said.includes(part.toLowerCase()))
    .join(", ");
}

const withPlace = (text, place) => (place ? `${text}, ${place}` : text);

// Browser-tab and search-result titles for the data-driven pages. Each says
// what the project is and where, not only its name. Search results cut a
// title near 70 characters, so a long one gives up the brand suffix rather
// than its place name.
const branded = (text) => ({ absolute: `${text} · Atmosfere`.length > 70 ? text : `${text} · Atmosfere` });
export const projectTitle = (p) =>
  branded(`${p.name} — ${withPlace(`${p.category} interiors`, placeOf(p.name, p.location))}`);
export const caseStudyTitle = (p) =>
  branded(`${p.name} — ${withPlace("Interior Design Case Study", placeOf(p.name, p.location))}`);
export const hospitalityCaseTitle = (c) =>
  branded(`${c.name} — ${withPlace(`${c.category} planning`, placeOf(c.name, c.location))}`);

const absolute = (href) => `${SITE_URL}${href === "/" ? "" : href}`;

// Who Atmosfere is, for Google's knowledge of the business: name, contact,
// city and the cities its projects are in. Rendered once, in the root layout.
export const businessLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Atmosfere",
      url: SITE_URL,
      description:
        "Turnkey interior design and execution for homes, offices and retail, and planning and advisory for hotels, resorts and banquets.",
      image: absolute(SHARE_IMAGE.url),
      logo: absolute("/icon.svg"),
      telephone: contact.phoneHref.replace("tel:", ""),
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      areaServed: ["Noida", "Greater Noida", "Ghaziabad", "Delhi", "Delhi NCR"],
      sameAs: [contact.instagram.href],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Atmosfere",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

// The breadcrumb trail as structured data, so search results can show
// "atmosfere.in › Spaces › Projects" instead of a bare address.
// crumbs: [{ label, href }] · current: the page's own name, when the crumbs
// stop at its parent.
export function breadcrumbLd(crumbs = [], current) {
  const trail = [{ label: "Home", href: "/" }, ...crumbs, ...(current ? [{ label: current }] : [])];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: absolute(crumb.href) } : {}),
    })),
  };
}
