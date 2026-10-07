import Image from "next/image";
import { TextLink } from "@/components/ui/Button/Button";
import styles from "./ProcessArches.module.css";

// Hospitality's "How We Work": four stages, each under an arched photograph
// that echoes the doorway in the Atmosfere mark. Columns step down and back
// like a colonnade; on phones they become a swipeable row.
// steps: [{ name, text, image: { src, alt } }]
export default function ProcessArches({ eyebrow, title, intro, steps, link }) {
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </div>

        <ol className={styles.stages}>
          {steps.map((step, i) => (
            <li key={step.name} className={styles.stage}>
              <div
                className={`${styles.arch} reveal-image`}
                style={{ "--reveal-delay": `${i * 120}ms` }}
              >
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 24vw"
                  className={styles.image}
                />
              </div>
              <div className={`${styles.body} reveal`} style={{ "--reveal-delay": `${120 + i * 120}ms` }}>
                <span className={styles.number}>{pad(i + 1)}</span>
                <h3 className={styles.name}>{step.name}</h3>
                <p className={styles.text}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        {link && (
          <div className={`${styles.link} reveal`}>
            <TextLink href={link.href}>{link.label}</TextLink>
          </div>
        )}
      </div>
    </section>
  );
}
