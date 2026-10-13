import { useEffect, useRef, useState } from "react";

// Scroll-position hook: flips to true as soon as the element's top edge
// enters the viewport, then stops listening (plays once per visit).
// Same scroll+rAF approach used by ProcessPipeline.jsx / IdeasCta.jsx -
// IntersectionObserver proved unreliable for this.
function useInViewOnce(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (inView) return undefined;
    let raf = null;
    const check = () => {
      raf = null;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh && rect.bottom > 0) setInView(true);
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, [ref, inView]);
  return inView;
}

/**
 * Background glow shared by the Ideas CTA section and the Trusted-by/
 * Supported-by logo strips below it - per the Figma design (node 5233:16746),
 * this is ONE large ellipse (1590x1152 in the design) spanning both sections,
 * not a glow scoped to just the CTA text. Render this as the first child of
 * a `relative overflow-hidden` wrapper around <IdeasCta /> and
 * <PartnersAndSupporters />.
 */
export default function CtaGlowBackground() {
  const ref = useRef(null);
  const inView = useInViewOnce(ref);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 top-0 -z-10 h-[72rem] w-[99.375rem] -translate-x-1/2 animate-sphere-pulse rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.05)_45%,transparent_75%)] transition-opacity delay-200 duration-[1200ms] ease-out motion-reduce:animate-none motion-reduce:opacity-70 motion-reduce:transition-none motion-reduce:delay-0 ${
        inView ? "opacity-70" : "opacity-0"
      }`}
    />
  );
}
