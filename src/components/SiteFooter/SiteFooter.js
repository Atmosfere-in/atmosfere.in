import Link from "next/link";
import Logo from "@/components/Logo/Logo";
import Button from "@/components/ui/Button/Button";
import Arrow from "@/components/ui/Icon/Arrow";
import { contact } from "@/data/contact";
import styles from "./SiteFooter.module.css";

// Each vertical has its own footer: its own closing line, link columns and
// look (`theme`: "dark" for Spaces, "light" for Hospitality). Contact
// details are shared.
export default function SiteFooter({
  theme = "dark",
  section,
  tagline,
  cta,
  columns,
  crossLinks,
}) {
  const year = new Date().getFullYear();
  const dark = theme === "dark";

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <div className={`container ${styles.cta}`}>
        <h2 className={styles.ctaTitle}>{cta.title}</h2>
        <div className={styles.ctaSide}>
          <p className={styles.ctaText}>{cta.text}</p>
          <div className={styles.ctaActions}>
            <Button href={cta.primary.href} variant={dark ? "onImage" : "primary"} arrow>
              {cta.primary.label}
            </Button>
            <a
              href={contact.whatsappHref}
              className={styles.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp <Arrow direction="up-right" size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href={section.href} className={styles.logoRow} aria-label={`Atmosfere ${section.label}`}>
            <Logo tone="inherit" />
            <span className={styles.section}>{section.label}</span>
          </Link>
          <p className={styles.tagline}>{tagline}</p>
          <a
            href={contact.instagram.href}
            className={styles.social}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
            </svg>
            {contact.instagram.handle}
          </a>
        </div>

        {columns.map((col) => (
          <nav key={col.title} className={styles.col} aria-label={col.title}>
            <h3 className={styles.colTitle}>{col.title}</h3>
            <ul className={styles.links}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className={styles.col}>
          <h3 className={styles.colTitle}>Studio</h3>
          <ul className={styles.links}>
            <li className={styles.plain}>{contact.city}</li>
            <li>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              <a href={contact.emailHref}>{contact.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} Atmosfere {section.label}. All rights reserved.
        </p>
        <div className={styles.cross}>
          <span className={styles.crossLabel}>Also from Atmosfere</span>
          {crossLinks.map((item) =>
            item.href ? (
              <Link key={item.label} href={item.href} className={styles.crossLink}>
                {item.label} <Arrow size={12} />
              </Link>
            ) : (
              <span key={item.label} className={styles.crossSoon} aria-disabled="true">
                {item.label} · Soon
              </span>
            )
          )}
        </div>
        <div className={styles.legal}>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-of-service">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
