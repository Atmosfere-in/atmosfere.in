import Link from "next/link";
import Arrow from "@/components/ui/Icon/Arrow";
import styles from "./Button.module.css";

// variant: "primary" (charcoal) | "outline" | "light" | "onImage" (ivory)
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
      {arrow && <Arrow size={16} className={styles.arrow} />}
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
      <Arrow size={16} className={styles.arrow} />
    </Link>
  );
}
