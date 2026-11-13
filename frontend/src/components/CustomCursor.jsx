import { useEffect, useRef, useState } from "react";

// Same ring/dot cursor as the "Magic Sphere" reference design (mix-blend-mode:
// difference inverts whatever is underneath), applied site-wide: the ring
// fills solid and grows while hovering any clickable element.
// "[data-cursor-fill]" opts a specific element (e.g. a big heading) into the
// same fill behavior as links/buttons, without being clickable itself.
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, summary, label, [data-cursor-fill]';
// A "[data-cursor-zone]" element (e.g. the Magic Sphere section) gets a quick
// fade-out/fade-in pulse right as the cursor crosses its boundary, matching
// the fade that used to play entering/leaving that section specifically.
const ZONE_SELECTOR = "[data-cursor-zone]";
// A "[data-cursor-fill-circle]" element (the sphere itself) fills the cursor
// based on geometric distance from its center - same as the reference design,
// where hovering anywhere over the sphere (even over its own text) fills the
// ring, not just when hovering an actual link/button.
const CIRCLE_SELECTOR = "[data-cursor-fill-circle]";

function isInsideAnyFillCircle(x, y) {
  const circles = document.querySelectorAll(CIRCLE_SELECTOR);
  for (const el of circles) {
    if (parseFloat(getComputedStyle(el).opacity) < 0.05) continue;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) continue;
    const dx = x - (rect.left + rect.width / 2);
    const dy = y - (rect.top + rect.height / 2);
    const radius = Math.min(rect.width, rect.height) / 2;
    if (dx * dx + dy * dy <= radius * radius) return true;
  }
  return false;
}

export default function CustomCursor() {
  const visibilityRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fineMq = window.matchMedia("(pointer: fine)");
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fineMq.matches && !reduceMq.matches);
    update();
    fineMq.addEventListener("change", update);
    reduceMq.addEventListener("change", update);
    return () => {
      fineMq.removeEventListener("change", update);
      reduceMq.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    const visibility = visibilityRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!visibility || !ring || !dot) return undefined;

    document.body.style.cursor = "none";
    let cx = -100;
    let cy = -100;
    let rx = -100;
    let ry = -100;
    let last = performance.now();
    let inside = null;
    let inZone = null;
    let pulseTimer = null;

    const move = (e) => {
      cx = e.clientX;
      cy = e.clientY;
      const target = document.elementFromPoint(cx, cy);

      const nowInZone = !!(target && target.closest(ZONE_SELECTOR));
      if (nowInZone !== inZone) {
        inZone = nowInZone;
        // Briefly drop to 0 then let the opacity transition (300ms, below)
        // ease it back in - the same fade pulse the sphere used to play on
        // its own section's pointerenter/pointerleave. This lives on a
        // separate wrapper so it never fights the dot's own "hidden while the
        // ring is filled" opacity below.
        clearTimeout(pulseTimer);
        visibility.style.opacity = "0";
        pulseTimer = setTimeout(() => {
          visibility.style.opacity = "1";
        }, 40);
      } else {
        visibility.style.opacity = "1";
      }

      const isInside = !!(target && target.closest(INTERACTIVE_SELECTOR)) || isInsideAnyFillCircle(cx, cy);
      if (isInside !== inside) {
        inside = isInside;
        const z = isInside ? 84 : 44;
        ring.style.width = ring.style.height = z + "px";
        ring.style.margin = -z / 2 + "px 0 0 " + -z / 2 + "px";
        ring.style.backgroundColor = isInside ? "rgba(255,255,255,0.9)" : "transparent";
        ring.style.borderColor = isInside ? "transparent" : "rgba(255,255,255,0.85)";
        dot.style.opacity = isInside ? "0" : "1";
      }
    };
    const leave = () => {
      visibility.style.opacity = "0";
    };
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);

    let raf;
    const loop = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const ck = 1 - Math.pow(0.0005, dt);
      rx += (cx - rx) * ck;
      ry += (cy - ry) * ck;
      ring.style.transform = "translate(" + rx + "px," + ry + "px)";
      dot.style.transform = "translate(" + cx + "px," + cy + "px)";
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(pulseTimer);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.body.style.cursor = "";
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={visibilityRef} className="opacity-0 transition-opacity duration-300">
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[22px] -mt-[22px] h-11 w-11 rounded-full border-[1.5px] border-white/85 transition-[width,height,margin,background-color,border-color] duration-300 [mix-blend-mode:difference] will-change-transform"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-white transition-opacity duration-300 [mix-blend-mode:difference] will-change-transform"
      />
    </div>
  );
}
