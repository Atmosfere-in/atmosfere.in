import Image from "next/image";
import Button, { TextLink } from "@/components/ui/Button/Button";
import styles from "./Hero.module.css";

export default function Hero({
  eyebrow,
  title,
  intro,
  image,
  primary,
  secondary,
  centered = false,
}) {
  return (
    <section className={`${styles.hero} ${centered ? styles.centered : ""}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        preload
        quality={90}
        sizes="100vw"
        className={styles.image}
        style={image.position ? { objectPosition: image.position } : undefined}
      />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
        {intro && <p className={styles.intro}>{intro}</p>}
        <div className={styles.actions}>
          {primary && (
            <Button href={primary.href} variant="onImage" arrow>
              {primary.label}
            </Button>
          )}
          {secondary && (
            <TextLink href={secondary.href} light>
              {secondary.label}
            </TextLink>
          )}
        </div>
      </div>

      <span className={styles.scrollCue} aria-hidden="true">
        Scroll
      </span>
    </section>
  );
}
