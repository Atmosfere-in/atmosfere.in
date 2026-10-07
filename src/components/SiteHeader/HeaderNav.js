"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./HeaderNav.module.css";

function useIsActive(section) {
  const pathname = usePathname();
  return (href) =>
    href === section?.href ? pathname === href : pathname.startsWith(href);
}

// Desktop links, centred in the header bar.
export function HeaderLinks({ nav, section }) {
  const isActive = useIsActive(section);
  return (
    <nav className={styles.desktop} aria-label={`${section?.label} navigation`}>
      <ul className={styles.links}>
        {nav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={styles.link}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// The highlighted CTA plus the burger menu used on tablets and phones.
export default function HeaderNav({ nav, cta, section }) {
  const isActive = useIsActive(section);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {cta && (
        <Link href={cta.href} className={`${styles.cta} ${styles.desktopCta}`}>
          <span>{cta.label}</span>
          <Arrow size={14} className={styles.ctaArrow} />
        </Link>
      )}

      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`${styles.burger} ${open ? styles.burgerOpen : ""}`} />
      </button>

      <div
        id="mobile-menu"
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        hidden={!open}
      >
        <ul className={styles.panelLinks}>
          {nav.map((item, i) => (
            <li key={item.href} style={{ "--i": i }}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.panelFooter}>
          {cta && (
            <Link
              href={cta.href}
              className={styles.cta}
              onClick={() => setOpen(false)}
            >
              <span>{cta.label}</span>
              <Arrow size={14} className={styles.ctaArrow} />
            </Link>
          )}
          <Link href="/" className={styles.back} onClick={() => setOpen(false)}>
            <Arrow direction="left" size={14} /> All of Atmosfere
          </Link>
          <span className={styles.soon}>Shop Atmosfere Living · Coming soon</span>
        </div>
      </div>
    </>
  );
}
