/* eslint-disable react/prop-types -- repo has no prop-types dependency; LogoBox is file-local */

// Each logo sits in a fixed-size box so a missing file never shifts the layout.
const CLIENT_LOGOS = [
  { src: "/assets/images/partners/ashok-textile-mills.png", alt: "Ashok Textile Mills Pvt Ltd" },
  { src: "/assets/images/partners/kkp-textiles.png", alt: "KKP Textiles" },
  {
    src: "/assets/images/partners/thenpandian-spinning-mills.png",
    alt: "Thenpandian Spinning Mills India Pvt Ltd",
  },
  { src: "/assets/images/partners/mahendra-feeds.png", alt: "MahendraFeeds" },
  { src: "/assets/images/partners/vinay-poultry-farm.png", alt: "Vinay Poultry Farm Private Limited" },
  { src: "/assets/images/partners/mas-idyl-medical-solutions.png", alt: "Mas Idyl Medical Solutions" },
];

const SUPPORTER_LOGOS = [
  { src: "/assets/images/supporters/google-cloud.png", alt: "Google Cloud" },
  { src: "/assets/images/supporters/aws.png", alt: "AWS" },
  { src: "/assets/images/supporters/startup-tn.png", alt: "Startup TN" },
  { src: "/assets/images/supporters/dpiit.png", alt: "DPIIT - Startup India" },
  { src: "/assets/images/supporters/gov-emblem.png", alt: "Government of India" },
];

function LogoBox({ src, alt }) {
  return (
    <div className="flex h-14 w-32 shrink-0 items-center justify-center sm:w-36">
      <img src={src} alt={alt} className="max-h-12 max-w-full object-contain" />
    </div>
  );
}

export default function PartnersAndSupporters() {
  return (
    <section className="bg-ink px-6 py-20 font-manrope sm:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-medium text-gray-300 sm:text-3xl">
          Trusted by leading industry partners in
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 overflow-x-auto">
          {CLIENT_LOGOS.map((logo) => (
            <LogoBox key={logo.alt} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        <h2 className="text-center text-2xl font-medium text-gray-300 sm:text-3xl">Supported &amp; Recognized By</h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 overflow-x-auto">
          {SUPPORTER_LOGOS.map((logo) => (
            <LogoBox key={logo.alt} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
