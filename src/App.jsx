import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeMain from "./components/homePage/homeMain"
import ProductsMain from "./components/productsPage/productsMain";
import CareerMain from './components/careerPage/careerMain';
import ApplicationMain from './components/applicationPage/applicationMain';
import ContactMain from './components/contactPage/contactMain';
import ScrollToTop from './components/ScrollToTop';
import ServicesGrid from "./components/servicePage/ServicesGrid";
import ServiceDetail from "./components/servicePage/ServiceDetail";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing function
    });
  }, []);
  return (
    <>
      <div className=''>
        <Router>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<HomeMain />} />
            <Route path="/product" element={<ProductsMain />} /> 
            <Route path="/career" element={<CareerMain />} />
            <Route path="/service" element={<ServicesGrid />} />
            <Route path="/contact" element={<ContactMain />} />
            <Route path="/application" element={<ApplicationMain />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
