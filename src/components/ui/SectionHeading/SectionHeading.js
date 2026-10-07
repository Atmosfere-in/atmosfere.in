import styles from "./SectionHeading.module.css";

// layout "stacked": eyebrow, title, intro in one column, action on the right.
// layout "split": title on the left, intro + action on the right — about half
// the height, so the content below stays on screen with its heading.
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  layout = "stacked",
  action,
  light = false,
}) {
  const classes = [
    styles.heading,
    styles[align],
    styles[layout],
    light ? styles.light : "",
    "reveal",
  ].join(" ");

  if (layout === "split") {
    return (
      <div className={classes}>
        <div className={styles.text}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.aside}>
          {intro && <p className={styles.intro}>{intro}</p>}
          {action && <div className={styles.action}>{action}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={classes}>
      <div className={styles.text}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className={styles.title}>{title}</h2>
        {intro && <p className={styles.intro}>{intro}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
