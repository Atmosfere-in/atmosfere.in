import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { TextLink } from "@/components/ui/Button/Button";
import styles from "./Process.module.css";

// Thin-line icons (1.25px stroke), per the UI direction.
const icons = {
  consult: (
    <>
      <path d="M6 9h20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H14l-6 5v-5H6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2Z" />
      <path d="M10 15h12M10 19h8" />
    </>
  ),
  design: (
    <>
      <path d="M7 25 21 11l3 3-14 14H7v-3Z" />
      <path d="m18 14 3 3" />
      <path d="M5 5h14M5 5v6M10 5v3M15 5v3" />
    </>
  ),
  execute: (
    <>
      <path d="M4 28h24" />
      <path d="M7 28V12l9-6 9 6v16" />
      <path d="M13 28v-8h6v8" />
    </>
  ),
  handover: (
    <>
      <circle cx="11" cy="16" r="5" />
      <path d="M16 16h12M24 16v4M28 16v3" />
    </>
  ),
  understand: (
    <>
      <circle cx="14" cy="14" r="8" />
      <path d="m20 20 8 8" />
    </>
  ),
  plan: (
    <>
      <rect x="5" y="5" width="22" height="22" />
      <path d="M5 16h10v11M15 5v6M20 16h7" />
    </>
  ),
  advise: (
    <>
      <path d="M16 4v4M6 8l3 3M26 8l-3 3" />
      <path d="M11 22a7 7 0 1 1 10 0c-1 1-1.5 2-1.5 3.5h-7c0-1.5-.5-2.5-1.5-3.5Z" />
      <path d="M13 29h6" />
    </>
  ),
};

// A dark, photograph-backed band with the stages laid out as a timeline:
// a hairline runs across, each stage hangs from a node on it.
export default function Process({ eyebrow, title, intro, steps, image, link }) {
  return (
    <section className={styles.section}>
      <Image
        src={image.src}
        alt=""
        fill
        sizes="100vw"
        className={styles.bg}
      />

      <div className={`container ${styles.inner}`}>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          intro={intro}
          light
          action={
            link && (
              <TextLink href={link.href} light>
                {link.label}
              </TextLink>
            )
          }
        />

        <ol className={styles.timeline}>
          {steps.map((step, i) => (
            <li key={step.name} className={`${styles.step} reveal`}>
              <span className={styles.node} aria-hidden="true" />
              <div className={styles.top}>
                <span className={styles.number}>0{i + 1}</span>
                <svg
                  className={styles.icon}
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  focusable="false"
                >
                  {icons[step.icon]}
                </svg>
              </div>
              <h3 className={styles.name}>{step.name}</h3>
              <p className={styles.text}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
