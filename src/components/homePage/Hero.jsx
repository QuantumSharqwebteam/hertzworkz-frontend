import { useCallback, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";

/**
 * Full-screen intro. Calls `onGetStarted` exactly once: after AUTO_DELAY_MS, or immediately
 * when the CTA is clicked, whichever comes first. The parent owns the view swap and fade.
 * - `data-hero-step` marks this screen for future observers.
 * - `id` is the anchor for this section.
 */
const AUTO_DELAY_MS = 1500;

// Props are plain JS (no prop-types dependency), so skip the prop-types rule here.
// eslint-disable-next-line react/prop-types
export default function Hero({ id = "hero", onGetStarted, step = "hero" }) {
  const hasTransitioned = useRef(false);
  const timer = useRef(null);
  // Latest callback lives in a ref so `transition` stays stable and the effect never re-arms the timer.
  const latest = useRef(onGetStarted);
  latest.current = onGetStarted;

  const transition = useCallback(() => {
    if (hasTransitioned.current) return;
    hasTransitioned.current = true;
    clearTimeout(timer.current);
    if (latest.current) latest.current();
  }, []);

  useEffect(() => {
    timer.current = setTimeout(transition, AUTO_DELAY_MS);
    return () => clearTimeout(timer.current);
  }, [transition]);

  return (
    <main>
      <section
        id={id}
        data-hero-step={step}
        aria-labelledby="hero-heading"
        className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-ink px-4 pb-8 pt-28 font-manrope sm:px-8 lg:px-12 max-[400px]:items-start max-[400px]:pt-28 max-[400px]:pb-10"
      >
        {/* Sphere: sits behind text on mobile, dominant right-side arc on lg+. Pulses slowly, matching the reference animation. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[28rem] w-[28rem] animate-sphere-pulse rounded-full bg-hero-sphere opacity-40 shadow-[0_0_80px_10px_rgba(255,120,50,0.45)] ring-4 ring-orange-500/60 motion-reduce:animate-none sm:h-[40rem] sm:w-[40rem] sm:opacity-60 lg:-right-[14rem] lg:top-[8rem] lg:bottom-auto lg:h-[40rem] lg:w-[40rem] lg:opacity-100 xl:-right-[18rem] xl:h-[60rem] xl:w-[60rem]"
        />

        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-xl xl:max-w-2xl">
            <h1 id="hero-heading" className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              We Build Technology That Moves Businesses Forward.
            </h1>
            <p className="mt-4 max-w-lg text-base text-gray-300 sm:text-lg">
              We design and build technology that solves real business problems and turns ideas into products that work.
            </p>
            <button
              type="button"
              onClick={transition}
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
        </div>
      </section>
    </main>
  );
}
