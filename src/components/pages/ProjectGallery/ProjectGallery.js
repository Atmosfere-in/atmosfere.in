"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./ProjectGallery.module.css";

// A project shown through its photographs alone: a small centred masthead,
// the first three photographs as an opening mosaic, an editorial grid of
// every other photograph (all opening in a lightbox), and the way to the
// written case study and the neighbouring projects.
// photos: [{ src, alt }] · meta: [{ label, value }] · prev/next: { href, name, details }
export default function ProjectGallery({ name, lead, meta, photos, caseStudyHref, prev, next }) {
  // The first three photographs open the page together; the rest follow in the grid.
  const openingCount = photos.length >= 3 ? 3 : 1;
  const first = photos.slice(0, openingCount);
  const rest = photos.slice(openingCount);
  const [open, setOpen] = useState(null); // index into `photos`, or null

  const show = useCallback((i) => setOpen(((i % photos.length) + photos.length) % photos.length), [photos.length]);
  const close = useCallback(() => setOpen(null), []);

  // The page opens on the light background, so the floating header keeps
  // its dark text here instead of the white it uses over photographs.
  useEffect(() => {
    document.body.setAttribute("data-light-opening", "");
    return () => document.body.removeAttribute("data-light-opening");
  }, []);

  // Keyboard and scroll lock while the lightbox is open.
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

  return (
    <>
      {/* Opening: a quiet centred masthead, then the first photographs at
          once: one tall, two stacked beside it. Nothing is set over them. */}
      <section className={styles.opening}>
        <div className="container">
          <header className={styles.masthead}>
            <nav aria-label="Breadcrumb" className={styles.crumbs}>
              <ol>
                <li>
                  <Link href="/spaces">Spaces</Link>
                </li>
                <li>
                  <Link href="/spaces/projects">Projects</Link>
                </li>
              </ol>
            </nav>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.facts}>
              {meta.map((m, i) => (
                <span key={m.label}>
                  {i > 0 && (
                    <span className={styles.dot} aria-hidden="true">
                      ·
                    </span>
                  )}
                  {m.value}
                </span>
              ))}
            </p>
          </header>
          <ul className={`${styles.mosaic} ${first.length < 3 ? styles.mosaicSingle : ""}`}>
            {first.map((photo, i) => (
              <li key={photo.src} className={i === 0 ? styles.mosaicMain : styles.mosaicSide}>
                <button type="button" className={styles.tile} onClick={() => show(i)} aria-label={`Open photograph ${i + 1} of ${photos.length}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    preload={i === 0}
                    quality={90}
                    sizes={i === 0 ? "(max-width: 900px) 100vw, (max-width: 1760px) 66vw, 1180px" : "(max-width: 640px) 100vw, (max-width: 900px) 50vw, (max-width: 1760px) 33vw, 580px"}
                    className={styles.image}
                  />
                  <span className={styles.count} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* One line about the project and the way to its story. */}
      <section className={`section ${styles.intro}`}>
        <div className={`container ${styles.introInner}`}>
          <p className={`${styles.lead} reveal`}>{lead}</p>
          <Link href={caseStudyHref} className={`${styles.storyLink} reveal`} style={{ "--reveal-delay": "120ms" }}>
            Read the case study <Arrow size={14} />
          </Link>
        </div>
      </section>

      {/* The photographs, in an editorial rhythm: wide, pair, third-and-two-thirds. */}
      <section className={`section ${styles.gallery}`} aria-label="Photographs">
        <ul className={`container ${styles.grid}`}>
          {rest.map((photo, i) => (
            <li key={photo.src} className={`${styles.cell} reveal-image`} style={{ "--reveal-delay": `${(i % 2) * 120}ms` }}>
              <button type="button" className={styles.tile} onClick={() => show(i + openingCount)} aria-label={`Open photograph ${i + openingCount + 1} of ${photos.length}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={88}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 1200px"
                  className={styles.image}
                />
                <span className={styles.count} aria-hidden="true">
                  {String(i + openingCount + 1).padStart(2, "0")}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Neighbouring projects. */}
      <nav className={`section ${styles.neighbours}`} aria-label="Other projects">
        <div className={`container ${styles.neighboursInner}`}>
          <Link href={prev.href} className={`${styles.neighbour} ${styles.neighbourPrev}`}>
            <span className={styles.neighbourLabel}>Previous project</span>
            <span className={styles.neighbourName}>
              <Arrow size={18} className={styles.arrowBack} /> {prev.name}
            </span>
            <span className={styles.neighbourDetails}>{prev.details}</span>
          </Link>
          <Link href="/spaces/projects" className={styles.all}>
            All projects
          </Link>
          <Link href={next.href} className={`${styles.neighbour} ${styles.neighbourNext}`}>
            <span className={styles.neighbourLabel}>Next project</span>
            <span className={styles.neighbourName}>
              {next.name} <Arrow size={18} />
            </span>
            <span className={styles.neighbourDetails}>{next.details}</span>
          </Link>
        </div>
      </nav>

      {open !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={`${name}: photograph ${open + 1} of ${photos.length}`} onClick={close}>
          <div className={styles.lightboxMedia} onClick={(e) => e.stopPropagation()}>
            <Image src={photos[open].src} alt={photos[open].alt} fill quality={90} sizes="100vw" className={styles.lightboxImage} />
          </div>
          <div className={styles.lightboxBar} onClick={(e) => e.stopPropagation()}>
            <span className={styles.lightboxCount}>
              {String(open + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </span>
            <span className={styles.lightboxCaption}>{photos[open].alt}</span>
          </div>
          <button type="button" className={`${styles.lightboxNav} ${styles.lightboxPrev}`} onClick={(e) => { e.stopPropagation(); show(open - 1); }} aria-label="Previous photograph">
            <Arrow size={22} className={styles.arrowBack} />
          </button>
          <button type="button" className={`${styles.lightboxNav} ${styles.lightboxNext}`} onClick={(e) => { e.stopPropagation(); show(open + 1); }} aria-label="Next photograph">
            <Arrow size={22} />
          </button>
          <button type="button" className={styles.lightboxClose} onClick={close} aria-label="Close">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
