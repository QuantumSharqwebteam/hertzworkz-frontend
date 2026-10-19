import { useState } from "react";
import {
  FaUsers,
  FaCalendarCheck,
  FaVideo,
  FaChartLine,
  FaXmark,
  FaTruck,
  FaDatabase,
  FaShieldHalved,
  FaBolt,
  FaBell,
  FaCompass,
  FaWeightScale,
} from "react-icons/fa6";
import textura from "/assets/images/products/circles/textura.webp";
import mediApp from "/assets/images/products/circles/medi-app.webp";
import vitalyolk from "/assets/images/products/circles/vitalyolk.webp";
import safeNest from "/assets/images/products/circles/safe-nest.webp";
import leadRecycling from "/assets/images/products/circles/lead-recycling.webp";
import hubDiagram from "/assets/images/products/hub-diagram.webp";

// Detail content for the click-to-expand interaction (reference/howrigballs .mp4),
// one entry per circle, keyed by the same name used in LEFT_COLUMN/RIGHT_COLUMN.
// Copy is condensed from the Figma prototype's own feature cards (and, for Medi
// App, mediApp.jsx's existing text) - every product has exactly 4 features, which
// is what lets the same scatter positions below work for all five.
const PRODUCT_DETAILS = {
  "Medi App": {
    tagline: "A Connected Digital Experience for Healthcare Management",
    description:
      "Medi App brings patient records, appointment scheduling, and virtual consultations into one connected platform, making it easier for practitioners and patients to manage care from anywhere.",
    tags: ["PLATFORM: WEB & MOBILE", "INDUSTRY: HEALTHCARE", "FOCUS: DIGITAL PRODUCT DESIGN"],
    features: [
      {
        Icon: FaUsers,
        title: "Patient Records",
        description: "Centralized system for managing patient history, prescriptions, and appointments.",
      },
      {
        Icon: FaCalendarCheck,
        title: "Appointment Scheduling",
        description: "Real-time availability with automated reminders for hassle-free bookings.",
      },
      {
        Icon: FaVideo,
        title: "Virtual Consultations",
        description: "Secure video consultations connecting patients with healthcare professionals.",
      },
      {
        Icon: FaChartLine,
        title: "Health Analytics",
        description: "A personalized dashboard that centralizes health data and insights.",
      },
    ],
  },
  Textura: {
    tagline: "A Connected Digital Experience for Textile Management",
    description:
      "Textura is a web and mobile application designed to simplify textile business operations. The platform brings essential workflows such as inventory management, order management, customer management, and reporting into one connected digital experience.",
    tags: ["PLATFORM: WEB & MOBILE", "INDUSTRY: TEXTILE", "FOCUS: DIGITAL PRODUCT DESIGN"],
    features: [
      {
        Icon: FaUsers,
        title: "Customer Management",
        description: "Centralized system for tracking partner relationships, history, and preferred designs.",
      },
      {
        Icon: FaTruck,
        title: "Order Tracking",
        description: "Monitor processing stages seamlessly from dispatch to hand-off with end-to-end transparency.",
      },
      {
        Icon: FaDatabase,
        title: "Inventory Management",
        description: "Real-time stock tracking, automated alerts for reorders, and direct supplier integration.",
      },
      {
        Icon: FaChartLine,
        title: "Analytics & Reporting",
        description: "Synthesized operational insights to optimize material allocation and waste management.",
      },
    ],
  },
  "Safe Nest": {
    tagline: "A Connected Digital Experience for Home Safety Management",
    description:
      "Safe Nest brings safety information, quick actions, and connected functions together in one accessible interface, helping households stay informed and respond quickly when it matters most.",
    tags: ["PLATFORM: WEB & MOBILE", "INDUSTRY: HOME SAFETY", "FOCUS: DIGITAL PRODUCT DESIGN"],
    features: [
      {
        Icon: FaShieldHalved,
        title: "Safety Information",
        description: "Keep relevant safety information available and easy to understand.",
      },
      {
        Icon: FaBolt,
        title: "Quick Actions",
        description: "Access important safety functions quickly when they are needed.",
      },
      {
        Icon: FaBell,
        title: "Simple Interface",
        description: "Keep important actions and information clear, accessible, and easy to navigate.",
      },
      {
        Icon: FaCompass,
        title: "Connected Functions",
        description: "Bring multiple safety-related functions together in one experience.",
      },
    ],
  },
  VitalYolk: {
    tagline: "A Connected Digital Experience for Poultry Operations",
    description:
      "VitalYolk brings a simple, user-friendly interface to managing poultry operations across web and mobile, making it easier to navigate important workflows with fewer steps.",
    tags: ["PLATFORM: WEB & MOBILE", "INDUSTRY: POULTRY", "FOCUS: DIGITAL PRODUCT DESIGN"],
    features: [
      {
        Icon: FaCompass,
        title: "Simple Navigation",
        description: "Clear navigation helps users move through important sections with fewer steps.",
      },
      {
        Icon: FaDatabase,
        title: "User-Friendly Interface",
        description: "A clean interface designed to make information easier to understand.",
      },
      {
        Icon: FaChartLine,
        title: "Web Experience",
        description: "A responsive web experience that extends the product beyond mobile.",
      },
      {
        Icon: FaUsers,
        title: "Customer Management",
        description: "A focused mobile interface designed around accessible interactions.",
      },
    ],
  },
  "Lead Recycling Software": {
    tagline: "A Connected Digital Experience for Lead Recycling Operations",
    description:
      "Lead Recycling Software brings vehicle and weighbridge management, material tracking, and operational reporting into one connected platform, reducing manual entry and weighing errors across the recycling process.",
    tags: ["PLATFORM: WEB & MOBILE", "INDUSTRY: RECYCLING & LOGISTICS", "FOCUS: DIGITAL PRODUCT DESIGN"],
    features: [
      {
        Icon: FaWeightScale,
        title: "Vehicle & Weighbridge Management",
        description: "Automated vehicle entry and weighing, with accurate weight capture from the weighbridge.",
      },
      {
        Icon: FaDatabase,
        title: "Material & Inventory Management",
        description: "Track incoming and outgoing lead materials, stock levels, and movements in real time.",
      },
      {
        Icon: FaBolt,
        title: "Automatic Weight Recording",
        description: "Capture precise gross, tare, and net weights directly from the weighbridge hardware.",
      },
      {
        Icon: FaChartLine,
        title: "Analytics & Reporting",
        description: "Generate clear reports on weighments, material movement, and overall business performance.",
      },
    ],
  },
};

