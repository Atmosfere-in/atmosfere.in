import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import ConsultModal from "@/components/ConsultModal/ConsultModal";
import { unsplash } from "@/lib/images";
import { hospitalityNav, footer } from "@/data/hospitality";

export const metadata = {
  title: {
    default: "Atmosfere Hospitality — Hotel, Resort & Banquet Planning",
    template: "%s · Atmosfere Hospitality",
  },
  description:
    "Hospitality planning and advisory: what should this property become? Hotels, resorts and banquets.",
};

export default function HospitalityLayout({ children }) {
  return (
    <>
      <SiteHeader {...hospitalityNav} overlay />
      {children}
      <SiteFooter {...footer} />
      <ConsultModal
        triggers={["/hospitality/book-a-consultation"]}
        vertical="Atmosfere Hospitality"
        image={unsplash("1520250497591-112f2f40a3f4")}
      />
    </>
  );
}
