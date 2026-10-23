"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./ProjectGallery.module.css";

// A project shown through its photographs alone: a full-bleed opening
// photograph beneath the name and facts, an editorial grid of every other
// photograph (opening in a lightbox), and the way to the written case study
// and the neighbouring projects.
// photos: [{ src, alt }] · meta: [{ label, value }] · prev/next: { href, name, details }
export default function ProjectGallery({ name, lead, meta, photos, caseStudyHref, prev, next }) {
  const [hero, ...rest] = photos;
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
      {/* Opening: the name and facts on the light page, the photograph framed
          beneath them. Nothing is written over the photograph. */}
      <section className={styles.opening}>
        <div className="container">
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
          <div className={styles.openingHead}>
            <h1 className={styles.title}>{name}</h1>
            <dl className={styles.meta}>
              {meta.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <button type="button" className={styles.heroMedia} onClick={() => show(0)} aria-label="Open the photograph">
            <Image src={hero.src} alt={hero.alt} fill preload quality={90} sizes="(max-width: 1760px) 100vw, 1760px" className={styles.image} />
            <span className={styles.heroCount} aria-hidden="true">
              01 / {String(photos.length).padStart(2, "0")}
            </span>
          </button>
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
              <button type="button" className={styles.tile} onClick={() => show(i + 1)} aria-label={`Open photograph ${i + 2} of ${photos.length}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={88}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 1200px"
                  className={styles.image}
                />
                <span className={styles.count} aria-hidden="true">
                  {String(i + 2).padStart(2, "0")}
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
