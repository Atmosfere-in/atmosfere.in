import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { TextLink } from "@/components/ui/Button/Button";
import { process } from "@/data/spaces";
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
};

export default function Process() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          action={<TextLink href="/spaces/process">See the full process</TextLink>}
        />

        <ol className={styles.steps}>
          {process.steps.map((step, i) => (
            <li key={step.name} className={`${styles.step} reveal`}>
              <div className={styles.top}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  focusable="false"
                >
                  {icons[step.icon]}
                </svg>
                <span className={styles.number}>0{i + 1}</span>
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
