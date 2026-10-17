import HeroNavbar from "../homePage/HeroNavbar";
import ProductsHero from "./ProductsHero";
import ContactFooter from "../contactPage/contactFooter";

export default function ProductsMain(){
    return(
        <>
        <HeroNavbar onLight />
        <ProductsHero />
        <ContactFooter />
        </>
    );
}
