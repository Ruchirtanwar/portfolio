// components/Footer.jsx
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#151515] text-white text-center py-10">
      <button onClick={scrollToTop} className="flex flex-col items-center gap-1 mb-6">
        <span className="text-white text-sm">⮝</span>
        <span className="text-sm font-semibold tracking-widest">BACK TO TOP</span>
      </button>

      <div className="flex justify-center gap-6 text-xl mb-6">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="border p-2 hover:opacity-70">
          <FaFacebookF />
        </a>
        <a href="www.linkedin.com/in/ruchir-tanwar" target="_blank" rel="noreferrer" className="border p-2 hover:opacity-70">
          <FaLinkedinIn />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="border p-2 hover:opacity-70">
          <FaInstagram />
        </a>
        <a href="mailto:tanwarrt114123@gmail.com" className="border p-2 hover:opacity-70">
          <FaEnvelope />
        </a>
      </div>

   
    </footer>
  );
};

export default Footer;
