import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./WorkIndex.module.css";

// Portfolio / case-study index: filter pills (plain links, so filtering works
// without JavaScript and each view has its own URL) over an editorial grid
// whose cards alternate between wide and narrow.
// filters: [{ label, href, active }] · items: [{ href, name, details, side, image }]
export default function WorkIndex({ filters, items, empty = "Nothing here yet." }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {filters && (
          <nav className={styles.filters} aria-label="Filter">
            {filters.map((filter) => (
              <Link
                key={filter.href}
                href={filter.href}
                scroll={false}
                className={styles.filter}
                aria-current={filter.active ? "page" : undefined}
              >
                {filter.label}
                {filter.count != null && <span className={styles.count}>{filter.count}</span>}
              </Link>
            ))}
          </nav>
        )}

        {items.length === 0 ? (
          <p className={styles.empty}>{empty}</p>
        ) : (
          <ul className={styles.grid}>
            {items.map((item, i) => (
              <li
                key={item.href}
                className={`${styles.item} reveal`}
                style={{ "--reveal-delay": `${(i % 2) * 120}ms` }}
              >
                <Link href={item.href} className={styles.card}>
                  <div className={styles.media}>
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.image}
                    />
                    <span className={styles.view}>
                      View <Arrow size={14} />
                    </span>
                  </div>
                  <div className={styles.caption}>
                    <div>
                      <h2 className={styles.name}>{item.name}</h2>
                      <p className={styles.details}>{item.details}</p>
                    </div>
                    {item.side && <span className={styles.side}>{item.side}</span>}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
