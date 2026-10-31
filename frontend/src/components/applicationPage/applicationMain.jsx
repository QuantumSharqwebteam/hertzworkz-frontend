import HeroNavbar from "../homePage/HeroNavbar"
import Application from "./application"
import SiteFooter from "../contactPage/SiteFooter"

export default function ApplicationMain(){
    return(
        <>
        <HeroNavbar onLight />
        <Application/>
        {/* bg-ink wrapper: SiteFooter's own margin-top sits outside its background,
            so without this the page's global body background image shows through that gap. */}
        <div className="bg-ink">
          <SiteFooter/>
        </div>
        </>
    )
}