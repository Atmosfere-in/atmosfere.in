import PageHero from "@/components/pages/PageHero/PageHero";
import ConsultPage from "@/components/pages/ConsultPage/ConsultPage";
import { unsplash } from "@/lib/images";

export const metadata = {
  title: "Get a Quote",
  description: "Tell us about your home or workplace. Atmosfere Spaces will call within 24 hours to talk scope, budget and timeline.",
};

export default function SpacesQuote() {
  return (
    <main>
      <PageHero
        size="short"
        crumbs={[
          { label: "Spaces", href: "/spaces" },
          { label: "Get a Quote", href: "/spaces/get-a-quote" },
        ]}
        title="Let's talk about your space."
        intro="Share a few details, or pick a time that suits you. We'll call within 24 hours to talk scope, budget and timeline."
        image={{
          src: unsplash("1760072513367-55182245e76c"),
          alt: "A warm, finished interior in soft evening light",
          position: "50% 55%",
        }}
      />
      <ConsultPage
        vertical="Atmosfere Spaces"
        showType
        title="From first call to a fixed quote."
        intro="No obligation and no cost for the first conversation. Most clients have a fixed, itemised quote within a few weeks."
        steps={[
          { title: "We call you", text: "Within 24 hours, to understand your space, needs and budget." },
          { title: "We visit and measure", text: "A site visit and a written brief, so the design starts from facts." },
          { title: "You receive a fixed quote", text: "Layouts, 3D views and an itemised price you approve before work begins." },
        ]}
      />
    </main>
  );
}
