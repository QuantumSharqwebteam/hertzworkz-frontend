// Decorative. Drops in from the top of the viewport and swings to a stop on
// its cord, matching the reference video. Hidden on small screens where
// there's no room for it beside the form.
export default function HangingPhone() {
  return (
    <img
      src="/assets/images/services/contact-phone.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute right-32 top-0 hidden h-auto w-32 origin-top animate-phone-drop motion-reduce:animate-none lg:block"
    />
  );
}
