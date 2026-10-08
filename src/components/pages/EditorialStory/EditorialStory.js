import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./EditorialStory.module.css";

const NUMERALS = ["I", "II", "III", "IV"];

// The "editorial" case-study layout — a magazine long-read, deliberately
// different from StoryDetail: split hero, drop-cap introduction, three
// photographed chapters (two stages each), a typographic pull quote, a
// dark results band and a mosaic gallery.
// story: { name, lead, summary, stages[6], chapters[{ title, image }],
//          mosaic[3], quote, results, image }
// meta: [{ label, value }] · crumbs: [{ label, href }]
export default function EditorialStory({ story, eyebrow, meta, crumbs, next, nextLabel = "Next story" }) {
  const chapters = story.chapters.map((chapter, i) => ({
    ...chapter,
    stages: story.stages.slice(i * 2, i * 2 + 2),
  }));

  return (
    <>
      {/* Split hero: the story's facts on a dark panel, the photograph beside it. */}
      <section className={styles.hero}>
        <div className={styles.heroPanel}>
          <div className={styles.heroText}>
            <nav aria-label="Breadcrumb" className={styles.crumbs}>
              <ol>
                {crumbs.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href}>{c.label}</Link>
                  </li>
                ))}
              </ol>
            </nav>
            <span className={styles.heroEyebrow}>{eyebrow}</span>
            <h1 className={styles.heroTitle}>{story.name}</h1>
            <p className={styles.heroLead}>{story.lead}</p>
            <dl className={styles.heroMeta}>
              {meta.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <Image src={story.image.src} alt={story.image.alt} fill preload quality={90} sizes="(max-width: 900px) 100vw, 58vw" className={styles.image} />
        </div>
      </section>

      {/* Introduction with a drop cap. */}
      <section className={`section ${styles.intro}`}>
        <div className={`${styles.introInner} reveal`}>
          <span className="eyebrow">The Story</span>
          <p className={styles.introText}>{story.summary}</p>
        </div>
      </section>

      {chapters.map((chapter, i) => (
        <section key={chapter.title} className={styles.chapter}>
          <div className={styles.chapterMedia}>
            <Image src={chapter.image.src} alt={chapter.image.alt} fill quality={90} sizes="100vw" className={styles.image} />
            <span className={styles.chapterShade} aria-hidden="true" />
            <div className={`container ${styles.chapterHead} reveal`}>
              <span className={styles.chapterNumber}>Chapter {NUMERALS[i]}</span>
              <h2 className={styles.chapterTitle}>{chapter.title}</h2>
            </div>
          </div>
          <div className={`container ${styles.chapterBody}`}>
            {chapter.stages.map((stage, j) => (
              <article key={stage.title} className={`${styles.stage} reveal`} style={{ "--reveal-delay": `${j * 120}ms` }}>
                <span className={styles.stageLabel}>{stage.title}</span>
                <p className={styles.stageText}>{stage.text}</p>
                {stage.points && (
                  <ul className={styles.points}>
                    {stage.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}

      {story.quote && (
        <section className={`section ${styles.pull}`}>
          <figure className={`container ${styles.pullInner} reveal`}>
            <blockquote>
              <p>“{story.quote.text}”</p>
            </blockquote>
            <figcaption>{story.quote.name}</figcaption>
          </figure>
        </section>
      )}

      {story.results && (
        <section className={styles.results}>
          <dl className={`container ${styles.resultsInner}`}>
            {story.results.map((r, i) => (
              <div key={r.label} className={`${styles.result} reveal`} style={{ "--reveal-delay": `${i * 100}ms` }}>
                <dd className={styles.resultValue}>{r.value}</dd>
                <dt className={styles.resultLabel}>{r.label}</dt>
              </div>
            ))}
          </dl>
        </section>
      )}

      {story.mosaic && (
        <section className="section" aria-label="Gallery">
          <div className={`container ${styles.mosaic}`}>
            {story.mosaic.map((img, i) => (
              <div key={img.src} className={`${styles.tile} reveal-image`} style={{ "--reveal-delay": `${i * 120}ms` }}>
                <Image src={img.src} alt={img.alt} fill quality={90} sizes={i === 0 ? "(max-width: 768px) 100vw, 58vw" : "(max-width: 768px) 100vw, 40vw"} className={styles.image} />
              </div>
            ))}
          </div>
        </section>
      )}

      {next && (
        <section className={styles.next}>
          <Link href={next.href} className={`container ${styles.nextLink}`}>
            <span className={styles.nextLabel}>{nextLabel}</span>
            <span className={styles.nextName}>
              {next.name} <Arrow size={32} className={styles.nextArrow} />
            </span>
            <span className={styles.nextDetails}>{next.details}</span>
          </Link>
        </section>
      )}
    </>
  );
}
