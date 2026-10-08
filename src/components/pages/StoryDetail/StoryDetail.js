import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Icon/Arrow";
import { Context, Concept, DataTable, Timeline, DetailGallery, Feature } from "./StoryDeep";
import StageCarousel from "./StageCarousel";
import styles from "./StoryDetail.module.css";

// Body of a project / case-study page, after its PageHero:
// overview → gallery → the six stages → client voice → next.
// story: { lead, summary, scope[], gallery[{src,alt}], stages[{title,text,points?,image?}],
//          quote?{text,name}, results?[{value,label}], voiceImage? }
// Flagship stories can add: glance, context, concept, tables[], feature, phases,
// details (see StoryDeep.js); each block appears only when present.
// next: { href, name, details, image } — the following story in the list.
export default function StoryDetail({ story, next, nextLabel = "Next project" }) {
  // Gallery rhythm: one wide photograph, then a pair, repeating.
  const rows = [];
  for (let i = 0; i < story.gallery.length; i += 3) {
    rows.push({ wide: story.gallery[i], pair: story.gallery.slice(i + 1, i + 3) });
  }

  const facts = [
    ...(story.glance ?? []),
    ...(story.scope ? [{ label: "Scope", value: story.scope.join(" · ") }] : []),
  ];

  return (
    <>
      <section className={`section ${styles.overview}`}>
        <div className={`container ${styles.overviewGrid} ${facts.length ? "" : styles.single}`}>
          <div className="reveal">
            <span className="eyebrow">Overview</span>
            <p className={styles.lead}>{story.lead}</p>
            <p className={styles.summary}>{story.summary}</p>
          </div>
          {facts.length > 0 && (
            <dl className={`${styles.facts} reveal`} style={{ "--reveal-delay": "120ms" }}>
              {facts.map((f) => (
                <div key={f.label} className={styles.fact}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {rows.length > 0 && (
        <section className={styles.gallery} aria-label="Gallery">
          <div className={`container ${styles.galleryInner}`}>
            {rows.map((row) => (
              <div key={row.wide.src} className={styles.galleryRow}>
                <div className={`${styles.wide} reveal-image`}>
                  <Image src={row.wide.src} alt={row.wide.alt} fill quality={90} sizes="100vw" className={styles.image} />
                </div>
                {row.pair.length > 0 && (
                  <div className={styles.pair}>
                    {row.pair.map((img, i) => (
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
            ))}
          </div>
        </section>
      )}

      {story.context && <Context context={story.context} />}
      {story.concept && <Concept concept={story.concept} />}
      {story.tables?.map((table) => (
        <DataTable key={table.title} table={table} />
      ))}
      {story.feature && <Feature feature={story.feature} />}

      <StageCarousel stages={story.stages} />

      {story.phases && <Timeline timeline={story.phases} />}
      {story.details && <DetailGallery details={story.details} />}

      {(story.quote || story.results) && (
        <section className={styles.voice}>
          <Image
            src={(story.voiceImage ?? story.image).src}
            alt=""
            fill
            quality={85}
            sizes="100vw"
            className={styles.voiceImage}
          />
          <span className={styles.voiceShade} aria-hidden="true" />
          <div className={`container ${styles.voiceInner}`}>
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
              <dl className={`${styles.results} reveal`} style={{ "--reveal-delay": "120ms" }}>
                {story.results.map((r) => (
                  <div key={r.label} className={styles.result}>
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
