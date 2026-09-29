import Hero from "@/components/spaces/Hero/Hero";
import About from "@/components/spaces/About/About";
import FeaturedProjects from "@/components/spaces/FeaturedProjects/FeaturedProjects";
import PlanningTypes from "@/components/spaces/PlanningTypes/PlanningTypes";
import BeforeAfter from "@/components/spaces/BeforeAfter/BeforeAfter";
import Process from "@/components/spaces/Process/Process";
import FounderNote from "@/components/spaces/FounderNote/FounderNote";
import Split from "@/components/spaces/Split/Split";
import CaseStudies from "@/components/spaces/CaseStudies/CaseStudies";
import TrustSignals from "@/components/spaces/TrustSignals/TrustSignals";
import ClosingCta from "@/components/spaces/ClosingCta/ClosingCta";

// atmosfere.in/spaces — portfolio-led, built to generate turnkey project leads.
export default function SpacesHome() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProjects />
      <PlanningTypes />
      <BeforeAfter />
      <Process />
      <FounderNote />
      <Split />
      <CaseStudies />
      <TrustSignals />
      <ClosingCta />
    </main>
  );
}
