import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollActiveOnMobile } from "../../hooks/useScrollActiveOnMobile";

// eslint-disable-next-line react/prop-types
export default function ServiceCard({ slug, icon, label }) {
  const ref = useRef(null);
  // Mirrors the card's hover border/glow on a touch/mobile viewport once it
  // scrolls into view - see useScrollActiveOnMobile. Desktop/pointer devices
  // are untouched: `active` stays false there, so only the real hover:
  // classes below ever apply.
  const active = useScrollActiveOnMobile(ref);

  return (
    <Link
      ref={ref}
      to={`/service/${slug}`}
      className={`group flex min-h-[26.125rem] flex-col items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-[box-shadow,border-color] duration-300 hover:border-lightOrange/60 hover:shadow-[0_0_40px_8px_rgba(254,93,38,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
        active ? "border-lightOrange/60 shadow-[0_0_40px_8px_rgba(254,93,38,0.25)]" : ""
      }`}
    >
      <img src={icon} alt="" aria-hidden="true" className="h-32 w-auto object-contain sm:h-44 lg:h-[16.875rem]" />
      <span className="text-lg font-medium text-white sm:text-xl">{label}</span>
    </Link>
  );
}
