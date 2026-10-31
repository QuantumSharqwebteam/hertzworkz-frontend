/* eslint-disable react/prop-types -- repo has no prop-types dependency; job is passed as a plain object */
import { useEffect, useState } from "react";

const CAREERS_API_BASE = import.meta.env.VITE_CAREERS_API_BASE_URL || "https://ecg4jls448.execute-api.us-east-1.amazonaws.com";
const APPLY_API_URL = `${CAREERS_API_BASE}/application/public/apply`;
// Reuses the resume-upload endpoint already built on our own backend (S3-backed) -
// the careers API wants a hosted resumeUrl, not a raw file upload.
const RESUME_UPLOAD_API_URL = import.meta.env.VITE_RESUME_UPLOAD_API_URL || "/api/uploads/resume";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_PATTERN = /^[+]?[\d\s-]{7,15}$/;
const URL_PATTERN = /^https?:\/\/.+/i;
const CURRENT_YEAR = new Date().getFullYear();

const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024; // 5MB, matches the backend's own limit

const NOTICE_PERIOD_OPTIONS = ["", "Immediate", "15 days", "30 days", "60 days", "90 days"];
const GENDER_OPTIONS = ["", "Male", "Female", "Other", "Prefer not to say"];

const initialForm = {
  name: "",
  email: "",
  mobileNo: "",
  gender: "",
  currentLocation: "",
  noticePeriod: "",
  portfolioUrl: "",
  degree: "",
  fieldOfStudy: "",
  university: "",
  graduationYear: "",
  cgpa: "",
  isCurrentlyEmployed: false,
  companyName: "",
  jobTitle: "",
  yearsOfExperience: "",
  skills: "",
};

const fieldClass =
  "w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-lightOrange focus:outline-none focus:ring-1 focus:ring-lightOrange";
const labelClass = "mb-1 block text-sm font-medium";
const errorClass = "mt-1 text-sm text-red-400";

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

// One validator per field, shared by onBlur (field-level) and the full
// pre-submit validate() below, so the message is defined in exactly one
// place. Optional fields (mobile, portfolio) only validate format once
// something's actually been typed.
const FIELD_VALIDATORS = {
  name: value => (value.trim() ? "" : "Please enter your name."),
  email: value => (EMAIL_PATTERN.test(value) ? "" : "Please enter a valid email."),
  mobileNo: value => (!value || MOBILE_PATTERN.test(value) ? "" : "Please enter a valid phone number."),
  portfolioUrl: value => (!value || URL_PATTERN.test(value) ? "" : "Include http(s):// in the URL."),
  degree: value => (value.trim() ? "" : "Please enter your degree."),
  fieldOfStudy: value => (value.trim() ? "" : "Please enter your field of study."),
  university: value => (value.trim() ? "" : "Please enter your university."),
  graduationYear: value => (isValidYear(value) ? "" : "Enter a valid year."),
  cgpa: value => (isValidCgpa(value) ? "" : "Enter a value between 0 and 10."),
  companyName: value => (value.trim() ? "" : "Please enter your company name."),
  jobTitle: value => (value.trim() ? "" : "Please enter your job title."),
  yearsOfExperience: value => (value !== "" && Number(value) >= 0 ? "" : "Please enter years of experience."),
};

// Fields that only apply (and only need validating) while isCurrentlyEmployed is checked.
const EMPLOYMENT_ONLY_FIELDS = ["companyName", "jobTitle", "yearsOfExperience"];

