import { useState } from "react";

const FAQS = [
  {
    question: "What Services Do You Provide?",
    answer:
      "We offer web and software development, UI/UX design, and ongoing maintenance tailored to your business needs.",
  },
  {
    question: "How Can HertzWorkz Help My Business?",
    answer:
      "Hertzworkz collaborates closely with your team to understand your challenges and deliver innovative solutions that drive efficiency, growth, and success.",
  },
  {
    question: "Can You Help Me With Websites Maintenance?",
    answer: "Yes, we provide comprehensive maintenance and update services to ensure your platform operates smoothly.",
  },
];

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" {...props}>
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// FAQ accordion below AboutHighlights (Figma node 5233:15608). Each row
// toggles independently (no existing accordion pattern elsewhere in the
// codebase to match, so this is the simplest option that satisfies the spec).
// Unlike the sibling sections, this one is NOT min-h-screen: their content
// (hero image, mission/vision cards, 4-row highlights) fills a viewport, but
// 3 short FAQ rows don't - forcing full-screen height there just centers
// them inside a mostly-empty section instead of flowing into the footer.
export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black px-6 py-20 font-manrope sm:px-12 sm:py-28 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">FAQ</h2>

        <div className="mt-16 border-t border-white/10 sm:mt-20">
          {FAQS.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={question} className="border-b border-white/10">
                <div className="flex items-center justify-between gap-4 py-6 sm:gap-8 sm:py-8">
                  <span className="text-sm text-[color:var(--text-warm)]">{String(index + 1).padStart(2, "0")}</span>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                    className="flex flex-1 items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-start)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <span
                      className={`text-lg font-medium sm:text-2xl ${isOpen ? "text-white" : "text-[color:var(--text-warm)]"}`}
                    >
                      {question}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 sm:h-12 sm:w-12 ${
                        isOpen
                          ? "border-white bg-white text-black"
                          : "border-white/30 text-white"
                      }`}
                    >
                      <ArrowIcon
                        className={`h-4 w-4 transition-transform duration-200 sm:h-5 sm:w-5 ${isOpen ? "rotate-45" : ""}`}
                      />
                    </span>
                  </button>
                </div>
                <div
                  id={panelId}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 text-base leading-[1.55] text-[color:var(--text-warm)] sm:pb-8">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
