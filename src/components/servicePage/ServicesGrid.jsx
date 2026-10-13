import HeroNavbar from "../homePage/HeroNavbar";
import SiteFooter from "../contactPage/SiteFooter";
import ServiceScatterIcon from "./ServiceScatterIcon";
import services from "./servicesData";

// Scatter positions (% of a 1440x1792 reference frame) traced from Figma node
// 5233:14226 - reference anchors, not pixel-exact. Percentages are set via inline
// style (same approach NodeGraphHero.jsx uses for its scattered nodes) since Tailwind
// can't generate arbitrary classes from values computed at runtime.
const POSITIONS = {
  "ai-ml-development": { left: 18.7, top: 12.9 },
  blockchain: { left: 62.9, top: 10.7 },
  "web-design": { left: 3.7, top: 29.5 },
  "web-development": { left: 70.8, top: 29.1 },
  "embedded-solution": { left: 19.8, top: 48.2 },
  "mob-development": { left: 62.9, top: 48.2 },
};

export default function ServicesGrid() {
  return (
    <div className="bg-ink font-manrope">
      <HeroNavbar />

      <section aria-labelledby="services-heading" className="px-6 pb-20 pt-32 sm:px-12 sm:pt-36 lg:px-16">
        {/* Below lg: the Figma scatter layout is desktop-only, so this falls back to a
            simple centered single-column stack (heading, then each icon in turn). At
            lg+ the same elements switch to absolute positioning within the frame. */}
        <div className="relative mx-auto flex max-w-sm flex-col items-center gap-12 text-center lg:aspect-[1440/1792] lg:block lg:max-w-[90rem] lg:gap-0">
          <div
            className="lg:absolute lg:max-w-md lg:-translate-x-1/2 lg:-translate-y-1/2"
            style={{ left: "39.7%", top: "30.6%" }}
          >
            <h1 id="services-heading" className="text-4xl font-semibold text-white sm:text-5xl">
              What we build.
            </h1>
            <p className="mt-4 text-base text-gray-300 sm:text-lg">
              From intelligent systems to digital experiences.
            </p>
          </div>

          {services.map((service) => (
            <ServiceScatterIcon
              key={service.slug}
              slug={service.slug}
              icon={service.icon}
              label={service.label}
              className="lg:absolute lg:-translate-x-1/2 lg:-translate-y-1/2"
              style={{ left: `${POSITIONS[service.slug].left}%`, top: `${POSITIONS[service.slug].top}%` }}
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
