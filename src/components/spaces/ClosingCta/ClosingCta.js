import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { closing } from "@/data/spaces";
import styles from "./ClosingCta.module.css";

export default function ClosingCta() {
  return (
    <section className={styles.closing}>
      <Image
        src={closing.image.src}
        alt=""
        fill
        quality={90}
        sizes="100vw"
        className={styles.image}
      />
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h2 className={styles.title}>{closing.title}</h2>
          <p className={styles.body}>{closing.text}</p>
        </div>
        <Button href="/spaces/get-a-quote" arrow>
          Get a Quote
        </Button>
      </div>
    </section>
  );
}
