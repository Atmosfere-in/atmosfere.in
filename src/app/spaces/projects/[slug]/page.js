import { notFound } from "next/navigation";
import PageHero from "@/components/pages/PageHero/PageHero";
import StoryDetail from "@/components/pages/StoryDetail/StoryDetail";
import ClosingCta from "@/components/sections/ClosingCta/ClosingCta";
import { spacesProjects, getSpacesProject } from "@/data/spacesProjects";
import { closing } from "@/data/spaces";

export function generateStaticParams() {
  return spacesProjects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const project = getSpacesProject((await params).slug);
  return project ? { title: project.name, description: project.lead } : {};
}

export default async function SpacesProject({ params }) {
  const { slug } = await params;
  const project = getSpacesProject(slug);
  if (!project) notFound();

  const index = spacesProjects.indexOf(project);
  const next = spacesProjects[(index + 1) % spacesProjects.length];

  return (
    <main>
      <PageHero
        crumbs={[
          { label: "Spaces", href: "/spaces" },
          { label: "Projects", href: "/spaces/projects" },
        ]}
        eyebrow={`${project.category} · ${project.location}`}
        title={project.name}
        image={project.image}
        meta={[
          { label: "Type", value: project.category },
          { label: "Location", value: project.location },
          { label: "Area", value: project.size },
          { label: "Timeline", value: project.timeline },
        ]}
      />
      <StoryDetail
        story={project}
        next={{
          href: `/spaces/projects/${next.slug}`,
          name: next.name,
          details: `${next.category} · ${next.location}`,
          image: next.image,
        }}
      />
      <ClosingCta {...closing} />
    </main>
  );
}
