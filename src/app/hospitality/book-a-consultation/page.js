import PageHero from "@/components/pages/PageHero/PageHero";
import ConsultPage from "@/components/pages/ConsultPage/ConsultPage";
import { unsplash } from "@/lib/images";

export const metadata = {
  title: "Book a Consultation",
  description:
    "Book a 30-minute consultation with Atmosfere Hospitality about your hotel, resort, villa or banquet project.",
};

export default function HospitalityBook() {
  return (
    <main>
      <PageHero
        size="short"
        crumbs={[
          { label: "Hospitality", href: "/hospitality" },
          { label: "Book a Consultation", href: "/hospitality/book-a-consultation" },
        ]}
        title="What should your property become?"
        intro="A 30-minute conversation about your site, concept and budget — and the questions worth answering before anything is designed."
        image={{
          src: unsplash("1520250497591-112f2f40a3f4"),
          alt: "A resort pool lined with palms and thatched pavilions",
        }}
      />
      <ConsultPage
        vertical="Atmosfere Hospitality"
        title="A clear first step, not a sales pitch."
        intro="Bring a site, a property or just an idea. You'll leave the call knowing the questions that matter most for your project."
        steps={[
          { title: "A 30-minute call", text: "We talk through the site, the market you're considering and what success looks like." },
          { title: "A short written note", text: "The key questions and risks we'd look at first, sent after the call." },
          { title: "A proposed scope", text: "If it's a fit, a scope and fee for feasibility, planning or repositioning." },
        ]}
      />
    </main>
  );
}
