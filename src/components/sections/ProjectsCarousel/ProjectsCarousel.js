"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./ProjectsCarousel.module.css";

// items: [{ href, name, details, side, image }]
// Frosted-glass arrows float over the images; a slim progress rule and a
// counter sit underneath.
export default function ProjectsCarousel({ eyebrow, title, items }) {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(1);

  const cardStep = () => {
    const card = trackRef.current?.querySelector("li");
    return card ? card.getBoundingClientRect().width + 24 : 0;
  };

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * cardStep(), behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setProgress(max > 0 ? track.scrollLeft / max : 0);
    const step = cardStep();
    if (step) setCurrent(Math.min(items.length, Math.round(track.scrollLeft / step) + 1));
  };

  const atStart = progress <= 0.01;
  const atEnd = progress >= 0.99;
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} layout="split" />
      </div>

      <div className={styles.viewport}>
        <ul ref={trackRef} className={styles.track} onScroll={onScroll}>
          {items.map((item, i) => (
            <li key={item.href} className={styles.item}>
              <Link href={item.href} className={styles.card}>
                <div className={styles.media}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 78vw, 30vw"
                    className={styles.image}
                  />
                  <span className={styles.index}>{pad(i + 1)}</span>
                  <span className={styles.view}>
                    View project <Arrow size={14} />
                  </span>
                </div>
                <div className={styles.meta}>
                  <div>
                    <h3 className={styles.name}>{item.name}</h3>
                    <p className={styles.details}>{item.details}</p>
                  </div>
                  {item.side && <span className={styles.area}>{item.side}</span>}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`${styles.arrow} ${styles.prev}`}
          onClick={() => scroll(-1)}
          disabled={atStart}
          aria-label="Previous projects"
        >
          <Arrow direction="left" size={22} />
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          onClick={() => scroll(1)}
          disabled={atEnd}
          aria-label="Next projects"
        >
          <Arrow size={22} />
        </button>
      </div>

      <div className={`container ${styles.footer}`}>
        <span className={styles.counter} aria-live="polite">
          <strong>{pad(current)}</strong> / {pad(items.length)}
        </span>
        <span className={styles.rule} aria-hidden="true">
          <span
            className={styles.ruleFill}
            style={{ transform: `scaleX(${Math.max(0.08, progress)})` }}
          />
        </span>
      </div>
    </section>
  );
}
