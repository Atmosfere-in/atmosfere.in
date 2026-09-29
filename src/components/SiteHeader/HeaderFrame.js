"use client";

import { useEffect, useState } from "react";

// Wraps the header so it can sit transparently over full-bleed photography
// (`overlay`) and turn solid once the page is scrolled.
export default function HeaderFrame({ overlay, className, children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  return (
    <header
      className={className}
      data-overlay={overlay ? "true" : undefined}
      data-scrolled={overlay && scrolled ? "true" : undefined}
    >
      {children}
    </header>
  );
}
