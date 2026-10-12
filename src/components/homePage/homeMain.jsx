import HeroNavbar from "./HeroNavbar";
import Hero from "./Hero";
import NodeGraphHero from "./NodeGraphHero";
import ProcessPipeline from "./ProcessPipeline";
import ApproachMerge from "./ApproachMerge";
import ServicesSection from "./ServicesSection";
import Image from "./Image"
import ModelViewer from "./ThreeDModel";;
import ContactFooter from "../contactPage/contactFooter";
import React, { useCallback, useEffect, useState } from "react";



const FADE_MS = 400;

export default function HomeMain() {
    const [leaving, setLeaving] = useState(false);
    const [isIntroComplete, setIsIntroComplete] = useState(false);
    const [revealed, setRevealed] = useState(false);

    const handleIntroDone = useCallback(() => setLeaving(true), []);

    // Fade the intro out, then swap to the main page at the top of the viewport.
    useEffect(() => {
        if (!leaving) return;
        const t = setTimeout(() => {
            setIsIntroComplete(true);
            window.scrollTo(0, 0);
        }, FADE_MS);
        return () => clearTimeout(t);
    }, [leaving]);

    // Fade the main page in on the frame after it mounts.
    useEffect(() => {
        if (!isIntroComplete) return;
        const raf = requestAnimationFrame(() => setRevealed(true));
        return () => cancelAnimationFrame(raf);
    }, [isIntroComplete]);

    if (!isIntroComplete) {
        return (
            <div
                className={`transition-opacity ease-in-out motion-reduce:transition-none ${leaving ? "opacity-0" : "opacity-100"}`}
                style={{ transitionDuration: `${FADE_MS}ms` }}
            >
                <HeroNavbar />
                <Hero onGetStarted={handleIntroDone} />
            </div>
        );
    }

    return (
        <div
            className={`transition-opacity ease-in-out motion-reduce:transition-none ${revealed ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDuration: `${FADE_MS}ms` }}
        >
            <HeroNavbar onLight />
            {/* <ModelViewer  glbUrl="/logo2.glb"  /> */}
            <NodeGraphHero />
            <ProcessPipeline />
            <ApproachMerge />
            <ServicesSection />
            <ContactFooter />
        </div>
    )
}
