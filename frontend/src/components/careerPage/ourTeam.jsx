import { useEffect, useState } from "react";
import teamIdeaImg from "/assets/images/career/team-idea.webp";

// Hero order per the latest reference: illustration, then the "Welcome to
// Hertzworkz..." heading/copy, then the script "Join Our Team at HertzWorkz" wordmark
// at the bottom. `team-idea.webp` has a true transparent background.
// Culture bars below still follow Figma node 5233:17387 ("Career Page - Final 2").
//
// Per the Figma prototype's animation spec: the opening section pushes upward into
// place automatically on load (linear, 0.3s); each benefit row smoothly shifts its
// visual state on pointer-enter (linear, 0.5s).
const CULTURE_ROWS = [
  {
    align: "left",
    title: "Innovative & Impactful Projects",
    body: "At Hertzworkz, we thrive by working on cutting-edge projects that make a tangible impact. Join us to be part of a team that continuously redefines what’s possible.",
  },
  {
    align: "right",
    title: "Supportive Environment",
    body: "We foster a culture of openness, care, and mutual respect, allowing you to grow both professionally and personally as part of an inclusive and diverse team.",
  },
  {
    align: "left",
    title: "Continuous Learning & Growth",
    body: "With our in-depth training and skill development, you’ll be able to continuously achieve and exceed your potential. Explore avenues to take your career to the next level with us.",
  },
  {
    align: "right",
    title: "Challenging & Rewarding Work",
    body: "At Hertzworkz, we believe in challenging conventional thinking. Working on tasks that require innovative solutions and have a real-world impact is what we bring to the table.",
  },
];

// Split once per word for the hero heading's word-stagger reveal (see <h1> below).
const HEADING_WORDS = "Welcome to Hertzworkz, Where Vision Meets Opportunity!".split(" ");

export default function OurTeam() {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setOpened(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="overflow-x-hidden bg-ink font-manrope text-white">
      <div
        className={`relative px-4 pt-28 text-center transition-[opacity,transform] duration-300 ease-linear motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none sm:pt-32 ${
          opened ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <img
          src={teamIdeaImg}
          alt="Team at Hertzworkz reviewing an idea together"
          className="mx-auto w-full max-w-xl sm:max-w-2xl lg:max-w-3xl"
        />

        <h1 className="mx-auto mt-8 max-w-3xl text-2xl font-medium leading-snug sm:text-3xl lg:text-[2.2rem]">
          {HEADING_WORDS.map((word, i) => (
            <span key={`${word}-${i}`}>
              <span
                className={`inline-block transition-[opacity,transform] duration-300 ease-linear motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none ${
                  opened ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: `${i * 45}ms` }}
              >
                {word}
              </span>{" "}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-lightGray sm:text-base">
          We believe our strength lies in our talented, passionate team. Join us to innovate, collaborate, and shape
          the future through exciting technology projects.
        </p>

        <p className="mt-10 font-lovely text-3xl leading-none text-white sm:text-4xl lg:text-5xl">
          Join Our Team at{" "}
          <span className="bg-brand-gradient bg-clip-text font-manrope font-bold not-italic text-transparent">
            HertzWorkz
          </span>
        </p>
      </div>

      <div data-aos="zoom-out" className="mt-16 px-4 pb-20 sm:px-8 lg:px-16">
        <h2 className="text-center text-3xl font-medium text-white sm:text-4xl">Why Work at Hertzworkz?</h2>

        <div className="mt-10 flex flex-col gap-5">
          {CULTURE_ROWS.map((row) => (
            <CultureRow key={row.title} {...row} />
          ))}
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types -- repo has no prop-types dependency; CultureRow is file-local
function CultureRow({ title, body, align }) {
  const isRight = align === "right";
  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"}`}>
      <div
        tabIndex={0}
        className={`group w-full px-8 py-8 transition-[filter,transform] duration-500 ease-linear hover:brightness-125 hover:scale-[1.015] focus-visible:brightness-125 focus-visible:scale-[1.015] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange focus-visible:ring-offset-2 focus-visible:ring-offset-ink motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100 sm:w-5/6 sm:px-12 sm:py-10 ${
          isRight ? "rounded-l-[2.5rem] text-right" : "rounded-r-[2.5rem] text-left"
        }`}
        style={{ background: "linear-gradient(180deg, rgba(141,54,26,0.15) 0%, rgba(168,52,52,0.5) 100%)" }}
      >
        <h3
          className={`flex items-center gap-2 text-xl font-medium text-white sm:text-2xl ${
            isRight ? "flex-row-reverse" : ""
          }`}
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">{body}</p>
      </div>
    </div>
  );
}
