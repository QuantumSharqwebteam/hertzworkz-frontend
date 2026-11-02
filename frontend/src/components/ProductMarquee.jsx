/* eslint-disable react/prop-types -- repo has no prop-types dependency */
import "./ProductMarquee.css";

// --- Editable constants ---
const DURATION = "24s"; // one full loop of the marquee
const DIRECTION = "normal"; // "normal" or "reverse" - keeps travel direction constant
const TILT = "0deg"; // "auto" rotates each pill to follow the curve, or a fixed angle (buttons stay upright)
const PATH =
  'path("M -150 150 C 100 190, 250 190, 450 90 S 750 30, 950 80 S 1300 110, 1450 70")';
const CONTAINER_HEIGHT = 220; // px

// Infinite marquee of decorative pills travelling along a wavy curved
// offset-path - purely visual, not clickable. Items are duplicated and
// evenly spaced with negative animation-delay so the path never looks empty.
// A reduced-motion fallback (simple wrapped row, no animation) is swapped in
// purely via the CSS media query in ProductMarquee.css.
export default function ProductMarquee({ tabs }) {
  const items = [...tabs, ...tabs];
  const total = items.length;
  const durationSeconds = parseFloat(DURATION);

  return (
    <div
      className="product-marquee"
      style={{ "--marquee-height": `${CONTAINER_HEIGHT}px` }}
    >
      <div className="product-marquee__track">
        {items.map((tab, index) => (
          <span
            key={`${tab.value}-${index}`}
            className="product-marquee__pill"
            style={{
              offsetPath: PATH,
              offsetRotate: TILT === "auto" ? "auto" : TILT,
              animationDuration: DURATION,
              animationDirection: DIRECTION,
              animationDelay: `${-(durationSeconds / total) * index}s`,
            }}
          >
            {tab.label}
          </span>
        ))}
      </div>

      {/* Shown only under prefers-reduced-motion (see .product-marquee__fallback in the CSS) */}
      <div className="product-marquee__fallback">
        {tabs.map((tab) => (
          <span key={tab.value} className="product-marquee__pill">
            {tab.label}
          </span>
        ))}
      </div>
    </div>
  );
}
