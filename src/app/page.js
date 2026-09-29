import SiteHeader from "@/components/SiteHeader/SiteHeader";
import HubBanners from "@/components/HubBanners/HubBanners";
import { verticals } from "@/data/verticals";

// atmosfere.in — a single-page hub whose only job is routing the visitor
// to the right vertical in one click.
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <h1 className="visually-hidden">
          Atmosfere — interior design, hospitality and living
        </h1>
        <HubBanners verticals={verticals} />
      </main>
    </>
  );
}
