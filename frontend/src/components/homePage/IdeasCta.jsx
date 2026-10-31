import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

// Scroll-position hook: flips to true as soon as the element's top edge
// enters the viewport (not after it's already well into view), so the
// fade-in plays out while the section is still scrolling into frame instead
// of mostly completing before anyone notices. Stops listening once fired
// (plays once per visit). Checks directly in the scroll handler, no
// requestAnimationFrame throttle - rAF can be delayed/skipped (backgrounded
// tabs, battery saver, etc.), which caused this to sometimes never fire even
// when clearly scrolled into view. The check is one cheap
// getBoundingClientRect call, so there's no real cost to running it on every
// scroll event directly.
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

// Repeats NodeGraphHero's heading by design (see spec) - this is a secondary CTA, not the
// page's main heading, so it's an <h2>. The "Get Started" button is a placeholder: no
// onClick/navigation, same pattern as other inert links added so far.
export default function IdeasCta() {
  const contentRef = useRef(null);
  const inView = useInViewOnce(contentRef);

  return (
    <section
      aria-labelledby="ideas-cta-heading"
      className="relative px-6 py-24 text-center font-manrope sm:px-12 lg:px-16"
    >
      {/* translate-y (not just opacity) so the fade reads clearly even on a fast scroll -
          a pure opacity fade was hard to notice during normal scrolling. */}
      <div
        ref={contentRef}
        className={`relative mx-auto max-w-3xl transition-[opacity,transform] duration-1000 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 id="ideas-cta-heading" className="text-3xl font-medium leading-tight text-white sm:text-4xl">
          Ideas are easy. Building them is not.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
          Have an idea worth building?
          <br />
          Let&apos;s turn it into something real.
        </p>

        <a
          href="#"
          className="group relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand-gradient py-1.5 pl-6 pr-1.5 text-lg font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-brand-gradient-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <span className="relative">Get Started</span>
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-orange-600">
            <FaArrowRight aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
}
