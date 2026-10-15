import applyArrow from "/assets/images/career/icons/apply-arrow.svg";

// Matches Figma node 5233:17387 ("Career Page - Final 2"): very round (50px) cards with a
// soft gray ambient glow along the bottom edge, an outline icon top-right, and a plain
// white "Apply Now" link (not an orange button) - border/icon-color hover added for
// keyboard/mouse affordance since the design itself has no hover state to copy from.
// eslint-disable-next-line react/prop-types -- repo has no prop-types dependency
export default function JobCard({ category, title, description, Icon, applyHref }) {
  return (
    <div
      tabIndex={0}
      className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-[3rem] border border-white/15 bg-white/[0.01] p-10 transition-colors duration-300 hover:border-lightOrange/60 focus-visible:border-lightOrange/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-10%] bottom-0 h-28 bg-[#5d5d5d]/50 blur-[40px]"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl leading-snug text-white">{title}</h3>
          <p className="mt-2 text-base text-lightGray">{category} &bull; Full Time &bull; Remote</p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 p-2.5 text-grayCustom transition-colors duration-300 group-hover:border-lightOrange/60 group-hover:text-lightOrange group-focus-visible:border-lightOrange/60 group-focus-visible:text-lightOrange">
          <Icon aria-hidden="true" className="h-full w-full" />
        </div>
      </div>

      <p className="relative text-base leading-relaxed text-lightGray">{description}</p>

      <a
        href={applyHref}
        target="_blank"
        rel="noreferrer"
        className="relative inline-flex w-fit items-center gap-2 rounded text-xl font-medium text-white transition-[gap] duration-300 hover:gap-3 hover:text-lightOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      >
        Apply Now <img src={applyArrow} alt="" aria-hidden="true" className="h-4 w-4" />
      </a>
    </div>
  );
}
