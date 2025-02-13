import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeMain from "./components/homePage/homeMain"
import ProductsMain from "./components/productsPage/productsMain";
import CareerMain from './components/careerPage/careerMain';
import ApplicationMain from './components/applicationPage/applicationMain';
import ContactMain from './components/contactPage/contactMain';
import ScrollToTop from './components/ScrollToTop';
import ServiceMain from "./components/servicePage/ServiceMain"
import WebDesign from './components/servives/WebDesign';
import BlockChain from './components/servives/BlockChain';
import AiMl from './components/servives/AIML';
import Embedded from './components/servives/Embedded';
import AppDev from './components/servives/AppDevelopment';
import WebDev from './components/servives/WebDevelopment';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,  // Duration of animation
      once: false,      // Animation happens only once
    });
  }, []);
  return (
    <>
      <div className='bg-black'>
        <Router>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<HomeMain />} />
            <Route path="/product" element={<ProductsMain />} /> 
            <Route path="/career" element={<CareerMain />} />
            {/* <Route path="/service" element={<ServiceMain />} /> */}
            <Route path="/contact" element={<ContactMain />} />
            <Route path="/application" element={<ApplicationMain />} />
            <Route path="/service/web-design" element={<WebDesign />} />
            <Route path="/service/blockchain" element={<BlockChain />} />
            <Route path="/service/ai-ml-development" element={<AiMl />} />
            <Route path="/service/embedded-solution" element={<Embedded />} />
            <Route path="/service/mob-development" element={<AppDev />} />
            <Route path="/service/web-development" element={<WebDev />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
