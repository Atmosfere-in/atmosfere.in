import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import { hospitalityNav, footer } from "@/data/hospitality";

export const metadata = {
  title: {
    default: "Atmosfere Hospitality — Hotel, Villa, Restaurant & Banquet Planning",
    template: "%s · Atmosfere Hospitality",
  },
  description:
    "Hospitality planning and advisory: what should this property become? Hotels, resorts, villas, Airbnbs, restaurants, cafés and banquets.",
};

export default function HospitalityLayout({ children }) {
  return (
    <>
      <SiteHeader {...hospitalityNav} overlay />
      {children}
      <SiteFooter {...footer} />
    </>
  );
}
