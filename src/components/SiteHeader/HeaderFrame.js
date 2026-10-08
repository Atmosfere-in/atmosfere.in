"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Long-read pages where the header steps out of the way while reading:
// it shows over the hero photograph and slides away once past it.
const AUTO_HIDE = [/\/case-studies(\/|$)/, /^\/spaces\/projects\/[^/]+$/];

// Wraps the header so it can sit transparently over full-bleed photography
// (`overlay`) and turn solid once the page is scrolled.
export default function HeaderFrame({ overlay, className, children }) {
  const pathname = usePathname();
  const autoHide = AUTO_HIDE.some((re) => re.test(pathname));
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!overlay && !autoHide) return;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (autoHide) {
        // Visible only while the page's hero photograph is in view; it
        // returns as the hero scrolls back in, not on any upward scroll.
        const hero = document.querySelector("main > section");
        const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 120;
        setHidden(y > heroBottom - 80);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      setHidden(false);
    };
  }, [overlay, autoHide]);

  return (
    <header
      className={className}
      data-overlay={overlay ? "true" : undefined}
      data-scrolled={overlay && scrolled ? "true" : undefined}
      data-hidden={hidden ? "true" : undefined}
    >
      {children}
    </header>
  );
}
