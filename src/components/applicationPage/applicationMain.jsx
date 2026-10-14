import HeroNavbar from "../homePage/HeroNavbar"
import Application from "./application"
import ContactFooter from "./contactFooter"

export default function ApplicationMain(){
    return(
        <>
        <HeroNavbar onLight />
        <Application/>
        <ContactFooter/>
        </>
    )
}