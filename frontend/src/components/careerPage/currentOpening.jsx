import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import ApplyModal from "./ApplyModal";

const CAREERS_API_BASE = import.meta.env.VITE_CAREERS_API_BASE_URL || "https://ecg4jls448.execute-api.us-east-1.amazonaws.com";
const OPENINGS_API_URL = `${CAREERS_API_BASE}/opening/getAll`;

// The real openings API has no per-role icon (unlike the old hardcoded
// jobsData.jsx), so every card shares one generic icon.
// eslint-disable-next-line react/prop-types -- repo has no prop-types dependency
function GenericIcon({ className }) {
  return <img src="/assets/images/career/icons/ui-design.svg" alt="" aria-hidden="true" className={className} />;
}

function formatType(type) {
  if (!type) return "";
  return type.charAt(0).toUpperCase() + type.slice(1);
}

// Groups the flat opening list by department, preserving the order
// departments first appear in - same shape CurrentOpenings used to get for
// free from the old hardcoded jobsData.jsx's category groups.
function groupByDepartment(openings) {
  const order = [];
  const byDepartment = new Map();
  for (const opening of openings) {
    const department = opening.department || "Other";
    if (!byDepartment.has(department)) {
      order.push(department);
      byDepartment.set(department, []);
    }
    byDepartment.get(department).push(opening);
  }
  return order.map(department => ({ department, openings: byDepartment.get(department) }));
}

export default function CurrentOpenings() {
  const [openings, setOpenings] = useState(null); // null = loading, [] = loaded but empty
  const [error, setError] = useState(false);
  const [applyingTo, setApplyingTo] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(OPENINGS_API_URL)
      .then(res => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then(body => {
        if (cancelled) return;
        const all = Array.isArray(body.data) ? body.data : [];
        setOpenings(all.filter(opening => opening.status === "Active"));
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const departments = openings ? groupByDepartment(openings) : [];

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
        {openings === null && !error && <p className="text-base text-lightGray">Loading open roles…</p>}
        {error && <p className="text-base text-lightGray">Couldn&rsquo;t load open roles right now. Please try again later.</p>}
        {openings !== null && !error && departments.length === 0 && (
          <p className="text-base text-lightGray">No open positions right now. Check back soon.</p>
        )}

        {departments.map(({ department, openings: deptOpenings }) => (
          <section key={department} data-aos="fade-up">
            <h3 className="mb-8 text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl lg:text-[2rem]">
              {department}
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {deptOpenings.map(opening => (
                <JobCard
                  key={opening.openingId}
                  category={department}
                  title={opening.title}
                  description={opening.jobDescription}
                  Icon={GenericIcon}
                  meta={[formatType(opening.type), opening.location].filter(Boolean).join(" • ")}
                  onApply={() => setApplyingTo(opening)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {applyingTo && <ApplyModal job={applyingTo} onClose={() => setApplyingTo(null)} />}
    </div>
  );
}
