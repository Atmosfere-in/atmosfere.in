import PageHero from "@/components/pages/PageHero/PageHero";
import WorkIndex from "@/components/pages/WorkIndex/WorkIndex";
import ClosingCta from "@/components/sections/ClosingCta/ClosingCta";
import { spacesProjects, spacesProjectFilters } from "@/data/spacesProjects";
import { closing } from "@/data/spaces";
import { unsplash } from "@/lib/images";

export const metadata = {
  title: "Projects",
  description: "Homes, apartments, restaurants and workplaces designed and built end to end by Atmosfere Spaces.",
};

// /spaces/projects?type=residential|commercial
export default async function SpacesProjects({ searchParams }) {
  const { type } = await searchParams;
  const active = spacesProjectFilters.some((f) => f.value === type) ? type : null;
  const items = spacesProjects.filter((p) => !active || p.type === active);

  return (
    <main>
      <PageHero
        size="short"
        crumbs={[
          { label: "Spaces", href: "/spaces" },
          { label: "Projects", href: "/spaces/projects" },
        ]}
        title="Selected work, designed and built by one team."
        intro="Every project here was drawn, built and styled by Atmosfere Spaces — from the first sketch to the final walkthrough."
        image={{
          src: unsplash("1593987314040-8e0ac84ae724"),
          alt: "A finished luxury living room with a sculptural chandelier",
          position: "50% 60%",
        }}
      />
      <WorkIndex
        filters={spacesProjectFilters.map((f) => ({
          label: f.label,
          href: f.value ? `/spaces/projects?type=${f.value}` : "/spaces/projects",
          active: f.value === active,
          count: spacesProjects.filter((p) => !f.value || p.type === f.value).length,
        }))}
        items={items.map((p) => ({
          href: `/spaces/projects/${p.slug}`,
          name: p.name,
          details: `${p.category} · ${p.location}`,
          side: p.size,
          image: p.image,
        }))}
      />
      <ClosingCta {...closing} />
    </main>
  );
}
