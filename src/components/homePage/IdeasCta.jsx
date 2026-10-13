import { FaArrowRight } from "react-icons/fa6";

// Repeats NodeGraphHero's heading by design (see spec) - this is a secondary CTA, not the
// page's main heading, so it's an <h2>. The "Get Started" button is a placeholder: no
// onClick/navigation, same pattern as other inert links added so far.
export default function IdeasCta() {
  return (
    <section
      aria-labelledby="ideas-cta-heading"
      className="relative overflow-hidden bg-ink px-6 py-24 text-center font-manrope sm:px-12 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[56rem] -translate-x-1/2 -translate-y-1/3 animate-sphere-pulse rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.05)_45%,transparent_75%)] opacity-70 motion-reduce:animate-none"
      />

      <div className="relative mx-auto max-w-3xl">
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
