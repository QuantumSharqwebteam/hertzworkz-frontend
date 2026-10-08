/* eslint-disable react/prop-types -- repo has no prop-types dependency; Tooltip is file-local */
import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Diameters scale with viewport width (proportions traced from the design), with a pixel floor for phones.
const SIZE = {
  hub: "clamp(3.5rem, 7.4vw, 9rem)",
  key: "clamp(1.75rem, 3.8vw, 4.75rem)",
  md: "clamp(1rem, 2.6vw, 3.25rem)",
  md2: "clamp(0.75rem, 1.7vw, 2.1rem)",
  sm: "clamp(0.5rem, 0.9vw, 1.1rem)",
  xs: "clamp(0.375rem, 0.6vw, 0.75rem)",
};

// x / y are percentages of the full-bleed graph layer. Values outside 0-100 are off-screen
// "ghost" anchors so lines run past the edges. Interactive nodes carry tooltip copy.
const NODES = [
  // Right cluster
  { id: "r1", x: 85, y: 12, size: "md", kind: "orange" },
  { id: "r2", x: 96, y: 20, size: "sm", kind: "black" },
  { id: "r3", x: 80, y: 32, size: "md2", kind: "orange" },
  { id: "r4", x: 77, y: 41, size: "xs", kind: "orange" },
  { id: "r5", x: 86, y: 41, size: "md2", kind: "orange" },
  { id: "r6", x: 94, y: 45, size: "sm", kind: "black" },
  { id: "r7", x: 81, y: 53, size: "sm", kind: "black" },
  { id: "r8", x: 59, y: 64, size: "sm", kind: "orange" },
  { id: "r9", x: 89.5, y: 70, size: "md", kind: "orange" },
  { id: "r10", x: 65, y: 75, size: "sm", kind: "orange" },
  { id: "r11", x: 55.5, y: 74, size: "xs", kind: "orange" },
  { id: "r12", x: 84.5, y: 83, size: "sm", kind: "black" },
  { id: "r13", x: 91, y: 83, size: "xs", kind: "orange" },
  { id: "r14", x: 70, y: 92, size: "sm", kind: "orange" },
  { id: "r15", x: 77.5, y: 99, size: "xs", kind: "orange" },
  { id: "r16", x: 57, y: 90.5, size: "md", kind: "orange" },
  // Left cluster
  { id: "l1", x: 13, y: 27, size: "sm", kind: "orange" },
  { id: "l2", x: 9, y: 33, size: "sm", kind: "black" },
  { id: "l3", x: 5, y: 40, size: "md", kind: "orange" },
  { id: "l4", x: 15, y: 46, size: "sm", kind: "black" },
  { id: "l5", x: 27.5, y: 62, size: "sm", kind: "black" },
  { id: "l6", x: 22, y: 74, size: "sm", kind: "black" },
  { id: "l7", x: 0.5, y: 66, size: "sm", kind: "orange" },
  { id: "l8", x: 30, y: 80, size: "sm", kind: "orange" },
  { id: "l9", x: 12, y: 88.5, size: "key", kind: "orange" },
  { id: "l10", x: 37, y: 92.5, size: "sm", kind: "orange" },
  { id: "l11", x: 32, y: 98, size: "xs", kind: "black" },
  // Off-screen anchors (not drawn)
  { id: "g1", x: 102, y: 3, kind: "ghost" },
  { id: "g2", x: 101, y: 76, kind: "ghost" },
  { id: "g3", x: 101, y: 62, kind: "ghost" },
  { id: "g4", x: -2, y: 38, kind: "ghost" },
  { id: "g5", x: -2, y: 18, kind: "ghost" },
  { id: "g6", x: -2, y: 94, kind: "ghost" },
  { id: "g7", x: 36, y: 103, kind: "ghost" },
  { id: "g8", x: 101, y: 96, kind: "ghost" },
  // Interactive nodes
  {
    id: "design",
    kind: "key",
    size: "key",
    x: 16,
    y: 60,
    title: "Design",
    subtitle: "Turn ideas into experiences people understand",
    body: "We shape intuitive interfaces and user journeys around real needs, making complex products simple to use.",
  },
  {
    id: "technology",
    kind: "key",
    size: "hub",
    x: 44.5,
    y: 72,
    title: "Technology",
    subtitle: "Build with the right technology.",
    body: "From web and mobile to AI, blockchain, and embedded systems, we choose the technology that fits the problem",
  },
  {
    id: "execution",
    kind: "key",
    size: "key",
    x: 69.5,
    y: 59,
    title: "Execution",
    subtitle: "Take it from concept to something real.",
    body: "We bring design and engineering together to build, test, and launch products that work beyond the idea.",
  },
];

