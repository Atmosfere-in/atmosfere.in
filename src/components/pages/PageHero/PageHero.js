import Image from "next/image";
import Link from "next/link";
import styles from "./PageHero.module.css";

// Opening photograph for inner pages (projects, process, case studies…).
// Shorter than the homepage hero; the transparent header floats over it.
// crumbs: [{ label, href }] · meta: [{ label, value }] shown along the base.
export default function PageHero({ eyebrow, title, intro, image, crumbs, meta, size = "tall" }) {
  return (
    <section className={`${styles.hero} ${styles[size]}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        preload
        quality={90}
        sizes="100vw"
        className={styles.image}
        style={image.position ? { objectPosition: image.position } : undefined}
      />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {crumbs && (
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <ol>
              {crumbs.map((crumb) => (
                <li key={crumb.href}>
                  <Link href={crumb.href}>{crumb.label}</Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
        {intro && <p className={styles.intro}>{intro}</p>}

        {meta && (
          <dl className={styles.meta}>
            {meta.map((item) => (
              <div key={item.label} className={styles.metaItem}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
