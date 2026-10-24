import HeroNavbar from "../homePage/HeroNavbar";
import AboutHero from "./AboutHero";
import AboutMissionVision from "./AboutMissionVision";
import AboutHighlights from "./AboutHighlights";
import AboutFAQ from "./AboutFAQ";
import SiteFooter from "../contactPage/SiteFooter";

export default function AboutMain() {
  return (
    <>
      <HeroNavbar onLight />
      <AboutHero />
      <AboutMissionVision />
      <AboutHighlights />
      <AboutFAQ />
      {/* overflow-hidden bg-ink: without it, SiteFooter's own margin-top collapses
          through this wrapper (standard CSS margin-collapse) and the page's global body
          background image shows through the gap (see the same fix on Home/Career/Application).
          -mt-28 cancels that same margin-top: AboutHero already supplies its own bottom
          spacing (pb-20), so without this the two stack into a redundant, unstyled-looking gap. */}
      <div className="-mt-28 overflow-hidden bg-ink">
        <SiteFooter />
      </div>
    </>
  );
}
