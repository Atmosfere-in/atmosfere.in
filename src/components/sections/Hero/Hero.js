import Image from "next/image";
import Button, { TextLink } from "@/components/ui/Button/Button";
import styles from "./Hero.module.css";

// image: { src, alt, position? } — the photograph, and the poster/fallback
//        when a video is given.
// video: { src, position? } — optional silent looping background video,
//        played over the photograph (hidden for reduced-motion readers).
export default function Hero({
  eyebrow,
  title,
  intro,
  image,
  video,
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
      {video && (
        <video
          className={styles.video}
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
          aria-hidden="true"
          style={video.position ? { objectPosition: video.position } : undefined}
        />
      )}
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
