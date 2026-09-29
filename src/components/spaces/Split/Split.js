import Image from "next/image";
import Link from "next/link";
import { split } from "@/data/spaces";
import styles from "./Split.module.css";

export default function Split() {
  return (
    <section className={styles.split} aria-label="Residential and commercial work">
      {split.map((panel) => (
        <Link key={panel.title} href={panel.href} className={styles.panel}>
          <Image
            src={panel.image.src}
            alt={panel.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
          <div className={styles.content}>
            <h2 className={styles.title}>{panel.title}</h2>
            <p className={styles.text}>{panel.text}</p>
            <span className={styles.cta}>
              Explore <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
