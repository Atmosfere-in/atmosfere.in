import PageHero from "@/components/pages/PageHero/PageHero";
import WorkIndex from "@/components/pages/WorkIndex/WorkIndex";
import ClosingCta from "@/components/sections/ClosingCta/ClosingCta";
import { hospitalityCases, hospitalityCaseFilters } from "@/data/hospitalityCases";
import { closing } from "@/data/hospitality";

export const metadata = {
  title: "Projects",
  description: "Hotels, resorts and convention centres planned by Atmosfere Hospitality.",
};

// /hospitality/projects?type=hotel-resort|banquet — the same stories as the
// case studies, shown as a project grid (as /spaces/projects does).
export default async function HospitalityProjects({ searchParams }) {
  const { type } = await searchParams;
  const active = hospitalityCaseFilters.some((f) => f.value === type) ? type : null;
  const items = hospitalityCases.filter((c) => !active || c.planningType === active);

  return (
    <main>
      <PageHero
        size="short"
        crumbs={[
          { label: "Hospitality", href: "/hospitality" },
          { label: "Projects", href: "/hospitality/projects" },
        ]}
        title="Properties we have planned."
        intro="Every project here began with one question — what should this property become? — and was planned to perform from the first study to the opening."
        image={{
          src: "/images/hospitality/punarnava/hero.jpg",
          alt: "The lobby of a wellness resort, with a chandelier over a marble floor and a sculpture at its centre",
          position: "50% 55%",
        }}
      />
      <WorkIndex
        filters={hospitalityCaseFilters.map((f) => ({
          label: f.label,
          href: f.value ? `/hospitality/projects?type=${f.value}` : "/hospitality/projects",
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
