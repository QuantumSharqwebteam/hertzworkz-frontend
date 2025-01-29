import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeMain from "./components/homePage/homeMain"
import ProductsMain from "./components/productsPage/productsMain";
import CareerMain from './components/careerPage/careerMain';
import ApplicationMain from './components/applicationPage/applicationMain';
import ContactMain from './components/contactPage/contactMain';
import ScrollToTop from './components/ScrollToTop';
import ServiceMain from "./components/servicePage/ServiceMain"
export default function App() {
  return (
    <>
      <div className='bg-black'>
        <Router>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<HomeMain />} />
            <Route path="/product" element={<ProductsMain />} /> 
            <Route path="/career" element={<CareerMain />} />
            <Route path="/service" element={<ServiceMain />} />
            <Route path="/contact" element={<ContactMain />} />
            <Route path="/application" element={<ApplicationMain />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
