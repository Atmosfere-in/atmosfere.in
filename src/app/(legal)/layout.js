import Link from "next/link";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import { contact } from "@/data/contact";
import styles from "./legal.module.css";

// Shared shell for /privacy-policy and /terms-of-service: the plain hub
// header, a reading column and a slim footer.
export default function LegalLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <span>© {new Date().getFullYear()} Atmosfere</span>
          <nav className={styles.footerLinks} aria-label="Legal">
            <Link href="/">atmosfere.in</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-service">Terms</Link>
            <a href={contact.emailHref}>{contact.email}</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
