import React, { useState } from "react";
import logo from "/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white font-segoe relative z-10">
      <div className="flex items-center">
        
      <Link to="/"><img src={logo} alt="Logo" className="w-36 h-14 mx-4" /></Link>
      </div>

      <ul className="hidden md:flex items-center space-x-6 text-sm">
        <li className="hover:text-orange-500 p-2 cursor-pointer"><Link to="/">Home</Link></li>
        <li className="hover:text-orange-500 p-2  cursor-pointer"><Link to="/service">Services</Link></li>
        <li className="border rounded border-gray-800 border-opacity-80 text-orange-500 p-2 cursor-pointer">Products</li>
        <li className="hover:text-orange-500 p-2 cursor-pointer"><Link to="/career">Career</Link></li>
        <li className="hover:text-orange-500 p-2 cursor-pointer"><Link to="/contact">Contact Us</Link></li>
      </ul>

      <button className="hidden md:block border border-lightOrange p-2 px-5 py-3 font-urbanist text-11.25 font-medium mx-4 rounded hover:bg-orange-500 hover:text-white">
        Enquire Now
      </button>

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
        className={`absolute top-full left-0 right-0 bg-black text-white flex flex-col items-center py-4 md:hidden shadow-lg z-20 transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"} overflow-hidden`}
      >


        <ul className="flex flex-col items-center space-y-4">
        <li className="hover:text-orange-500 p-2  cursor-pointer "><Link to="/">Home</Link></li>
        <li className="hover:text-orange-500 p-2 cursor-pointer "><Link to="/service">Services</Link></li>
          <li className="border rounded border-gray-800 border-opacity-80 text-orange-500 p-2 cursor-pointer">Products</li>
          <li className="hover:text-orange-500 p-2 cursor-pointer"><Link to="/career">Career</Link></li>
          <li className="hover:text-orange-500 p-2 cursor-pointer"><Link to="/contact">Contact Us</Link></li>
        </ul>

        <button className="border border-lightOrange p-2 px-5 py-2 rounded font-urbanist text-11.25 font-medium hover:text-white mt-4">
          Enquire Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
