import Navbar from "../navbar";
import Image from "./Image"
import WelcomePage from "./WelcomePage";
import ChoosePage from "./ChoosePage";
import ValuePage from "./ValuePage";
import WhatWeDo from "./WhatWeDo";
import Features from "./Features";
import Mission from "./Mission";
import FaqPage from "./FaqPage";
import ModelViewer from "./ThreeDModel";;
import ContactFooter from "../contactPage/contactFooter";
import React from "react";



export default function HomeMain() {
    return (
        <>
            <Navbar />
            <ModelViewer  glbUrl="/logo2.glb"  />
            <WelcomePage />
            <ChoosePage/>
            <ValuePage/>
            <WhatWeDo/>
            <Features/>
            <Mission/>
            <FaqPage/>
            <ContactFooter />
        </>
    )
}