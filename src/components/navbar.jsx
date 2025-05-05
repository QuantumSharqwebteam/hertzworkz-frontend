import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo_black.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef(null);
  const menuRef = useRef(null);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" ? "text-lightOrange" : "";
    }
    return location.pathname.startsWith(path) ? "text-lightOrange" : "";
  };
  
  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };
  

  // Close services dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white font-segoe relative z-10 h-14">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 mx-4" />
        </Link>
      </div>

      <ul className="hidden md:flex items-center space-x-6 text-sm">
        <li className={`hover:text-orange-500 p-2 cursor-pointer ${isActive("/")}`}>
          <Link to="/">Home</Link>
        </li>
        <li
          className={`relative hover:text-orange-500 p-2 cursor-pointer ${isActive("/service")}`}
          onClick={toggleServicesDropdown}
        >
          Services
          <svg
            className="w-4 h-4 inline-block ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>

          {isServicesOpen && (
            <ul
              ref={servicesRef}
              data-aos="fade-down"
              className="absolute bg-black text-white shadow-md mt-2 p-2 w-48 rounded-lg"
            >
              {serviceLinks.map((item) => (
                <li
                  key={item.to}
                  className={`p-2 hover:bg-gray-700 hover:scale-105 border-orange-600 cursor-pointer rounded ${isActive(item.to)}`}
                >
                  <Link to={item.to} className="flex">
                    <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                      <img src={item.icon} className="h-3" alt={item.label} />
                    </div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className={`hover:text-orange-500 p-2 cursor-pointer ${isActive("/product")}`}>
          <Link to="/product">Products</Link>
        </li>
        <li className={`hover:text-orange-500 p-2 cursor-pointer ${isActive("/career")}`}>
          <Link to="/career">Career</Link>
        </li>
        <li className={`hover:text-orange-500 p-2 cursor-pointer ${isActive("/contact")}`}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      <Link to="/contact">
        <button className="hidden md:block border border-lightOrange px-5 font-urbanist text-11.25 font-medium mx-4 rounded hover:bg-orange-500 hover:text-white h-8">
          Enquire Now
        </button>
      </Link>

      {/* Hamburger menu (mobile) */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        ref={menuRef}
        className={`absolute top-full left-0 right-0 bg-black text-white flex flex-col flex-grow-1 items-center py-4 md:hidden shadow-lg z-20 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li className={`hover:text-orange-500 p-2 cursor-pointer ${isActive("/")}`}>
            <Link to="/" onClick={handleMobileLinkClick}>Home</Link>
          </li>
          <li
            className={`relative hover:text-orange-500 p-2 text-center cursor-pointer ${isActive("/service")}`}
            onClick={toggleServicesDropdown}
          >
            Services
            <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            {isServicesOpen && (
              <ul className="static  text-white shadow-inner mt-3 mb-2 ml-28 py-2 w-full rounded-lg">
                {serviceLinks.map((item) => (
                  <li
                    key={item.to}
                    className={`p-2 hover:bg-gray-700 cursor-pointer ${isActive(item.to)}`}
                  >
                    <Link to={item.to} onClick={handleMobileLinkClick} className="flex">
                      <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                        <img src={item.icon} className="h-3" alt={item.label} />
                      </div>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className={`hover:text-orange-500 p-2 cursor-pointer ${isActive("/product")}`}>
            <Link to="/product" onClick={handleMobileLinkClick}>Products</Link>
          </li>
          <li className={`hover:text-orange-500 p-2 cursor-pointer ${isActive("/career")}`}>
            <Link to="/career" onClick={handleMobileLinkClick}>Career</Link>
          </li>
          <li className={`hover:text-orange-500 p-2 cursor-pointer ${isActive("/contact")}`}>
            <Link to="/contact" onClick={handleMobileLinkClick}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Extracted service links into an array to keep code DRY
const serviceLinks = [
  {
    to: "/service/web-design",
    label: "Web/App Design",
    icon: "/nav1.svg",
  },
  {
    to: "/service/web-development",
    label: "Web Development",
    icon: "/nav2.svg",
  },
  {
    to: "/service/mob-development",
    label: "App Development",
    icon: "/nav3.svg",
  },
  {
    to: "/service/ai-ml-development",
    label: "AI/ML Development",
    icon: "/nav4.svg",
  },
  {
    to: "/service/blockchain",
    label: "Blockchain",
    icon: "/nav5.svg",
  },
  {
    to: "/service/embedded-solution",
    label: "Embedded Solution",
    icon: "/nav6.svg",
  },
];

export default Navbar;