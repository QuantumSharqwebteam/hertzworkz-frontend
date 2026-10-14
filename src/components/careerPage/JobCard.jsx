// eslint-disable-next-line react/prop-types -- repo has no prop-types dependency
export default function JobCard({ category, title, description, Icon, applyHref }) {
  return (
    <div
      tabIndex={0}
      className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-lightOrange/60 focus-visible:border-lightOrange/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{ background: "linear-gradient(0deg, rgba(254,93,38,0.45) 0%, rgba(254,93,38,0) 70%)" }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold leading-snug text-white">{title}</h3>
          <p className="mt-1 text-xs text-grayCustom">{category} &bull; Full Time &bull; Remote</p>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 p-2 text-grayCustom transition-colors duration-300 group-hover:border-lightOrange/60 group-hover:text-lightOrange group-focus-visible:border-lightOrange/60 group-focus-visible:text-lightOrange">
          <Icon aria-hidden="true" />
        </div>
      </div>

      <p className="relative text-sm leading-relaxed text-lightGray">{description}</p>

      <a
        href={applyHref}
        target="_blank"
        rel="noreferrer"
        className="relative inline-flex w-fit items-center gap-2 rounded text-sm font-semibold text-lightOrange transition-[gap] duration-300 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      >
        Apply Now <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
}
