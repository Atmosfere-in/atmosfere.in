import { notFound } from "next/navigation";
import EditorialStory from "@/components/pages/EditorialStory/EditorialStory";
import { hospitalityCases, getHospitalityCase } from "@/data/hospitalityCases";

export function generateStaticParams() {
  return hospitalityCases.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const study = getHospitalityCase((await params).slug);
  return study ? { title: study.name, description: study.lead } : {};
}

// Every hospitality case study uses the magazine-style editorial layout.
export default async function HospitalityCaseStudy({ params }) {
  const { slug } = await params;
  const study = getHospitalityCase(slug);
  if (!study) notFound();

  const index = hospitalityCases.indexOf(study);
  const next = hospitalityCases[(index + 1) % hospitalityCases.length];

  return (
    <main>
      <EditorialStory
        story={study}
        eyebrow={`${study.category} · ${study.location}`}
        crumbs={[
          { label: "Hospitality", href: "/hospitality" },
          { label: "Case Studies", href: "/hospitality/case-studies" },
        ]}
        meta={[
          { label: "Property", value: study.category },
          { label: "Location", value: study.location },
          { label: "Scale", value: study.size },
          { label: "Engagement", value: study.engagement },
        ]}
        next={{
          href: `/hospitality/case-studies/${next.slug}`,
          name: next.name,
          details: `${next.category} · ${next.location}`,
          image: next.image,
        }}
        nextLabel="Next case study"
      />
    </main>
  );
}
