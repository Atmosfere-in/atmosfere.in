import styles from "./Logo.module.css";

// Placeholder mark until the official logo arrives: a thin-line doorway,
// echoing "one house, three rooms".
export default function Logo({ tone = "dark" }) {
  return (
    <span className={`${styles.logo} ${styles[tone]}`}>
      <svg
        className={styles.mark}
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="0.75" y="0.75" width="30.5" height="30.5" />
        <path d="M9 31.25V15a7 7 0 0 1 14 0v16.25" />
        <path d="M16 31.25V22" />
      </svg>
      <span className={styles.wordmark}>Atmosfere</span>
    </span>
  );
}
