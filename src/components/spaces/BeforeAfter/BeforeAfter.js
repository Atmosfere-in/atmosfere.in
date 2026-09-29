"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { beforeAfter } from "@/data/spaces";
import styles from "./BeforeAfter.module.css";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow={beforeAfter.eyebrow}
          title={beforeAfter.title}
          intro={`Drag to compare · ${beforeAfter.project}`}
        />

        <div className={styles.frame} style={{ "--pos": `${position}%` }}>
          <Image
            src={beforeAfter.after.src}
            alt={beforeAfter.after.alt}
            fill
            sizes="(max-width: 1440px) 100vw, 1376px"
            className={styles.image}
          />
          <div className={styles.before}>
            <Image
              src={beforeAfter.before.src}
              alt={beforeAfter.before.alt}
              fill
              sizes="(max-width: 1440px) 100vw, 1376px"
              className={`${styles.image} ${styles.beforeImage}`}
            />
          </div>

          <span className={`${styles.label} ${styles.labelBefore}`}>Before</span>
          <span className={`${styles.label} ${styles.labelAfter}`}>After</span>

          <div className={styles.handle} aria-hidden="true">
            <span className={styles.knob}>↔</span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className={styles.range}
            aria-label="Reveal before and after"
          />
        </div>
      </div>
    </section>
  );
}
