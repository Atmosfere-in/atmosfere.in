"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Arrow from "@/components/ui/Icon/Arrow";
import lightbox from "@/components/pages/ProjectGallery/ProjectGallery.module.css";
import styles from "./SiteDiary.module.css";

// Behind the scenes: site photographs and short clips from projects while
// they were being built, each labelled with its project and stage. Every
// tile opens full size in the same lightbox the project galleries use.
// items: [{ kind: "photo" | "clip", src, poster?, alt, project, stage }]
export default function SiteDiary({ eyebrow, title, intro, items = [] }) {
  const total = items.length;
  const [open, setOpen] = useState(null);

  const show = useCallback((i) => setOpen(((i % total) + total) % total), [total]);
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(open + 1);
      if (e.key === "ArrowLeft") show(open - 1);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, show]);

  if (!total) return null;

  return (
    <section className={`section ${styles.section}`} aria-label={title}>
      <div className="container">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </div>

        <ul className={styles.grid}>
          {items.map((item, i) => (
            <li key={item.src} className={`${styles.cell} reveal`} style={{ "--reveal-delay": `${(i % 3) * 80}ms` }}>
              <button type="button" className={styles.tile} onClick={() => show(i)} aria-label={`${item.project}: ${item.alt}`}>
                {item.kind === "clip" ? (
                  <video src={item.src} poster={item.poster} muted autoPlay loop playsInline preload="metadata" className={styles.video} />
                ) : (
                  <Image src={item.src} alt={item.alt} fill quality={85} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" className={styles.image} />
                )}
                <span className={styles.label}>
                  <span className={styles.project}>{item.project}</span>
                  <span className={styles.stage}>
                    {item.stage}
                    {item.kind === "clip" && <span className={styles.badge}>Clip</span>}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {open !== null && (
        <div className={lightbox.lightbox} role="dialog" aria-modal="true" aria-label={`${items[open].project}: ${open + 1} of ${total}`} onClick={close}>
          <div className={lightbox.lightboxMedia} onClick={(e) => e.stopPropagation()}>
            {items[open].kind === "clip" ? (
              <video key={items[open].src} src={items[open].src} poster={items[open].poster} autoPlay muted loop playsInline controls className={lightbox.lightboxVideo} />
            ) : (
              <Image src={items[open].src} alt={items[open].alt} fill quality={90} sizes="100vw" className={lightbox.lightboxImage} />
            )}
          </div>
          <div className={lightbox.lightboxBar} onClick={(e) => e.stopPropagation()}>
            <span className={lightbox.lightboxCount}>
              {String(open + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span className={lightbox.lightboxCaption}>
              {items[open].project} · {items[open].stage}. {items[open].alt}
            </span>
          </div>
          <button type="button" className={`${lightbox.lightboxNav} ${lightbox.lightboxPrev}`} onClick={(e) => { e.stopPropagation(); show(open - 1); }} aria-label="Previous">
            <Arrow size={22} className={lightbox.arrowBack} />
          </button>
          <button type="button" className={`${lightbox.lightboxNav} ${lightbox.lightboxNext}`} onClick={(e) => { e.stopPropagation(); show(open + 1); }} aria-label="Next">
            <Arrow size={22} />
          </button>
          <button type="button" className={lightbox.lightboxClose} onClick={close} aria-label="Close">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
