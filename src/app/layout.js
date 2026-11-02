import { Marcellus, Jost } from "next/font/google";
import RevealObserver from "@/components/RevealObserver/RevealObserver";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Display: a simple, flared serif with an engraved, premium feel — the same
// face atmosfere.in uses today, so the brand stays consistent.
const serif = Marcellus({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

// Body/UI: a geometric sans that echoes the logo's arched mark.
const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Atmosfere — Interior Design, Hospitality & Living",
    template: "%s · Atmosfere",
  },
  description:
    "Atmosfere is one house with three rooms: turnkey interior design and execution, hospitality planning, and curated furniture and decor.",
  openGraph: {
    type: "website",
    siteName: "Atmosfere",
    locale: "en_IN",
    images: [{ url: "/images/spaces/hero.jpg", width: 2560, height: 1440, alt: "A living room designed and built by Atmosfere" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
