import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Logo from "../Logo";
import services from "../servicePage/servicesData";

const COMPANY_LINKS = [
  { to: "/about", label: "About Us" },
  { to: "/product", label: "Products" },
  { to: "/career", label: "Careers" },
];

export default function SiteFooter({ contactMobile = false }) {
  return (
    <footer className={`border-t border-white/10 bg-ink px-6 pb-10 pt-16 font-manrope text-white sm:px-12 lg:px-16 ${contactMobile ? "max-md:pt-6 max-md:pb-6" : ""}`}>
      <div className={`mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 ${contactMobile ? "max-md:hidden" : ""}`}>
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

      {contactMobile && <div className="mx-auto hidden max-w-6xl max-md:block">
        <Link to="/" className="inline-block"><Logo barsClassName="h-3 w-auto" textClassName="h-6 w-auto" /></Link>
        <p className="mt-3 text-xs leading-relaxed text-gray-400">Technology and Solutions for Business<br />Build Better. Work Smarter.</p>
        <div className="mt-5 grid grid-cols-3 gap-4 border-t border-white/80 pt-5">
          <div><p className="text-xs font-semibold uppercase">Services</p><ul className="mt-2 space-y-1 text-xs text-gray-400"><li>Web App Design</li><li>Web Development</li><li>AI / ML Development</li><li>Embedded Solutions</li></ul></div>
          <div><p className="text-xs font-semibold uppercase">Company</p><ul className="mt-2 space-y-1 text-xs text-gray-400"><li><Link to="/about">About Us</Link></li><li><Link to="/product">Projects</Link></li><li><Link to="/career">Careers</Link></li><li><Link to="/contact">Contact Us</Link></li></ul></div>
          <div><p className="text-xs font-semibold uppercase">Stay Updated</p><p className="mt-2 text-xs text-gray-400">Get updates from our team.</p><input type="email" aria-label="Email for updates" placeholder="Enter your email" className="mt-2 w-full rounded-md border border-white/20 bg-white/5 px-2 py-2 text-xs text-white placeholder:text-gray-500"/><button type="button" className="mt-2 w-full rounded-full bg-brand-gradient py-2 text-[10px] font-semibold uppercase">Subscribe</button></div>
        </div>
        <div className="mt-4 border-b border-white/20 pb-4"><p className="text-xs font-semibold uppercase">Follow us</p><div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-400">
          <a href="https://www.linkedin.com/company/hertzworkz-private-limited/" target="_blank" rel="noreferrer" className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white"><FaLinkedinIn /></span>LinkedIn</a>
          <a href="#" className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white"><FaInstagram /></span>Instagram</a>
          <a href="#" className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white"><FaXTwitter /></span>Twitter / X</a>
        </div></div>
      </div>}

      <p className={`mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-gray-500 ${contactMobile ? "max-md:hidden" : ""}`}>
        © {new Date().getFullYear()} Hertzworkz. All rights reserved.
      </p>
      {contactMobile && <div className="mx-auto hidden max-w-6xl items-center justify-between border-t border-white/10 pt-4 text-[10px] text-gray-500 max-md:flex"><span>© {new Date().getFullYear()} Hertzworkz. All rights reserved.</span><span className="flex gap-3"><a href="#">Privacy Policy</a><a href="#">Terms of Services</a></span></div>}
    </footer>
  );
}
