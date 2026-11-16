import PageHero from "@/components/pages/PageHero/PageHero";
import Principles from "@/components/pages/Principles/Principles";
import About from "@/components/sections/About/About";
import Founders from "@/components/sections/Founders/Founders";
import ClosingCta from "@/components/sections/ClosingCta/ClosingCta";
import { aboutPage } from "@/data/hospitalityPages";
import { founders, closing } from "@/data/hospitality";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Us — Hospitality Planning & Advisory",
  description:
    "Atmosfere Hospitality is a planning and advisory practice for hotels, resorts, banquets and short stays: what a property should become, answered before it is designed.",
  path: "/hospitality/about",
  image: { src: "/images/hospitality/punarnava/hero.jpg", alt: "The lobby of the new building at Punarnava" },
});

export default function HospitalityAbout() {
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
