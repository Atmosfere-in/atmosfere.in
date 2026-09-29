import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./Split.module.css";

// panels: [{ eyebrow?, title, text, href, image }]
export default function Split({ label, panels }) {
  return (
    <section className={styles.split} aria-label={label}>
      {panels.map((panel) => (
        <Link key={panel.title} href={panel.href} className={styles.panel}>
          <Image
            src={panel.image.src}
            alt={panel.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
          <div className={styles.content}>
            {panel.eyebrow && <span className={styles.eyebrow}>{panel.eyebrow}</span>}
            <h2 className={styles.title}>{panel.title}</h2>
            <p className={styles.text}>{panel.text}</p>
            <span className={styles.cta}>
              Explore <Arrow size={16} />
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
