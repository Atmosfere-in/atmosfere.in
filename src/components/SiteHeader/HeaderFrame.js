"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Long-read pages where the header steps out of the way while reading:
// it slides up when scrolling down and returns when scrolling up.
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
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (autoHide) {
        // Ignore tiny movements; always show near the top of the page.
        if (y < 120) setHidden(false);
        else if (Math.abs(y - lastY) > 6) setHidden(y > lastY);
      }
      lastY = y;
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
