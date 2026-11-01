/* eslint-disable react/prop-types -- repo has no prop-types dependency */
import { useEffect, useRef, useState } from "react";

// Types `text` out one character at a time. Respects prefers-reduced-motion
// (shows the full text immediately instead of animating), and keeps the full
// text available to screen readers the whole time via a visually-hidden
// duplicate, since the animated span is aria-hidden.
//
// With `triggerOnView`, typing only starts once the element scrolls into the
// viewport (fires once, like AOS's `once: true`) instead of on mount - needed
// for anything below the fold, since starting on mount finishes typing long
// before the user scrolls down to see it.
//
// With `trigger` (a boolean the parent controls), typing starts the moment
// that prop becomes true instead of on mount/view - for anything gated by
// its own logic other than simple visibility, e.g. a scroll-scrubbed reveal
// that should only start typing once fully revealed, not just on-screen.
export default function Typewriter({
  text,
  speed = 45,
  startDelay = 0,
  triggerOnView = false,
  trigger,
  className = "",
  cursorClassName = "",
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(trigger === undefined && !triggerOnView);
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

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setDisplayed(text);
      setDone(true);
      return undefined;
    }

    setDisplayed("");
    setDone(false);
    let i = 0;
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [started, text, speed, startDelay]);

  return (
    <span ref={elementRef} className={className}>
      <span aria-hidden="true">
        {displayed}
        <span
          className={`ml-0.5 inline-block w-[2px] bg-current align-middle transition-opacity motion-safe:animate-pulse ${
            done ? "opacity-0" : "opacity-100"
          } ${cursorClassName}`}
          style={{ height: "0.9em" }}
        />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
