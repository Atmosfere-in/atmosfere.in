import Image from "next/image";
import styles from "./TrustSignals.module.css";

// Stats on a darkened photograph, followed by client testimonials.
// testimonials: [{ quote, name, project }]
export default function TrustSignals({ stats, image, testimonials }) {
  return (
    <section aria-label="Why clients trust Atmosfere">
      <div className={styles.band}>
        <Image
          src={image.src}
          alt=""
          fill
          sizes="100vw"
          className={styles.image}
        />
        <div className="container">
          <dl className={styles.stats}>
            {stats.map((stat, i) => (
              <div key={stat.label} className={`${styles.stat} reveal`} style={{ "--reveal-delay": `${i * 90}ms` }}>
                <dt className={styles.label}>{stat.label}</dt>
                <dd className={styles.value}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className={`container ${styles.testimonials}`}>
        <span className="eyebrow">In our clients&apos; words</span>
        <ul className={styles.quotes}>
          {testimonials.map((t, i) => (
            <li key={t.name} className={`${styles.card} reveal`} style={{ "--reveal-delay": `${i * 90}ms` }}>
              <span className={styles.mark} aria-hidden="true">
                “
              </span>
              <blockquote className={styles.quote}>
                <p>{t.quote}</p>
              </blockquote>
              <p className={styles.cite}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.project}>{t.project}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
