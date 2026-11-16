import { notFound } from "next/navigation";
import EditorialStory from "@/components/pages/EditorialStory/EditorialStory";
import { caseStudyProjects, getSpacesProject } from "@/data/spacesProjects";
import { caseStudyTitle, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudyProjects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const project = getSpacesProject((await params).slug);
  if (!project) return {};
  return pageMeta({
    title: caseStudyTitle(project),
    description: `Case study: ${project.lead}`,
    path: `/spaces/case-studies/${project.slug}`,
    image: project.image,
  });
}

// The full story of a project, in the magazine-style editorial layout.
// (The photographs alone are at /spaces/projects/<slug>.)
export default async function SpacesCaseStudy({ params }) {
  const { slug } = await params;
  const project = getSpacesProject(slug);
  if (!project?.caseStudy) notFound();

  const index = caseStudyProjects.indexOf(project);
  const next = caseStudyProjects[(index + 1) % caseStudyProjects.length];

  return (
    <main>
      <EditorialStory
        story={project}
        eyebrow={`${project.category} · ${project.location}`}
        crumbs={[
          { label: "Spaces", href: "/spaces" },
          { label: "Case Studies", href: "/spaces/case-studies" },
        ]}
        meta={[
          { label: "Type", value: project.category },
          { label: "Location", value: project.location },
          { label: "Area", value: project.size },
          { label: "Timeline", value: project.timeline },
        ]}
        next={{
          href: `/spaces/case-studies/${next.slug}`,
          name: next.name,
          details: `${next.category} · ${next.location}`,
          image: next.image,
        }}
        nextLabel="Next case study"
      />
    </main>
  );
}
