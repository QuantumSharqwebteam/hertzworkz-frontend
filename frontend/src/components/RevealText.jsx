/* eslint-disable react/prop-types -- repo has no prop-types dependency */
import { useEffect, useRef, useState } from "react";

// "Reading highlight" reveal: every word starts low-contrast (25% opacity),
// blurred, and nudged down, then settles to full opacity/no blur/no offset
// left to right, as if a highlight were sweeping through the sentence while
// someone reads it. CSS-transition driven (one shared `revealed` flag plus a
// per-word transition-delay), same pattern as TiltReveal.jsx. Uses `opacity`
// rather than an explicit color, so it inherits whatever text color it's
// placed in instead of needing to know light vs dark theme.
// Keeps the full text available to screen readers via a visually-hidden
// duplicate, since the animated span is aria-hidden - same approach as
// Typewriter.jsx/TiltReveal.jsx.
//
// Same trigger conventions as Typewriter.jsx/TiltReveal.jsx: starts on mount
// by default, once scrolled into view with `triggerOnView`, or the moment a
// parent-controlled `trigger` prop becomes true.
export default function RevealText({
  text,
  startDelay = 0,
  step = 120,
  triggerOnView = false,
  trigger,
  className = "",
}) {
  const [started, setStarted] = useState(trigger === undefined && !triggerOnView);
  const [revealed, setRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (trigger === undefined || started) return;
    if (trigger) setStarted(true);
  }, [trigger, started]);

  useEffect(() => {
    if (started || trigger !== undefined || !triggerOnView) return undefined;
    const el = elementRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started, trigger, triggerOnView]);

  useEffect(() => {
    if (!started) return undefined;
    const timer = setTimeout(() => setRevealed(true), startDelay);
    return () => clearTimeout(timer);
  }, [started, startDelay]);

  const reducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");
  const nodes = [];
  words.forEach((word, i) => {
    nodes.push(
      <span
        key={`w-${i}`}
        className="inline-block transition-[opacity,filter,transform] duration-[400ms] ease-out"
        style={{
          opacity: revealed ? 1 : 0.25,
          filter: revealed ? "blur(0px)" : "blur(2px)",
          transform: revealed ? "none" : "translateY(2px)",
          transitionDelay: `${i * step}ms`,
        }}
      >
        {word}
      </span>
    );
    if (i < words.length - 1) nodes.push(" ");
  });

  return (
    <span ref={elementRef} className={className}>
      <span aria-hidden="true">{nodes}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
