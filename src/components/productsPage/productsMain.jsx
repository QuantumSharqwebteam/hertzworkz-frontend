
import Navbar from "./Navbar";
import ProductsHeader from "./ProductsHeader";
import FeaturesSection from "./FeaturesSection";
import AshokTextiles from "./ashokTextiles";
import ProjectManagement from "./projectManagement";
import "../../App.css";
import MediApp from "./mediApp";
import EggsProApp from "./eggsProApp";
import TextilesHub from "./TextilesHub";
import FleetPulseProject from "./FleetPulseProject";
export default function ProductsMain(){
    return(
        <>
        <Navbar />
        <ProductsHeader />
        <FeaturesSection/>
        <AshokTextiles/>
        <ProjectManagement/>
        <MediApp/>
        <EggsProApp/>
        <TextilesHub/>
        <FleetPulseProject/>
        </>
    );
}