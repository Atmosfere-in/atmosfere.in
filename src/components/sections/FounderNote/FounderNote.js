import Image from "next/image";
import styles from "./FounderNote.module.css";

export default function FounderNote({ quote, name, role, image }) {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.media} reveal`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 60vw, 30vw"
            className={styles.image}
          />
        </div>

        <figure className={`${styles.note} reveal`}>
          <span className="eyebrow">Founder&apos;s Note</span>
          <blockquote className={styles.quote}>
            <p>“{quote}”</p>
          </blockquote>
          <figcaption className={styles.caption}>
            <span className={styles.name}>{name}</span>
            <span className={styles.role}>{role}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
