// Thin-line arrow (1.25px stroke) used across buttons, links and carousels.
// direction: "right" | "left" | "up-right"
export default function Arrow({ direction = "right", size = 18, className = "" }) {
  const rotate = { right: 0, left: 180, "up-right": -45 }[direction];
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <path d="M3 12h17" />
      <path d="M14 6l6 6-6 6" />
    </svg>
  );
}
