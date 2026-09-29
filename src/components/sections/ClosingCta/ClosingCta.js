import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import styles from "./ClosingCta.module.css";

export default function ClosingCta({ title, text, image, cta, quote = false }) {
  return (
    <section className={styles.closing}>
      <Image
        src={image.src}
        alt=""
        fill
        quality={90}
        sizes="100vw"
        className={styles.image}
        style={image.position ? { objectPosition: image.position } : undefined}
      />
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h2 className={`${styles.title} ${quote ? styles.quote : ""}`}>
            {quote ? `“${title}”` : title}
          </h2>
          {text && <p className={styles.body}>{text}</p>}
        </div>
        <Button href={cta.href} variant="onImage" arrow className={styles.button}>
          {cta.label}
        </Button>
      </div>
    </section>
  );
}
