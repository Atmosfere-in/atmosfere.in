import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { TextLink } from "@/components/ui/Button/Button";
import styles from "./PlanningTypes.module.css";

// types: [{ slug, name, href, text?, image }]. With `anchors`, each tile gets
// id={slug} so other pages can deep-link to a planning type. `compact` keeps
// tiles short enough that heading and tiles share one screen (cross-sell use).
export default function PlanningTypes({
  id,
  eyebrow,
  title,
  intro,
  types,
  action,
  anchors = false,
  compact = false,
}) {
  return (
    <section
      id={id}
      className={`section ${styles.section} ${compact ? styles.compact : ""}`}
    >
      <div className="container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          intro={intro}
          action={
            action && (
              <TextLink href={action.href}>
                {action.label}
              </TextLink>
            )
          }
        />

        <ul className={styles.grid} style={{ "--cols": types.length }}>
          {types.map((type, i) => (
            <li
              key={type.slug}
              id={anchors ? type.slug : undefined}
              className={`${styles.cell} reveal`}
              style={{ "--reveal-delay": `${i * 90}ms` }}
            >
              <Link href={type.href} className={styles.tile}>
                <Image
                  src={type.image.src}
                  alt={type.image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className={styles.image}
                />
                <span className={styles.name}>{type.name}</span>
                {type.text && <span className={styles.text}>{type.text}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
