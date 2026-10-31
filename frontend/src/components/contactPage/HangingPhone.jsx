// Decorative. Drops in from the top of the viewport and swings to a stop on
// its cord, matching the reference video. Hidden on small screens where
// there's no room for it beside the form. Positioned relative to contactMain's
// centered max-w-6xl wrapper (its nearest positioned ancestor) so it lands
// beside the form instead of at a fixed offset from the viewport edge.
export default function HangingPhone() {
  return (
    <img
      src="/assets/images/services/contact-phone.png"
      alt=""
      aria-hidden="true"
      // clip-path trims a 1px fully-opaque line baked into the PNG's top row (a mount
      // detail in the source asset, not a CSS border) that's otherwise visible above
      // the cord; the cord itself starts a little lower, so this doesn't crop it.
      className="pointer-events-none absolute right-0 top-0 hidden h-auto w-32 origin-top animate-phone-drop motion-reduce:animate-none lg:block [clip-path:inset(3px_0_0_0)]"
    />
  );
}
