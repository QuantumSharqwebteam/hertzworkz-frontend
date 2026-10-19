import HeroNavbar from "../homePage/HeroNavbar"
import Application from "./application"
import ContactFooter from "./contactFooter"

export default function ApplicationMain(){
    return(
        <>
        <HeroNavbar onLight />
        <Application/>
        {/* bg-ink wrapper: ContactFooter's own margin-top sits outside its background,
            so without this the page's global body background image shows through that gap. */}
        <div className="bg-ink">
          <ContactFooter/>
        </div>
        </>
    )
}