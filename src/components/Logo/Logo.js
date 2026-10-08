import { WORDMARK_PATH } from "./wordmarkPath";
import styles from "./Logo.module.css";

// The Atmosfere logo from atmosfere.in: the arched doorway mark followed by
// the lowercase wordmark. Both are paths, so it renders crisply at any size
// and inherits colour from `currentColor`.
const MARK_WIDTH = 382;
const GAP = 150;
const WORDMARK_SCALE = 4.3; // wordmark cap height ≈ 72% of the mark
const WORDMARK_X = MARK_WIDTH + GAP - 4.3 * WORDMARK_SCALE;
const WIDTH = Math.round(MARK_WIDTH + GAP + 598.5 * WORDMARK_SCALE);
const HEIGHT = 510;

function MarkPaths() {
  return (
    <>
      <path
        fillRule="evenodd"
        d="M342 500V191c0-83.395-67.605-151-151-151S40 107.605 40 191v309H9c-3.042 0-6.044.166-9 .488V191C0 85.514 85.514 0 191 0s191 85.514 191 191v310.19a82.6 82.6 0 0 0-14-1.19z"
      />
      <path d="M75 500.053h39.5c.167-89.166-1.011-273.892-.5-299.5.5-25.076 11.482-48.737 23-60.5 51.457-52.553 124.833-7.666 162 20.5-15.2-56.4-66-77.5-89.5-81-107.2-8.4-134.5 81-134.5 121z" />
      <path d="M307.5 358c0 11.874-9.626 21.5-21.5 21.5s-21.5-9.626-21.5-21.5 9.626-21.5 21.5-21.5 21.5 9.626 21.5 21.5z" />
    </>
  );
}

export default function Logo({ tone = "dark", className = "" }) {
  return (
    <svg
      className={`${styles.logo} ${styles[tone]} ${className}`}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label="atmosfere"
    >
      <MarkPaths />
      <path
        transform={`translate(${WORDMARK_X} 500) scale(${WORDMARK_SCALE})`}
        d={WORDMARK_PATH}
      />
    </svg>
  );
}
