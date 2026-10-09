import { useState } from "react";
import services from "../servicePage/servicesData";
import ServiceSelect from "./ServiceSelect";

// Set VITE_CONTACT_API_URL once the backend exists (see .env.example).
// Until then this posts to a placeholder path and surfaces a clear error
// instead of silently failing.
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

const SERVICE_OPTIONS = [
  { value: "", label: "Choose the service" },
  { value: "general-inquiry", label: "General Inquiry" },
  ...services.map((s) => ({ value: s.slug, label: s.label })),
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = { name: "", phone: "", email: "", service: "", message: "" };

const fieldClass =
  "w-full rounded-md border border-transparent bg-lightGray px-4 py-3 text-sm text-black placeholder:text-gray-500 focus:border-lightOrange focus:outline-none focus:ring-1 focus:ring-lightOrange";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!EMAIL_PATTERN.test(form.email)) next.email = "Please enter a valid email.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2">
      <div>
        <label htmlFor="contact-name" className="mb-3 block text-base font-medium text-black">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="Your full name"
          value={form.name}
          onChange={update("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={fieldClass}
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-3 block text-base font-medium text-black">
          Phone Number
        </label>
        <input
          id="contact-phone"
          type="tel"
          placeholder="Your phone number here"
          value={form.phone}
          onChange={update("phone")}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-3 block text-base font-medium text-black">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="Your email here"
          value={form.email}
          onChange={update("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={fieldClass}
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-service" className="mb-3 block text-base font-medium text-black">
          Service
        </label>
        <ServiceSelect
          id="contact-service"
          options={SERVICE_OPTIONS}
          value={form.service}
          onChange={(value) => setForm((f) => ({ ...f, service: value }))}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className="mb-3 block text-base font-medium text-black">
          Message
        </label>
        <textarea
          id="contact-message"
          placeholder="Your message here"
          value={form.message}
          onChange={update("message")}
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={fieldClass}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-brand-gradient px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send"}
        </button>
        {status === "success" && (
          <p role="status" className="mt-3 text-sm text-green-700">
            Thanks! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="mt-3 text-sm text-red-600">
            Something went wrong sending your message. Please try again, or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