// [from, to, faint?]
const EDGES = [
  // Right cluster
  ["r1", "g1"], ["r1", "r2", 1], ["r1", "r3"], ["r3", "r4"], ["r4", "execution"], ["r3", "r7"],
  ["r5", "r3", 1], ["r5", "r7"], ["r5", "r6"], ["r7", "r6"], ["r7", "execution"], ["r7", "r9"],
  ["execution", "r9"], ["execution", "r8"], ["r8", "technology"], ["execution", "r10"],
  ["r10", "r9"], ["r10", "r14"], ["r9", "r12"], ["r12", "r14"], ["r12", "r13", 1],
  ["r13", "g2", 1], ["r9", "g3", 1], ["r14", "r15"], ["r14", "r16"], ["r11", "r10", 1],
  ["r15", "g8", 1], ["r16", "technology"], ["technology", "r11"],
  // Left cluster
  ["l3", "g4", 1], ["l3", "l2"], ["l2", "l1"], ["l1", "g5", 1], ["l3", "design"], ["l2", "l4"],
  ["l4", "design"], ["design", "l5"], ["l5", "technology"], ["design", "g4", 1], ["design", "l7"],
  ["l7", "l9"], ["design", "l9"], ["l9", "g6", 1], ["design", "l8"], ["l8", "technology"],
  ["l8", "l10"], ["l10", "l11"], ["technology", "l10"], ["technology", "l6", 1],
  ["l6", "l9", 1], ["l11", "g7", 1],
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));
const MARGIN = 8;

const CARD_POS = {
  right: "left-full top-1/2 pl-3 origin-left",
  left: "right-full top-1/2 pr-3 origin-right",
  below: "top-full left-1/2 pt-3 origin-top",
  above: "bottom-full left-1/2 pb-3 origin-bottom",
};
const NOTCH_POS = {
  right: "-left-1.5 top-1/2",
  left: "-right-1.5 top-1/2",
  below: "-top-1.5 left-1/2",
  above: "-bottom-1.5 left-1/2",
};

