import { Link } from "react-router-dom";
import HeroNavbar from "../homePage/HeroNavbar";
import SiteFooter from "../contactPage/SiteFooter";

export default function TermsOfService() {
  return (
    <>
      <HeroNavbar onLight />
      <div className="bg-ink font-manrope text-white">
        <header className="px-6 pb-8 pt-20 text-left sm:px-8 lg:px-10">
          <h1 className="max-w-4xl text-3xl font-semibold sm:text-4xl">Terms of Service</h1>
          <p className="mt-3 text-sm text-lightGray2">Last updated: November 13, 2026</p>
        </header>

        <div className="mx-auto max-w-3xl space-y-8 px-6 pb-24 text-base leading-relaxed text-lightGray sm:px-8 lg:px-10">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of hertzworkz.com (the &ldquo;Site&rdquo;),
            operated by HRZWORKZ PRIVATE LIMITED (&ldquo;Hertzworkz&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By
            using the Site, you agree to these Terms.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">1. Use of the Site</h2>
            <p>
              The Site is provided for informational purposes and to let visitors contact us, view our work, and
              apply for open roles. You agree to use the Site only for lawful purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">2. Intellectual Property</h2>
            <p>
              All content on the Site, including text, graphics, logos, the Hertzworkz name and brand, and the
              design and code of the Site itself, is owned by or licensed to HRZWORKZ PRIVATE LIMITED and protected
              by applicable intellectual property laws. You may not copy, reproduce, or redistribute any part of the
              Site without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">3. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Scrape, crawl, or harvest data from the Site using automated means without permission</li>
              <li>Submit false or misleading information through the contact or application forms</li>
              <li>Attempt to gain unauthorized access to the Site or its underlying systems</li>
              <li>Use the Site to transmit malware or disruptive code</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">4. Job Applications</h2>
            <p>
              Submitting an application through the Site does not guarantee an interview, offer, or employment.
              Information submitted is handled according to our{" "}
              <Link to="/privacy-policy" className="text-lightOrange underline hover:text-white">
                Privacy Policy
              </Link>
              . We reserve the right to decline any application at our discretion.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">5. No Warranty</h2>
            <p>
              The Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind, express or implied, including fitness for a particular purpose, accuracy, or
              uninterrupted availability.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, HRZWORKZ PRIVATE LIMITED shall not be liable for any indirect,
              incidental, or consequential damages arising from your use of, or inability to use, the Site.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">7. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites. We are not responsible for the content, privacy
              practices, or terms of any third-party sites.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India, without regard to conflict-of-law principles. Any
              disputes shall be subject to the exclusive jurisdiction of the courts of India.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">9. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Site after changes are posted
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">10. Contact Us</h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a href="mailto:hertzworkzpvt@gmail.com" className="text-lightOrange underline hover:text-white">
                hertzworkzpvt@gmail.com
              </a>{" "}
              or to our registered address: 4/130-6, Salem Main Road, Chinnamudalaipatti, Swamy Nagar, Namakkal,
              Tamil Nadu 637001.
            </p>
          </section>
        </div>

        <SiteFooter />
      </div>
    </>
  );
}
