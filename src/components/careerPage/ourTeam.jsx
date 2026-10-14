import TableImg from "/carrerTable.png";

export default function OurTeam() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden bg-ink font-manrope text-white">
      <div data-aos="zoom-out" className="relative px-4 pt-28 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 animate-sphere-pulse rounded-full bg-hero-sphere opacity-40 shadow-[0_0_80px_10px_rgba(255,120,50,0.45)] motion-reduce:animate-none sm:h-96 sm:w-96 sm:opacity-60"
        />

        <p className="font-serif text-lg italic text-white sm:text-xl">
          Join Our Team at <span className="font-manrope not-italic font-semibold text-lightOrange">HertzWorkz</span>
        </p>
        <p className="mx-auto mt-4 max-w-md px-4 text-sm text-lightGray">
          Unleash your potential and become part of our innovative and dynamic team.
        </p>

        <div className="mt-10 flex flex-col items-center px-5">
          <img src={TableImg} alt="Team working together at Hertzworkz" className="relative" />
        </div>
      </div>

      <div data-aos="zoom-out" className="mx-5 mt-10 flex flex-col items-center rounded-3xl bg-white/[0.03] px-4 pb-20 pt-16 sm:px-12">
        <div className="w-full text-center sm:text-left">
          <h1 className="mb-4 text-3xl font-semibold sm:text-4xl">
            Welcome to Hertzworkz, Where Vision Meets Opportunity!
          </h1>
          <p className="mb-6 max-w-3xl text-sm text-lightGray sm:text-base">
            At Hertzworkz, we believe our greatest strength lies in the talent, passion, and dedication of our team.
            As a forward-thinking technology company, we thrive on creativity, collaboration, and innovation. If
            you&rsquo;re ready to shape the future and contribute to groundbreaking projects, we invite you to
            explore career opportunities with us.
          </p>
          <button
            type="button"
            className="rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            Why Work at Hertzworkz?
          </button>
        </div>

        <div data-aos="zoom-out" className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {CULTURE_CARDS.map(({ title, body }) => (
            <CultureCard key={title} title={title} body={body} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CULTURE_CARDS = [
  {
    title: "Innovative and Impactful Projects",
    body: "At Hertzworkz, we thrive by working on cutting-edge projects that make a tangible impact. Join us to be part of a team that continuously redefines what’s possible.",
  },
  {
    title: "Supportive Environment",
    body: "We foster a culture of openness, care, and mutual respect, allowing you to grow both professionally and personally as part of an inclusive and diverse team.",
  },
  {
    title: "Continuous Learning and Growth",
    body: "With our in-depth training and skill development, you’ll evolve to continuously achieve and exceed your potential. Explore avenues to take your career to the next level with us.",
  },
  {
    title: "Challenging and Rewarding Work",
    body: "At Hertzworkz, we believe in challenging conventional thinking. Working on tasks that require innovative solutions and have a real-world impact is what we bring to the table.",
  },
];

// Gradient fill is a separate absolutely-positioned overlay (opacity 0 -> 1 on
// hover/focus) rather than swapping `background-image` directly, since background-image
// can't be transitioned smoothly - this is what makes the fade animate instead of snap.
// eslint-disable-next-line react/prop-types -- repo has no prop-types dependency; CultureCard is file-local
function CultureCard({ title, body }) {
  return (
    <div
      tabIndex={0}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{ background: "linear-gradient(45deg, rgba(254,93,38,0.45) 0%, rgba(254,93,38,0) 60%)" }}
      />
      <div className="relative">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-lightOrange sm:text-2xl">
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-lightOrange" />
          {title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-lightGray">{body}</p>
      </div>
    </div>
  );
}
