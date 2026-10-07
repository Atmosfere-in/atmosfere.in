import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import ConsultModal from "@/components/ConsultModal/ConsultModal";
import { unsplash } from "@/lib/images";
import { spacesNav, footer } from "@/data/spaces";

export const metadata = {
  title: {
    default: "Atmosfere Spaces — Turnkey Interior Design & Execution",
    template: "%s · Atmosfere Spaces",
  },
  description:
    "Turnkey interior design and execution for homes, villas, offices and retail — one studio from concept to handover.",
};

export default function SpacesLayout({ children }) {
  return (
    <>
      <SiteHeader {...spacesNav} overlay />
      {children}
      <SiteFooter {...footer} />
      <ConsultModal
        triggers={["/spaces/get-a-quote"]}
        vertical="Atmosfere Spaces"
        image={unsplash("1760072513367-55182245e76c")}
        showType
      />
    </>
  );
}