// Fixed pixel offsets (relative to the panel's own fixed 448px width, not the
// stage - see the scatter block below for why) for the 4 circles that aren't
// selected. Every product has exactly 4 features, so the panel's height - and
// therefore these slots - stay valid no matter which product is selected.
const SCATTER_SLOTS = [
  { left: 520, top: 40, size: "h-16 w-16" },
  { left: 511, top: 453, size: "h-20 w-20" },
  { left: 57, top: 640, size: "h-28 w-28" },
  { left: 357, top: 640, size: "h-20 w-20" },
];

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
      className="grid grid-cols-2 place-items-center gap-4 px-6 py-16 sm:flex sm:flex-wrap sm:justify-center sm:px-12"
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
            className={`w-full rounded-full px-8 py-3 text-base font-medium shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-colors sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
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
// Shrinks in place (rather than collapsing into a new row) once a product is
// selected, so each circle stays near its original grid position - the panel
// then overlays on top, matching reference/howrigballs .mp4.
const circleClass =
  "group relative mx-auto shrink-0 overflow-hidden rounded-full transition-all duration-300 ease-out hover:scale-105 focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lightOrange/60 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100";
const circleFullSize = "w-56 sm:w-64 lg:w-72";
const circleShrunkSize = "w-16 opacity-80 sm:w-20";

const LEFT_COLUMN = [
  { name: "Medi App", img: mediApp },
  { name: "Safe Nest", img: safeNest },
];

const RIGHT_COLUMN = [
  { name: "Textura", img: textura },
  { name: "VitalYolk", img: vitalyolk },
  { name: "Lead Recycling Software", img: leadRecycling },
];

const ALL_PRODUCTS = [...LEFT_COLUMN, ...RIGHT_COLUMN];

// eslint-disable-next-line react/prop-types -- repo has no prop-types dependency; ProductCircle is file-local
function ProductCircle({ name, img, onClick, shrink }) {
  return (
    <div
      tabIndex={0}
      role={onClick ? "button" : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      className={`${circleClass} ${shrink ? circleShrunkSize : circleFullSize} ${onClick ? "cursor-pointer" : ""}`}
    >
      <img src={img} alt={name} className="block w-full rounded-full" />
    </div>
  );
}

export default function ProductsShowcase() {
  const [selected, setSelected] = useState(null);
  const detail = selected ? PRODUCT_DETAILS[selected] : null;
  const selectedItem = ALL_PRODUCTS.find((item) => item.name === selected);
  const scattered = ALL_PRODUCTS.filter((item) => item.name !== selected);

  return (
    <section aria-label="Our products" className="bg-ink font-manrope">
      <ProductTabs />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-12 lg:grid-cols-2 lg:px-16">
        <div className="relative">
          {detail ? (
            // Fixed coordinates (measured off the reference screenshot) instead of flex
            // flow, since the reference's scatter doesn't correspond to any natural
            // flex/grid arrangement - each shrunk circle keeps roughly its own original
            // position around the panel rather than being re-flowed into a new layout.
            <div className="mx-auto max-w-3xl lg:mx-0">
            <div className="relative min-h-[660px] xl:min-h-[820px]">
              {selectedItem && (
                <img
                  src={selectedItem.img}
                  alt={selectedItem.name}
                  title={selectedItem.name}
                  className="absolute left-[47%] top-0 h-16 w-16 -translate-x-1/2 rounded-full object-cover shadow-lg ring-4 ring-lightOrange"
                />
              )}

              <div className="absolute left-0 top-[90px] w-full max-w-md rounded-2xl border border-lightOrange/60 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-white">{selected}</h3>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    aria-label="Close product details"
                    className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange"
                  >
                    <FaXmark aria-hidden="true" className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  {detail.features.map(({ Icon, title, description }) => (
                    <div
                      key={title}
                      tabIndex={0}
                      className="group relative overflow-hidden rounded-xl bg-white/[0.04] p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange"
                    >
                      {/* Overlay instead of swapping background directly, so the fill fades in rather than snapping. */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                      />
                      <div className="relative flex items-center gap-2 text-white">
                        <Icon aria-hidden="true" className="h-4 w-4 text-lightOrange transition-colors duration-300 group-hover:text-white" />
                        <span className="font-medium">{title}</span>
                      </div>
                      <p className="relative mt-1 text-sm text-gray-400 transition-colors duration-300 group-hover:text-white/90">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Positions are fixed pixels relative to the panel's own fixed 448px
                  (max-w-md) width, not percentages of the stage - the stage's width
                  varies (and can exceed the panel's) while the panel's own width
                  never does, so anchoring to the panel is what actually stays safe
                  across window sizes. Only shown once the stage is wide enough (xl)
                  for these fixed offsets to fit; narrower windows use the wrapped-row
                  fallback below instead. */}
              <div className="hidden xl:contents">
                {scattered.map((item, index) => {
                  const slot = SCATTER_SLOTS[index];
                  return (
                    <img
                      key={item.name}
                      src={item.img}
                      alt={item.name}
                      title={item.name}
                      className={`absolute -translate-x-1/2 rounded-full object-cover opacity-80 shadow-lg ${slot.size}`}
                      style={{ left: `${slot.left}px`, top: `${slot.top}px` }}
                    />
                  );
                })}
              </div>

            </div>

            {/* Normal document flow (not absolutely positioned) so it always starts
                right after the panel ends, whatever the panel's actual rendered
                height turns out to be - that's what guarantees no overlap. */}
            <div className="mt-6 flex flex-wrap items-start justify-center gap-4 xl:hidden">
              {scattered.map((item) => (
                <ProductCircle key={item.name} {...item} shrink />
              ))}
            </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center sm:gap-6 lg:gap-10">
              <div className="flex flex-col gap-10 sm:gap-14 sm:pt-16 lg:pt-24">
                {LEFT_COLUMN.map((item) => (
                  <ProductCircle key={item.name} {...item} onClick={() => setSelected(item.name)} />
                ))}
              </div>
              <div className="flex flex-col gap-10 sm:gap-14">
                {RIGHT_COLUMN.map((item) => (
                  <ProductCircle key={item.name} {...item} onClick={() => setSelected(item.name)} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="text-center lg:text-left">
          {detail ? (
            <>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lightOrange text-xl font-bold text-white">
                  {selected.charAt(0)}
                </span>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">{selected}</h3>
              </div>
              <h4 className="mt-2 text-lg font-medium text-lightOrange">{detail.tagline}</h4>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
                {detail.description}
              </p>
              <div className="mx-auto mt-6 flex max-w-lg flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start">
                {detail.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-lightOrange/15 px-3 py-1 text-xs font-medium text-lightOrange"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <>
              <img src={hubDiagram} alt="" aria-hidden="true" className="mx-auto w-full max-w-lg lg:mx-0" />
              <p className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
                Our products are designed to empower businesses across industries. Whether you&rsquo;re managing
                textiles, healthcare, logistics, or poultry, our solutions simplify operations, enhance user
                experiences, and drive efficiency. Combining advanced features with intuitive design, our web and
                mobile applications cater to the unique needs of modern enterprises.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
