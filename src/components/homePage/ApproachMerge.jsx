import { useEffect, useRef, useState } from "react";

/**
 * Pinned scroll section: three circles (Explore/Create/Deliver) hold in place,
 * then converge into one brand-gradient circle revealing the closing statement.
 * Progress (0-1) is derived from how far the viewport has scrolled through the
 * oversized wrapper while its inner content stays sticky.
 */
const SECTION_VH = 260;

const clamp01 = (n) => Math.min(1, Math.max(0, n));
const phase = (p, start, end) => clamp01((p - start) / (end - start));

const CIRCLES = [
  { key: "explore", label: "Explore", left: 22, top: 42, size: "clamp(8.5rem, 34vw, 26rem)", delay: [0, 0.1] },
  { key: "create", label: "Create", left: 50, top: 54, size: "clamp(10rem, 40vw, 32rem)", delay: [0.04, 0.14] },
  { key: "deliver", label: "Deliver", left: 80, top: 64, size: "clamp(8.5rem, 34vw, 26rem)", delay: [0.08, 0.18] },
];

export default function ApproachMerge() {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;
    let raf = null;
    const update = () => {
      raf = null;
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      setProgress(total > 0 ? clamp01(-rect.top / total) : 0);
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <section
        aria-labelledby="approach-heading"
        className="relative flex min-h-screen items-center justify-center bg-ink px-4 py-24"
      >
        <div className="flex aspect-square w-full max-w-md flex-col items-center justify-center rounded-full bg-brand-gradient px-10 text-center">
          <h2 id="approach-heading" className="text-2xl font-medium text-white sm:text-4xl">
            We bring it together.
          </h2>
          <p className="mt-4 max-w-sm text-sm text-white/90 sm:text-base">
            We explore what&apos;s possible, create what matters, and deliver solutions built to make an impact.
          </p>
        </div>
      </section>
    );
  }

  const merge = phase(progress, 0.55, 0.88);
  const finalIn = phase(progress, 0.74, 0.96);

  return (
    <section aria-labelledby="approach-heading" className="relative bg-ink">
      <div ref={wrapperRef} style={{ height: `${SECTION_VH}vh` }}>
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <h2 id="approach-heading" className="sr-only">
            We bring exploration, creation, and delivery together.
          </h2>

          {CIRCLES.map(({ key, label, left, top, size, delay }) => {
            const appear = phase(progress, delay[0], delay[1]);
            const isHub = key === "create";
            const shiftX = (left - 50) * merge;
            const shiftY = (top - 54) * merge;
            return (
              <div
                key={key}
                aria-hidden="true"
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-approach-sphere shadow-[0_0_60px_10px_rgba(0,0,0,0.5)]"
                style={{
                  left: `${left - shiftX}%`,
                  top: `${top - shiftY}%`,
                  width: size,
                  height: size,
                  // The hub circle fades out as the final circle fades in, so it never
                  // shows through at the edges once the final circle sits on top of it.
                  opacity: appear * (isHub ? Math.max(0, 1 - finalIn) : 1 - merge),
                  transform: `translate(-50%, -50%) scale(${1 + (isHub ? merge * 0.35 : 0)})`,
                }}
              >
                <span
                  className="absolute inset-0 flex items-center justify-center text-2xl font-medium text-gray-300 sm:text-3xl"
                  style={{ opacity: isHub ? Math.max(0, 1 - merge * 1.6) : 1 }}
                >
                  {label}
                </span>
              </div>
            );
          })}

          {/* Final merged hub: brand-gradient circle revealing the closing statement.
              Scale is fixed (not animated) so the rounded edge never lands on a
              fractional pixel - an animated scale on a border-radius circle leaves
              a hairline sub-pixel seam where the page background shows through. */}
          <div
            aria-hidden={finalIn < 0.5}
            className="pointer-events-none absolute left-1/2 top-1/2 flex aspect-square w-[min(90vw,44rem)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-brand-gradient px-10 text-center"
            style={{ opacity: finalIn }}
          >
            <p className="text-2xl font-medium text-white sm:text-4xl">We bring it together.</p>
            <p className="mt-4 max-w-sm text-sm text-white/90 sm:text-base">
              We explore what&apos;s possible, create what matters, and deliver solutions built to make an impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
