import JOB_CATEGORIES from "./jobsData";
import JobCard from "./JobCard";

export default function CurrentOpenings() {
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
        {JOB_CATEGORIES.map(({ category, jobs }) => (
          <section key={category} data-aos="fade-up">
            <h3 className="mb-8 text-sm font-bold uppercase tracking-wider text-white">{category}</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobCard
                  key={job.title}
                  category={category}
                  title={job.title}
                  description={job.description}
                  Icon={job.Icon}
                  applyHref={job.applyHref}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
