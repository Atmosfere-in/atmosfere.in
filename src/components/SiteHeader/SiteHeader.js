import Link from "next/link";
import Logo from "@/components/Logo/Logo";
import HeaderFrame from "./HeaderFrame";
import HeaderNav from "./HeaderNav";
import styles from "./SiteHeader.module.css";

// Shared shell for the hub and every vertical. The hub renders it bare;
// verticals pass their section name, nav links and highlighted CTA.
// `overlay` floats it transparently over a full-bleed hero until scrolled.
export default function SiteHeader({ section, nav, cta, overlay = false }) {
  return (
    <HeaderFrame
      overlay={overlay}
      className={`${styles.header} ${overlay ? styles.overlay : styles.sticky}`}
    >
      <div className={styles.inner}>
        <div className={styles.brandGroup}>
          <Link href="/" className={styles.brand} aria-label="Atmosfere home">
            <Logo tone="inherit" />
          </Link>
          {section && (
            <Link href={section.href} className={styles.section}>
              {section.label}
            </Link>
          )}
        </div>

        <div className={styles.actions}>
          {nav && <HeaderNav nav={nav} cta={cta} section={section} />}

          {/* Atmosfere Living isn't live yet — shown, but not a link. */}
          <span
            className={`${styles.livingPill} ${nav ? styles.hideOnNav : ""}`}
            aria-disabled="true"
            title="Atmosfere Living is coming soon"
          >
            <span className={styles.pillLabel}>Shop Atmosfere Living</span>
            <span className={styles.pillSoon}>Soon</span>
          </span>

          {!nav && (
            <span className={styles.lang} aria-label="Language: English">
              EN
            </span>
          )}
        </div>
      </div>
    </HeaderFrame>
  );
}
