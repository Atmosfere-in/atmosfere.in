import PageHero from "@/components/pages/PageHero/PageHero";
import Principles from "@/components/pages/Principles/Principles";
import About from "@/components/sections/About/About";
import Founders from "@/components/sections/Founders/Founders";
import TrustSignals from "@/components/sections/TrustSignals/TrustSignals";
import ClosingCta from "@/components/sections/ClosingCta/ClosingCta";
import { aboutPage } from "@/data/spacesPages";
import { founders, trust, closing } from "@/data/spaces";

export const metadata = {
  title: "About Us",
  description:
    "Atmosfere Spaces is a turnkey interior design studio: the people who design your space are the people who build it.",
};

export default function SpacesAbout() {
  return (
    <main>
      <PageHero size="short" {...aboutPage.hero} />
      <About {...aboutPage.story} />
      <Principles {...aboutPage.principles} />
      <Founders {...founders} />
      <TrustSignals {...trust} />
      <ClosingCta {...closing} />
    </main>
  );
}
