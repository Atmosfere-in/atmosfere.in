import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

// Display: a high-contrast serif that echoes the logo's wordmark.
const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
