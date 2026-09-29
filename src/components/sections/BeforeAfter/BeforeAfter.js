"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./BeforeAfter.module.css";

// Heading row + comparison slider. Both photos should show the same room;
// the "before" is muted automatically unless `before.asIs` is set (for an
// image that is already graded).
export default function BeforeAfter({
  eyebrow,
  title,
  project,
  before,
  after,
  labels = ["Before", "After"],
}) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const draggingRef = useRef(false);

  // Click or drag anywhere on the frame (mouse, touch, pen), plus an ARIA
  // slider on the knob for keyboard and screen-reader users. A native
  // <input type="range"> is avoided: it stalled page painting in testing.
  const moveTo = (e, frame) => {
    const rect = frame.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, Math.round(pct))));
  };

  const onPointerDown = (e) => {
    // Stop the browser's native image drag, which cancels pointer events.
    e.preventDefault();
    e.currentTarget.setPointerCapture?.(e.pointerId);
    draggingRef.current = true;
    setDragging(true);
    moveTo(e, e.currentTarget);
  };

  const onPointerMove = (e) => {
    if (draggingRef.current) moveTo(e, e.currentTarget);
  };

  const stopDragging = () => {
    draggingRef.current = false;
    setDragging(false);
  };

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 2;
    const next = {
      ArrowLeft: position - step,
      ArrowDown: position - step,
      ArrowRight: position + step,
      ArrowUp: position + step,
      Home: 0,
      End: 100,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setPosition(Math.min(100, Math.max(0, next)));
  };

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.heading}>
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <p className={styles.hint}>
            Click or drag to compare
            <span className={styles.project}>{project}</span>
          </p>
        </div>

        <div
          className={`${styles.frame} ${dragging ? styles.dragging : ""}`}
          style={{ "--pos": `${position}%` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onLostPointerCapture={stopDragging}
          onDragStart={(e) => e.preventDefault()}
        >
          <Image
            src={after.src}
            alt={after.alt}
            fill
            draggable={false}
            sizes="(max-width: 1440px) 100vw, 1376px"
            className={styles.image}
          />
          <div className={styles.before}>
            <Image
              src={before.src}
              alt={before.alt}
              fill
              draggable={false}
              sizes="(max-width: 1440px) 100vw, 1376px"
              className={`${styles.image} ${before.asIs ? "" : styles.beforeImage}`}
            />
          </div>

          <span className={`${styles.label} ${styles.labelBefore}`}>{labels[0]}</span>
          <span className={`${styles.label} ${styles.labelAfter}`}>{labels[1]}</span>

          <div className={styles.handle}>
            <span
              className={styles.knob}
              role="slider"
              tabIndex={0}
              aria-label="Reveal before and after"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={position}
              aria-valuetext={`${position}% ${labels[0].toLowerCase()}`}
              onKeyDown={onKeyDown}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
