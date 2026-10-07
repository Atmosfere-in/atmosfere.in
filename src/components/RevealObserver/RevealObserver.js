"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Quiet scroll animations: anything marked `.reveal` (fade up) or
// `.reveal-image` (photo unveils from the bottom) animates in once, the
// first time it scrolls into view. Without JavaScript, or with reduced
// motion, everything simply shows.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    document
      .querySelectorAll(".reveal:not(.is-revealed), .reveal-image:not(.is-revealed)")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
