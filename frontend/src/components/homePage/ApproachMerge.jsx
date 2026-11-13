import { useEffect, useRef, useState } from "react";
import TiltReveal from "../TiltReveal";
import RevealText from "../RevealText";
import MagicSphere from "./MagicSphere";

/**
 * Pinned scroll section: three circles (Explore/Create/Deliver) hold in place,
 * then converge into one brand-gradient circle revealing the closing statement.
 * Progress (0-1) is derived from how far the viewport has scrolled through the
 * oversized wrapper while its inner content stays sticky.
 */
const SECTION_VH = 320;
// The merge/reveal animation finishes at this fraction of scroll progress;
// the remaining (1 - ANIM_END) is a hold where the final sphere stays pinned
// on screen. Hold length is about (SECTION_VH - 100) * (1 - ANIM_END) vh.
const ANIM_END = 0.68;

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

  const animProgress = clamp01(progress / ANIM_END);
  const merge = phase(animProgress, 0.55, 0.88);
  const finalIn = phase(animProgress, 0.74, 0.96);

  return (
    <section aria-labelledby="approach-heading" className="relative bg-ink">
      <div ref={wrapperRef} style={{ height: `${SECTION_VH}vh` }}>
        <div data-cursor-zone="sphere" className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <h2 id="approach-heading" className="sr-only">
            We bring exploration, creation, and delivery together.
          </h2>

          {CIRCLES.map(({ key, label, left, top, size, delay }) => {
            const appear = phase(animProgress, delay[0], delay[1]);
            const isHub = key === "create";
            const shiftX = (left - 50) * merge;
            const shiftY = (top - 54) * merge;
            // Fades 18% faster than finalIn itself (not just 1 - finalIn) so it hits
            // true 0 opacity with margin before finalIn settles near 1 - otherwise its
            // dark bg-approach-sphere gradient (scaled 1.35x larger) shows as a faint
            // dark ring around the final sphere at almost any resting scroll position,
            // since 1 - finalIn only reaches exactly 0 right at finalIn === 1.
            const circleOpacity = appear * (isHub ? Math.max(0, 1 - finalIn / 0.82) : 1 - merge);
            return (
              <div
                key={key}
                aria-hidden="true"
                className={`pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-approach-sphere ${
                  // The hub circle sits directly behind the final sphere while both are
                  // fading (see opacity below); its own dark box-shadow would otherwise
                  // show through as a ghost ring/halo on top of the sphere during that
                  // overlap, so only the two outer circles (which nothing else covers) get it.
                  isHub ? "" : "shadow-[0_0_60px_10px_rgba(0,0,0,0.5)]"
                }`}
                style={{
                  left: `${left - shiftX}%`,
                  top: `${top - shiftY}%`,
                  width: size,
                  height: size,
                  opacity: circleOpacity,
                  // Belt-and-suspenders on top of circleOpacity reaching true 0: once the
                  // hub is faded out, drop it from compositing entirely so no rounding/
                  // GPU-blending edge case can ever let its dark gradient show through.
                  visibility: isHub && circleOpacity <= 0 ? "hidden" : "visible",
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

          {/* Final merged hub: the sphere canvas itself reveals the closing statement.
              No rounded-full/overflow-hidden/bg-ink clip here any more - the shader is
              now truly transparent outside the sphere/glow (see MagicSphere.jsx), so
              there's no dark fill left for a clip to turn into a visible ring. The
              container is a square sized so the visible sphere (R=.36, i.e. 72% of the
              canvas - deliberately roomy so the glow has space to fade out before the
              canvas edge, instead of being cut off in a visible square frame) still
              comes out to min(90vw,44rem): 44rem / 0.72 = 61rem. Scale is fixed (not
              animated) so nothing here ever lands on a fractional pixel. */}
          <div
            aria-hidden={finalIn < 0.5}
            className="pointer-events-none absolute left-1/2 top-1/2 flex aspect-square w-[min(125vw,61rem)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-10 text-center"
            style={{ opacity: finalIn }}
          >
            <div className="absolute inset-0">
              <MagicSphere speed={1.1} reactivity={1.2} />
            </div>
            {/* Invisible circle matching the sphere's own visible size (72% of this
                square), so cursor fill-detection still sees a circle exactly the size
                of the sphere rather than this element's full square bounding box. */}
            <div
              aria-hidden="true"
              data-cursor-fill-circle="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
            <p className="relative z-10 text-2xl font-medium text-white sm:text-4xl">
              <TiltReveal text="We bring it together." trigger={finalIn >= 1} />
            </p>
            <p className="relative z-10 mt-4 max-w-sm text-sm text-white/90 sm:text-base">
              <RevealText
                text="We explore what's possible, create what matters, and deliver solutions built to make an impact."
                trigger={finalIn >= 1}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
