import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollActiveOnMobile } from "../../hooks/useScrollActiveOnMobile";

// Used by ServicesGrid.jsx only - a borderless icon+label link with a baseline drop
// shadow that gains an orange glow and scales up ~1.175x on hover/focus. `className`/
// `style` let the caller switch between the desktop scatter layout (absolute + %
// position) and the mobile stacked fallback (plain flow) without duplicating markup.
// eslint-disable-next-line react/prop-types
export default function ServiceScatterIcon({ slug, icon, label, className = "", style }) {
  const ref = useRef(null);
  // Mirrors the icon's hover scale/glow on a touch/mobile viewport once it
  // scrolls into view - see useScrollActiveOnMobile. Desktop/pointer devices
  // are untouched: `active` stays false there, so only the real
  // group-hover:/group-focus-visible: classes below ever apply.
  const active = useScrollActiveOnMobile(ref);

  return (
    <Link
      ref={ref}
      to={`/service/${slug}`}
      style={style}
      className={`group flex flex-col items-center gap-4 rounded-2xl p-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${className}`}
    >
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className={`h-28 w-auto object-contain shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out motion-reduce:transition-none group-hover:scale-[1.175] group-hover:[filter:drop-shadow(0px_4px_24.4px_rgba(255,87,34,0.41))] group-focus-visible:scale-[1.175] group-focus-visible:[filter:drop-shadow(0px_4px_24.4px_rgba(255,87,34,0.41))] sm:h-32 lg:h-36 ${
          active ? "scale-[1.175] [filter:drop-shadow(0px_4px_24.4px_rgba(255,87,34,0.41))]" : ""
        }`}
      />
      <span className="text-lg font-medium text-white sm:text-xl">{label}</span>
    </Link>
  );
}
