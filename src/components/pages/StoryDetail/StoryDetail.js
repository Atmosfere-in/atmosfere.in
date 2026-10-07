import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./StoryDetail.module.css";

// Body of a project / case-study page, after its PageHero:
// overview → gallery → the six stages → client quote → results → next.
// story: { lead, summary, scope[], gallery[{src,alt}], stages[{title,text}],
//          quote?{text,name}, results?[{value,label}] }
// next: { href, name, details, image } — the following story in the list.
export default function StoryDetail({ story, next, nextLabel = "Next project" }) {
  const [first, ...rest] = story.gallery;

  return (
    <>
      <section className={`section ${styles.overview}`}>
        <div className={`container ${styles.overviewGrid}`}>
          <div className="reveal">
            <span className="eyebrow">Overview</span>
            <p className={styles.lead}>{story.lead}</p>
          </div>
          <div className={`${styles.overviewSide} reveal`} style={{ "--reveal-delay": "120ms" }}>
            <p className={styles.summary}>{story.summary}</p>
            {story.scope && (
              <ul className={styles.scope} aria-label="Scope">
                {story.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {first && (
        <section className={styles.gallery} aria-label="Gallery">
          <div className="container">
            <div className={`${styles.wide} reveal-image`}>
              <Image src={first.src} alt={first.alt} fill quality={90} sizes="100vw" className={styles.image} />
            </div>
            {rest.length > 0 && (
              <div className={styles.pair}>
                {rest.map((img, i) => (
                  <div
                    key={img.src}
                    className={`${styles.half} reveal-image`}
                    style={{ "--reveal-delay": `${i * 120}ms` }}
                  >
                    <Image src={img.src} alt={img.alt} fill quality={90} sizes="(max-width: 768px) 100vw, 50vw" className={styles.image} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className={`section ${styles.stages}`}>
        <div className={`container ${styles.stagesGrid}`}>
          <div className={styles.stagesHead}>
            <span className="eyebrow">The Story</span>
            <h2 className={styles.stagesTitle}>From the first brief to the final walkthrough.</h2>
          </div>
          <ol className={styles.stageList}>
            {story.stages.map((stage, i) => (
              <li key={stage.title} className={`${styles.stage} reveal`}>
                <span className={styles.stageNumber}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.stageText}>{stage.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {(story.quote || story.results) && (
        <section className={`section ${styles.voice}`}>
          <div className="container">
            {story.quote && (
              <figure className={`${styles.quote} reveal`}>
                <span className={styles.mark} aria-hidden="true">
                  “
                </span>
                <blockquote>
                  <p>{story.quote.text}</p>
                </blockquote>
                <figcaption>{story.quote.name}</figcaption>
              </figure>
            )}
            {story.results && (
              <dl className={styles.results}>
                {story.results.map((r, i) => (
                  <div key={r.label} className={`${styles.result} reveal`} style={{ "--reveal-delay": `${i * 100}ms` }}>
                    <dd className={styles.resultValue}>{r.value}</dd>
                    <dt className={styles.resultLabel}>{r.label}</dt>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </section>
      )}

      {next && (
        <section className={styles.next}>
          <Link href={next.href} className={styles.nextLink}>
            <Image src={next.image.src} alt="" fill quality={85} sizes="100vw" className={styles.nextImage} />
            <span className={styles.nextShade} aria-hidden="true" />
            <span className={`container ${styles.nextContent}`}>
              <span className={styles.nextLabel}>{nextLabel}</span>
              <span className={styles.nextName}>
                {next.name} <Arrow size={28} className={styles.nextArrow} />
              </span>
              <span className={styles.nextDetails}>{next.details}</span>
            </span>
          </Link>
        </section>
      )}
    </>
  );
}
