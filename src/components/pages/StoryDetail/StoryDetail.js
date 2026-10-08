import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Icon/Arrow";
import { Glance, Context, Concept, DataTable, Timeline, DetailGallery, Feature } from "./StoryDeep";
import styles from "./StoryDetail.module.css";

// Body of a project / case-study page, after its PageHero:
// overview → gallery → the six stages → client quote → results → next.
// story: { lead, summary, scope[], gallery[{src,alt}], stages[{title,text,points?}],
//          quote?{text,name}, results?[{value,label}] }
// Flagship stories can add: glance, context, concept, tables[], feature, phases,
// details (see StoryDeep.js); each block appears only when present.
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

      {story.glance && <Glance items={story.glance} />}

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

      {story.context && <Context context={story.context} />}
      {story.concept && <Concept concept={story.concept} />}
      {story.tables?.map((table) => (
        <DataTable key={table.title} table={table} />
      ))}
      {story.feature && <Feature feature={story.feature} />}

      {/* The six stages as cards that stack while scrolling. */}
      <section className={`section ${styles.stages}`}>
        <div className="container">
          <div className={`${styles.stagesHead} reveal`}>
            <span className="eyebrow">The Story</span>
            <h2 className={styles.stagesTitle}>From the first brief to the final walkthrough.</h2>
          </div>
          <ol className={styles.stageList}>
            {story.stages.map((stage, i) => (
              <li key={stage.title} className={styles.stage} style={{ "--i": i }}>
                <article className={`${styles.card} ${stage.image ? styles.withImage : ""}`}>
                  <div className={styles.cardHead}>
                    <span className={styles.bigNumber} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.stageCount}>
                      Stage {String(i + 1).padStart(2, "0")} / {String(story.stages.length).padStart(2, "0")}
                    </span>
                    <h3 className={styles.stageTitle}>{stage.title}</h3>
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.stageText}>{stage.text}</p>
                    {stage.points && (
                      <ul className={styles.stagePoints}>
                        {stage.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {stage.image && (
                    <div className={styles.cardMedia}>
                      <Image
                        src={stage.image.src}
                        alt={stage.image.alt}
                        fill
                        quality={85}
                        sizes="(max-width: 900px) 100vw, 30vw"
                        className={styles.image}
                      />
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {story.phases && <Timeline timeline={story.phases} />}
      {story.details && <DetailGallery details={story.details} />}

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
          <div className="container">
            <Link href={next.href} className={styles.nextLink}>
              <Image src={next.image.src} alt="" fill quality={85} sizes="100vw" className={styles.nextImage} />
              <span className={styles.nextShade} aria-hidden="true" />
              <span className={styles.nextContent}>
                <span className={styles.nextLabel}>{nextLabel}</span>
                <span className={styles.nextName}>
                  {next.name} <Arrow size={28} className={styles.nextArrow} />
                </span>
                <span className={styles.nextDetails}>{next.details}</span>
              </span>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
