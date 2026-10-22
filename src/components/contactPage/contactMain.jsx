import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import HeroNavbar from "../homePage/HeroNavbar";
import ContactForm from "./ContactForm";
import SiteFooter from "./SiteFooter";
import HangingPhone from "./HangingPhone";

export default function ContactMain() {
    return (
        <div className="bg-background font-manrope">
            <HeroNavbar onLight />

            <section aria-labelledby="contact-heading" className="relative px-6 pb-20 pt-32 sm:px-12 sm:pt-36 lg:px-16 max-md:px-6 max-md:pb-6 max-md:pt-20">
                <HangingPhone />
                <div className="max-w-2xl">
                    <p className="mb-1 text-sm font-semibold uppercase text-lightOrange md:hidden">LET&apos;S TALK</p>
                    <h1 id="contact-heading" className="text-5xl font-bold uppercase text-black sm:text-6xl max-md:text-[34px]">
                        Contact Us
                    </h1>

                    <p className="mt-3 text-gray-600 md:hidden">Have a question? Get in touch with our team.</p>
                    <div className="mt-8 max-md:mt-6 max-md:rounded-2xl max-md:border max-md:border-gray-300 max-md:p-5">
                        <h2 className="mb-1 hidden text-xl font-bold text-black max-md:block">Send us a message</h2>
                        <p className="mb-4 hidden text-sm text-gray-600 max-md:block">Fill in your details and message below.</p>
                        <ContactForm />
                    </div>

                    <div className="mt-12 max-md:hidden">
                        <p className="text-base font-semibold text-black">Address</p>
                        <p className="mt-2 max-w-md text-sm text-gray-700">
                            HERTZWORKZ PRIVATE LIMITED, 4/130-G, Salem Main Road, Chiyarampalayam, Namakkal, Tamil
                            Nadu - 637001
                        </p>
                    </div>
                </div>
                <div className="mt-7 hidden max-md:block">
                    <h2 className="text-xl font-bold text-black">Contact details</h2>
                    <p className="mt-1 text-sm text-gray-600">Reach us through the details below.</p>
                    <div className="mt-3 space-y-4 rounded-2xl border border-gray-300 bg-gray-50 p-4 text-sm">
                        <a href="mailto:hertzworkzpvt@gmail.com" className="flex items-center gap-4">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-lg text-orange-600"><FaEnvelope aria-hidden="true" /></span>
                            <span><span className="block text-xs font-semibold text-gray-600">EMAIL</span><span className="font-bold">hertzworkzpvt@gmail.com</span></span>
                        </a>
                        <a href="tel:+919080011750" className="flex items-center gap-4">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-lg text-orange-600"><FaPhone aria-hidden="true" /></span>
                            <span><span className="block text-xs font-semibold text-gray-600">PHONE</span><span className="font-bold">+91 9080011750</span></span>
                        </a>
                        <div className="flex items-start gap-4">
                            <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-lg text-orange-600"><FaLocationDot aria-hidden="true" /></span>
                            <span><span className="block text-xs font-semibold text-gray-600">ADDRESS</span><span className="font-bold">HRZWORKZ PRIVATE LIMITED</span><p className="font-bold text-xs">4/130-6, Salem Main Road, Chinnamudalaipatti<br />Swamy Nagar, Namakkal, Tamil Nadu - 637001</p></span>
                        </div>
                    </div>
                </div>
            </section>

            <SiteFooter contactMobile />
        </div>
    )
}
