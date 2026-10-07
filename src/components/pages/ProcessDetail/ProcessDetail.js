import Image from "next/image";
import styles from "./ProcessDetail.module.css";

// Each stage as a full row: photograph on one side, the stage on the other,
// alternating. Lists what happens and what the client receives.
// stages: [{ name, duration, text, activities[], deliverables[], image }]
export default function ProcessDetail({ eyebrow, title, intro, stages }) {
  return (
    <section className="section">
      <div className="container">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </div>

        <ol className={styles.stages}>
          {stages.map((stage, i) => (
            <li key={stage.name} className={styles.stage}>
              <div className={`${styles.media} reveal-image`}>
                <Image
                  src={stage.image.src}
                  alt={stage.image.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.image}
                />
              </div>

              <div className={`${styles.body} reveal`}>
                <div className={styles.label}>
                  <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
                  {stage.duration && <span className={styles.duration}>{stage.duration}</span>}
                </div>
                <h3 className={styles.name}>{stage.name}</h3>
                <p className={styles.text}>{stage.text}</p>

                <div className={styles.lists}>
                  <div>
                    <h4 className={styles.listTitle}>What happens</h4>
                    <ul className={styles.list}>
                      {stage.activities.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={styles.listTitle}>You receive</h4>
                    <ul className={styles.list}>
                      {stage.deliverables.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
