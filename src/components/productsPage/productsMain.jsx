import HeroNavbar from "../homePage/HeroNavbar";
import ProductsHero from "./ProductsHero";
import ProductsShowcase from "./ProductsShowcase";
import ContactFooter from "../contactPage/contactFooter";

export default function ProductsMain(){
    return(
        <>
        <HeroNavbar onLight />
        <ProductsHero />
        <ProductsShowcase />
        <ContactFooter />
        </>
    );
}
