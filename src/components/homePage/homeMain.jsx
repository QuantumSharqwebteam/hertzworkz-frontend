import HeroNavbar from "./HeroNavbar";
import Hero from "./Hero";
import NodeGraphHero from "./NodeGraphHero";
import ProcessPipeline from "./ProcessPipeline";
import ApproachMerge from "./ApproachMerge";
import ServicesSection from "./ServicesSection";
import IdeasCta from "./IdeasCta";
import PartnersAndSupporters from "./PartnersAndSupporters";
import CtaGlowBackground from "./CtaGlowBackground";
import Image from "./Image"
import ModelViewer from "./ThreeDModel";;
import ContactFooter from "../contactPage/contactFooter";

export default function HomeMain() {
    return (
        <div>
            <HeroNavbar />
            <Hero />
            {/* <ModelViewer  glbUrl="/logo2.glb"  /> */}
            <NodeGraphHero />
            <ProcessPipeline />
            <ApproachMerge />
            <ServicesSection />
            {/* bg-ink wrapper extends through ContactFooter: its own mt-28 is a margin
                that sits outside the footer's background, so without this the page's
                global body background image shows through that gap. */}
            <div className="relative isolate overflow-hidden bg-ink">
                <CtaGlowBackground />
                <IdeasCta />
                <PartnersAndSupporters />
                <ContactFooter />
            </div>
        </div>
    )
}
