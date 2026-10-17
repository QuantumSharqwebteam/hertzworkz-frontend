import { useState } from "react";
import textura from "/assets/images/products/circles/textura.webp";
import mediApp from "/assets/images/products/circles/medi-app.webp";
import vitalyolk from "/assets/images/products/circles/vitalyolk.webp";
import safeNest from "/assets/images/products/circles/safe-nest.webp";
import leadRecycling from "/assets/images/products/circles/lead-recycling.webp";
import hubDiagram from "/assets/images/products/hub-diagram.webp";

// Filter-style tabs shown right below the hero. Visual-only tab selection (no labeled
// tab maps cleanly to a circle below - "Texture" vs "Textura" - so clicking just
// highlights, it doesn't filter the showcase).
const TABS = ["Texture", "Madi App", "Vitalyolk App", "Safe Nest"];

function ProductTabs() {
  const [active, setActive] = useState(TABS[0]);
  return (
    <div
      role="tablist"
      aria-label="Products"
      className="flex flex-wrap items-center justify-center gap-4 px-6 py-16 sm:px-12"
    >
      {TABS.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActive(tab)}
            className={`rounded-full px-8 py-3 text-base font-medium shadow-lg shadow-black/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange focus-visible:ring-offset-2 ${
              isActive
                ? "border-2 border-lightOrange bg-white text-lightOrange"
                : "border-2 border-transparent bg-white text-gray-700 hover:border-lightOrange/40"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

// Circle size/offset constants shared by both columns so the stagger lines up.
const circleClass =
  "group relative mx-auto w-56 shrink-0 overflow-hidden rounded-full transition-transform duration-300 ease-out hover:scale-105 focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lightOrange/60 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100 sm:w-64 lg:w-72";

const LEFT_COLUMN = [
  { name: "Medi App", img: mediApp },
  { name: "Safe Nest", img: safeNest },
];

const RIGHT_COLUMN = [
  { name: "Textura", img: textura },
  { name: "VitalYolk", img: vitalyolk },
  { name: "Lead Recycling Software", img: leadRecycling },
];

// eslint-disable-next-line react/prop-types -- repo has no prop-types dependency; ProductCircle is file-local
function ProductCircle({ name, img }) {
  return (
    <div tabIndex={0} className={circleClass}>
      <img src={img} alt={name} className="block w-full rounded-full" />
    </div>
  );
}

export default function ProductsShowcase() {
  return (
    <section aria-label="Our products" className="bg-ink pb-24 font-manrope">
      <ProductTabs />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-12 lg:grid-cols-2 lg:px-16">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center sm:gap-6 lg:gap-10">
          <div className="flex flex-col gap-10 sm:gap-14 sm:pt-16 lg:pt-24">
            {LEFT_COLUMN.map((item) => (
              <ProductCircle key={item.name} {...item} />
            ))}
          </div>
          <div className="flex flex-col gap-10 sm:gap-14">
            {RIGHT_COLUMN.map((item) => (
              <ProductCircle key={item.name} {...item} />
            ))}
          </div>
        </div>

        <div className="text-center lg:text-left">
          <img src={hubDiagram} alt="" aria-hidden="true" className="mx-auto w-full max-w-lg lg:mx-0" />
          <p className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
            Our products are designed to empower businesses across industries. Whether you&rsquo;re managing
            textiles, healthcare, logistics, or poultry, our solutions simplify operations, enhance user experiences,
            and drive efficiency. Combining advanced features with intuitive design, our web and mobile applications
            cater to the unique needs of modern enterprises.
          </p>
        </div>
      </div>
    </section>
  );
}
