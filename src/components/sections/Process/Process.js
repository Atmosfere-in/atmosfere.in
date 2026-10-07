"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TextLink } from "@/components/ui/Button/Button";
import styles from "./Process.module.css";

const AUTO_ADVANCE_MS = 5500;

// Four tall photographic panels, one per stage. The active stage widens to
// reveal its description (like the hub banners); stages advance on their
// own until the visitor hovers, focuses or taps one. On phones every stage
// is shown as its own card.
// steps: [{ name, text, image: { src, alt } }]
export default function Process({ eyebrow, title, intro, steps, link }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % steps.length), AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [active, paused, steps.length]);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div className={styles.aside}>
            {intro && <p className={styles.intro}>{intro}</p>}
            {link && <TextLink href={link.href}>{link.label}</TextLink>}
          </div>
        </div>

        <ol
          className={styles.panels}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <li
                key={step.name}
                className={`${styles.panel} ${isActive ? styles.active : ""}`}
                onMouseEnter={() => setActive(i)}
              >
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.image}
                />
                <span className={styles.shade} aria-hidden="true" />

                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isActive}
                  onClick={() => setActive(i)}
                  onFocus={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                >
                  <span className={styles.number}>{pad(i + 1)}</span>
                  <span className={styles.body}>
                    <span className={styles.name}>{step.name}</span>
                    <span className={styles.detail}>
                      <span className={styles.text}>{step.text}</span>
                    </span>
                  </span>
                </button>

                <span
                  className={`${styles.progress} ${isActive && !paused ? styles.running : ""}`}
                  style={{ "--duration": `${AUTO_ADVANCE_MS}ms` }}
                  aria-hidden="true"
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
