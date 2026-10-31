import HeroNavbar from "../homePage/HeroNavbar";
import SiteFooter from "../contactPage/SiteFooter";
import ServiceScatterIcon from "./ServiceScatterIcon";
import services from "./servicesData";

// Scatter positions (% of a 1440x1792 reference frame) traced from Figma node
// 5233:14226 - reference anchors, not pixel-exact. Percentages are set via inline
// style (same approach NodeGraphHero.jsx uses for its scattered nodes) since Tailwind
// can't generate arbitrary classes from values computed at runtime.
//
// The raw Figma `left` values only span ~4%-71%, so the whole cluster read as pushed
// into the left two-thirds of the frame once centered on a wide viewport (reported:
// "too much left side"). HORIZONTAL_SHIFT re-centers that cluster's midpoint on 50%
// without changing the icons' relative spacing to one another.
const HORIZONTAL_SHIFT = 12.75;
// The Figma frame is 1792 tall, but the lowest row (top: 48.2%) plus its icon/label
// only reaches ~54% down it - the rest was dead space, reported as "too much space
// above and below". VERTICAL_SCALE rebases the frame onto a shorter ~1050-tall frame
// (1792 / 1050) so the same relative row spacing fills the section instead of leaving
// a near-empty bottom half.
const VERTICAL_SCALE = 1792 / 1050;
const POSITIONS = {
  "ai-ml-development": { left: 18.7 + HORIZONTAL_SHIFT, top: 12.9 * VERTICAL_SCALE },
  blockchain: { left: 62.9 + HORIZONTAL_SHIFT, top: 10.7 * VERTICAL_SCALE },
  "web-design": { left: 3.7 + HORIZONTAL_SHIFT, top: 29.5 * VERTICAL_SCALE },
  "web-development": { left: 70.8 + HORIZONTAL_SHIFT, top: 29.1 * VERTICAL_SCALE },
  "embedded-solution": { left: 19.8 + HORIZONTAL_SHIFT, top: 48.2 * VERTICAL_SCALE },
  "mob-development": { left: 62.9 + HORIZONTAL_SHIFT, top: 48.2 * VERTICAL_SCALE },
};
const HEADING_POSITION = { left: 39.7 + HORIZONTAL_SHIFT, top: 30.6 * VERTICAL_SCALE };

export default function ServicesGrid() {
  return (
    <div className="bg-ink font-manrope">
      <HeroNavbar />

      <section aria-labelledby="services-heading" className="px-6 pb-16 pt-28 sm:px-12 sm:pt-32 lg:px-16">
        {/* Below lg: the Figma scatter layout is desktop-only, so this falls back to a
            simple centered single-column stack (heading, then each icon in turn). At
            lg+ the same elements switch to absolute positioning within the frame. */}
        <div className="relative mx-auto flex max-w-sm flex-col items-center gap-12 text-center lg:aspect-[1440/1050] lg:block lg:max-w-7xl lg:gap-0">
          <div
            className="lg:absolute lg:max-w-md lg:-translate-x-1/2 lg:-translate-y-1/2"
            style={{ left: `${HEADING_POSITION.left}%`, top: `${HEADING_POSITION.top}%` }}
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
