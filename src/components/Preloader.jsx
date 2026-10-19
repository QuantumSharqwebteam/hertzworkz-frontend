import { useEffect, useRef, useState } from "react";

// Full-screen page-load intro: 9 idle "dot" pills reveal, hold, burst upward into a
// waveform while the "HertzworkZ" wordmark fades in, hold again, then the whole
// overlay crossfades out and unmounts. Mounted once at the app root (see App.jsx) -
// not per-route - so it plays once per full page load only.
//
// All durations/sizes are named constants so the timeline is easy to retune.
const PILL_COUNT = 9;
const CENTER_INDEX = 4;
const IDLE_HEIGHT_MULTIPLIER = 1.6; // idle pill height = W * this
// Final burst height per pill (as a multiple of W), left to right.
const FINAL_HEIGHT_MULTIPLIERS = [1.8, 4, 8.5, 6.3, 1.7, 4.2, 7.3, 3.7, 1.7];
// CSS custom-property names for each pill's color, left to right (orange-red,
// yellow, green, purple, pink repeat at indices 5-8 per the reference clip).
const PILL_COLOR_VARS = [
  "--pl-orange",
  "--pl-yellow",
  "--pl-green",
  "--pl-purple",
  "--pl-pink",
  "--pl-orange",
  "--pl-yellow",
  "--pl-green",
  "--pl-purple",
];

const BURST_STAGGER_MS = 25; // delay per ring outward from the center bar
const BURST_DURATION_MS = 200;
const WORDMARK_FADE_MS = 260;

// Timeline (ms from mount), matching the reference clip:
const T_IDLE_END = 1200; // 0.5-1.2s hold as idle dots (overlay fade-in finishes by 0.5s)
const T_BURST_START = T_IDLE_END; // burst + wordmark fade start together
const T_EXIT_START = 2000; // 1.4-2.0s hold the grown logo, then start the exit fade
const T_UNMOUNT = 2300; // exit fade duration ~300ms

const REDUCED_HOLD_MS = 700;
const REDUCED_EXIT_MS = 300;

export default function Preloader() {
  // Read synchronously (matchMedia is available immediately) so there's no flash
  // of full-motion behavior before switching to the reduced variant.
  const [reducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [isVisible, setIsVisible] = useState(false); // drives the overlay's single fade-in/out transition
  const [burst, setBurst] = useState(reducedMotion); // pills at final height + wordmark shown
  const [mounted, setMounted] = useState(true);
  const timersRef = useRef([]);

  // Lock page scroll for as long as the overlay is actually visible (`mounted`, not
  // just the enclosing component instance - that never truly unmounts, it just
  // renders null once `mounted` is false, per the DOM-removal requirement below).
  // Keying the effect on `mounted` means its cleanup fires the moment the overlay
  // finishes, correctly restoring scroll every time.
  useEffect(() => {
    if (!mounted) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [mounted]);

  // Trigger the entrance fade one frame after mount (so the opacity transition
  // actually animates from 0 instead of snapping straight to visible).
  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const timers = reducedMotion
      ? [
          setTimeout(() => setIsVisible(false), REDUCED_HOLD_MS),
          setTimeout(() => setMounted(false), REDUCED_HOLD_MS + REDUCED_EXIT_MS),
        ]
      : [
          setTimeout(() => setBurst(true), T_BURST_START),
          setTimeout(() => setIsVisible(false), T_EXIT_START),
          setTimeout(() => setMounted(false), T_UNMOUNT),
        ];
    timersRef.current = timers;
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        "--pl-orange": "#ff5a1f",
        "--pl-yellow": "#f5c518",
        "--pl-green": "#4caf50",
        "--pl-purple": "#7c5ce0",
        "--pl-pink": "#e0307a",
        "--pl-brand-orange": "#ff7a00",
        "--pl-w": "clamp(12px, 1.3vw, 22px)",
      }}
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-black transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex origin-center scale-[0.6] flex-col items-center sm:scale-100">
        <div
          className="flex items-center justify-center"
          style={{ gap: "calc(var(--pl-w) * 1.2)" }}
        >
          {Array.from({ length: PILL_COUNT }, (_, i) => {
            const distanceFromCenter = Math.abs(i - CENTER_INDEX);
            const scale = burst ? FINAL_HEIGHT_MULTIPLIERS[i] / IDLE_HEIGHT_MULTIPLIER : 1;
            return (
              <span
                key={i}
                style={{
                  width: "var(--pl-w)",
                  height: "calc(var(--pl-w) * 1.6)",
                  backgroundColor: `var(${PILL_COLOR_VARS[i]})`,
                  transform: `scaleY(${scale})`,
                  transformOrigin: "center",
                  transition: reducedMotion
                    ? "none"
                    : `transform ${BURST_DURATION_MS}ms ease-out ${distanceFromCenter * BURST_STAGGER_MS}ms`,
                  boxShadow: "inset 1px 1px 1.5px rgba(255,255,255,0.45)",
                }}
                className="block rounded-full"
              />
            );
          })}
        </div>

        <p
          style={{
            opacity: burst ? 1 : 0,
            filter: burst ? "brightness(1)" : "brightness(0.4)",
            transition: reducedMotion ? "opacity 300ms ease-out" : `opacity ${WORDMARK_FADE_MS}ms ease-out, filter ${WORDMARK_FADE_MS}ms ease-out`,
            marginTop: "var(--pl-w)",
          }}
          className="text-3xl font-bold font-manrope sm:text-4xl"
        >
          <span style={{ color: "var(--pl-brand-orange)" }}>H</span>
          <span className="text-white">ertzwork</span>
          <span style={{ color: "var(--pl-brand-orange)" }}>Z</span>
        </p>
      </div>
    </div>
  );
}
