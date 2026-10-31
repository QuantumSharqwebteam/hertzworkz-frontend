import logo from "/logo.png";

// Shared brand mark: the colored equalizer bars stacked above the
// "HertzworkZ" wordmark image, matching the original combined logo.
// eslint-disable-next-line react/prop-types -- repo has no prop-types dependency
export default function Logo({ barsClassName = "h-3 w-auto", textClassName = "h-5 w-auto" }) {
  return (
    <span className="flex flex-col items-center gap-0.5">
      <svg viewBox="46 0 52 33" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={barsClassName}>
        <line x1="49.9098" y1="15.7544" x2="49.9098" y2="17.7676" stroke="#FE5D26" strokeWidth="2.5295" strokeLinecap="round" />
        <line x1="55.485" y1="11.9343" x2="55.485" y2="21.5877" stroke="#F6B704" strokeWidth="2.5295" strokeLinecap="round" />
        <line x1="61.0602" y1="2.64231" x2="61.0602" y2="30.8798" stroke="#34A353" strokeWidth="2.5295" strokeLinecap="round" />
        <line x1="66.6354" y1="7.49485" x2="66.6354" y2="26.0273" stroke="#4280EF" strokeWidth="2.5295" strokeLinecap="round" />
        <line x1="72.2106" y1="15.6512" x2="72.2105" y2="17.871" stroke="#BD1E51" strokeWidth="2.5295" strokeLinecap="round" />
        <line x1="77.7857" y1="11.7279" x2="77.7857" y2="21.7943" stroke="#FE5D26" strokeWidth="2.5295" strokeLinecap="round" />
        <line x1="83.3609" y1="6.25584" x2="83.3609" y2="27.2662" stroke="#F6B704" strokeWidth="2.5295" strokeLinecap="round" />
        <line x1="88.9361" y1="13.2766" x2="88.9361" y2="20.2456" stroke="#34A353" strokeWidth="2.5295" strokeLinecap="round" />
        <line x1="94.5113" y1="15.9609" x2="94.5113" y2="17.5612" stroke="#4280EF" strokeWidth="2.5295" strokeLinecap="round" />
      </svg>
      <img src={logo} alt="Hertzworkz" className={textClassName} />
    </span>
  );
}
