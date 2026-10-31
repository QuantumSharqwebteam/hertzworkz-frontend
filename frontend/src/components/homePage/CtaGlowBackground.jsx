import { useEffect, useRef, useState } from "react";

// Scroll-position hook: flips to true as soon as the element's top edge
// enters the viewport, then stops listening (plays once per visit).
// Checks directly in the scroll handler, no requestAnimationFrame throttle -
// rAF can be delayed/skipped (backgrounded tabs, battery saver, etc.), which
// was causing this to sometimes never fire even when clearly scrolled into
// view. The check itself is one cheap getBoundingClientRect call, so there's
// no real cost to running it on every scroll event directly.
function useInViewOnce(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (inView) return undefined;
    const check = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh && rect.bottom > 0) setInView(true);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [ref, inView]);
  return inView;
}

/**
 * Background glow shared by the Ideas CTA section and the Trusted-by/
 * Supported-by logo strips below it - per the Figma design (node 5233:16746).
 * The glow itself is exported directly from Figma (node 5233:16747, "Ellipse
 * 462") as /assets/images/effects/cta-glow.svg: a black ellipse (rx 795,
 * ry 576 - no visible fill against the dark page) with a white outer
 * drop-shadow + white inner shadow, both ~25% opacity and ~37px blur,
 * straddling the ellipse's edge - that combination is what produces the thin
 * glowing ring. Using the real asset instead of an approximated CSS gradient
 * gives an exact match rather than a guessed one. Render this as the first
 * child of a `relative overflow-hidden` wrapper around <IdeasCta /> and
 * <PartnersAndSupporters />.
 *
 * Size uses min(<design rem value>, <vw>) instead of a fixed rem size: at a
 * fixed size, the ring sits far enough out from center that on a narrow/
 * mobile viewport it's entirely outside the visible area. Scaling by the
 * same vw factor on both axes keeps the ring reachable at any viewport
 * width while preserving the asset's aspect ratio (1736.2x1298.2).
 *
 * No animate-sphere-pulse here (unlike Hero.jsx's sphere) - that keyframe
 * pulses box-shadow, which follows the element's own rectangular box, not
 * the oval shape drawn inside this image. On a rounded-full div that reads
 * as a circular glow; on a plain <img> it drew a visible rectangle outline
 * around the whole image. The SVG's own baked-in glow doesn't need it.
 */
export default function CtaGlowBackground() {
  const ref = useRef(null);
  const inView = useInViewOnce(ref);

  return (
    <img
      ref={ref}
      aria-hidden="true"
      alt=""
      src="/assets/images/effects/cta-glow.svg"
      className={`pointer-events-none absolute left-1/2 -top-[5.26rem] -z-10 h-[min(81.1rem,146.6vw)] w-[min(108.5rem,196.6vw)] max-w-none -translate-x-1/2 transition-opacity delay-200 duration-[1200ms] ease-out motion-reduce:transition-none motion-reduce:delay-0 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
