import PageHero from "@/components/pages/PageHero/PageHero";
import Principles from "@/components/pages/Principles/Principles";
import About from "@/components/sections/About/About";
import Founders from "@/components/sections/Founders/Founders";
import ClosingCta from "@/components/sections/ClosingCta/ClosingCta";
import { aboutPage } from "@/data/spacesPages";
import { founders, closing } from "@/data/spaces";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Us — Turnkey Interior Design Studio, Noida",
  description:
    "Atmosfere Spaces is a turnkey interior design studio in Noida: the people who design your space are the people who build it.",
  path: "/spaces/about",
});

export default function SpacesAbout() {
  return (
    <main>
      <PageHero size="short" {...aboutPage.hero} />
      <About {...aboutPage.story} />
      <Principles {...aboutPage.principles} />
      <Founders {...founders} />
      <ClosingCta {...closing} />
    </main>
  );
}
