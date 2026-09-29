import Image from "next/image";
import { founder } from "@/data/spaces";
import styles from "./FounderNote.module.css";

export default function FounderNote() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.media} reveal`}>
          <Image
            src={founder.image.src}
            alt={founder.image.alt}
            fill
            sizes="(max-width: 768px) 60vw, 30vw"
            className={styles.image}
          />
        </div>

        <figure className={`${styles.note} reveal`}>
          <span className="eyebrow">Founder&apos;s Note</span>
          <blockquote className={styles.quote}>
            <p>“{founder.quote}”</p>
          </blockquote>
          <figcaption className={styles.caption}>
            <span className={styles.name}>{founder.name}</span>
            <span className={styles.role}>{founder.role}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
