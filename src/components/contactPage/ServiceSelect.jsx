/* eslint-disable react/prop-types -- repo has no prop-types dependency */
import { useEffect, useRef, useState } from "react";

// Custom dropdown (not a native <select>) so the open option list can be
// scrolled smoothly into view - matching the reference video, where opening
// the list slides the page down just enough to reveal every option, and
// closing it settles back.
export default function ServiceSelect({ id, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listRef = useRef(null);

  const selected = options.find((o) => o.value === value) || options[0];

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (!rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-md border border-transparent bg-lightGray px-4 py-3 text-left text-sm text-black focus:border-lightOrange focus:outline-none focus:ring-1 focus:ring-lightOrange"
      >
        <span className={selected.value ? "text-black" : "text-gray-500"}>{selected.label}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          aria-labelledby={id}
          className="absolute z-20 mt-1 max-h-72 w-full overflow-auto rounded-md border border-black/5 bg-lightGray shadow-lg"
        >
          {options.map((opt) => (
            <li key={opt.value || "placeholder"}>
              <button
                type="button"
                role="option"
                aria-selected={opt.value === value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-2.5 text-left text-sm hover:bg-black/5 ${
                  opt.value === value ? "font-medium text-black" : "text-gray-700"
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
