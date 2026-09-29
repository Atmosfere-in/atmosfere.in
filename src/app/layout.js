import { Instrument_Serif, Jost } from "next/font/google";
import "./globals.css";

// Display: a tight, high-contrast editorial serif for headings, numerals
// and quotes.
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

// Body/UI: a geometric sans that echoes the logo's arched mark.
const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Atmosfere — Interior Design, Hospitality & Living",
  description:
    "Atmosfere is one house with three rooms: turnkey interior design and execution, hospitality planning, and curated furniture and decor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
