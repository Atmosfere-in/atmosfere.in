import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import ProjectsCarousel from "@/components/sections/ProjectsCarousel/ProjectsCarousel";
import PlanningTypes from "@/components/sections/PlanningTypes/PlanningTypes";
import BeforeAfter from "@/components/sections/BeforeAfter/BeforeAfter";
import Process from "@/components/sections/Process/Process";
import Founders from "@/components/sections/Founders/Founders";
import Split from "@/components/sections/Split/Split";
import CaseStudies from "@/components/sections/CaseStudies/CaseStudies";
import TrustSignals from "@/components/sections/TrustSignals/TrustSignals";
import ClosingCta from "@/components/sections/ClosingCta/ClosingCta";
import * as spaces from "@/data/spaces";

// atmosfere.in/spaces — portfolio-led, built to generate turnkey project leads.
export default function SpacesHome() {
  return (
    <main>
      <Hero {...spaces.hero} />
      <About {...spaces.about} />
      <ProjectsCarousel {...spaces.projects} />
      <PlanningTypes {...spaces.planningTypes} />
      <BeforeAfter {...spaces.beforeAfter} />
      <Process {...spaces.process} />
      <Founders {...spaces.founders} />
      <Split label="Residential and commercial work" panels={spaces.split} />
      <CaseStudies {...spaces.caseStudies} />
      <TrustSignals {...spaces.trust} />
      <ClosingCta {...spaces.closing} />
    </main>
  );
}
