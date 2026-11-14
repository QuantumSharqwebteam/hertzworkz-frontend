import { Link, useLocation } from "react-router-dom";

const privacySections = [
    {
        title: "Who this policy covers",
        paragraphs: [
            "This Privacy Policy describes how HRZWORKZ PRIVATE LIMITED, doing business as Hertzworkz (\"we\", \"us\" or \"our\"), handles information in connection with this website and the contact and career opportunities it describes."
        ]
    },
    {
        title: "Information you may provide",
        paragraphs: [
            "Depending on the interaction, you may choose to provide your name, email address, phone number, inquiry or project details, and other information in a message.",
            "For a career inquiry or application, this may also include the role you are interested in, your resume or work history, and a cover letter. Please do not send sensitive personal information unless it is necessary for your inquiry."
        ]
    },
    {
        title: "How information is used",
        paragraphs: [
            "We may use information you provide to respond to questions, discuss or deliver requested services, consider candidates for roles, communicate with you, protect the website, and meet legal obligations."
        ]
    },
    {
        title: "Forms and service providers",
        paragraphs: [
            "Some contact or career links on this website lead to Google Forms. If you use an external form, the information you submit is also handled by Google under its own terms and privacy policy. This website also loads Google Fonts. Third-party services may process technical information when your browser connects to them."
        ]
    },
    {
        title: "Technical information",
        paragraphs: [
            "When the website is accessed, the hosting provider or service providers may process basic connection and device information, such as IP address, browser details, and requested pages, to deliver and protect the site. The precise information and retention period depend on the services used to host and operate the site."
        ]
    },
    {
        title: "Sharing and retention",
        paragraphs: [
            "We may make information available to service providers that help us operate the website or handle inquiries, when required by law or to protect rights and safety, or as part of a business reorganization. We retain information for as long as reasonably necessary for the purpose it was collected, to address an inquiry, and to meet applicable legal requirements."
        ]
    },
    {
        title: "Security",
        paragraphs: [
            "We use reasonable safeguards appropriate to the information and services under our control. No website, transmission, or storage system can be guaranteed to be completely secure."
        ]
    },
    {
        title: "Your choices and requests",
        paragraphs: [
            "You can choose what information to provide and should review Google's privacy information before submitting a Google Form. Depending on the laws that apply to you, you may have rights to access, correct, or request deletion of personal information. To make a privacy request, contact us using the details below."
        ]
    },
    {
        title: "Children and policy updates",
        paragraphs: [
            "This website is intended for businesses, partners, and people seeking career information; it is not directed to children. We may update this policy when our practices or legal requirements change. The updated version will be posted on this page with a revised date."
        ]
    }
];

const termsSections = [
    {
        title: "Using this website",
        paragraphs: [
            "This website provides information about Hertzworkz, its services, products, and career opportunities. By using it, you agree to these Terms of Service and to comply with applicable laws. If you do not agree, please do not use the website."
        ]
    },
    {
        title: "Website content",
        paragraphs: [
            "We aim to keep website information useful and current, but descriptions, examples, availability, and other content may change and are provided for general information. A website description is not a promise that a particular service, feature, or role is available."
        ]
    },
    {
        title: "Acceptable use",
        paragraphs: [
            "You must not misuse the website, attempt to interfere with its operation or security, access systems or data without authorization, introduce malicious code, or use the website in a way that violates another person's rights or applicable law."
        ]
    },
    {
        title: "Intellectual property",
        paragraphs: [
            "Unless otherwise indicated, website text, design, graphics, and branding are owned by Hertzworkz or used with permission. You may view and use the website for personal or internal business reference. You may not reproduce, modify, distribute, or commercially exploit website materials without prior written permission, except where the law permits."
        ]
    },
    {
        title: "Third-party services and links",
        paragraphs: [
            "The website may link to third-party services, including Google Forms and LinkedIn. Those services are operated independently and their terms and privacy practices apply to your use of them. We are not responsible for third-party content or services."
        ]
    },
    {
        title: "Project and service engagements",
        paragraphs: [
            "Submitting an inquiry or application through this website does not create a client, employment, or other contractual relationship. Any services we agree to provide will be governed by the separate written proposal, statement of work, or agreement for that engagement. Career submissions do not guarantee an interview or offer."
        ]
    },
    {
        title: "Disclaimer and liability",
        paragraphs: [
            "To the extent permitted by law, the website is provided on an \"as available\" basis, without guarantees that it will be uninterrupted, error-free, or suitable for a particular purpose. To the extent permitted by law, Hertzworkz is not liable for indirect or consequential loss arising from use of, or inability to use, the website. Nothing in these terms limits liability that cannot lawfully be limited."
        ]
    },
    {
        title: "Changes and applicable law",
        paragraphs: [
            "We may update these terms by posting a revised version on this page. Your continued use after an update means you accept the revised terms. These terms are subject to the laws applicable to HRZWORKZ PRIVATE LIMITED and to any mandatory consumer or other protections that apply to you."
        ]
    }
];

export default function LegalPage() {
    const { pathname } = useLocation();
    const isPrivacyPolicy = pathname === "/privacy-policy";
    const title = isPrivacyPolicy ? "Privacy Policy" : "Terms of Service";
    const sections = isPrivacyPolicy ? privacySections : termsSections;

    return (
        <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-8 sm:py-16">
            <article className="mx-auto max-w-4xl">
                <Link to="/" className="text-sm text-lightOrange hover:text-orange-400">
                    &larr; Back to Hertzworkz
                </Link>
                <header className="mb-10 mt-8 border-b border-white/15 pb-6">
                    <p className="mb-3 text-sm uppercase tracking-[0.2em] text-lightOrange">Hertzworkz</p>
                    <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
                    <p className="mt-4 text-sm text-gray-400">Last updated: November 14, 2026</p>
                </header>

                <div className="space-y-8 text-base leading-7 text-gray-300">
                    {sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="mb-3 text-xl font-semibold text-white">{section.title}</h2>
                            {section.paragraphs.map((paragraph) => (
                                <p key={paragraph} className="mb-3 last:mb-0">{paragraph}</p>
                            ))}
                        </section>
                    ))}
                </div>

                <section className="mt-10 border-t border-white/15 pt-6 text-gray-300">
                    <h2 className="mb-3 text-xl font-semibold text-white">Contact us</h2>
                    <p>
                        HRZWORKZ PRIVATE LIMITED<br />
                        4/130-6, Salem Main Road, Chinnamudalaipatti, Swamy Nagar,<br />
                        Namakkal, Tamil Nadu 637001, India
                    </p>
                    <p className="mt-3">
                        Email: <a className="text-lightOrange hover:text-orange-400" href="mailto:hertzworkspvt@gmail.com">hertzworkspvt@gmail.com</a>
                    </p>
                </section>
            </article>
        </main>
    );
}
