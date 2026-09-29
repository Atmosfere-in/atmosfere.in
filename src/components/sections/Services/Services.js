import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { TextLink } from "@/components/ui/Button/Button";
import styles from "./Services.module.css";

// items: [{ name, text, href, image }]
export default function Services({ eyebrow, title, intro, items, action }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          intro={intro}
          layout="split"
          action={action && <TextLink href={action.href}>{action.label}</TextLink>}
        />

        <ol className={styles.grid}>
          {items.map((item, i) => (
            <li key={item.name} className="reveal">
              <Link href={item.href} className={styles.card}>
                <div className={styles.media}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.image}
                  />
                  <span className={styles.number}>0{i + 1}</span>
                </div>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.text}>{item.text}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
