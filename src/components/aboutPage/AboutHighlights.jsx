import { useEffect, useState } from "react";

const ROWS = [
  {
    heading: "Proven expertise across industries",
    description: "Our extensive experience spans diverse sectors, enabling us to deliver solutions that meet unique industry needs.",
    align: "left",
  },
  {
    heading: "Client-focused approach for personalized solutions",
    description: "We prioritize understanding your goals to create tailored strategies that drive meaningful results.",
    align: "right",
  },
  {
    heading: "Cutting-edge technology and design practices",
    description: "We leverage the latest tools and trends to craft innovative, future-ready solutions.",
    align: "left",
  },
  {
    heading: "Reliable support and continuous improvement",
    description: "Our commitment to excellence includes ongoing support and enhancements to ensure long-term success.",
    align: "right",
  },
];

// Four alternating left/right rows below the Mission/Vision cards (About page).
// Uses the project's existing "aos" library (already globally init'd with
// once: true in App.jsx) for the scroll fade-in, rather than a bespoke
// IntersectionObserver like AboutMissionVision - aos's fade-left/fade-right
// attributes already match what this section needs directly.
export default function AboutHighlights() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section className="flex min-h-screen items-center overflow-x-hidden bg-black px-6 py-20 font-manrope sm:px-12 sm:py-28 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 sm:gap-20">
        {ROWS.map(({ heading, description, align }) => {
          const isRight = align === "right";
          return (
            <div
              key={heading}
              data-aos={reducedMotion ? undefined : isRight ? "fade-right" : "fade-left"}
              className={isRight ? "text-left lg:text-right" : "text-left"}
            >
              <div
                className={`flex flex-col gap-3 sm:gap-6 lg:flex-row lg:items-center ${
                  isRight ? "lg:flex-row-reverse" : ""
                }`}
              >
                <h3 className="text-xl font-bold text-white sm:text-[1.75rem] lg:shrink-0">{heading}</h3>
                <span aria-hidden="true" className="h-px w-16 bg-[color:var(--accent-start)] lg:w-auto lg:flex-1" />
              </div>
              <p
                className={`mt-4 max-w-2xl text-base leading-[1.55] text-[color:var(--text-warm)] ${
                  isRight ? "lg:ml-auto" : ""
                }`}
              >
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
