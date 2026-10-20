import { useEffect, useRef, useState } from "react";

function CheckSquareIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="m8 12.5 2.5 2.5L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TargetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const CARDS = [
  {
    id: "mission",
    title: "Mission",
    description:
      "To simplify complex challenges through innovative technology and deliver practical solutions that create meaningful impact.",
    Icon: CheckSquareIcon,
  },
  {
    id: "vision",
    title: "Vision",
    description:
      "To bridge the gap between challenges and solutions through intelligent, efficient, and sustainable technology.",
    Icon: TargetIcon,
  },
];

// Mission/Vision cards below the About hero (Figma node 5233:14501 section).
// A card is only highlighted while the mouse is actually over it (or tapped,
// as the touch-device equivalent of hover) - never from scroll position alone.
export default function AboutMissionVision() {
  const sectionRef = useRef(null);
  const [hoverActive, setHoverActive] = useState(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          sectionObserver.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  const activeIndex = hoverActive;

  return (
    <section
      ref={sectionRef}
      className="flex min-h-screen items-center bg-black px-4 pb-24 pt-20 font-manrope sm:px-6 sm:pb-[150px] sm:pt-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[865px] flex-col gap-[30px]">
        {CARDS.map(({ id, title, description, Icon }, index) => (
          <div
            key={id}
            onMouseEnter={() => setHoverActive(index)}
            onMouseLeave={() => setHoverActive(null)}
            onClick={() => setHoverActive((current) => (current === index ? null : index))}
            className={`mv-card rounded-[18px] p-5 sm:p-8 ${activeIndex === index ? "is-active" : ""} ${
              reducedMotion ? "mv-no-motion" : "transition-all duration-500 ease-in-out"
            } ${visible || reducedMotion ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}`}
            style={!reducedMotion ? { transitionDelay: visible ? `${index * 150}ms` : "0ms" } : undefined}
          >
            <div className="relative flex items-center gap-7">
              <span className="mv-icon-tile flex h-[60px] w-14 shrink-0 items-center justify-center rounded-xl">
                <Icon className="h-6 w-6 text-[color:var(--mv-icon-color)]" />
              </span>
              <h3 className="text-[22px] font-medium text-white sm:text-[28px]">{title}</h3>
            </div>
            <p className="relative mt-5 max-w-2xl text-base leading-[1.5] text-white sm:text-xl">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
