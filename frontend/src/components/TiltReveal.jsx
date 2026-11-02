/* eslint-disable react/prop-types -- repo has no prop-types dependency */
import { useEffect, useRef, useState } from "react";

// Reveals `text` one word at a time: each word starts tilted, nudged down, and
// transparent, then straightens into place and fades in. CSS-transition driven
// (one shared `revealed` flag plus a per-word transition-delay), rather than a
// JS interval like Typewriter.jsx - a simpler fit for "all words animate at
// once, staggered" instead of "characters appear one at a time in sequence".
// Keeps the full text available to screen readers via a visually-hidden
// duplicate, since the animated span is aria-hidden - same approach as
// Typewriter.jsx.
//
// Same trigger conventions as Typewriter.jsx: starts on mount by default, once
// scrolled into view with `triggerOnView`, or the moment a parent-controlled
// `trigger` prop becomes true (e.g. gated on a preloader/entrance sequence).
export default function TiltReveal({
  text,
  startDelay = 0,
  step = 35,
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
        className="inline-block transition-[opacity,transform] duration-[550ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? "none" : "translateY(0.35em) rotate(7deg)",
          transformOrigin: "left bottom",
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
