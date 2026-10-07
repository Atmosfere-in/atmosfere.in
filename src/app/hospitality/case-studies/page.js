import PageHero from "@/components/pages/PageHero/PageHero";
import WorkIndex from "@/components/pages/WorkIndex/WorkIndex";
import ClosingCta from "@/components/sections/ClosingCta/ClosingCta";
import { hospitalityCases, hospitalityCaseFilters } from "@/data/hospitalityCases";
import { closing } from "@/data/hospitality";
import { unsplash } from "@/lib/images";

export const metadata = {
  title: "Case Studies",
  description:
    "How the right question changed the property: hotels, resorts, villas and banquets planned by Atmosfere Hospitality.",
};

// /hospitality/case-studies?type=hotel-resort|villa-cottage|banquet
export default async function HospitalityCaseStudies({ searchParams }) {
  const { type } = await searchParams;
  const active = hospitalityCaseFilters.some((f) => f.value === type) ? type : null;
  const items = hospitalityCases.filter((c) => !active || c.planningType === active);

  return (
    <main>
      <PageHero
        size="short"
        crumbs={[
          { label: "Hospitality", href: "/hospitality" },
          { label: "Case Studies", href: "/hospitality/case-studies" },
        ]}
        title="How the right question changed the property."
        intro="Every engagement starts with what a property should become. These are the answers — and what they earned."
        image={{
          src: unsplash("1540541338287-41700207dee6"),
          alt: "An aerial view of a resort with a lagoon pool and the sea beyond",
        }}
      />
      <WorkIndex
        filters={hospitalityCaseFilters.map((f) => ({
          label: f.label,
          href: f.value ? `/hospitality/case-studies?type=${f.value}` : "/hospitality/case-studies",
          active: f.value === active,
          count: hospitalityCases.filter((c) => !f.value || c.planningType === f.value).length,
        }))}
        items={items.map((c) => ({
          href: `/hospitality/case-studies/${c.slug}`,
          name: c.name,
          details: `${c.category} · ${c.location}`,
          side: c.size,
          image: c.image,
        }))}
      />
      <ClosingCta {...closing} />
    </main>
  );
}
