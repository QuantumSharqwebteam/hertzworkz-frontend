import { FaEnvelope, FaPhone, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import logo from "/logo.svg";

const SERVICES_LINKS = [
    "Web/App Design",
    "Web Development",
    "Mobile Applications",
    "AI/ML Development",
    "Blockchain",
    "Embedded Systems",
];

const COMPANY_LINKS = ["About Us", "Products", "Careers"];

// Every link below is a placeholder (href="#") until the pages it points to
// exist - plain anchors on purpose, not react-router <Link>, so there's no
// routing to rewire once real pages are added.
export default function ContactFooter() {
    return (
        <footer data-aos="fade-zoom-out" data-aos-offset="150" className="mt-28 overflow-x-hidden bg-black text-white">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pt-16 sm:grid-cols-2 sm:px-12 lg:grid-cols-4 lg:px-16">
                <div>
                    <a href="/">
                        <img src={logo} alt="Hertzworkz" className="h-10 w-auto" />
                    </a>
                    <div className="mt-4 space-y-2 text-sm text-gray-400">
                        <a href="mailto:hertzworkzpvt@gmail.com" className="flex items-center gap-2 hover:text-white">
                            <FaEnvelope aria-hidden="true" />
                            hertzworkzpvt@gmail.com
                        </a>
                        <a href="tel:+919080011758" className="flex items-center gap-2 hover:text-white">
                            <FaPhone aria-hidden="true" />
                            +91 9080011758
                        </a>
                    </div>
                </div>

                <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Services</p>
                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                        {SERVICES_LINKS.map((label) => (
                            <li key={label}>
                                <a href="#" className="hover:text-white">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Company</p>
                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                        {COMPANY_LINKS.map((label) => (
                            <li key={label}>
                                <a href="#" className="hover:text-white">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Stay Updated</p>
                    <p className="mt-4 text-sm leading-relaxed text-gray-300">
                        HERTZWORKZ PRIVATE LIMITED, 4/130-G, Salem Main Road, Chiyarampalayam, Namakkal, Tamil Nadu - 637001
                    </p>
                    <a
                        href="#"
                        className="mt-4 inline-block rounded-full bg-brand-gradient px-5 py-2 text-xs font-medium uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                    >
                        Contact Us
                    </a>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-6 py-6 pb-10 sm:px-12 lg:px-16">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400">Follow us</span>
                        <a href="#" aria-label="Twitter" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                            <FaTwitter aria-hidden="true" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                            <FaLinkedinIn aria-hidden="true" />
                        </a>
                        <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                            <FaInstagram aria-hidden="true" />
                        </a>
                    </div>

                    <p className="order-first text-xs text-gray-400 sm:order-none">©All Copyrights are reserved by Hertzworkz</p>

                    <div className="flex items-center gap-4 text-xs text-gray-400">
                        <a href="#" className="hover:text-white">
                            Privacy Policy
                        </a>
                        <span>|</span>
                        <a href="#" className="hover:text-white">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
