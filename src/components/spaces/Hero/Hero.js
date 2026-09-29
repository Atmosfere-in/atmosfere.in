import Image from "next/image";
import Button, { TextLink } from "@/components/ui/Button/Button";
import { hero } from "@/data/spaces";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        preload
        quality={90}
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <span className={styles.eyebrow}>{hero.eyebrow}</span>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.intro}>{hero.intro}</p>
        <div className={styles.actions}>
          <Button href="/spaces/get-a-quote" arrow>
            Get a Quote
          </Button>
          <TextLink href="/spaces/projects" light>
            View Projects
          </TextLink>
        </div>
      </div>

      <span className={styles.scrollCue} aria-hidden="true">
        Scroll
      </span>
    </section>
  );
}
