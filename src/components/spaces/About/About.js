import Image from "next/image";
import { TextLink } from "@/components/ui/Button/Button";
import { about } from "@/data/spaces";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.media} reveal`}>
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 58vw"
            className={styles.image}
          />
        </div>

        <div className={`${styles.text} reveal`}>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className={styles.title}>{about.title}</h2>
          {about.body.map((p) => (
            <p key={p.slice(0, 24)} className={styles.body}>
              {p}
            </p>
          ))}
          <div className={styles.link}>
            <TextLink href="/spaces/about">About the studio</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
