import ServiceCard from "../servicePage/ServiceCard";
import services from "../servicePage/servicesData";

// The heading + card grid from ServicesGrid.jsx, for the homepage - no navbar
// or footer here since the homepage already has its own. Heading is an <h2>
// (not <h1>) since Hero already owns the page's one <h1>.
export default function ServicesSection() {
  return (
    <section aria-labelledby="home-services-heading" className="bg-ink px-6 py-20 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-lightOrange sm:text-base">
          From Strategy To Execution, We Build What Your Business Needs.
        </p>
        <h2 id="home-services-heading" className="mt-2 text-5xl font-bold uppercase text-white sm:text-6xl">
          Services
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} slug={service.slug} icon={service.icon} label={service.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