function Tooltip({ node, active, containerRef }) {
  const cardRef = useRef(null);
  const [layout, setLayout] = useState({ mode: "below", shift: 0 });

  // Pick the side with room (right, left, then below/above) and slide along the cross axis so the card
  // stays inside the graph; the notch moves the opposite way to keep pointing at the node.
  // Runs while hidden too, so an off-screen card never creates horizontal scroll.
  useLayoutEffect(() => {
    const fit = () => {
      const container = containerRef.current;
      const card = cardRef.current;
      if (!container || !card) return;
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const cx = (node.x / 100) * cw;
      const cy = (node.y / 100) * ch;
      const w = card.offsetWidth;
      const h = card.offsetHeight;
      const half = card.parentElement.offsetWidth / 2;
      const clamp = (start, len, max) =>
        start < MARGIN ? MARGIN - start : start + len > max - MARGIN ? max - MARGIN - (start + len) : 0;

      let mode;
      if (cx + half + w <= cw - MARGIN) mode = "right";
      else if (cx - half - w >= MARGIN) mode = "left";
      else mode = cy + half + h <= ch - MARGIN ? "below" : "above";

      const shift =
        mode === "right" || mode === "left" ? clamp(cy - h / 2, h, ch) : clamp(cx - w / 2, w, cw);
      setLayout((prev) => (prev.mode === mode && prev.shift === shift ? prev : { mode, shift }));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [node.x, node.y, containerRef]);

  const { mode, shift } = layout;
  const horizontal = mode === "right" || mode === "left";
  const cardTranslate = horizontal ? `0px, calc(-50% + ${shift}px)` : `calc(-50% + ${shift}px), 0px`;
  const notchTranslate = horizontal ? `0px, calc(-50% - ${shift}px)` : `calc(-50% - ${shift}px), 0px`;

  return (
    <div
      ref={cardRef}
      id={`tip-${node.id}`}
      role="tooltip"
      style={{ transform: `translate(${cardTranslate}) scale(${active ? 1 : 0.95})` }}
      className={`absolute z-50 w-64 max-w-xs transition-[opacity,transform,visibility] duration-200 ease-out ${CARD_POS[mode]} ${
        active ? "visible opacity-100 [@media(hover:none)]:pointer-events-none" : "pointer-events-none invisible opacity-0"
      }`}
    >
      <div className="relative rounded-lg bg-white p-4 text-left shadow-xl shadow-black/20">
        <span
          aria-hidden="true"
          style={{ transform: `translate(${notchTranslate}) rotate(45deg)` }}
          className={`absolute h-3 w-3 bg-white ${NOTCH_POS[mode]}`}
        />
        <p className="text-xl font-bold leading-tight text-black">{node.title}</p>
        <p className="mt-2 text-sm font-bold leading-snug text-black">{node.subtitle}</p>
        <p className="mt-0.5 text-sm leading-snug text-gray-900">{node.body}</p>
      </div>
    </div>
  );
}

export default function NodeGraphHero() {
  const [active, setActive] = useState(null);
  const containerRef = useRef(null);

  // Tap/click outside the nodes, or Escape, closes the open card (needed for touch).
  useEffect(() => {
    if (!active) return undefined;
    const onPointerDown = (e) => {
      if (!e.target.closest("[data-key-node]")) setActive(null);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <section
      aria-labelledby="graph-heading"
      className="relative min-h-screen w-full overflow-hidden bg-white font-manrope"
    >
      <div className="relative z-20 mx-auto max-w-4xl px-4 pt-28 text-center sm:pt-32">
        <h2 id="graph-heading" className="text-3xl font-medium leading-tight text-black sm:text-4xl">
          Ideas are easy. Building them is not.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-800 sm:mt-8 sm:text-lg">
          Every business has an idea. Turning that idea into something people can actually use takes the right
          technology, design, and execution.
        </p>
      </div>

      {/* Full-bleed graph layer. On phones it starts below the text so lines never run through it. */}
      <div ref={containerRef} className="absolute inset-x-0 bottom-0 top-80 sm:top-0">
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {EDGES.map(([from, to, faint]) => (
            <line
              key={`${from}-${to}`}
              x1={byId[from].x}
              y1={byId[from].y}
              x2={byId[to].x}
              y2={byId[to].y}
              className={faint ? "stroke-gray-200" : "stroke-gray-400"}
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {NODES.map((node) => {
          if (node.kind === "ghost") return null;
          const pos = { left: `${node.x}%`, top: `${node.y}%` };
          const dot = { width: SIZE[node.size], height: SIZE[node.size] };
          const shadow =
            node.kind === "black" ? "shadow-[0_4px_10px_rgba(0,0,0,0.18)]" : "shadow-[0_6px_16px_rgba(0,0,0,0.18)]";

          if (node.kind !== "key") {
            return (
              <span
                key={node.id}
                aria-hidden="true"
                style={{ ...pos, ...dot }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${shadow} ${
                  node.kind === "orange" ? "bg-lightOrange" : "bg-black"
                }`}
              />
            );
          }

          const isActive = active === node.id;
          return (
            <div
              key={node.id}
              data-key-node
              style={pos}
              className={`absolute -translate-x-1/2 -translate-y-1/2 ${isActive ? "z-50" : "z-10"}`}
              onMouseEnter={() => setActive(node.id)}
              onMouseLeave={() => setActive((cur) => (cur === node.id ? null : cur))}
            >
              <button
                type="button"
                aria-label={node.title}
                aria-expanded={isActive}
                aria-describedby={isActive ? `tip-${node.id}` : undefined}
                onClick={() => setActive(node.id)}
                onFocus={() => setActive(node.id)}
                onBlur={() => setActive((cur) => (cur === node.id ? null : cur))}
                style={{ width: `max(2.75rem, ${SIZE[node.size]})`, height: `max(2.75rem, ${SIZE[node.size]})` }}
                className="flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span
                  style={dot}
                  className={`block rounded-full bg-lightOrange transition-[transform,box-shadow] duration-200 ${
                    isActive ? "scale-110 shadow-[0_0_30px_8px] shadow-lightOrange/50" : `scale-100 ${shadow}`
                  }`}
                />
              </button>
              <Tooltip node={node} active={isActive} containerRef={containerRef} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
