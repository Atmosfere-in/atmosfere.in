import Image from "next/image";
import Link from "next/link";
import { TextLink } from "@/components/ui/Button/Button";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./PlanningTypes.module.css";

// The four planning types as photo cards, with the name and a line of copy
// set beneath each photo (always legible, whatever the image).
// types: [{ slug, name, href, text?, image }]. With `anchors`, each card gets
// id={slug} so other pages can deep-link to a planning type.
export default function PlanningTypes({ id, eyebrow, title, intro, types, action, anchors = false }) {
  return (
    <section id={id} className={`section ${styles.section}`}>
      <div className="container">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </div>

        <ul className={`${styles.grid} ${types.length <= 2 ? styles.gridWide : ""}`} style={{ "--cols": types.length }}>
          {types.map((type, i) => (
            <li
              key={type.slug}
              id={anchors ? type.slug : undefined}
              className={`${styles.cell} reveal`}
              style={{ "--reveal-delay": `${i * 90}ms` }}
            >
              <Link href={type.href} className={styles.card}>
                <div className={styles.media}>
                  <Image
                    src={type.image.src}
                    alt={type.image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.caption}>
                  <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.name}>
                    {type.name}
                    <Arrow size={16} className={styles.arrow} />
                  </span>
                  {type.text && <span className={styles.text}>{type.text}</span>}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {action && (
          <div className={`${styles.action} reveal`}>
            <TextLink href={action.href}>{action.label}</TextLink>
          </div>
        )}
      </div>
    </section>
  );
}
