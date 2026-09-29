import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./CaseStudies.module.css";

export const CASE_STUDY_STAGES = [
  "Brief",
  "Challenge",
  "Approach",
  "Design Decisions",
  "Execution",
  "Outcome",
];

// items: [{ href, tag, title, summary, image }]
export default function CaseStudies({ eyebrow = "Case Studies", title, items }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          layout="split"
          intro={`Every case study follows the same six stages: ${CASE_STUDY_STAGES.join(" · ")}.`}
        />

        <ul className={styles.grid}>
          {items.map((study) => (
            <li key={study.href} className="reveal">
              <Link href={study.href} className={styles.card}>
                <div className={styles.media}>
                  <Image
                    src={study.image.src}
                    alt={study.image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className={styles.image}
                  />
                </div>
                <span className={styles.tag}>{study.tag}</span>
                <h3 className={styles.title}>{study.title}</h3>
                <p className={styles.summary}>{study.summary}</p>
                <span className={styles.cta}>
                  Read case study <Arrow size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
