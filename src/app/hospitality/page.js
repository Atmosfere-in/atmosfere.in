import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Services from "@/components/sections/Services/Services";
import ProjectsCarousel from "@/components/sections/ProjectsCarousel/ProjectsCarousel";
import PlanningTypes from "@/components/sections/PlanningTypes/PlanningTypes";
import Process from "@/components/sections/Process/Process";
import FounderNote from "@/components/sections/FounderNote/FounderNote";
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
      <Services {...hospitality.services} />
      <ProjectsCarousel {...hospitality.projects} />
      <PlanningTypes {...hospitality.planningTypes} />
      <div id="process">
        <Process {...hospitality.process} />
      </div>
      <FounderNote {...hospitality.founder} />
      <CaseStudies {...hospitality.caseStudies} />
      <TrustSignals {...hospitality.trust} />
      <ClosingCta {...hospitality.closing} />
    </main>
  );
}
