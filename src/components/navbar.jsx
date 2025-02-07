import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-lightOrange" : "";

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white font-segoe relative z-10">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-36 h-14 mx-4" />
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
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>

          {isServicesOpen && (
            <ul className="absolute bg-black text-white shadow-md mt-2 p-2 w-48 rounded-lg">
              <li className={`p-2 hover:bg-gray-700 hover:scale-105 hover:border-1 border-orange-600 cursor-pointer rounded ${isActive("/service/web-design")}`}>
                <Link to="/service/web-design" className="flex">
                  <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                    <img src="/nav1.svg" className="h-3" alt="Web/App Design" />
                  </div>
                  Web/App Design
                </Link>
              </li>
              <li className={`p-2 hover:bg-gray-700 hover:scale-105 hover:border-1 border-orange-600 cursor-pointer rounded ${isActive("/service/web-development")}`}>
                <Link to="/service/web-development" className="flex">
                  <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                    <img src="/nav2.svg" className="h-3" alt="Web Development" />
                  </div>
                  Web Development
                </Link>
              </li>
              <li className={`p-2 hover:bg-gray-700 hover:scale-105 hover:border-1 border-orange-600 cursor-pointer rounded ${isActive("/service/mob-development")}`}>
                <Link to="/service/mob-development" className="flex">
                  <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                    <img src="/nav3.svg" className="h-3" alt="Mob Development" />
                  </div>
                  App Development
                </Link>
              </li>
              <li className={`p-2 hover:bg-gray-700 hover:scale-105 hover:border-1 border-orange-600 cursor-pointer rounded ${isActive("/service/ai-ml-development")}`}>
                <Link to="/service/ai-ml-development" className="flex">
                  <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                    <img src="/nav4.svg" className="h-3" alt="AI/ML Development" />
                  </div>
                  AI/ML Development
                </Link>
              </li>
              <li className={`p-2 hover:bg-gray-700 hover:scale-105 hover:border-1 border-orange-600 cursor-pointer rounded ${isActive("/service/blockchain")}`}>
                <Link to="/service/blockchain" className="flex">
                  <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                    <img src="/nav5.svg" className="h-3" alt="Blockchain" />
                  </div>
                  Blockchain
                </Link>
              </li>
              <li className={`p-2 hover:bg-gray-700 hover:scale-105 hover:border-1 border-orange-600 cursor-pointer rounded ${isActive("/service/embedded-solution")}`}>
                <Link to="/service/embedded-solution" className="flex">
                  <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                    <img src="/nav6.svg" className="h-3" alt="Embedded Solution" />
                  </div>
                  Embedded Solution
                </Link>
              </li>
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
        <button className="hidden md:block border border-lightOrange p-2 px-5 py-3 font-urbanist text-11.25 font-medium mx-4 rounded hover:bg-orange-500 hover:text-white">
          Enquire Now
        </button>
      </Link>

      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
  className={`absolute top-full left-0 right-0 bg-black text-white flex flex-col items-center py-4 md:hidden shadow-lg z-20 transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"} overflow-hidden`}
>
  <ul className="flex flex-col items-center space-y-4">
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
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
      {isServicesOpen && (
        <ul className="absolute bg-black text-white shadow-md mt-2 py-2 w-48">
          <li className={`p-2 hover:bg-gray-700 cursor-pointer ${isActive("/service/web-design")}`}>
            <Link to="/service/web-design" className="flex">
              <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                <img src="/nav1.svg" className="h-3" alt="Web/App Design" />
              </div>
              Web/App Design
            </Link>
          </li>
          <li className={`p-2 hover:bg-gray-700 cursor-pointer ${isActive("/service/web-development")}`}>
            <Link to="/service/web-development" className="flex">
              <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                <img src="/nav2.svg" className="h-3" alt="Web Development" />
              </div>
              Web Development
            </Link>
          </li>
          <li className={`p-2 hover:bg-gray-700 cursor-pointer ${isActive("/service/mob-development")}`}>
            <Link to="/service/mob-development" className="flex">
              <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                <img src="/nav3.svg" className="h-3" alt="App Development" />
              </div>
              App Development
            </Link>
          </li>
          <li className={`p-2 hover:bg-gray-700 cursor-pointer ${isActive("/service/ai-ml-development")}`}>
            <Link to="/service/ai-ml-development" className="flex">
              <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                <img src="/nav4.svg" className="h-3" alt="AI/ML Development" />
              </div>
              AI/ML Development
            </Link>
          </li>
          <li className={`p-2 hover:bg-gray-700 cursor-pointer ${isActive("/service/blockchain")}`}>
            <Link to="/service/blockchain" className="flex">
              <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                <img src="/nav5.svg" className="h-3" alt="Blockchain" />
              </div>
              Blockchain
            </Link>
          </li>
          <li className={`p-2 hover:bg-gray-700 cursor-pointer ${isActive("/service/embedded-solution")}`}>
            <Link to="/service/embedded-solution" className="flex">
              <div className="bg-orange-600 w-5 h-5 rounded-full mr-2 flex justify-center items-center">
                <img src="/nav6.svg" className="h-3" alt="Embedded Solution" />
              </div>
              Embedded Solution
            </Link>
          </li>
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
    <button className="border border-lightOrange p-2 px-5 py-2 rounded font-urbanist text-11.25 font-medium hover:text-white mt-4">
      Enquire Now
    </button>
  </Link>
</div>

    </nav>
  );
}

export default Navbar;