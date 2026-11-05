/* eslint-disable react/prop-types -- repo has no prop-types dependency */
import "./ProductMarquee.css";

// How many times the tab list is repeated to form ONE half of the scrolling
// track. The flex w-max + translateX(-50%) technique (same as MarqueeRow in
// PartnersAndSupporters.jsx) only loops seamlessly once a single half is at
// least as wide as the widest realistic viewport - otherwise, once the
// animation nears -50%, the container's visible area runs past the end of
// that half and a blank gap shows right before it snaps back to the start.
// This marquee only has 4 short pills (vs. 5-6 logos on the home page), so
// one half is nowhere near wide enough on its own - confirmed via devtools
// that a single set is ~660px while the container is 1100px+ even at modest
// desktop widths. Repeating it REPEAT_COUNT times guarantees a wide-enough
// half even on a very wide desktop monitor, with no JS measurement or
// resize-reactivity needed (8 * ~660px covers 5000px+ of viewport).
const REPEAT_COUNT = 8;
// `animate-marquee` (tailwind.config.js) is a shared 30s loop tuned for the
// home page's ~900px single set. Scaling the duration by REPEAT_COUNT keeps
// the same px/sec travel speed instead of the track suddenly looking
// REPEAT_COUNT times faster now that it's REPEAT_COUNT times longer.
const ANIMATION_DURATION = `${REPEAT_COUNT * 30}s`;

// Infinite marquee of decorative pills - purely visual, not clickable. The
// repeated half is rendered twice back-to-back and the track animates
// translateX(0) to translateX(-50%), so the loop restarts with no visible
// seam. The duplicate half is aria-hidden to avoid double announcing the
// same pills to screen readers.
export default function ProductMarquee({ tabs }) {
  const half = Array.from({ length: REPEAT_COUNT }, () => tabs).flat();

  return (
    <div className="product-marquee">
      <div
        className="product-marquee__track flex w-max animate-marquee items-center gap-x-6 motion-reduce:animate-none hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
        style={{ animationDuration: ANIMATION_DURATION }}
      >
        {half.map((tab, index) => (
          <span key={`${tab.value}-${index}`} className="product-marquee__pill">
            {tab.label}
          </span>
        ))}
        {half.map((tab, index) => (
          <span key={`${tab.value}-dup-${index}`} aria-hidden="true" className="product-marquee__pill">
            {tab.label}
          </span>
        ))}
      </div>
    </div>
  );
}
