import { useEffect, useState } from "react";

// True only on a real touch/no-hover viewport (checked via the `hover`
// media feature, not a width breakpoint, so a laptop/tablet with both touch
// and a mouse keeps using its real :hover and is never affected here), once
// the given ref has scrolled far enough into view - then stays true for the
// rest of the page visit (matches the "play once" entrance convention
// already used by ProcessPipeline.jsx's useInViewOnce). On a device with
// real hover support this always returns false, since those elements
// already get the same visual effect from actual :hover/group-hover -
// returning true there too would just double-apply it.
//
// Threshold and scroll-check technique are the same ones ProcessPipeline.jsx
// uses (cheap getBoundingClientRect on every scroll/resize event, no
// IntersectionObserver - that was tried before and proved unreliable on
// some real scroll patterns), generalized to accept any element's ref
// instead of one shared section ref.
export function useScrollActiveOnMobile(ref) {
  const [isTouch, setIsTouch] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: none)");
    setIsTouch(query.matches);
    const onChange = (e) => setIsTouch(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (inView || !isTouch) return undefined;
    const check = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
      const threshold = Math.min(vh, rect.height) * 0.15;
      if (visible > threshold) setInView(true);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [ref, inView, isTouch]);

  return isTouch && inView;
}
