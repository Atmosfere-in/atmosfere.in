import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { caseStudies, caseStudyStages } from "@/data/spaces";
import styles from "./CaseStudies.module.css";

export default function CaseStudies() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Case Studies"
          title="The thinking behind the finish."
          intro={`Every case study follows the same six stages: ${caseStudyStages.join(" → ")}.`}
        />

        <ul className={styles.grid}>
          {caseStudies.map((study) => (
            <li key={study.slug} className="reveal">
              <Link href={`/spaces/projects/${study.slug}`} className={styles.card}>
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
                  Read case study <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
