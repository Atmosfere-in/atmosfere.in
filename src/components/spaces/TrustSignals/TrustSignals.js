import { trust } from "@/data/spaces";
import styles from "./TrustSignals.module.css";

export default function TrustSignals() {
  return (
    <section className={`section ${styles.section}`} aria-label="Why clients trust Atmosfere">
      <div className="container">
        <dl className={styles.stats}>
          {trust.stats.map((stat) => (
            <div key={stat.label} className={`${styles.stat} reveal`}>
              <dt className={styles.label}>{stat.label}</dt>
              <dd className={styles.value}>{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.row}>
          <span className={styles.rowTitle}>Trusted by</span>
          <ul className={styles.names}>
            {trust.clients.map((name) => (
              <li key={name} className={styles.client}>
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.row}>
          <span className={styles.rowTitle}>As seen in</span>
          <ul className={styles.names}>
            {trust.press.map((name) => (
              <li key={name} className={styles.press}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
