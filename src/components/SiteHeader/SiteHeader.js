import Link from "next/link";
import Logo from "@/components/Logo/Logo";
import BrandLink from "./BrandLink";
import HeaderFrame from "./HeaderFrame";
import HeaderNav, { HeaderLinks } from "./HeaderNav";
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
      <div className={`${styles.inner} ${nav ? styles.withNav : ""}`}>
        <div className={styles.brandGroup}>
          <BrandLink className={styles.brand}>
            <Logo tone="inherit" />
          </BrandLink>
          {section && (
            <Link href={section.href} className={styles.section}>
              {section.label}
            </Link>
          )}
        </div>

        {nav && <HeaderLinks nav={nav} section={section} />}

        <div className={styles.actions}>
          {/* Atmosfere Living isn't live yet — shown, but not a link. */}
          <span
            className={`${styles.livingPill} ${nav ? styles.hideOnNav : ""}`}
            aria-disabled="true"
            title="Atmosfere Living is coming soon"
          >
            <span className={styles.pillLabel}>Shop Atmosfere Living</span>
            <span className={styles.pillSoon}>Soon</span>
          </span>

          {nav && <HeaderNav nav={nav} cta={cta} section={section} />}

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
