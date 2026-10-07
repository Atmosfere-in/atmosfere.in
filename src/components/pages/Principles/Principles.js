import styles from "./Principles.module.css";

// A short, numbered set of beliefs or commitments, in up to three columns.
// items: [{ title, text }]
export default function Principles({ eyebrow, title, items }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <ol className={styles.grid} style={{ "--cols": Math.min(items.length, 3) }}>
          {items.map((item, i) => (
            <li
              key={item.title}
              className={`${styles.item} reveal`}
              style={{ "--reveal-delay": `${(i % 3) * 100}ms` }}
            >
              <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
