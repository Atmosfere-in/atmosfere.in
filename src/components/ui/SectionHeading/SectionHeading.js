import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  action,
  light = false,
}) {
  return (
    <div
      className={`${styles.heading} ${styles[align]} ${light ? styles.light : ""}`}
    >
      <div className={styles.text}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className={styles.title}>{title}</h2>
        {intro && <p className={styles.intro}>{intro}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
