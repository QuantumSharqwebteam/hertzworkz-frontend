import Navbar from "./navbar"
import Image from "./Image"
import WelcomePage from "./WelcomePage"
import ChoosePage from "./ChoosePage"
import ValuePage from "./ValuePage"
import WhatWeDo from "./WhatWeDo"
import Features from "./Features"
import Mission from "./Mission"
import FaqPage from "./FaqPage"

export default function HomeMain() {
    return (
        <>
            <Navbar />
            <Image />
            <WelcomePage />
            <ChoosePage/>
            <ValuePage/>
            <WhatWeDo/>
            <Features/>
            <Mission/>
            <FaqPage/>
        </>
    )
}