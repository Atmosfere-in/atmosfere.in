import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { TextLink } from "@/components/ui/Button/Button";
import { planningTypes } from "@/data/spaces";
import styles from "./PlanningTypes.module.css";

// Cross-sell into Atmosfere Hospitality for visitors whose need is really
// hospitality planning rather than a home interior.
export default function PlanningTypes() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow={planningTypes.eyebrow}
          title={planningTypes.title}
          intro={planningTypes.intro}
          light
          action={
            <TextLink href="/hospitality" light>
              Explore Hospitality
            </TextLink>
          }
        />

        <ul className={styles.grid}>
          {planningTypes.types.map((type) => (
            <li key={type.name} className="reveal">
              <Link href="/hospitality" className={styles.tile}>
                <Image
                  src={type.image.src}
                  alt={type.image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className={styles.image}
                />
                <span className={styles.name}>{type.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
