import { FaArrowRight } from "react-icons/fa6";
import heroBg from "/assets/images/products/hero-bg.webp";

// New starting point for the Products page, replacing the old section stack. Both CTAs
// have no confirmed destination yet, so they're inert (href="#"), matching the pattern
// used elsewhere on the site for placeholder buttons.
//
// hero-bg.webp is a screenshot with its own heading/button text baked in (the only
// source available) - blurred and heavily darkened so it reads as an ambient photo
// behind the real, live heading below rather than showing as duplicate ghost text.
export default function ProductsHero() {
  return (
    <section
      aria-labelledby="products-hero-heading"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-ink px-6 py-32 text-center font-manrope sm:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-110 bg-cover bg-center blur-md"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/80" />

      <div className="relative mx-auto max-w-3xl">
        <h1
          id="products-hero-heading"
          className="text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Products That Turn Ideas Into Real Solutions
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
          We design and build digital products that solve real business problems — from textile management to
          AI-powered analytics.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand-gradient py-1.5 pl-6 pr-1.5 text-base font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-brand-gradient-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="relative">Explore Our Products</span>
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-orange-600">
              <FaArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
          </a>

          <a
            href="#"
            className="rounded-full border border-white/25 px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
