/* eslint-disable react/prop-types -- repo has no prop-types dependency; job is passed as a plain object */
import { useEffect, useState } from "react";

const CAREERS_API_BASE = import.meta.env.VITE_CAREERS_API_BASE_URL || "https://ecg4jls448.execute-api.us-east-1.amazonaws.com";
const APPLY_API_URL = `${CAREERS_API_BASE}/application/public/apply`;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CURRENT_YEAR = new Date().getFullYear();

const initialForm = {
  name: "",
  email: "",
  degree: "",
  fieldOfStudy: "",
  university: "",
  graduationYear: "",
  cgpa: "",
};

const fieldClass =
  "w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-lightOrange focus:outline-none focus:ring-1 focus:ring-lightOrange";

function isValidYear(value) {
  if (value === "") return false;
  const n = Number(value);
  return Number.isInteger(n) && n >= 1950 && n <= CURRENT_YEAR + 10;
}

function isValidCgpa(value) {
  if (value === "") return false;
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 && n <= 10;
}

// Submits to POST /application/public/apply. Confirmed required shape:
// { fullName, email, jobOpeningId, academicDetails: { degree, fieldOfStudy,
// university, graduationYear, cgpa } } - note fullName/jobOpeningId, not
// name/openingId, and academicDetails holds degree info, not percentages.
export default function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    const onKeyDown = e => {
      if (e.key === "Escape" && status !== "submitting") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, status]);

  const update = field => e => setForm(f => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!EMAIL_PATTERN.test(form.email)) next.email = "Please enter a valid email.";
    if (!form.degree.trim()) next.degree = "Please enter your degree.";
    if (!form.fieldOfStudy.trim()) next.fieldOfStudy = "Please enter your field of study.";
    if (!form.university.trim()) next.university = "Please enter your university.";
    if (!isValidYear(form.graduationYear)) next.graduationYear = "Enter a valid year.";
    if (!isValidCgpa(form.cgpa)) next.cgpa = "Enter a value between 0 and 10.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch(APPLY_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          jobOpeningId: job.openingId,
          academicDetails: {
            degree: form.degree,
            fieldOfStudy: form.fieldOfStudy,
            university: form.university,
            graduationYear: Number(form.graduationYear),
            cgpa: Number(form.cgpa),
          },
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.message || `Request failed with status ${res.status}`);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-8"
      onClick={e => {
        if (e.target === e.currentTarget && status !== "submitting") onClose();
      }}
    >
      <div className="w-full max-w-md rounded-2xl border border-white/15 bg-ink p-6 font-manrope text-white sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="apply-modal-title" className="text-xl font-semibold">
              Apply for {job.title}
            </h3>
            <p className="mt-1 text-sm text-lightGray">
              {job.department}
              {job.location ? ` • ${job.location}` : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={status === "submitting"}
            aria-label="Close"
            className="rounded-full p-1 text-lightGray hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange disabled:cursor-not-allowed"
          >
            ✕
          </button>
        </div>

        {status === "success" ? (
          <p role="status" className="mt-6 text-sm text-green-400">
            Thanks, {form.name}! Your application has been submitted.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            <div>
              <label htmlFor="apply-name" className="mb-1 block text-sm font-medium">
                Full name
              </label>
              <input
                id="apply-name"
                type="text"
                value={form.name}
                onChange={update("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "apply-name-error" : undefined}
                className={fieldClass}
              />
              {errors.name && (
                <p id="apply-name-error" className="mt-1 text-sm text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="apply-email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="apply-email"
                type="email"
                value={form.email}
                onChange={update("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "apply-email-error" : undefined}
                className={fieldClass}
              />
              {errors.email && (
                <p id="apply-email-error" className="mt-1 text-sm text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="apply-degree" className="mb-1 block text-sm font-medium">
                Degree
              </label>
              <input
                id="apply-degree"
                type="text"
                placeholder="e.g. Bachelor of Technology"
                value={form.degree}
                onChange={update("degree")}
                aria-invalid={!!errors.degree}
                aria-describedby={errors.degree ? "apply-degree-error" : undefined}
                className={fieldClass}
              />
              {errors.degree && (
                <p id="apply-degree-error" className="mt-1 text-sm text-red-400">
                  {errors.degree}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="apply-field" className="mb-1 block text-sm font-medium">
                Field of study
              </label>
              <input
                id="apply-field"
                type="text"
                placeholder="e.g. Computer Science"
                value={form.fieldOfStudy}
                onChange={update("fieldOfStudy")}
                aria-invalid={!!errors.fieldOfStudy}
                aria-describedby={errors.fieldOfStudy ? "apply-field-error" : undefined}
                className={fieldClass}
              />
              {errors.fieldOfStudy && (
                <p id="apply-field-error" className="mt-1 text-sm text-red-400">
                  {errors.fieldOfStudy}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="apply-university" className="mb-1 block text-sm font-medium">
                University
              </label>
              <input
                id="apply-university"
                type="text"
                value={form.university}
                onChange={update("university")}
                aria-invalid={!!errors.university}
                aria-describedby={errors.university ? "apply-university-error" : undefined}
                className={fieldClass}
              />
              {errors.university && (
                <p id="apply-university-error" className="mt-1 text-sm text-red-400">
                  {errors.university}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="apply-grad-year" className="mb-1 block text-sm font-medium">
                  Graduation year
                </label>
                <input
                  id="apply-grad-year"
                  type="number"
                  value={form.graduationYear}
                  onChange={update("graduationYear")}
                  aria-invalid={!!errors.graduationYear}
                  aria-describedby={errors.graduationYear ? "apply-grad-year-error" : undefined}
                  className={fieldClass}
                />
                {errors.graduationYear && (
                  <p id="apply-grad-year-error" className="mt-1 text-sm text-red-400">
                    {errors.graduationYear}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="apply-cgpa" className="mb-1 block text-sm font-medium">
                  CGPA
                </label>
                <input
                  id="apply-cgpa"
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  value={form.cgpa}
                  onChange={update("cgpa")}
                  aria-invalid={!!errors.cgpa}
                  aria-describedby={errors.cgpa ? "apply-cgpa-error" : undefined}
                  className={fieldClass}
                />
                {errors.cgpa && (
                  <p id="apply-cgpa-error" className="mt-1 text-sm text-red-400">
                    {errors.cgpa}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-full bg-brand-gradient py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting…" : "Submit Application"}
            </button>
            {status === "error" && (
              <p role="alert" className="text-sm text-red-400">
                {serverError}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
