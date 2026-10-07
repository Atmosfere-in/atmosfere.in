import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import ProjectsCarousel from "@/components/sections/ProjectsCarousel/ProjectsCarousel";
import PlanningTypes from "@/components/sections/PlanningTypes/PlanningTypes";
import ProcessArches from "@/components/sections/ProcessArches/ProcessArches";
import Founders from "@/components/sections/Founders/Founders";
import CaseStudies from "@/components/sections/CaseStudies/CaseStudies";
import TrustSignals from "@/components/sections/TrustSignals/TrustSignals";
import ClosingCta from "@/components/sections/ClosingCta/ClosingCta";
import * as hospitality from "@/data/hospitality";

// atmosfere.in/hospitality — authority-led, built to generate consultation enquiries.
export default function HospitalityHome() {
  return (
    <main>
      <Hero {...hospitality.hero} />
      <About {...hospitality.about} />
      <ProjectsCarousel {...hospitality.projects} />
      <PlanningTypes {...hospitality.planningTypes} />
      <div id="process">
        <ProcessArches {...hospitality.process} />
      </div>
      <Founders {...hospitality.founders} />
      <CaseStudies {...hospitality.caseStudies} />
      <TrustSignals {...hospitality.trust} />
      <ClosingCta {...hospitality.closing} />
    </main>
  );
}
