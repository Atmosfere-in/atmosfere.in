import PageHero from "@/components/pages/PageHero/PageHero";
import ProcessDetail from "@/components/pages/ProcessDetail/ProcessDetail";
import Faq from "@/components/pages/Faq/Faq";
import ClosingCta from "@/components/sections/ClosingCta/ClosingCta";
import SiteDiary from "@/components/sections/SiteDiary/SiteDiary";
import { processPage } from "@/data/spacesPages";
import { closing } from "@/data/spaces";
import { siteDiary } from "@/data/siteDiary";

export const metadata = {
  title: "Design Process",
  description:
    "How Atmosfere Spaces takes a home or workplace from first conversation to handover: Consult, Design, Execute, Handover.",
};

export default function SpacesProcess() {
  return (
    <main>
      <PageHero size="short" {...processPage.hero} />
      <ProcessDetail {...processPage.detail} />
      <SiteDiary {...siteDiary} />
      <Faq {...processPage.faq} />
      <ClosingCta {...closing} />
    </main>
  );
}
