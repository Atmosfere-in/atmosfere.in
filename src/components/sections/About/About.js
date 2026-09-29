import Image from "next/image";
import { TextLink } from "@/components/ui/Button/Button";
import styles from "./About.module.css";

export default function About({ eyebrow, title, body, image, link }) {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.media} reveal`}>
          <div className={styles.frame}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              quality={90}
              sizes="(max-width: 900px) 100vw, 58vw"
              className={styles.image}
            />
          </div>
        </div>

        <div className={`${styles.text} reveal`}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          {body.map((p) => (
            <p key={p.slice(0, 24)} className={styles.body}>
              {p}
            </p>
          ))}
          {link && (
            <div className={styles.link}>
              <TextLink href={link.href}>{link.label}</TextLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
