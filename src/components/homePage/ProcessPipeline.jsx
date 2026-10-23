/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

// Wire geometry is drawn in a 1235x370 box traced from the design; HTML cards are placed in % of it.
const W = 1235;
const H = 370;
const pct = (x, y) => ({ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` });

// --- Load-in animation --------------------------------------------------
// Plays once when the section scrolls into view, so every visitor sees the
// full sequence regardless of how fast they scroll.
const DOT_DELAY_MS = 400;
const DOT_STAGGER_MS = 50;
const HUB_DELAY_MS = 700;
const CARD_DELAY_MS = 900;
const CARD_STAGGER_MS = 120;

const delayStyle = (ms) => ({ animationDelay: `${ms}ms` });

// Each element renders in a "pre" hidden state (matching the animation's own
// 0% keyframe) until `inView` flips true, then switches to the animate-*
// class so the sequence plays from the start every time it's scrolled to.
// motion-reduce always wins, showing the settled final state with no motion.
const dotBase = "[transform-box:fill-box] [transform-origin:center] motion-reduce:opacity-100 motion-reduce:scale-100";
const dotAnim = (inView) => `${dotBase} ${inView ? "animate-dot-in motion-reduce:animate-none" : "opacity-0 scale-90"}`;

const hubBase = "motion-reduce:opacity-100 motion-reduce:scale-100";
const hubAnim = (inView) => `${hubBase} ${inView ? "animate-hub-in motion-reduce:animate-none" : "opacity-0 scale-[0.85]"}`;

const cardBase = "motion-reduce:opacity-100 motion-reduce:translate-y-0";
const cardAnim = (inView) => `${cardBase} ${inView ? "animate-card-up motion-reduce:animate-none" : "opacity-0 translate-y-3"}`;

const ringAnim = (inView) => `motion-reduce:opacity-100 ${inView ? "animate-ring-sequence motion-reduce:animate-none" : "opacity-0"}`;

// Scroll-position hook: flips to true once ~15% of the element is covered by
// the viewport, then stops listening (plays once per visit). Used both for
// the whole desktop/funnel graph (a tall container, so 15% of it is always
// capped at 15% of the viewport - same threshold this hook has always used)
// and for each individual mobile step (a short element, where 15% of the
// viewport would rarely fit inside such a small card at all - this is why
// the threshold is relative to min(viewport, element) height rather than a
// flat 15% of the viewport). Checks directly in the scroll handler, no
// requestAnimationFrame throttle - rAF can be delayed/skipped (backgrounded
// tabs, battery saver, etc.), which could cause this to never fire even
// when clearly scrolled into view. The check is one cheap
// getBoundingClientRect call, so there's no real cost to running it on
// every scroll event directly. (Previously used IntersectionObserver, which
// proved unreliable, missing the crossing on some real scroll patterns -
// matches the pattern ApproachMerge.jsx uses.)
function useInViewOnce(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (inView) return undefined;
    const check = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
      const threshold = Math.min(vh, rect.height) * 0.15;
      if (visible > threshold) setInView(true);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [ref, inView]);
  return inView;
}

// Left funnel: [x, y, radius, glows?]
const FUNNEL_NODES = [
  [146, 165, 24, true], [44, 128, 8], [154, 68, 8], [296, 117, 12, true], [325, 208, 12, true],
  [114, 243, 12, true], [378, 247, 8], [38, 219, 6], [222, 105, 5], [260, 180, 5], [88, 197, 3], [157, 281, 3],
];

const FUNNEL_WIRES = [
  "M146 165 C260 150 340 215 441 180",
  "M146 165 C230 200 330 130 441 180",
  "M44 128 C120 170 200 100 296 117",
  "M296 117 C360 125 380 180 441 180",
  "M154 68 C190 70 210 85 222 105",
  "M222 105 C270 140 350 170 441 180",
  "M325 208 C380 210 400 180 441 180",
  "M114 243 C200 250 250 190 325 208",
  "M378 247 C420 240 420 190 441 180",
  "M38 219 C120 200 200 270 378 247",
  "M88 197 C160 210 200 150 260 180",
  "M157 281 C260 290 400 250 441 180",
];

const PIPE_WIRES = [
  "M260 180 L1003 180", // spine through the hub
  "M441 180 C470 180 470 117 508 117", // to IDEAS
  "M620 117 C650 117 640 150 665 165", // IDEAS -> hub
  "M441 180 C470 180 470 245 505 245", // to PLAN
  "M612 245 C645 245 640 210 665 195", // PLAN -> hub
  "M757 165 C770 160 755 108 782 108", // hub -> DESIGN
  "M892 108 C930 108 925 180 958 180", // DESIGN -> junction
  "M757 195 C770 200 760 247 788 247", // hub -> BUILD
  "M898 247 C930 247 925 180 958 180", // BUILD -> junction
];

const PIPE_DOTS = [[495, 117], [495, 245], [622, 540 - 360], [788, 180], [760, 108 + 90], [920, 108 + 75], [958, 180], [1003, 180], [653, 180]];

const stroke = { fill: "none", stroke: "white", strokeWidth: 1.5, strokeLinecap: "round", vectorEffect: "non-scaling-stroke" };
// pathLength=1 lets every path - regardless of its real length - use the same
// 0-1 stroke-dasharray/dashoffset range for the "draw the line in" effect.
// Dashoffset is forced to 1 (hidden) inline until inView; once true the inline
// override is removed so the animate-draw-line keyframe (or, under
// prefers-reduced-motion, the browser's default dashoffset:0) takes over.
const lineDraw = (inView) => ({
  pathLength: 1,
  style: { strokeDasharray: 1, strokeDashoffset: inView ? undefined : 1 },
  className: inView ? "animate-draw-line motion-reduce:animate-none" : "",
});

function Defs({ p }) {
  return (
    <defs>
      <filter id={`${p}-glow`} x="-100%" y="-100%" width="300%" height="300%">
        <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#FE5D26" floodOpacity="0.9" />
      </filter>
      <filter id={`${p}-soft`} x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#ffffff" floodOpacity="0.6" />
      </filter>
    </defs>
  );
}

const icon = "h-full w-full text-lightOrange";
const svgProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" };

const ICONS = {
  ideas: (
    <svg {...svgProps} className={icon}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  ),
  plan: (
    <svg {...svgProps} className={icon}>
      <path d="M5 20V12M12 20V5M19 20v-5" strokeWidth="3.5" />
    </svg>
  ),
  design: (
    <svg {...svgProps} className={icon}>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 5l-4 14" />
    </svg>
  ),
  build: (
    <svg {...svgProps} className={icon}>
      <ellipse cx="12" cy="5" rx="8" ry="3" fill="currentColor" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  ),
  launch: (
    <svg {...svgProps} className={icon}>
      <path d="M3 3v18h18M6 17l5-6 4 3 6-8M16 6h5v5" />
    </svg>
  ),
};

const STAGES = {
  ideas: { label: "Ideas", caption: "Different ideas, needs, and possibilities come together." },
  plan: { label: "Plan", caption: "Turning ideas into a strategic roadmap." },
  design: { label: "Design", caption: "We shape ideas into clear experiences and solutions." },
  build: { label: "Build", caption: "Engineering and technology turn the concept into a working system." },
  launch: { label: "Launch", caption: "From first idea to a complete product. The finished product solves a real business problem." },
};

function GlassCard({ kind, className = "" }) {
  return (
    <div
      className={`flex items-center gap-[8%] rounded-lg border border-white/10 bg-white/[0.03] px-[8%] shadow-[0_0_20px_rgba(254,93,38,0.15)] backdrop-blur-md ${className}`}
    >
      <div className="aspect-square w-[26%] shrink-0">{ICONS[kind]}</div>
      <div className="flex flex-1 flex-col gap-[10%]" aria-hidden="true">
        <span className="h-[3px] w-full rounded bg-white/50" />
        <span className="h-[3px] w-3/4 rounded bg-white/30" />
        <span className="h-[3px] w-full rounded bg-white/20" />
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full bg-white/10 px-5 py-1.5 text-xs font-medium uppercase tracking-wider text-white">
      {children}
    </span>
  );
}

// Desktop stage: card centred on (x,y); badge + caption sit above or below it.
// cardClassName/cardStyle drive the fade-up-on-load animation for the whole stage.
function Stage({ kind, x, y, w, above, gap = "mt-2", captionW = "w-48", children, cardClassName = "", cardStyle }) {
  const s = STAGES[kind];
  const label = (
    <div className={`absolute left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-center ${captionW} ${
      above ? "bottom-full mb-2" : `top-full ${gap}`
    }`}>
      <Badge>{s.label}</Badge>
      <p className="text-xs leading-snug text-gray-300">{s.caption}</p>
    </div>
  );
  return (
    // Positioning (pct + centering transform) lives on the outer div so the
    // inner div's own animated `transform` (translateY, for the fade-up)
    // doesn't clobber it - they'd otherwise fight over the same CSS property.
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ ...pct(x, y), width: `${(w / W) * 100}%` }}>
      <div style={cardStyle} className={cardClassName}>
        {children || <GlassCard kind={kind} className="aspect-[2/1] w-full" />}
        {label}
      </div>
    </div>
  );
}

function Hub({ className = "", delayMs = HUB_DELAY_MS, inView }) {
  return (
    <div
      aria-hidden="true"
      style={delayStyle(delayMs)}
      className={`rounded-2xl border border-white/20 bg-white/5 p-[9%] shadow-[0_0_60px_rgba(254,93,38,0.45)] backdrop-blur-md ${hubAnim(inView)} ${className}`}
    >
      <div className="h-full w-full rounded-xl bg-[radial-gradient(circle,#FF6A2B_0%,#FE5D26_55%,#E8412A_100%)] shadow-[inset_0_0_14px_rgba(255,200,150,0.6)]" />
    </div>
  );
}

// Desktop stages animate left-to-right in this order, matching their render order below.
const DESKTOP_CARD_ORDER = ["ideas", "plan", "design", "build", "launch"];

function Desktop({ inView }) {
  return (
    <div className="relative mx-auto hidden w-full max-w-[1235px] lg:block" style={{ aspectRatio: `${W} / ${H}` }}>
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
        <Defs p="ppd" />
        <g filter="url(#ppd-soft)">
          {FUNNEL_WIRES.map((d) => <path key={d} d={d} {...stroke} {...lineDraw(inView)} strokeOpacity="0.9" />)}
          {PIPE_WIRES.map((d) => <path key={d} d={d} {...stroke} {...lineDraw(inView)} strokeOpacity="0.9" />)}
        </g>
        {FUNNEL_NODES.map(([cx, cy, r, glow], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={r}
            fill="white"
            filter={glow ? "url(#ppd-glow)" : undefined}
            style={delayStyle(DOT_DELAY_MS + i * DOT_STAGGER_MS)}
            className={dotAnim(inView)}
          />
        ))}
        {PIPE_DOTS.map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="4"
            fill="white"
            style={delayStyle(DOT_DELAY_MS + i * DOT_STAGGER_MS)}
            className={dotAnim(inView)}
          />
        ))}
        {/* Launch orbit rings: fade in, then pulse forever */}
        <circle cx="1090" cy="180" r="95" fill="none" stroke="#FE5D26" strokeWidth="1.5" filter="url(#ppd-glow)" vectorEffect="non-scaling-stroke" className={ringAnim(inView)} />
        <circle cx="1090" cy="180" r="78" fill="none" stroke="#FE5D26" strokeOpacity="0.4" strokeWidth="1" vectorEffect="non-scaling-stroke" className={ringAnim(inView)} />
      </svg>

      {DESKTOP_CARD_ORDER.map((kind, i) => {
        const style = { ...delayStyle(CARD_DELAY_MS + i * CARD_STAGGER_MS) };
        const cardClassName = cardAnim(inView);
        if (kind === "ideas") return <Stage key={kind} kind={kind} x={565} y={117} w={112} above cardClassName={cardClassName} cardStyle={style} />;
        if (kind === "plan") return <Stage key={kind} kind={kind} x={560} y={245} w={108} cardClassName={cardClassName} cardStyle={style} />;
        if (kind === "design") return <Stage key={kind} kind={kind} x={836} y={108} w={112} above cardClassName={cardClassName} cardStyle={style} />;
        if (kind === "build") return <Stage key={kind} kind={kind} x={843} y={247} w={112} captionW="w-56" cardClassName={cardClassName} cardStyle={style} />;
        return <Stage key={kind} kind={kind} x={1088} y={178} w={146} gap="mt-[4.5rem]" captionW="w-64" cardClassName={cardClassName} cardStyle={style} />;
      })}
      <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ ...pct(710, 180), width: `${(92 / W) * 100}%` }}>
        <Hub className="aspect-square w-full" inView={inView} />
      </div>
    </div>
  );
}

// Each mobile step (and the hub) tracks its own scroll-into-view state via
// its own ref, instead of sharing the section-level `inView` - so a step
// animates in exactly when it individually scrolls into the viewport, not
// all at once when the section first appears. Same proven scroll-check
// hook as the shared one, just one instance per step. No per-item
// animationDelay here (unlike the desktop cards): the stagger there exists
// because every desktop card reveals at the same instant off one shared
// trigger, but each mobile step already has its own trigger moment, so an
// extra delay would just lag the animation behind the step actually
// entering the viewport.
function MobileHub() {
  const ref = useRef(null);
  const inView = useInViewOnce(ref);
  return (
    <li ref={ref} aria-hidden="true" className="relative">
      <Hub className="h-20 w-20" delayMs={0} inView={inView} />
    </li>
  );
}

function MobileStep({ kind }) {
  const ref = useRef(null);
  const inView = useInViewOnce(ref);
  return (
    <li ref={ref} className={`relative flex flex-col items-center gap-3 bg-ink py-1 text-center ${cardAnim(inView)}`}>
      {kind === "launch" ? (
        <div className="rounded-[2.5rem] border border-lightOrange p-4 shadow-[0_0_30px_rgba(254,93,38,0.45)]">
          <GlassCard kind={kind} className="h-24 w-48 bg-ink" />
        </div>
      ) : (
        <GlassCard kind={kind} className="h-20 w-40 bg-ink" />
      )}
      <Badge>{STAGES[kind].label}</Badge>
      <p className="max-w-[16rem] text-sm leading-snug text-gray-300">{STAGES[kind].caption}</p>
    </li>
  );
}

// Below lg: small funnel SVG, then one stage per row joined by a vertical wire.
// The funnel SVG is a single decorative graphic, so it stays tied to the
// shared section-level `inView` (plays once as the section appears); only
// the step list below it animates per-item.
function Mobile({ inView }) {
  const order = ["ideas", "plan", "hub", "design", "build", "launch"];
  return (
    <div className="mx-auto w-full max-w-sm lg:hidden">
      <svg viewBox="0 0 360 150" className="h-auto w-full" aria-hidden="true" focusable="false">
        <Defs p="ppm" />
        <g filter="url(#ppm-soft)">
          {["M30 20 C90 30 120 110 180 150", "M330 30 C270 40 240 110 180 150", "M60 100 C110 100 140 130 180 150", "M300 110 C250 110 220 130 180 150", "M180 0 C180 60 180 100 180 150"].map((d) => (
            <path key={d} d={d} {...stroke} {...lineDraw(inView)} strokeOpacity="0.9" />
          ))}
        </g>
        {[[30, 20, 10, true], [330, 30, 8], [60, 100, 14, true], [300, 110, 6], [180, 20, 5]].map(([cx, cy, r, g], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={r}
            fill="white"
            filter={g ? "url(#ppm-glow)" : undefined}
            style={delayStyle(DOT_DELAY_MS + i * DOT_STAGGER_MS)}
            className={dotAnim(inView)}
          />
        ))}
      </svg>
      <ol className="relative flex flex-col items-center gap-10 pt-2">
        <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/30" />
        {order.map((k) => (k === "hub" ? <MobileHub key={k} /> : <MobileStep key={k} kind={k} />))}
      </ol>
    </div>
  );
}

export default function ProcessPipeline() {
  const graphRef = useRef(null);
  const inView = useInViewOnce(graphRef);

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative min-h-screen w-full overflow-hidden bg-ink px-6 pb-20 pt-28 font-manrope text-white sm:pb-28 sm:pt-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="process-heading" className="text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
          Businesses don’t struggle because they lack ideas.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 sm:text-lg">
          They struggle to turn those ideas into technology that is useful, scalable, and built to last.
        </p>
      </div>
      <div ref={graphRef} className="mt-16 lg:mt-20">
        <Desktop inView={inView} />
        <Mobile inView={inView} />
      </div>
    </section>
  );
}
