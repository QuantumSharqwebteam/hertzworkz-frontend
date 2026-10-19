import heroIllustration from "/assets/images/about/hero-illustration.png";

// Hero for the About Us page (Figma node 5233:14500). The glow is a blurred
// solid block (not a gradient) so it fades to the pure-black page background
// evenly on every side; its color lives in --glow-color (src/index.css) so it
// can be reused/retuned in one place.
export default function AboutHero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-black px-[6%] pb-16 pt-28 font-manrope sm:px-[8%] sm:pt-32 lg:px-[10%]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[color:var(--glow-color)] blur-[90px]"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:text-left">
        <div>
          <h1 className="mx-auto max-w-[24ch] text-[1.75rem] font-normal leading-[1.3] text-white sm:text-[2rem] lg:mx-0 lg:text-[2.4rem]">
            Excellence is not just what we deliver, it&rsquo;s who we are
          </h1>
          <p className="mx-auto mt-6 max-w-[42ch] text-base leading-[1.55] text-[color:var(--text-warm)] lg:mx-0">
            We are committed to delivering excellence through innovative solutions tailored to your needs. Our
            focus is on building lasting relationships, ensuring client satisfaction, and consistently exceeding
            expectations.
          </p>
        </div>

        <img
          src={heroIllustration}
          alt="Illustration of a person working at a laptop surrounded by icons representing software, settings, and planning"
          className="w-56 max-w-full sm:w-72 lg:w-[32vw] lg:max-w-[460px]"
        />
      </div>
    </section>
  );
}
