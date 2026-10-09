import HeroNavbar from "../homePage/HeroNavbar";
import ContactForm from "./ContactForm";
import SiteFooter from "./SiteFooter";
import HangingPhone from "./HangingPhone";

export default function ContactMain() {
    return (
        <div className="bg-background font-manrope">
            <HeroNavbar onLight />

            <section aria-labelledby="contact-heading" className="relative px-6 pb-20 pt-32 sm:px-12 sm:pt-36 lg:px-16">
                <HangingPhone />
                <div className="max-w-2xl">
                    <h1 id="contact-heading" className="text-5xl font-bold uppercase text-black sm:text-6xl">
                        Contact Us
                    </h1>

                    <div className="mt-8">
                        <ContactForm />
                    </div>

                    <div className="mt-12">
                        <p className="text-base font-semibold text-black">Address</p>
                        <p className="mt-2 max-w-md text-sm text-gray-700">
                            HERTZWORKZ PRIVATE LIMITED, 4/130-G, Salem Main Road, Chiyarampalayam, Namakkal, Tamil
                            Nadu - 637001
                        </p>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    )
}
