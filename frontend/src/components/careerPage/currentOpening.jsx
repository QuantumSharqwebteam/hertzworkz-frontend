import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const JOBS_API_URL = import.meta.env.VITE_JOBS_API_URL || "/api/jobs";

// Icons stay local to the frontend (the API returns an `icon` key, e.g.
// "ui-design", instead of a React component) - same source files the static
// jobsData.jsx used to ship, just keyed by name now.
const ICON_BASE = "/assets/images/career/icons";

function iconComponent(src) {
  // eslint-disable-next-line react/display-name, react/prop-types -- anonymous icon component named by its call site below; repo has no prop-types dependency
  return ({ className }) => <img src={src} alt="" aria-hidden="true" className={className} />;
}

const DEFAULT_ICON = iconComponent(`${ICON_BASE}/ui-design.svg`);
const ICON_COMPONENTS = {
  "ui-design": DEFAULT_ICON,
  "ux-designer": iconComponent(`${ICON_BASE}/ux-designer.svg`),
  "design-head": iconComponent(`${ICON_BASE}/design-head.svg`),
  "frontend-developer": iconComponent(`${ICON_BASE}/frontend-developer.svg`),
  "backend-developer": iconComponent(`${ICON_BASE}/backend-developer.svg`),
  "fullstack-developer": iconComponent(`${ICON_BASE}/fullstack-developer.svg`),
  "ba-manager": iconComponent(`${ICON_BASE}/ba-manager.svg`),
  "project-manager": iconComponent(`${ICON_BASE}/project-manager.svg`),
  "hr-manager": iconComponent(`${ICON_BASE}/hr-manager.svg`),
  "qa-tester": iconComponent(`${ICON_BASE}/qa-tester.svg`),
  // Figma reuses the "square-dashed-mouse-pointer" icon for SQL/Manual Tester too.
  "sql-tester": DEFAULT_ICON,
  "manual-tester": DEFAULT_ICON,
};

function resolveIcon(key) {
  return ICON_COMPONENTS[key] || DEFAULT_ICON;
}

// Groups the flat job list the API returns back into the category sections
// CurrentOpenings used to get for free from jobsData.jsx's shape, preserving
// the order categories first appear in.
function groupByCategory(jobs) {
  const order = [];
  const byCategory = new Map();
  for (const job of jobs) {
    if (!byCategory.has(job.category)) {
      order.push(job.category);
      byCategory.set(job.category, { category: job.category, metaLabel: job.metaLabel, jobs: [] });
    }
    byCategory.get(job.category).jobs.push(job);
  }
  return order.map((category) => byCategory.get(category));
}

export default function CurrentOpenings() {
  const [jobs, setJobs] = useState(null); // null = loading, [] = loaded but empty
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(JOBS_API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((body) => {
        // The backend's sendResponse() puts the payload in `message`, not `data`.
        if (!cancelled) setJobs(Array.isArray(body.message) ? body.message : []);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const categories = jobs ? groupByCategory(jobs) : [];

  return (
    <div className="bg-ink font-manrope text-white">
      <header
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="px-6 pb-12 pt-20 text-left sm:px-12 lg:px-16"
      >
        <h2 className="max-w-4xl text-3xl font-semibold sm:text-4xl">Current Openings</h2>
        <p className="mt-3 max-w-2xl text-base text-lightGray">
          We are always on the lookout for talented individuals who are passionate about creating exceptional digital
          experiences. Whether you&rsquo;re a designer, engineer, project manager, or QA tester, we encourage you to
          explore our open positions.
        </p>
      </header>

      <div className="space-y-16 px-6 pb-24 sm:px-12 lg:px-16">
        {jobs === null && !error && <p className="text-base text-lightGray">Loading open roles…</p>}
        {error && <p className="text-base text-lightGray">Couldn&rsquo;t load open roles right now. Please try again later.</p>}
        {jobs !== null && !error && categories.length === 0 && (
          <p className="text-base text-lightGray">No open positions right now. Check back soon.</p>
        )}

        {categories.map(({ category, metaLabel, jobs: categoryJobs }) => (
          <section key={category} data-aos="fade-up">
            <h3 className="mb-8 text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl lg:text-[2rem]">
              {category}
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryJobs.map((job) => (
                <JobCard
                  key={job.id ?? job.title}
                  category={metaLabel ?? category}
                  title={job.title}
                  description={job.description}
                  Icon={resolveIcon(job.icon)}
                  applyHref={job.applyHref}
                  fast={category === "Design"}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
