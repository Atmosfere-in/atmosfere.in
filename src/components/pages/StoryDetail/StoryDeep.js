import Image from "next/image";
import styles from "./StoryDeep.module.css";

// Optional long-form blocks for flagship case studies. Each renders only
// when its data is present, so shorter stories keep the simple layout.

// The brief in full (heading beside the story), then the constraints the
// design had to answer as a row of numbered cards.
// context: { title, body[], constraints[{ title, text }] }
export function Context({ context }) {
  return (
    <section className="section">
      <div className="container">
        <div className={`${styles.contextGrid} reveal`}>
          <div>
            <span className="eyebrow">The Brief</span>
            <h2 className={styles.title}>{context.title}</h2>
          </div>
          <div>
            {context.body.map((p) => (
              <p key={p.slice(0, 32)} className={styles.body}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <h3 className={styles.constraintsTitle}>What we had to solve</h3>
        <ol className={styles.constraints}>
          {context.constraints.map((c, i) => (
            <li key={c.title} className="reveal" style={{ "--reveal-delay": `${i * 90}ms` }}>
              <span className={styles.constraintNumber}>{String(i + 1).padStart(2, "0")}</span>
              <strong>{c.title}</strong>
              <span>{c.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// The design idea and its material palette.
// concept: { title, text, image, palette[{ name, note, color }] }
export function Concept({ concept }) {
  return (
    <section className={`section ${styles.concept}`}>
      <div className={`container ${styles.conceptGrid}`}>
        <div className={`${styles.conceptMedia} reveal-image`}>
          <Image src={concept.image.src} alt={concept.image.alt} fill quality={90} sizes="(max-width: 900px) 100vw, 45vw" className={styles.image} />
        </div>
        <div className="reveal">
          <span className="eyebrow">The Concept</span>
          <h2 className={styles.title}>{concept.title}</h2>
          <p className={styles.body}>{concept.text}</p>
          <ul className={styles.palette} aria-label="Material palette">
            {concept.palette.map((m) => (
              <li key={m.name}>
                <span className={styles.swatch} style={{ background: m.color }} aria-hidden="true" />
                <span className={styles.materialName}>{m.name}</span>
                <span className={styles.materialNote}>{m.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// A comparison or schedule (options tested, room mix…) shown as a row of
// cards rather than a table: the first column titles each card, a "Keys"
// column becomes its large numeral, the last column is its note and the
// rest are label/value rows. `highlight` marks the recommended card.
// table: { eyebrow, title, intro?, columns[], rows[[...]], highlight?, note? }
export function DataTable({ table }) {
  const keyCol = table.columns.findIndex((c) => c.toLowerCase() === "keys");
  const last = table.columns.length - 1;

  return (
    <section className="section">
      <div className="container">
        <div className={`${styles.tableHead} reveal`}>
          <span className="eyebrow">{table.eyebrow}</span>
          <h2 className={styles.title}>{table.title}</h2>
          {table.intro && <p className={styles.body}>{table.intro}</p>}
        </div>
        <ul className={styles.cards} style={{ "--cards": table.rows.length }}>
          {table.rows.map((row, i) => (
            <li
              key={row[0]}
              className={`${styles.card} ${i === table.highlight ? styles.cardHighlight : ""} reveal`}
              style={{ "--reveal-delay": `${i * 90}ms` }}
            >
              {i === table.highlight && <span className={styles.badge}>Our recommendation</span>}
              {keyCol > 0 && (
                <span className={styles.cardNumber}>
                  {row[keyCol]}
                  <small>{table.columns[keyCol].toLowerCase()}</small>
                </span>
              )}
              <h3 className={styles.cardTitle}>{row[0]}</h3>
              <dl className={styles.cardFacts}>
                {row.map((cell, j) =>
                  j === 0 || j === keyCol || j === last ? null : (
                    <div key={table.columns[j]}>
                      <dt>{table.columns[j]}</dt>
                      <dd>{cell}</dd>
                    </div>
                  ),
                )}
              </dl>
              <p className={styles.cardNote}>{row[last]}</p>
            </li>
          ))}
        </ul>
        {table.note && <p className={styles.tableNote}>{table.note}</p>}
      </div>
    </section>
  );
}

// Captioned details: a closing gallery with a line on each photograph.
// details: [{ src, alt, caption }]
export function DetailGallery({ details }) {
  return (
    <section className="section">
      <div className="container">
        <div className={`${styles.tableHead} reveal`}>
          <span className="eyebrow">In Detail</span>
          <h2 className={styles.title}>The moments that make it.</h2>
        </div>
        <ul className={styles.details}>
          {details.map((d, i) => (
            <li key={d.src} className={styles.detail}>
              <div className={`${styles.detailMedia} reveal-image`} style={{ "--reveal-delay": `${(i % 3) * 120}ms` }}>
                <Image src={d.src} alt={d.alt} fill quality={90} sizes="(max-width: 768px) 100vw, 33vw" className={styles.image} />
              </div>
              <p className={styles.caption}>{d.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// A full-width photograph with one line set over it — a pause between
// chapters. feature: { image, line, caption }
export function Feature({ feature }) {
  return (
    <section className={styles.feature}>
      <Image src={feature.image.src} alt={feature.image.alt} fill quality={90} sizes="100vw" className={styles.featureImage} />
      <span className={styles.featureShade} aria-hidden="true" />
      <div className={`container ${styles.featureContent} reveal`}>
        <p className={styles.featureLine}>{feature.line}</p>
        {feature.caption && <span className={styles.featureCaption}>{feature.caption}</span>}
      </div>
    </section>
  );
}