// Submits to POST /application/public/apply. Confirmed full accepted shape:
// fullName, email, mobileNo, gender, currentLocation, noticePeriod,
// portfolioUrl, jobOpeningId, academicDetails {degree, fieldOfStudy,
// university, graduationYear, cgpa}, employmentDetails {isCurrentlyEmployed,
// companyName, jobTitle, yearsOfExperience, skills[]}, resumeUrl. Only
// fullName/email/jobOpeningId/academicDetails are confirmed required (a
// submission with just those succeeded) - everything else here is sent only
// when the applicant actually filled it in.
export default function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");
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

  const handleBlur = field => () => {
    const validator = FIELD_VALIDATORS[field];
    if (!validator) return;
    setErrors(prev => ({ ...prev, [field]: validator(form[field]) }));
  };

  const handleResumeChange = e => {
    const file = e.target.files[0] || null;
    setResumeError("");
    if (file) {
      if (!ALLOWED_RESUME_TYPES.includes(file.type)) {
        setResumeError("Only PDF or Word documents are allowed.");
        e.target.value = "";
        setResumeFile(null);
        return;
      }
      if (file.size > MAX_RESUME_SIZE_BYTES) {
        setResumeError("Resume must be smaller than 5MB.");
        e.target.value = "";
        setResumeFile(null);
        return;
      }
    }
    setResumeFile(file);
  };

  const validate = () => {
    const next = {};
    for (const [field, validator] of Object.entries(FIELD_VALIDATORS)) {
      if (EMPLOYMENT_ONLY_FIELDS.includes(field) && !form.isCurrentlyEmployed) continue;
      const message = validator(form[field]);
      if (message) next[field] = message;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setServerError("");
    try {
      let resumeUrl;
      if (resumeFile) {
        const body = new FormData();
        body.append("resume", resumeFile);
        const uploadRes = await fetch(RESUME_UPLOAD_API_URL, { method: "POST", body });
        const uploadBody = await uploadRes.json().catch(() => ({}));
        if (!uploadRes.ok) throw new Error(uploadBody.message || "Resume upload failed");
        resumeUrl = uploadBody.url;
      }

      const skills = form.skills
        .split(",")
        .map(s => s.trim())
        .filter(Boolean);

      const res = await fetch(APPLY_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          ...(form.mobileNo ? { mobileNo: form.mobileNo } : {}),
          ...(form.gender ? { gender: form.gender } : {}),
          ...(form.currentLocation ? { currentLocation: form.currentLocation } : {}),
          ...(form.noticePeriod ? { noticePeriod: form.noticePeriod } : {}),
          ...(form.portfolioUrl ? { portfolioUrl: form.portfolioUrl } : {}),
          jobOpeningId: job.openingId,
          academicDetails: {
            degree: form.degree,
            fieldOfStudy: form.fieldOfStudy,
            university: form.university,
            graduationYear: Number(form.graduationYear),
            cgpa: Number(form.cgpa),
          },
          employmentDetails: {
            isCurrentlyEmployed: form.isCurrentlyEmployed,
            skills,
            ...(form.isCurrentlyEmployed
              ? {
                  companyName: form.companyName,
                  jobTitle: form.jobTitle,
                  yearsOfExperience: Number(form.yearsOfExperience),
                }
              : {}),
          },
          ...(resumeUrl ? { resumeUrl } : {}),
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
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 px-4 py-8"
      onClick={e => {
        if (e.target === e.currentTarget && status !== "submitting") onClose();
      }}
    >
      <div className="flex max-h-[85vh] w-full max-w-md flex-col rounded-2xl border border-white/15 bg-ink font-manrope text-white">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 p-6 sm:p-8 sm:pb-6">
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

        <div className="overflow-y-auto p-6 sm:p-8 sm:pt-6">
          {status === "success" ? (
            <p role="status" className="text-sm text-green-400">
              Thanks, {form.name}! Your application has been submitted.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <fieldset className="space-y-4">
                <legend className="text-xs font-semibold uppercase tracking-wide text-lightGray">
                  Personal details
                </legend>

                <div>
                  <label htmlFor="apply-name" className={labelClass}>
                    Full name
                  </label>
                  <input
                    id="apply-name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    onBlur={handleBlur("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "apply-name-error" : undefined}
                    className={fieldClass}
                  />
                  {errors.name && (
                    <p id="apply-name-error" className={errorClass}>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="apply-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="apply-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    onBlur={handleBlur("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "apply-email-error" : undefined}
                    className={fieldClass}
                  />
                  {errors.email && (
                    <p id="apply-email-error" className={errorClass}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="apply-mobile" className={labelClass}>
                      Mobile number
                    </label>
                    <input
                      id="apply-mobile"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.mobileNo}
                      onChange={update("mobileNo")}
                      onBlur={handleBlur("mobileNo")}
                      aria-invalid={!!errors.mobileNo}
                      aria-describedby={errors.mobileNo ? "apply-mobile-error" : undefined}
                      className={fieldClass}
                    />
                    {errors.mobileNo && (
                      <p id="apply-mobile-error" className={errorClass}>
                        {errors.mobileNo}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="apply-gender" className={labelClass}>
                      Gender
                    </label>
                    <select id="apply-gender" value={form.gender} onChange={update("gender")} className={fieldClass}>
                      {GENDER_OPTIONS.map(option => (
                        <option key={option} value={option} className="bg-ink">
                          {option || "Prefer not to say"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="apply-location" className={labelClass}>
                    Current location
                  </label>
                  <input
                    id="apply-location"
                    type="text"
                    placeholder="e.g. Chennai, Tamil Nadu, India"
                    value={form.currentLocation}
                    onChange={update("currentLocation")}
                    className={fieldClass}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="apply-notice" className={labelClass}>
                      Notice period
                    </label>
                    <select id="apply-notice" value={form.noticePeriod} onChange={update("noticePeriod")} className={fieldClass}>
                      {NOTICE_PERIOD_OPTIONS.map(option => (
                        <option key={option} value={option} className="bg-ink">
                          {option || "Select"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="apply-portfolio" className={labelClass}>
                      Portfolio URL
                    </label>
                    <input
                      id="apply-portfolio"
                      type="url"
                      placeholder="https://..."
                      value={form.portfolioUrl}
                      onChange={update("portfolioUrl")}
                      onBlur={handleBlur("portfolioUrl")}
                      aria-invalid={!!errors.portfolioUrl}
                      aria-describedby={errors.portfolioUrl ? "apply-portfolio-error" : undefined}
                      className={fieldClass}
                    />
                    {errors.portfolioUrl && (
                      <p id="apply-portfolio-error" className={errorClass}>
                        {errors.portfolioUrl}
                      </p>
                    )}
                  </div>
                </div>
              </fieldset>

              <fieldset className="space-y-4 border-t border-white/10 pt-4">
                <legend className="text-xs font-semibold uppercase tracking-wide text-lightGray">
                  Academic details
                </legend>

                <div>
                  <label htmlFor="apply-degree" className={labelClass}>
                    Degree
                  </label>
                  <input
                    id="apply-degree"
                    type="text"
                    placeholder="e.g. Bachelor of Technology"
                    value={form.degree}
                    onChange={update("degree")}
                    onBlur={handleBlur("degree")}
                    aria-invalid={!!errors.degree}
                    aria-describedby={errors.degree ? "apply-degree-error" : undefined}
                    className={fieldClass}
                  />
                  {errors.degree && (
                    <p id="apply-degree-error" className={errorClass}>
                      {errors.degree}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="apply-field" className={labelClass}>
                    Field of study
                  </label>
                  <input
                    id="apply-field"
                    type="text"
                    placeholder="e.g. Computer Science"
                    value={form.fieldOfStudy}
                    onChange={update("fieldOfStudy")}
                    onBlur={handleBlur("fieldOfStudy")}
                    aria-invalid={!!errors.fieldOfStudy}
                    aria-describedby={errors.fieldOfStudy ? "apply-field-error" : undefined}
                    className={fieldClass}
                  />
                  {errors.fieldOfStudy && (
                    <p id="apply-field-error" className={errorClass}>
                      {errors.fieldOfStudy}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="apply-university" className={labelClass}>
                    University
                  </label>
                  <input
                    id="apply-university"
                    type="text"
                    value={form.university}
                    onChange={update("university")}
                    onBlur={handleBlur("university")}
                    aria-invalid={!!errors.university}
                    aria-describedby={errors.university ? "apply-university-error" : undefined}
                    className={fieldClass}
                  />
                  {errors.university && (
                    <p id="apply-university-error" className={errorClass}>
                      {errors.university}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="apply-grad-year" className={labelClass}>
                      Graduation year
                    </label>
                    <input
                      id="apply-grad-year"
                      type="number"
                      value={form.graduationYear}
                      onChange={update("graduationYear")}
                      onBlur={handleBlur("graduationYear")}
                      aria-invalid={!!errors.graduationYear}
                      aria-describedby={errors.graduationYear ? "apply-grad-year-error" : undefined}
                      className={fieldClass}
                    />
                    {errors.graduationYear && (
                      <p id="apply-grad-year-error" className={errorClass}>
                        {errors.graduationYear}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="apply-cgpa" className={labelClass}>
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
                      onBlur={handleBlur("cgpa")}
                      aria-invalid={!!errors.cgpa}
                      aria-describedby={errors.cgpa ? "apply-cgpa-error" : undefined}
                      className={fieldClass}
                    />
                    {errors.cgpa && (
                      <p id="apply-cgpa-error" className={errorClass}>
                        {errors.cgpa}
                      </p>
                    )}
                  </div>
                </div>
              </fieldset>

              <fieldset className="space-y-4 border-t border-white/10 pt-4">
                <legend className="text-xs font-semibold uppercase tracking-wide text-lightGray">
                  Employment details
                </legend>

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={form.isCurrentlyEmployed}
                    onChange={e => setForm(f => ({ ...f, isCurrentlyEmployed: e.target.checked }))}
                    className="h-4 w-4 rounded border-white/30 bg-white/5 text-lightOrange focus:ring-lightOrange"
                  />
                  I&rsquo;m currently employed
                </label>

                {form.isCurrentlyEmployed && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="apply-company" className={labelClass}>
                        Company name
                      </label>
                      <input
                        id="apply-company"
                        type="text"
                        value={form.companyName}
                        onChange={update("companyName")}
                        onBlur={handleBlur("companyName")}
                        aria-invalid={!!errors.companyName}
                        aria-describedby={errors.companyName ? "apply-company-error" : undefined}
                        className={fieldClass}
                      />
                      {errors.companyName && (
                        <p id="apply-company-error" className={errorClass}>
                          {errors.companyName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="apply-job-title" className={labelClass}>
                        Job title
                      </label>
                      <input
                        id="apply-job-title"
                        type="text"
                        value={form.jobTitle}
                        onChange={update("jobTitle")}
                        onBlur={handleBlur("jobTitle")}
                        aria-invalid={!!errors.jobTitle}
                        aria-describedby={errors.jobTitle ? "apply-job-title-error" : undefined}
                        className={fieldClass}
                      />
                      {errors.jobTitle && (
                        <p id="apply-job-title-error" className={errorClass}>
                          {errors.jobTitle}
                        </p>
                      )}
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="apply-years" className={labelClass}>
                        Years of experience
                      </label>
                      <input
                        id="apply-years"
                        type="number"
                        min="0"
                        value={form.yearsOfExperience}
                        onChange={update("yearsOfExperience")}
                        onBlur={handleBlur("yearsOfExperience")}
                        aria-invalid={!!errors.yearsOfExperience}
                        aria-describedby={errors.yearsOfExperience ? "apply-years-error" : undefined}
                        className={fieldClass}
                      />
                      {errors.yearsOfExperience && (
                        <p id="apply-years-error" className={errorClass}>
                          {errors.yearsOfExperience}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="apply-skills" className={labelClass}>
                    Skills
                  </label>
                  <input
                    id="apply-skills"
                    type="text"
                    placeholder="e.g. JavaScript, React, Node.js"
                    value={form.skills}
                    onChange={update("skills")}
                    className={fieldClass}
                  />
                  <p className="mt-1 text-xs text-lightGray">Comma-separated.</p>
                </div>
              </fieldset>

              <fieldset className="space-y-2 border-t border-white/10 pt-4">
                <legend className="text-xs font-semibold uppercase tracking-wide text-lightGray">Resume</legend>
                <label htmlFor="apply-resume" className={labelClass}>
                  Upload resume (PDF or Word, optional)
                </label>
                <input
                  id="apply-resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="block w-full text-sm text-lightGray file:mr-3 file:rounded-full file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:text-white hover:file:bg-white/20"
                />
                {resumeFile && <p className="text-xs text-lightGray">Selected: {resumeFile.name}</p>}
                {resumeError && <p className={errorClass}>{resumeError}</p>}
              </fieldset>

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
    </div>
  );
}
