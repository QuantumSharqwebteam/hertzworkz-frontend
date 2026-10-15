// Matches Figma node 5233:17387 ("Career Page - Final 2"): script "Join Our Team at" +
// gradient "HertzWorkz" wordmark, a single welcome line, then four alternating
// left/right culture bars. The Figma frame's own hero instance is a nearly-empty
// placeholder (just a broken 10x18px graphic), but its sibling component definitions -
// the actual headline, body copy and culture-bar styling - are fully specified, so those
// are what's implemented here. Drops the earlier desk illustration since this Figma
// version doesn't include one.
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

export default function OurTeam() {
  return (
    <div className="overflow-x-hidden bg-ink font-manrope text-white">
      <div data-aos="zoom-out" className="relative px-4 pt-28 text-center sm:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 animate-sphere-pulse rounded-full bg-hero-sphere opacity-30 shadow-[0_0_80px_10px_rgba(255,120,50,0.45)] motion-reduce:animate-none sm:h-96 sm:w-96 sm:opacity-40"
        />

        <p className="font-lovely text-5xl leading-none text-white sm:text-6xl lg:text-7xl">Join Our Team at</p>
        <p className="mt-2 bg-brand-gradient bg-clip-text text-4xl font-bold leading-none text-transparent sm:text-5xl lg:text-6xl">
          HertzWorkz
        </p>

        <h1 className="mx-auto mt-10 max-w-3xl text-2xl font-medium leading-snug sm:text-3xl lg:text-[2.2rem]">
          Welcome to Hertzworkz, Where Vision Meets Opportunity!
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-lightGray sm:text-base">
          We believe our strength lies in our talented, passionate team. Join us to innovate, collaborate, and shape
          the future through exciting technology projects.
        </p>
      </div>

      <div data-aos="zoom-out" className="mx-auto mt-16 max-w-5xl px-4 pb-20 sm:px-8">
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
        className={`w-full px-8 py-8 sm:w-5/6 sm:px-12 sm:py-10 lg:w-2/3 ${
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
