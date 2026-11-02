import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Typewriter from "../Typewriter";
import { PRELOADER_DONE_EVENT, isPreloaderDone } from "../Preloader";
import arc from "/assets/arc.png";

/**
 * Permanent hero section at the top of the homepage.
 * - `data-hero-step` marks this screen for future observers.
 * - `id` is the anchor for this section.
 * - "Get Started" navigates to the Contact page.
 */

// Props are plain JS (no prop-types dependency), so skip the prop-types rule here.
// eslint-disable-next-line react/prop-types
export default function Hero({ id = "hero", step = "hero" }) {
  const navigate = useNavigate();

  // Arc entrance: slides up from below and fades in, once the preloader is gone - no
  // rotation on load (that one-time 360deg spin was removed per request; only the
  // continuous scroll-driven tilt below still rotates the wheel, and only after this
  // slide has actually finished, so it can't resume mid-slide).
  const ARC_SLIDE_DURATION_MS = 1600;
  const ARC_SEQUENCE_GAP_MS = 150;

  // Must only start once the full-screen preloader overlay is actually gone - it
  // finishes well after this component mounts, so starting on mount (via a fixed
  // delay) would hide the whole slide behind it.
  const [arcSlide, setArcSlide] = useState(isPreloaderDone);
  // True once the one-time slide-up entrance has fully played out - only then does
  // scroll get to control the wheel, so the two never fight over its position/rotation.
  const [arcEntranceDone, setArcEntranceDone] = useState(false);

  useEffect(() => {
    if (arcSlide) return undefined;
    const onPreloaderDone = () => setArcSlide(true);
    window.addEventListener(PRELOADER_DONE_EVENT, onPreloaderDone);
    return () => window.removeEventListener(PRELOADER_DONE_EVENT, onPreloaderDone);
  }, [arcSlide]);

  useEffect(() => {
    if (!arcSlide) return undefined;
    const timer = setTimeout(() => setArcEntranceDone(true), ARC_SLIDE_DURATION_MS + ARC_SEQUENCE_GAP_MS);
    return () => clearTimeout(timer);
  }, [arcSlide]);

  // Scroll-driven wheel behaviour, active only after the one-time entrance above has
  // settled, and only while the hero section is on screen: a TILT (rotate, clamped to
  // +-MAX_ANGLE - not a full rotation) plus a SINK (translateY, clamped to MAX_SINK_PX)
  // that makes the wheel look like it's gradually descending into the hero's bottom
  // edge as the section scrolls past - there's no separate ground graphic in this
  // design, the hero's own `overflow-hidden` bottom edge (where the wheel is already
  // mostly cropped by position) acts as the ground line the wheel sinks into.
  // Leaving the hero eases both back to 0 (original rotation and position); returning
  // resets both to exactly 0 immediately, so it never resumes mid-ease.
  // `*Target` is what scrolling is currently pushing toward (clamped); `*Current` is
  // what's actually rendered and eases toward `*Target` every frame - this
  // interpolation is what makes direction reversals and the leave/return handling
  // smooth instead of jumpy.
  // One listener, one IntersectionObserver, one rAF loop, both effects share it -
  // no per-event start/stop bookkeeping, no second listener to get out of sync with.
  const heroSectionRef = useRef(null);
  const scrollWheelRef = useRef(null);
  useEffect(() => {
    if (!arcEntranceDone) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const el = scrollWheelRef.current;
    const sectionEl = heroSectionRef.current;
    if (!el || !sectionEl) return undefined;

    const MAX_ANGLE = 14; // degrees, within the requested ~10-15deg range
    const ROTATE_SENSITIVITY = 0.06; // degrees of target movement per px of scroll delta
    const MAX_SINK_PX = 70; // keeps a clearly visible portion of the ring above the fold
    const EASE = 0.15; // how much of the remaining gap to each target is closed per frame

    let rotateTarget = 0;
    let rotateCurrent = 0;
    let sinkTarget = 0;
    let sinkCurrent = 0;
    let lastScrollY = window.scrollY;
    let heroVisible = true;

    const applyTransform = () => {
      el.style.transform = `translateY(${sinkCurrent}px) rotate(${rotateCurrent}deg)`;
    };

    // Keeps lastScrollY in sync even while not visible, so there's no huge phantom
    // delta the moment the hero scrolls back into view.
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY;
      lastScrollY = y;
      if (!heroVisible) return;
      // Scrolling down (delta > 0) tilts clockwise; up tilts anti-clockwise - rotate()'s
      // own sign convention already matches this, no flip needed.
      rotateTarget = Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, rotateTarget + delta * ROTATE_SENSITIVITY));

      // Sink depth tracks how far the hero itself has scrolled past (0 = hero's top at
      // the viewport top, 1 = hero has scrolled a full section-height past) rather than
      // raw delta, so it's tied directly to scroll position, not momentum.
      const rect = sectionEl.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
      sinkTarget = progress * MAX_SINK_PX;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        if (heroVisible) {
          // Must start from the original position on return, not mid-ease from wherever
          // it was.
          rotateTarget = 0;
          rotateCurrent = 0;
          sinkTarget = 0;
          sinkCurrent = 0;
          applyTransform();
        } else {
          // Ease back to original (not an instant snap) as it leaves - the rAF loop
          // below carries both values there over the next several frames.
          rotateTarget = 0;
          sinkTarget = 0;
        }
      },
      { threshold: 0 },
    );
    observer.observe(sectionEl);

    let rafId;
    const step = () => {
      const rotateDone = Math.abs(rotateTarget - rotateCurrent) <= 0.001;
      const sinkDone = Math.abs(sinkTarget - sinkCurrent) <= 0.001;
      if (!rotateDone || !sinkDone) {
        rotateCurrent += (rotateTarget - rotateCurrent) * EASE;
        sinkCurrent += (sinkTarget - sinkCurrent) * EASE;
        applyTransform();
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [arcEntranceDone]);

  return (
    <main>
      <section
        ref={heroSectionRef}
        id={id}
        data-hero-step={step}
        aria-labelledby="hero-heading"
        className="relative isolate flex h-screen w-full flex-col items-center justify-start overflow-hidden bg-ink px-4 pb-8 pt-[max(7rem,19vh)] text-center font-manrope sm:px-8 lg:px-12"
      >
        {/* Background layer: diagonal light beams (top-left), a dim orange orb, and a
            vignette - all behind the content, all decorative. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 hidden h-[70vh] w-[160%] -rotate-[27deg] bg-gradient-to-b from-slate-400/10 via-slate-400/5 to-transparent blur-3xl sm:block" />
          <div className="absolute -left-1/3 -top-[10%] hidden h-[55vh] w-[160%] -rotate-[27deg] bg-gradient-to-b from-slate-300/[0.07] to-transparent blur-3xl sm:block" />
          <div className="absolute left-[15%] top-[45%] h-56 w-56 rounded-full bg-orange-600/20 blur-[70px]" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)" }}
          />
        </div>

        {/* Glowing arc: arc.png rendered as-is, plus one CSS div for the dark disc's
            inner glow. No glow/halo images layered on top - the ring's own highlight
            is already baked into arc.png. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[72%] z-0 w-[160vw] -translate-x-1/2 md:w-[min(1400px,74vw)]"
        >
          {/* Step 1: slides up from below and fades in, once the preloader is gone.
              Separate wrapper from the scroll-driven sink/tilt below so the one-time
              CSS slide-up and the continuous JS transform never fight over the same
              element's transform. */}
          <div className={`motion-reduce:animate-none ${arcSlide ? "animate-arc-slide-up" : "opacity-0"}`}>
            {/* Step 2: continuous scroll-driven sink + tilt, starts only once Step 1's
                slide-up has finished (see arcEntranceDone above) - no entrance rotation,
                the wheel appears in its original orientation on load. */}
            <div ref={scrollWheelRef} className="[transform-origin:50%_50%]">
              <img src={arc} alt="" className="relative block w-full" />
              <div
                className="absolute left-1/2 top-[13%] h-[10%] w-[55%] -translate-x-1/2 blur-[24px]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(194,65,12,0.45) 0%, rgba(194,65,12,0) 70%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="hero-content relative z-10 mx-auto w-full max-w-3xl">
          <h1
            id="hero-heading"
            className="text-4xl font-medium leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            <Typewriter text="We Build Technology That Moves Businesses Forward." speed={70} />
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-400 sm:text-lg">
            <Typewriter
              text="We design and build technology that solves real business problems and turns ideas into products that work."
              speed={25}
            />
          </p>
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="group relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand-gradient py-1.5 pl-6 pr-1.5 text-lg font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            {/* Crossfades to the hover gradient instead of just dimming, matching the reference animation */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-brand-gradient-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="relative">Get Started</span>
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-orange-600">
              <FaArrowRight aria-hidden="true" />
            </span>
          </button>
        </div>
      </section>
    </main>
  );
}
