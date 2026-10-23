import { notFound } from "next/navigation";
import ProjectGallery from "@/components/pages/ProjectGallery/ProjectGallery";
import { spacesProjects, getSpacesProject } from "@/data/spacesProjects";

export function generateStaticParams() {
  return spacesProjects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const project = getSpacesProject((await params).slug);
  return project ? { title: project.name, description: project.lead } : {};
}

// Every photograph a project has, in order, without repeats: the hero, the
// chapters, the gallery, the one beside the numbers and the concept image.
// Frames lifted from a clip (marked `still`) are left out; the clip itself shows.
function collectPhotos(project) {
  const seen = new Set();
  const out = [];
  const add = (img) => {
    if (!img?.src || img.still || seen.has(img.src)) return; // `still`: a frame taken from a clip shown below
    seen.add(img.src);
    out.push({ src: img.src, alt: img.alt ?? "" });
  };
  add(project.image);
  (project.chapters ?? []).forEach((c) => add(c.image));
  (project.mosaic ?? []).forEach(add);
  add(project.voiceImage);
  add(project.concept?.image);
  (project.gallery ?? []).forEach(add);
  return out;
}

// /spaces/projects/<slug>: the project's photographs, nothing else.
export default async function SpacesProject({ params }) {
  const { slug } = await params;
  const project = getSpacesProject(slug);
  if (!project) notFound();

  const index = spacesProjects.indexOf(project);
  const prev = spacesProjects[(index - 1 + spacesProjects.length) % spacesProjects.length];
  const next = spacesProjects[(index + 1) % spacesProjects.length];
  const link = (p) => ({ href: `/spaces/projects/${p.slug}`, name: p.name, details: `${p.category} · ${p.location}` });

  return (
    <main>
      <ProjectGallery
        name={project.name}
        lead={project.lead}
        meta={[
          { label: "Type", value: project.category },
          { label: "Location", value: project.location },
          { label: "Area", value: project.size },
          { label: "Timeline", value: project.timeline },
        ]}
        photos={collectPhotos(project)}
        videos={project.videos ?? []}
        caseStudyHref={`/spaces/case-studies/${project.slug}`}
        prev={link(prev)}
        next={link(next)}
      />
    </main>
  );
}
