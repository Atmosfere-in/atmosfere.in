import SiteHeader from "@/components/SiteHeader/SiteHeader";
import { spacesNav } from "@/data/spaces";

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
      <SiteHeader {...spacesNav} />
      {children}
    </>
  );
}
