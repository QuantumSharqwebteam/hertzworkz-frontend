import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/service", label: "Services" },
  { to: "/product", label: "Products" },
  { to: "/career", label: "Careers" },
  { to: "/#about", label: "About Us" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

// `onLight` swaps the glass pill for a dark one so it reads on a white page.
// eslint-disable-next-line react/prop-types
export default function HeroNavbar({ onLight = false }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:pt-6 font-manrope">
      <div className={`relative mx-auto max-w-5xl rounded-full border backdrop-blur-md shadow-lg ${
          onLight ? "border-white/10 bg-ink/90" : "border-white/20 bg-white/5"
        }`}>
        <nav aria-label="Main" className="flex items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <Link to="/" onClick={close} aria-label="Hertzworkz home" className={`rounded-full ${focusRing}`}>
            <Logo barsClassName="h-2.5 w-auto" textClassName="h-4 w-auto" />
          </Link>

          <ul className="hidden md:flex items-center gap-6 lg:gap-10">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className={`rounded text-xs font-medium uppercase tracking-wider text-gray-300 transition-colors duration-[250ms] ease-in-out hover:text-white focus-visible:text-white ${focusRing}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className={`hidden md:inline-block rounded-full bg-brand-gradient px-5 py-2 text-xs font-medium uppercase tracking-wider text-white transition-opacity hover:opacity-90 ${focusRing}`}
          >
            Contact Us
          </Link>

          <button
            type="button"
            className={`md:hidden rounded-full p-2 text-white ${focusRing}`}
            aria-expanded={open}
            aria-controls="hero-mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </nav>

        <ul
          id="hero-mobile-menu"
          className={`${open ? "flex" : "hidden"} md:hidden absolute left-0 right-0 top-full mt-2 flex-col gap-1 rounded-3xl border border-white/20 bg-ink/90 p-4 backdrop-blur-md`}
        >
          {links.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                onClick={close}
                className={`block rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-wider text-gray-300 transition-colors duration-[250ms] ease-in-out hover:text-white focus-visible:text-white ${focusRing}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={close}
              className={`mt-2 block rounded-full bg-brand-gradient px-5 py-2 text-center text-sm font-medium uppercase tracking-wider text-white ${focusRing}`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
