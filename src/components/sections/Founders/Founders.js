import Image from "next/image";
import styles from "./Founders.module.css";

// A note from each of the two founders: portrait, quote and signature,
// set side by side with the second card dropped for an editorial rhythm.
// people: [{ name, role, quote, image: { src, alt } }]
export default function Founders({ eyebrow, title, people }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.grid}>
          {people.map((person, i) => (
            <figure key={person.role} className={styles.founder}>
              <div className={`${styles.portrait} reveal-image`} style={{ "--reveal-delay": `${i * 150}ms` }}>
                <Image
                  src={person.image.src}
                  alt={person.image.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 900px) 90vw, 30vw"
                  className={styles.image}
                />
              </div>

              <div className={`${styles.note} reveal`} style={{ "--reveal-delay": `${150 + i * 150}ms` }}>
                <span className={styles.mark} aria-hidden="true">
                  “
                </span>
                <blockquote className={styles.quote}>
                  <p>{person.quote}</p>
                </blockquote>
                <figcaption className={styles.caption}>
                  <span className={styles.name}>{person.name}</span>
                  <span className={styles.role}>{person.role}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
