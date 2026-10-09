import HeroNavbar from "../homePage/HeroNavbar";
import SiteFooter from "../contactPage/SiteFooter";
import ServiceCard from "./ServiceCard";
import services from "./servicesData";

export default function ServicesGrid() {
  return (
    <div className="bg-ink font-manrope">
      <HeroNavbar />

      <section aria-labelledby="services-heading" className="px-6 pb-20 pt-32 sm:px-12 sm:pt-36 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-lightOrange sm:text-base">
            From Strategy To Execution, We Build What Your Business Needs.
          </p>
          <h1 id="services-heading" className="mt-2 text-5xl font-bold uppercase text-white sm:text-6xl">
            Services
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} slug={service.slug} icon={service.icon} label={service.label} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
