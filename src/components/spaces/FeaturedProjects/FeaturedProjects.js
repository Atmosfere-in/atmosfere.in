"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { projects } from "@/data/spaces";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!track || !card) return;
    const step = card.getBoundingClientRect().width + 24;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work."
          intro="Homes and workplaces we've designed and built, start to finish."
          action={
            <div className={styles.controls}>
              <button
                type="button"
                className={styles.arrow}
                onClick={() => scroll(-1)}
                aria-label="Previous projects"
              >
                ←
              </button>
              <button
                type="button"
                className={styles.arrow}
                onClick={() => scroll(1)}
                aria-label="Next projects"
              >
                →
              </button>
            </div>
          }
        />
      </div>

      <ul ref={trackRef} className={styles.track}>
        {projects.map((project) => (
          <li key={project.slug} className={styles.item}>
            <Link
              href={`/spaces/projects/${project.slug}`}
              className={styles.card}
            >
              <div className={styles.media}>
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 768px) 80vw, 32vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.meta}>
                <div>
                  <h3 className={styles.name}>{project.name}</h3>
                  <p className={styles.details}>
                    {project.type} · {project.location}
                  </p>
                </div>
                <span className={styles.area}>{project.area}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
