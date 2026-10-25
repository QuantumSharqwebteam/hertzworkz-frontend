import heroIllustration from "/assets/images/about/hero-illustration.png";

// Hero for the About Us page (Figma node 5233:14500). Plain black background,
// no glow.
export default function AboutHero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-black px-[6%] pb-16 pt-28 font-manrope sm:px-[8%] sm:pt-32 lg:px-[10%]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:text-left">
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
