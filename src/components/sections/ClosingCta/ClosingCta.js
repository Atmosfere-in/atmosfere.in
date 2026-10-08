import Image from "next/image";
import styles from "./ClosingCta.module.css";

// A photograph-led finale above the footer. The call to action lives in the
// header and footer, so the banner itself is pure atmosphere.
export default function ClosingCta({ title, text, image, quote = false }) {
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
        <div className={`${styles.text} reveal`}>
          <h2 className={`${styles.title} ${quote ? styles.quote : ""}`}>
            {quote ? `“${title}”` : title}
          </h2>
          {text && <p className={styles.body}>{text}</p>}
        </div>
      </div>
    </section>
  );
}
