import { Link } from "react-router-dom";
import Logo from "../Logo";
import services from "../servicePage/servicesData";

const COMPANY_LINKS = [
  { to: "/#about", label: "About Us" },
  { to: "/product", label: "Products" },
  { to: "/career", label: "Careers" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink px-6 pb-10 pt-16 font-manrope text-white sm:px-12 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="inline-block">
            <Logo barsClassName="h-3 w-auto" textClassName="h-6 w-auto" />
          </Link>
          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <a href="mailto:hertzworkzpvt@gmail.com" className="flex items-center gap-2 hover:text-white">
              hertzworkzpvt@gmail.com
            </a>
            <a href="tel:+919080011758" className="flex items-center gap-2 hover:text-white">
              +91 9080011758
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/service/${s.slug}`} className="hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            {COMPANY_LINKS.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Stay Updated</p>
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            HERTZWORKZ PRIVATE LIMITED, 4/130-G, Salem Main Road, Chiyarampalayam, Namakkal, Tamil Nadu - 637001
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block rounded-full bg-brand-gradient px-5 py-2 text-xs font-medium uppercase tracking-wider text-white transition-opacity hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Hertzworkz. All rights reserved.
      </p>
    </footer>
  );
}
