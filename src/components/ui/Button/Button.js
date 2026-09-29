import Link from "next/link";
import styles from "./Button.module.css";

// variant: "primary" (accent fill) | "outline" | "light" (for dark photography)
export default function Button({
  href,
  variant = "primary",
  arrow = false,
  className = "",
  children,
  ...rest
}) {
  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {arrow && (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      )}
    </Link>
  );
}

export function TextLink({ href, light = false, children }) {
  return (
    <Link
      href={href}
      className={`${styles.textLink} ${light ? styles.textLinkLight : ""}`}
    >
      <span>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </Link>
  );
}
