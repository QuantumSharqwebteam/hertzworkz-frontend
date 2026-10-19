import { useEffect, useRef, useState } from "react";
import logo from "/logo.png";

// Full-screen logo intro, matching reference/intro.mp4: black screen -> the
// equalizer bars appear as small, roughly-equal-height dots -> they pop out
// to their full varying heights right as the "HertzworkZ" wordmark fades in
// below -> a short hold -> the whole splash fades out to reveal the page.
// Timings below are read off that reference clip (one playback cycle).
const DOTS_DELAY = 150;
const GROW_DELAY = 1000;
const EXIT_DELAY = 2300;
const UNMOUNT_DELAY = 2900;

// Each bar's natural length varies a lot (2 to 28 units). Scaling every bar
// down to roughly the same small "dot" height - rather than one shared scale
// factor - is what makes the start state read as a row of dots instead of a
// row of tiny versions of the final bars.
const DOT_HEIGHT = 2.1;
const BARS = [
  { x: 49.9098, y1: 15.7544, y2: 17.7676, color: "#FE5D26" },
  { x: 55.485, y1: 11.9343, y2: 21.5877, color: "#F6B704" },
  { x: 61.0602, y1: 2.64231, y2: 30.8798, color: "#34A353" },
  { x: 66.6354, y1: 7.49485, y2: 26.0273, color: "#4280EF" },
  { x: 72.2106, y1: 15.6512, y2: 17.871, color: "#BD1E51" },
  { x: 77.7857, y1: 11.7279, y2: 21.7943, color: "#FE5D26" },
  { x: 83.3609, y1: 6.25584, y2: 27.2662, color: "#F6B704" },
  { x: 88.9361, y1: 13.2766, y2: 20.2456, color: "#34A353" },
  { x: 94.5113, y1: 15.9609, y2: 17.5612, color: "#4280EF" },
].map((bar) => {
  const length = bar.y2 - bar.y1;
  const mid = (bar.y1 + bar.y2) / 2;
  return { ...bar, mid, dotScale: Math.min(1, DOT_HEIGHT / length) };
});

const SKIP_FADE_DURATION = 500;

export default function IntroSplash() {
  const [phase, setPhase] = useState("start");
  const [mounted, setMounted] = useState(true);
  const timersRef = useRef([]);

  useEffect(() => {
    timersRef.current = [
      setTimeout(() => setPhase("dots"), DOTS_DELAY),
      setTimeout(() => setPhase("grown"), GROW_DELAY),
      setTimeout(() => setPhase("exit"), EXIT_DELAY),
      setTimeout(() => setMounted(false), UNMOUNT_DELAY),
    ];
    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  const skip = () => {
    if (phase === "exit") return;
    timersRef.current.forEach(clearTimeout);
    setPhase("exit");
    setTimeout(() => setMounted(false), SKIP_FADE_DURATION);
  };

  if (!mounted) return null;

  const barsVisible = phase === "dots" || phase === "grown" || phase === "exit";
  const barsGrown = phase === "grown" || phase === "exit";
  const wordmarkVisible = phase === "grown" || phase === "exit";

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Skip intro"
      onClick={skip}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          skip();
        }
      }}
      className={`fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center gap-3 bg-ink transition-opacity duration-500 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange focus-visible:ring-inset motion-reduce:transition-none ${
        phase === "exit" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <svg
        aria-hidden="true"
        width="140"
        height="88"
        viewBox="46 0 52 33"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-auto w-40 transition-opacity duration-300 ease-out motion-reduce:transition-none sm:w-56 ${
          barsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {BARS.map((bar) => (
          <line
            key={bar.x}
            x1={bar.x}
            y1={bar.y1}
            x2={bar.x}
            y2={bar.y2}
            stroke={bar.color}
            strokeWidth="2.5295"
            strokeLinecap="round"
            className="transition-transform duration-300 ease-out motion-reduce:transition-none"
            style={{
              transformOrigin: `${bar.x}px ${bar.mid}px`,
              transform: `scaleY(${barsGrown ? 1 : bar.dotScale})`,
            }}
          />
        ))}
      </svg>

      <img
        src={logo}
        alt=""
        className={`h-auto w-64 transition-all duration-[400ms] ease-out motion-reduce:transition-none sm:w-80 ${
          wordmarkVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      />
    </div>
  );
}
