import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./CaseStudyList.module.css";

// Story-led index: one wide row per case study (photo on alternating
// sides), with the lead line, the challenge in brief and its key results.
// Optional filter pills on top (plain links, one URL per view).
// filters: [{ label, href, active, count }]
// items: [{ href, name, tag, lead, challenge, results[{value,label}], image }]
export default function CaseStudyList({ filters, items }) {
  return (
    <section className="section">
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

        <ol className={styles.list}>
          {items.map((item, i) => (
            <li key={item.href} className={styles.row}>
              <Link href={item.href} className={`${styles.media} reveal-image`} tabIndex={-1} aria-hidden="true">
                <Image
                  src={item.image.src}
                  alt=""
                  fill
                  quality={90}
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className={styles.image}
                />
              </Link>

              <div className={`${styles.body} reveal`}>
                <span className={styles.meta}>
                  <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
                  {item.tag}
                </span>
                <h2 className={styles.name}>
                  <Link href={item.href}>{item.name}</Link>
                </h2>
                <p className={styles.lead}>{item.lead}</p>
                {item.challenge && (
                  <p className={styles.challenge}>
                    <strong>The challenge</strong>
                    {item.challenge}
                  </p>
                )}

                {item.results && (
                  <dl className={styles.results}>
                    {item.results.map((r) => (
                      <div key={r.label}>
                        <dd className={styles.value}>{r.value}</dd>
                        <dt className={styles.label}>{r.label}</dt>
                      </div>
                    ))}
                  </dl>
                )}

                <Link href={item.href} className={styles.link}>
                  Read the case study <Arrow size={14} />
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
