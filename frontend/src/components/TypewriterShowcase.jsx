import { useState } from "react";
import HeroNavbar from "./homePage/HeroNavbar";
import Typewriter from "./Typewriter";

// Named presets built from the speed/delay values already used around the site
// (Hero.jsx, IdeasCta.jsx, ProductsHero.jsx, etc.) - rather than every page
// picking its own speed number, these give a small, consistent vocabulary to
// reuse. Pass a template's `props` straight through to <Typewriter />.
const TEMPLATES = [
  {
    key: "heading",
    name: "Heading",
    description: "Large page/section headings - H1 or H2.",
    text: "Products That Turn Ideas Into Real Solutions",
    props: { speed: 65 },
    sample: "<Typewriter text=\"...\" speed={65} />",
    textClassName: "text-2xl font-bold sm:text-3xl",
  },
  {
    key: "subtext",
    name: "Subtext",
    description: "Supporting paragraph copy under a heading.",
    text: "We design and build digital products that solve real business problems.",
    props: { speed: 22 },
    sample: "<Typewriter text=\"...\" speed={22} />",
    textClassName: "text-base text-gray-300 sm:text-lg",
  },
  {
    key: "quickCta",
    name: "Quick CTA",
    description: "Short button/label text - fast enough it doesn't feel slow.",
    text: "Get Started",
    props: { speed: 15 },
    sample: "<Typewriter text=\"...\" speed={15} />",
    textClassName: "text-lg font-semibold",
  },
  {
    key: "dramaticReveal",
    name: "Dramatic reveal",
    description: "Slower and with a short pause before it starts - for a single emphasis moment, not routine copy.",
    text: "Ideas are easy. Building them is not.",
    props: { speed: 90, startDelay: 400 },
    sample: "<Typewriter text=\"...\" speed={90} startDelay={400} />",
    textClassName: "text-2xl font-medium sm:text-3xl",
  },
];

// Heading types first, then its subtext starts right after - built from two
// Typewriter instances with the second's startDelay timed to the first's
// typing duration (speed * text.length), not a template prop by itself.
const SEQUENCE_HEADING = { text: "We Build Technology That Moves Businesses Forward.", speed: 65 };
const SEQUENCE_SUBTEXT = {
  text: "We design and build technology that solves real business problems.",
  speed: 22,
};

export default function TypewriterShowcase() {
  // Bumping a template's key forces React to remount its Typewriter, replaying
  // the animation from scratch - simplest way to offer a "Replay" button
  // without adding replay logic to Typewriter itself.
  const [replayCounts, setReplayCounts] = useState({});
  const replay = (key) => setReplayCounts((prev) => ({ ...prev, [key]: (prev[key] || 0) + 1 }));

  return (
    <div className="min-h-screen bg-ink font-manrope text-white">
      <HeroNavbar />

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-36 sm:px-12">
        <h1 className="text-3xl font-bold sm:text-4xl">Typewriter Animation Templates</h1>
        <p className="mt-3 max-w-2xl text-gray-400">
          Reference page for the typing-animation presets used around the site. Each card shows the
          preset live, the props it uses, and a Replay button to watch it again.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TEMPLATES.map((template) => (
            <div key={template.key} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-lightOrange">
                    {template.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">{template.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => replay(template.key)}
                  className="shrink-0 rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-white/10"
                >
                  Replay
                </button>
              </div>

              <div className="mt-5 flex min-h-[4.5rem] items-center">
                <p className={template.textClassName}>
                  <Typewriter
                    key={replayCounts[template.key] || 0}
                    text={template.text}
                    {...template.props}
                  />
                </p>
              </div>

              <code className="mt-4 block overflow-x-auto rounded-lg bg-black/40 px-3 py-2 text-xs text-gray-400">
                {template.sample}
              </code>
            </div>
          ))}
        </div>

        {/* Sequenced pair: not a single template, so kept separate from the grid above. */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-lightOrange">
                Sequenced (heading then subtext)
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Two Typewriters where the second starts right as the first finishes, via a matching
                startDelay - the pattern already used on the Hero/IdeasCta sections.
              </p>
            </div>
            <button
              type="button"
              onClick={() => replay("sequence")}
              className="shrink-0 rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-white/10"
            >
              Replay
            </button>
          </div>

          <div className="mt-5 min-h-[6rem]">
            <h3 className="text-2xl font-medium sm:text-3xl" key={`h-${replayCounts.sequence || 0}`}>
              <Typewriter text={SEQUENCE_HEADING.text} speed={SEQUENCE_HEADING.speed} />
            </h3>
            <p className="mt-3 text-base text-gray-300" key={`s-${replayCounts.sequence || 0}`}>
              <Typewriter
                text={SEQUENCE_SUBTEXT.text}
                speed={SEQUENCE_SUBTEXT.speed}
                startDelay={SEQUENCE_HEADING.text.length * SEQUENCE_HEADING.speed}
              />
            </p>
          </div>

          <code className="mt-4 block overflow-x-auto rounded-lg bg-black/40 px-3 py-2 text-xs text-gray-400">
            {"<Typewriter text={heading} speed={65} />\n<Typewriter text={subtext} speed={22} startDelay={heading.length * 65} />"}
          </code>
        </div>

        {/* Scroll-triggered: needs real distance below the fold to demonstrate, so it
            gets its own spacer rather than sharing the grid above. */}
        <div className="mt-6 flex h-[60vh] items-center justify-center rounded-2xl border border-dashed border-white/15 text-gray-500">
          Scroll down to trigger the next card ↓
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-lightOrange">
                Scroll-triggered
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Starts typing only once scrolled into view, not on page load - for anything below the
                fold.
              </p>
            </div>
            <button
              type="button"
              onClick={() => replay("scroll")}
              className="shrink-0 rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-white/10"
            >
              Replay
            </button>
          </div>

          <div className="mt-5 flex min-h-[4.5rem] items-center">
            <p className="text-2xl font-medium sm:text-3xl" key={replayCounts.scroll || 0}>
              <Typewriter text="Have an idea worth building?" speed={50} triggerOnView />
            </p>
          </div>

          <code className="mt-4 block overflow-x-auto rounded-lg bg-black/40 px-3 py-2 text-xs text-gray-400">
            {"<Typewriter text=\"...\" speed={50} triggerOnView />"}
          </code>
        </div>
      </main>
    </div>
  );
}
