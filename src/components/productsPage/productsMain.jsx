import HeroNavbar from "../homePage/HeroNavbar";
import ProductsHero from "./ProductsHero";
import ProductsShowcase from "./ProductsShowcase";
import SiteFooter from "../contactPage/SiteFooter";

export default function ProductsMain(){
    return(
        <>
        <HeroNavbar onLight />
        <ProductsHero />
        {/* bg-ink wrapper: SiteFooter's own mt-28 is a margin, which sits outside both
            elements' backgrounds - without this, the page's global body background
            image shows through that gap. */}
        <div className="bg-ink">
          <ProductsShowcase />
          <SiteFooter />
        </div>
        </>
    );
}
