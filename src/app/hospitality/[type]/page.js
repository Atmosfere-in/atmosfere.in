import { notFound } from "next/navigation";
import PageHero from "@/components/pages/PageHero/PageHero";
import Principles from "@/components/pages/Principles/Principles";
import About from "@/components/sections/About/About";
import CaseStudies from "@/components/sections/CaseStudies/CaseStudies";
import HospitalityTeaser from "@/components/sections/HospitalityTeaser/HospitalityTeaser";
import ClosingCta from "@/components/sections/ClosingCta/ClosingCta";
import { planningTypes } from "@/data/planningTypes";
import { planningTypeDetails } from "@/data/planningTypeDetails";
import { hospitalityCases } from "@/data/hospitalityCases";
import { closing } from "@/data/hospitality";

// /hospitality/hotel-resort, /villa-cottage, /banquet, /airbnb
export function generateStaticParams() {
  return planningTypes.map((t) => ({ type: t.slug }));
}

export const dynamicParams = false;

function find(slug) {
  const type = planningTypes.find((t) => t.slug === slug);
  return type && { ...type, ...planningTypeDetails[slug] };
}

export async function generateMetadata({ params }) {
  const type = find((await params).type);
  return type ? { title: `${type.name} Planning`, description: type.intro } : {};
}

export default async function PlanningTypePage({ params }) {
  const type = find((await params).type);
  if (!type) notFound();

  // Airbnb engagements are run like villa stays, so show those stories.
  const related = hospitalityCases.filter(
    (c) => c.planningType === (type.slug === "airbnb" ? "villa-cottage" : type.slug),
  );
  const others = planningTypes.filter((t) => t.slug !== type.slug);

  return (
    <main>
      <PageHero
        crumbs={[
          { label: "Hospitality", href: "/hospitality" },
          { label: type.name, href: `/hospitality/${type.slug}` },
        ]}
        eyebrow={`Planning · ${type.name}`}
        title={type.question}
        intro={type.intro}
        image={type.hero}
      />
      <About {...type.story} link={{ label: "Book a consultation", href: "/hospitality/book-a-consultation" }} />
      <Principles eyebrow="What we plan" title={`Six decisions behind every ${type.noun}.`} items={type.plan} />
      {related.length > 0 && (
        <CaseStudies
          eyebrow="Case Studies"
          title="Where we've answered this question."
          items={related.map((c) => ({
            href: `/hospitality/case-studies/${c.slug}`,
            tag: `${c.category} · ${c.location}`,
            title: c.name,
            summary: c.lead,
            image: c.image,
          }))}
        />
      )}
      <HospitalityTeaser
        eyebrow="Other planning types"
        title="Planning something different?"
        intro="Every kind of property succeeds for its own reasons. Explore how we plan the others."
        image={others[0].image}
        types={others.map((t) => ({ ...t, href: `/hospitality/${t.slug}` }))}
        action={{ label: "All case studies", href: "/hospitality/case-studies" }}
      />
      <ClosingCta {...closing} />
    </main>
  );
}
