import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./HubBanners.module.css";

function BannerContent({ vertical, live }) {
  return (
    <>
      <div className={styles.media}>
        <Image
          src={vertical.image.src}
          alt={vertical.image.alt}
          fill
          preload
          quality={90}
          sizes="(max-width: 768px) 100vw, 45vw"
          className={styles.image}
          style={{ objectPosition: vertical.image.position }}
        />
      </div>
      <div className={styles.scrim} aria-hidden="true" />

      <span className={styles.index} aria-hidden="true">
        {vertical.index}
      </span>

      <div className={styles.content}>
        <p className={styles.tagline}>{vertical.tagline}</p>
        <h2 className={styles.name}>{vertical.name}</h2>
        <p className={styles.description}>{vertical.description}</p>

        {live ? (
          <span className={styles.cta}>
            Explore <Arrow size={16} />
          </span>
        ) : (
          <span className={styles.soon}>Coming soon</span>
        )}
      </div>
    </>
  );
}

export default function HubBanners({ verticals }) {
  return (
    <section className={styles.banners} aria-label="Choose an Atmosfere vertical">
      {verticals.map((vertical, i) => {
        const live = Boolean(vertical.href);
        const style = { "--delay": `${i * 120}ms` };

        return live ? (
          <Link
            key={vertical.id}
            href={vertical.href}
            className={`${styles.banner} ${styles.link}`}
            style={style}
          >
            <BannerContent vertical={vertical} live />
          </Link>
        ) : (
          <div
            key={vertical.id}
            className={`${styles.banner} ${styles.disabled}`}
            style={style}
            aria-disabled="true"
          >
            <BannerContent vertical={vertical} live={false} />
          </div>
        );
      })}
    </section>
  );
}
