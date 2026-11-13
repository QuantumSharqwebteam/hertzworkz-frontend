import HeroNavbar from "../homePage/HeroNavbar";
import SiteFooter from "../contactPage/SiteFooter";

export default function PrivacyPolicy() {
  return (
    <>
      <HeroNavbar onLight />
      <div className="bg-ink font-manrope text-white">
        <header className="px-6 pb-8 pt-20 text-left sm:px-8 lg:px-10">
          <h1 className="max-w-4xl text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-lightGray2">Last updated: November 13, 2026</p>
        </header>

        <div className="mx-auto max-w-3xl space-y-8 px-6 pb-24 text-base leading-relaxed text-lightGray sm:px-8 lg:px-10">
          <p>
            This Privacy Policy explains how HRZWORKZ PRIVATE LIMITED (&ldquo;Hertzworkz&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;) collects, uses, and protects information when you visit hertzworkz.com (the
            &ldquo;Site&rdquo;) or use our services.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">1. Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us:</p>
            <div className="overflow-x-auto rounded-lg border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-4 py-3 font-semibold text-white">Where</th>
                    <th className="px-4 py-3 font-semibold text-white">What we collect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 align-top">Contact form</td>
                    <td className="px-4 py-3 align-top">
                      Full name, phone number, email address, service of interest, message
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top">Job application form</td>
                    <td className="px-4 py-3 align-top">
                      First and last name, email, phone number, role applied for, how you heard about us, resume/CV
                      file, cover letter
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              We also automatically collect limited technical information via Google Analytics (see Section 3).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">2. How We Use Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Respond to inquiries submitted through the contact form</li>
              <li>Evaluate and process job applications</li>
              <li>Communicate with applicants and prospective clients</li>
              <li>Improve the Site and understand how visitors use it (via analytics)</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3">We do not sell your personal information.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">3. Cookies &amp; Analytics</h2>
            <p>
              We use Google Analytics (Google LLC) to understand how visitors use the Site. Google Analytics uses
              cookies to collect standard internet log information and visitor behavior information in an anonymous
              form. You can opt out of Google Analytics tracking by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noreferrer"
                className="text-lightOrange underline hover:text-white"
              >
                Google Analytics Opt-out Browser Add-on
              </a>{" "}
              or by adjusting your browser&apos;s cookie settings.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">4. How We Share Information</h2>
            <p className="mb-3">We may share information with:</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>
                Service providers who host our infrastructure and process form submissions on our behalf (currently
                hosted on AWS (Amazon Web Services))
              </li>
              <li>Google Analytics, for the limited purpose described above</li>
            </ul>
            <p className="mt-3">
              We do not share personal information with third parties for their own marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">5. Data Retention</h2>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Contact form submissions are retained for 12 months.</li>
              <li>
                Job applications, including resumes and cover letters, are retained for 24 months from the date of
                application, after which they are deleted unless you are hired or you ask us to keep them longer.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">6. Your Rights</h2>
            <p className="mb-3">Depending on where you are located, you may have the right to:</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction or deletion of your personal information</li>
              <li>Withdraw a job application and request deletion of your resume</li>
              <li>Object to or restrict certain processing</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:hertzworkzpvt@gmail.com" className="text-lightOrange underline hover:text-white">
                hertzworkzpvt@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">7. Children&apos;s Privacy</h2>
            <p>
              The Site is not directed at children under 16, and we do not knowingly collect personal information
              from children.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an
              updated &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">9. Contact Us</h2>
            <p>
              Questions about this Privacy Policy can be sent to{" "}
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
