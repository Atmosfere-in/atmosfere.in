"use client";

import Link from "next/link";

// The logo link to the atmosfere.in hub. If the visitor has scrolled down,
// the first click brings them back to the top of the current page; once at
// the top, a click goes to the hub.
export default function BrandLink({ className, children }) {
  const onClick = (e) => {
    if (window.scrollY < 8) return; // already at the top: follow the link

    e.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <Link href="/" className={className} aria-label="Atmosfere home" onClick={onClick}>
      {children}
    </Link>
  );
}
