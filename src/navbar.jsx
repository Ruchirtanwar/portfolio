// components/Navbar.jsx
import React, { useState } from "react";
import resumePDF from "./assets/resume.pdf"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a0a0a] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center text-sm font-semibold">
          <li>
            <a
              href="#aboutme"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href={resumePDF}
              download="Ruchir_Tanwarresume"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contactme">
              <button className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors duration-300">
                CONTACT ME
              </button>
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800">
          <ul className="flex flex-col gap-6 py-6 px-6 text-sm font-semibold">
            <li>
              <a
                href="#aboutme"
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href={resumePDF}
                download="Ruchir_Tanwarresume.pdf"
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contactme" onClick={() => setIsOpen(false)}>
                <button className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors duration-300 w-full">
                  CONTACT ME
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
