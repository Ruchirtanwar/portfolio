// components/Navbar.jsx
import React from "react";
import resumePDF from "../src/assets/resume.pdf"; // adjust path if needed

const Navbar = () => {
  return (
    <nav className="bg-[#0a0a0a] text-white py-4 px-8 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">Portfolio</div>

      <ul className="flex gap-10 items-center text-sm font-semibold">
        <li>
          <a
            href="#aboutme"
            className="transition-colors duration-300 ease-in-out hover:text-gray-400"
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="#Skills"
            className="transition-colors duration-300 ease-in-out hover:text-gray-400"
          >
            Skills
          </a>
        </li>
        <li>
          <a
           href={resumePDF}
            download="Ruchir_Tanwarresume.pdf"
            className="transition-colors duration-300 ease-in-out hover:text-gray-400"
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
    </nav>
  );
};

export default Navbar;
