import { useCallback, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Typewriter from "../Typewriter";
import { PRELOADER_DONE_EVENT, isPreloaderDone } from "../Preloader";
import arc from "/assets/arc.png";

/**
 * Permanent hero section at the top of the homepage.
 * - `data-hero-step` marks this screen for future observers.
 * - `id` is the anchor for this section.
 * - "Get Started" smoothly scrolls to the section right below the hero.
 */

// Props are plain JS (no prop-types dependency), so skip the prop-types rule here.
// eslint-disable-next-line react/prop-types
export default function Hero({ id = "hero", step = "hero" }) {
  const scrollToNext = useCallback(() => {
    document.getElementById("node-graph")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Arc entrance, in two sequential steps - slide up first, then spin. Must match
  // tailwind.config.js's arc-slide-up/arc-spin-in durations: the spin is started by a
  // timer here (not CSS animation-delay) specifically so it can't start until the
  // slide-up animation has actually finished.
  const ARC_SLIDE_DURATION_MS = 1600;
  const ARC_SEQUENCE_GAP_MS = 150;

  // Both steps must only start once the full-screen preloader overlay is actually
  // gone - it finishes well after this component mounts, so starting on mount (via a
  // fixed delay) would hide the whole sequence behind it.
  const [arcSlide, setArcSlide] = useState(isPreloaderDone);
  const [arcSpin, setArcSpin] = useState(false);

  useEffect(() => {
    if (arcSlide) return undefined;
    const onPreloaderDone = () => setArcSlide(true);
    window.addEventListener(PRELOADER_DONE_EVENT, onPreloaderDone);
    return () => window.removeEventListener(PRELOADER_DONE_EVENT, onPreloaderDone);
  }, [arcSlide]);

  useEffect(() => {
    if (!arcSlide) return undefined;
    const timer = setTimeout(() => setArcSpin(true), ARC_SLIDE_DURATION_MS + ARC_SEQUENCE_GAP_MS);
    return () => clearTimeout(timer);
  }, [arcSlide]);

  return (
    <main>
      <section
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
              Separate wrapper from the spin below so translateY() and rotate() never
              fight each other on the same element's transform. */}
          <div className={`motion-reduce:animate-none ${arcSlide ? "animate-arc-slide-up" : "opacity-0"}`}>
            {/* Step 2: one-time entrance spin, only started after Step 1 finishes
                (see ARC_SLIDE_DURATION_MS/ARC_SEQUENCE_GAP_MS above). */}
            <div
              className={`[transform-origin:50%_50%] motion-reduce:animate-none ${arcSpin ? "animate-arc-spin-in" : ""}`}
            >
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
            onClick={scrollToNext}
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
