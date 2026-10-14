import HeroNavbar from "../homePage/HeroNavbar"
import OurTeam from "./ourTeam"
import CurrentOpenings from "./currentOpening"
import ContactFooter from "../contactPage/contactFooter"

export default function CareerMain() {
    return (
        <>
            <HeroNavbar onLight />
            <OurTeam />
            <CurrentOpenings />
            <ContactFooter />
        </>
    )
}