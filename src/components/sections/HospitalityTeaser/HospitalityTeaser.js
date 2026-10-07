import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./HospitalityTeaser.module.css";

// Spaces' cross-sell to Atmosfere Hospitality: one photograph beside a short
// pitch and the four planning types as an index of links (each deep-links to
// its tile on /hospitality). Deliberately unlike Hospitality's own tile grid.
// types: [{ slug, name, text, href }]
export default function HospitalityTeaser({ eyebrow, title, intro, image, types, action }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        {/* Two rounded panels meeting in the middle, with curved notches at
            the top and bottom centre (shape supplied by the client). */}
        <svg width="0" height="0" className={styles.defs} aria-hidden="true" focusable="false">
          <clipPath id="teaser-shape" clipPathUnits="objectBoundingBox">
            <path d="M0 .03Q0 0 .03 0H.4A.1 .12 0 0 1 .5 .12V.91A.09 .09 0 0 1 .41 1H.03Q0 1 0 .97Z" />
            <path d="M.5 .12A.1 .12 0 0 1 .6 0H.97Q1 0 1 .03V.97Q1 1 .97 1H.59A.09 .09 0 0 1 .5 .91Z" />
          </clipPath>
        </svg>
        <div className={`${styles.media} reveal`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            quality={90}
            sizes="(max-width: 900px) 100vw, 45vw"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <div className="reveal">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.intro}>{intro}</p>
          </div>

          <ul className={styles.types}>
            {types.map((type, i) => (
              <li
                key={type.slug}
                className="reveal"
                style={{ "--reveal-delay": `${120 + i * 80}ms` }}
              >
                <Link href={type.href} className={styles.type}>
                  <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.typeBody}>
                    <span className={styles.typeName}>{type.name}</span>
                    <span className={styles.typeText}>{type.text}</span>
                  </span>
                  <Arrow size={18} className={styles.arrow} />
                </Link>
              </li>
            ))}
          </ul>

          <div className={`${styles.action} reveal`}>
            <Button href={action.href} arrow>
              {action.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
