import PageHero from "@/components/pages/PageHero/PageHero";
import CaseStudyList from "@/components/pages/CaseStudyList/CaseStudyList";
import { caseStudyProjects } from "@/data/spacesProjects";
import { unsplash } from "@/lib/images";

export const metadata = {
  title: "Case Studies",
  description:
    "The thinking behind the finish: how Atmosfere Spaces solved real briefs for homes, restaurants and workplaces.",
};

// Every project, told as a story: the brief, the problem and what changed.
export default function SpacesCaseStudies() {
  return (
    <main>
      <PageHero
        size="short"
        crumbs={[
          { label: "Spaces", href: "/spaces" },
          { label: "Case Studies", href: "/spaces/case-studies" },
        ]}
        title="The thinking behind the finish."
        intro="Every project starts with a problem worth solving. Here's what our clients asked for, what stood in the way, and what changed."
        image={{
          src: unsplash("1688646953306-5ec93eab8c06"),
          alt: "A soft neutral room with an arched alcove and lounge seating",
        }}
      />
      <CaseStudyList
        items={caseStudyProjects.map((p) => ({
          href: `/spaces/case-studies/${p.slug}`,
          name: p.name,
          tag: `${p.category} · ${p.location}`,
          lead: p.lead,
          challenge: p.stages.find((s) => s.title === "Challenge")?.text,
          results: p.results,
          image: p.gallery?.[0] ?? p.image,
        }))}
      />
    </main>
  );
}
