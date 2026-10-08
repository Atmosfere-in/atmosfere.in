import Image from "next/image";
import styles from "./StoryDeep.module.css";

// Optional long-form blocks for flagship case studies. Each renders only
// when its data is present, so shorter stories keep the simple layout.

// Key facts at a glance. items: [{ label, value }]
export function Glance({ items }) {
  return (
    <section className={styles.glance} aria-label="At a glance">
      <div className="container">
        <dl className={`${styles.glanceGrid} reveal`}>
          {items.map((item) => (
            <div key={item.label} className={styles.glanceItem}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// The brief in full, beside the constraints the design had to answer.
// context: { title, body[], constraints[{ title, text }] }
export function Context({ context }) {
  return (
    <section className="section">
      <div className={`container ${styles.contextGrid}`}>
        <div className="reveal">
          <span className="eyebrow">The Brief</span>
          <h2 className={styles.title}>{context.title}</h2>
          {context.body.map((p) => (
            <p key={p.slice(0, 32)} className={styles.body}>
              {p}
            </p>
          ))}
        </div>
        <div className={`${styles.constraints} reveal`} style={{ "--reveal-delay": "120ms" }}>
          <h3 className={styles.smallTitle}>What we had to solve</h3>
          <ul>
            {context.constraints.map((c) => (
              <li key={c.title}>
                <strong>{c.title}</strong>
                <span>{c.text}</span>
              </li>
            ))}
          </ul>
        </div>
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

// A small comparison or schedule table (options tested, room mix…).
// table: { eyebrow, title, intro?, columns[], rows[[...]], highlight? (row index), note? }
export function DataTable({ table }) {
  return (
    <section className="section">
      <div className="container">
        <div className={`${styles.tableHead} reveal`}>
          <span className="eyebrow">{table.eyebrow}</span>
          <h2 className={styles.title}>{table.title}</h2>
          {table.intro && <p className={styles.body}>{table.intro}</p>}
        </div>
        <div className={`${styles.tableWrap} reveal`}>
          <table className={styles.table}>
            <thead>
              <tr>
                {table.columns.map((c) => (
                  <th key={c} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, i) => (
                <tr key={row[0]} className={i === table.highlight ? styles.highlight : undefined}>
                  {row.map((cell, j) =>
                    j === 0 ? (
                      <th key={j} scope="row">
                        {cell}
                      </th>
                    ) : (
                      <td key={j}>{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {table.note && <p className={styles.tableNote}>{table.note}</p>}
      </div>
    </section>
  );
}

// Project timeline as a horizontal sequence of phases.
// timeline: [{ phase, when, text }]
export function Timeline({ timeline }) {
  return (
    <section className={`section ${styles.timelineSection}`}>
      <div className="container">
        <div className={`${styles.tableHead} reveal`}>
          <span className="eyebrow">Timeline</span>
          <h2 className={styles.title}>How the months unfolded.</h2>
        </div>
        <ol className={styles.timeline}>
          {timeline.map((t, i) => (
            <li key={t.phase} className={`${styles.phase} reveal`} style={{ "--reveal-delay": `${i * 90}ms` }}>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.when}>{t.when}</span>
              <h3 className={styles.phaseTitle}>{t.phase}</h3>
              <p className={styles.phaseText}>{t.text}</p>
            </li>
          ))}
        </ol>
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
