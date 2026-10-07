"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TextLink } from "@/components/ui/Button/Button";
import styles from "./Process.module.css";

const AUTO_ADVANCE_MS = 5000;

// Editorial stage list on the left; the active stage's photograph fills the
// frame on the right. Stages advance on their own until the visitor hovers,
// focuses or clicks one. On phones every stage shows with its own photo.
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
    <section
      className={`section ${styles.section}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          {intro && <p className={styles.intro}>{intro}</p>}

          <ol className={styles.steps}>
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <li
                  key={step.name}
                  className={`${styles.step} ${isActive ? styles.active : ""}`}
                >
                  <button
                    type="button"
                    className={styles.stepButton}
                    aria-expanded={isActive}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => {
                      setActive(i);
                      setPaused(true);
                    }}
                  >
                    <span className={styles.number}>{pad(i + 1)}</span>
                    <span className={styles.name}>{step.name}</span>
                  </button>
                  <div className={styles.detail}>
                    <p className={styles.text}>{step.text}</p>
                  </div>
                  {/* Phones: each stage carries its own photograph. */}
                  <div className={styles.inlineMedia}>
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      fill
                      sizes="100vw"
                      className={styles.image}
                    />
                  </div>
                  <span
                    className={`${styles.progress} ${isActive && !paused ? styles.running : ""}`}
                    style={{ "--duration": `${AUTO_ADVANCE_MS}ms` }}
                    aria-hidden="true"
                  />
                </li>
              );
            })}
          </ol>

          {link && (
            <div className={styles.link}>
              <TextLink href={link.href}>{link.label}</TextLink>
            </div>
          )}
        </div>

        <div className={styles.media} aria-hidden="true">
          {steps.map((step, i) => (
            <div
              key={step.name}
              className={`${styles.frame} ${i === active ? styles.frameActive : ""}`}
            >
              <Image
                src={step.image.src}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className={styles.image}
              />
            </div>
          ))}
          <span className={styles.caption}>
            {pad(active + 1)} — {steps[active].name}
          </span>
        </div>
      </div>
    </section>
  );
}
