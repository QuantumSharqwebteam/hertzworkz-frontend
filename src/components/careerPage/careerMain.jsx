import HeroNavbar from "../homePage/HeroNavbar"
import OurTeam from "./ourTeam"
import CurrentOpenings from "./currentOpening"
import ContactFooter from "../contactPage/contactFooter"

export default function CareerMain() {
    return (
        <>
            <HeroNavbar onLight />
            <OurTeam />
            {/* bg-ink wrapper extends through ContactFooter: its own margin-top
                sits outside the footer's background, so without this the page's
                global body background image shows through that gap. */}
            <div className="bg-ink">
                <CurrentOpenings />
                <ContactFooter />
            </div>
        </>
    )
}