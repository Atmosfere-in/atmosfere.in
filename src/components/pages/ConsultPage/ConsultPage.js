import { ConsultTabs } from "@/components/ConsultModal/ConsultModal";
import { contact } from "@/data/contact";
import styles from "./ConsultPage.module.css";

// Standalone booking page (when the link is opened directly rather than
// clicked on the site): what happens next on the left, the same Form |
// Calendly tabs as the popup on the right.
// steps: [{ title, text }]
export default function ConsultPage({ vertical, title, intro, steps, showType = false }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.info} reveal`}>
          <span className="eyebrow">What happens next</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.intro}>{intro}</p>

          <ol className={styles.steps}>
            {steps.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <dl className={styles.contact}>
            <div>
              <dt>Call</dt>
              <dd>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={contact.emailHref}>{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt>Studio</dt>
              <dd>{contact.city}</dd>
            </div>
          </dl>
        </div>

        <div className={`${styles.card} reveal`} style={{ "--reveal-delay": "120ms" }}>
          <span className="eyebrow">{vertical}</span>
          <h2 className={styles.cardTitle}>Book a consultation</h2>
          <ConsultTabs vertical={vertical} showType={showType} />
        </div>
      </div>
    </section>
  );
}
