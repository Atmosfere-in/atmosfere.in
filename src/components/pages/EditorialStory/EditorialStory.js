import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Icon/Arrow";
import { Concept } from "@/components/pages/StoryDetail/StoryDeep";
import styles from "./EditorialStory.module.css";

const NUMERALS = ["I", "II", "III", "IV"];
// The concept & palette section is hidden on every story for now.
const SHOW_CONCEPT = false;

// The "editorial" case-study layout — a magazine long-read, deliberately
// different from StoryDetail: split hero, drop-cap introduction, the design
// concept and its material palette, three photographed chapters (two stages
// each), the client's words and results beside a photograph, and a mosaic
// gallery.
// story: { name, lead, summary, stages[6], chapters[{ title, image }],
//          concept?, mosaic[3]?, voiceImage?, quote?, results?, image }
// meta: [{ label, value }] · crumbs: [{ label, href }]
export default function EditorialStory({ story, eyebrow, meta, crumbs, next, nextLabel = "Next story" }) {
  // Stories without explicit chapters fall back to their gallery photographs,
  // titled after the first stage of each pair.
  const chapterSources =
    story.chapters ??
    (story.gallery ?? []).slice(0, 3).map((image, i) => ({
      title: story.stages[i * 2]?.title ?? `Chapter ${NUMERALS[i]}`,
      image,
    }));
  const chapters = chapterSources.map((chapter, i) => ({
    ...chapter,
    stages: story.stages.slice(i * 2, i * 2 + 2),
  }));
  const voiceImage = story.voiceImage ?? chapters[chapters.length - 1]?.image ?? story.image;

  return (
    <>
      {/* Hero: the story's facts laid over a photograph that runs edge to
          edge. heroStyle "split" keeps the older panel-beside-photo hero. */}
      <section className={`${styles.hero} ${story.heroStyle === "split" ? "" : styles.heroFull}`}>
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

      {/* The design idea and its material palette (shared with StoryDetail) is
          switched off for now; set SHOW_CONCEPT to true to bring it back. */}
      {SHOW_CONCEPT && story.concept && <Concept concept={story.concept} />}

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

      {/* Floor plans, where a project has them: a grid of drawings on white,
          each opening at full size. layouts: { title?, intro?, items: [{ src, alt, label }] } */}
      {story.layouts?.items?.length > 0 && (
        <section className={`section ${styles.layouts}`} aria-label="Layouts">
          <div className="container">
            <div className={`${styles.layoutsHead} reveal`}>
              <span className="eyebrow">Layouts</span>
              <h2 className={styles.layoutsTitle}>{story.layouts.title ?? "Floor by floor."}</h2>
              {story.layouts.intro && <p className={styles.layoutsIntro}>{story.layouts.intro}</p>}
            </div>
            <ul className={styles.plans}>
              {story.layouts.items.map((plan, i) => (
                <li key={plan.src} className={`${styles.plan} reveal`} style={{ "--reveal-delay": `${(i % 3) * 100}ms` }}>
                  <a href={plan.src} target="_blank" rel="noopener" className={styles.planLink} aria-label={`${plan.label}: open full size`}>
                    <span className={styles.planMedia}>
                      <Image src={plan.src} alt={plan.alt} fill quality={90} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className={styles.planImage} />
                    </span>
                    <span className={styles.planLabel}>{plan.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* The client in their own words, beside a photograph, with the results. */}
      {(story.quote || story.results) && (
        <section className={`section ${styles.voice} ${story.quote ? "" : styles.voiceResultsOnly}`}>
          <div className={`container ${styles.voiceGrid}`}>
            <div className={`${styles.voiceMedia} reveal-image`}>
              <Image
                src={voiceImage.src}
                alt={voiceImage.alt}
                fill
                quality={90}
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.image}
              />
            </div>
            <div className={`${styles.voiceText} reveal`}>
              {story.quote && (
                <figure>
                  <span className={styles.mark} aria-hidden="true">
                    “
                  </span>
                  <blockquote className={styles.quote}>
                    <p>{story.quote.text}</p>
                  </blockquote>
                  <figcaption className={styles.quoteName}>{story.quote.name}</figcaption>
                </figure>
              )}
              {!story.quote && <span className="eyebrow">In Numbers</span>}
              {story.results && (
                <dl className={styles.results}>
                  {story.results.map((r) => (
                    <div key={r.label} className={styles.result}>
                      <dd className={styles.resultValue}>{r.value}</dd>
                      <dt className={styles.resultLabel}>{r.label}</dt>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>
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
