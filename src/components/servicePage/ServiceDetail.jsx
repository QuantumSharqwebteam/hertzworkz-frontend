import { Link, Navigate, useParams } from "react-router-dom";
import HeroNavbar from "../homePage/HeroNavbar";
import SiteFooter from "../contactPage/SiteFooter";
import { getServiceBySlug } from "./servicesData";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/service" replace />;

  return (
    <div className="bg-ink font-manrope">
      <HeroNavbar />

      <section className="px-6 pb-20 pt-32 sm:px-12 sm:pt-36 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Link to="/service" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white">
            <span aria-hidden="true">←</span> Back to Services
          </Link>

          <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <img src={service.icon} alt="" aria-hidden="true" className="mx-auto h-auto w-full max-w-sm object-contain" />

            <div>
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">{service.label}</h1>
              <p className="mt-6 text-xl font-medium text-white">
                {service.tagline[0]}
                <br />
                {service.tagline[1]}
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                {service.description}
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-block rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
