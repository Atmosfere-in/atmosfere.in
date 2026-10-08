"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./StageCarousel.module.css";

// The six stages of a story as a compact, swipeable row of cards (about
// three across). Each card leads with the stage's photograph, or with its
// numeral on a sand panel when there is none.
// stages: [{ title, text, points?, image? }]
export default function StageCarousel({ stages }) {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const pad = (n) => String(n).padStart(2, "0");

  const step = () => {
    const card = trackRef.current?.querySelector("li");
    return card ? card.getBoundingClientRect().width + 24 : 0;
  };

  const scroll = (dir) => trackRef.current?.scrollBy({ left: dir * step(), behavior: "smooth" });

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setProgress(max > 0 ? track.scrollLeft / max : 1);
  };

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.head}`}>
        <div className="reveal">
          <span className="eyebrow">The Story</span>
          <h2 className={styles.title}>From the first brief to the final walkthrough.</h2>
        </div>
        <div className={styles.controls}>
          <button type="button" className={styles.arrow} onClick={() => scroll(-1)} disabled={progress <= 0.01} aria-label="Previous stage">
            <Arrow direction="left" size={18} />
          </button>
          <button type="button" className={styles.arrow} onClick={() => scroll(1)} disabled={progress >= 0.99} aria-label="Next stage">
            <Arrow size={18} />
          </button>
        </div>
      </div>

      <div className={styles.viewport}>
        <ol ref={trackRef} className={styles.track} onScroll={onScroll}>
          {stages.map((stage, i) => (
            <li key={stage.title} className={styles.item}>
              <article className={`${styles.card} ${i === stages.length - 1 ? styles.last : ""}`}>
                <div className={styles.media}>
                  {stage.image ? (
                    <Image src={stage.image.src} alt={stage.image.alt} fill quality={85} sizes="(max-width: 768px) 80vw, 30vw" className={styles.image} />
                  ) : (
                    <span className={styles.numeral} aria-hidden="true">
                      {pad(i + 1)}
                    </span>
                  )}
                  <span className={styles.badge}>
                    {pad(i + 1)} / {pad(stages.length)}
                  </span>
                </div>
                <div className={styles.body}>
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.text}>{stage.text}</p>
                  {stage.points && (
                    <ul className={styles.points}>
                      {stage.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>

      <div className={`container ${styles.footer}`}>
        <span className={styles.rule} aria-hidden="true">
          <span className={styles.ruleFill} style={{ transform: `scaleX(${Math.max(0.12, progress)})` }} />
        </span>
      </div>
    </section>
  );
}
