import Link from "next/link";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page not found — Atmosfere",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <span className="eyebrow">404</span>
        <h1 className={styles.title}>This room hasn&rsquo;t been built yet.</h1>
        <p className={styles.text}>The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
        <nav className={styles.links} aria-label="Where to next">
          <Link href="/spaces">
            Atmosfere Spaces <Arrow size={14} />
          </Link>
          <Link href="/hospitality">
            Atmosfere Hospitality <Arrow size={14} />
          </Link>
          <Link href="/">
            atmosfere.in <Arrow size={14} />
          </Link>
        </nav>
      </main>
    </>
  );
}
