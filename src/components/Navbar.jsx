import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow shadow-blue-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center shadow shadow-blue-200 md:shadow-none">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Muzamil Hussain</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#education" className="hover:text-blue-600">Education</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative w-8 h-6 flex flex-col justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ${
              isOpen ? "rotate-60 translate-y-3" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ${
              isOpen ? "-rotate-60 -translate-y-3" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#education" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Education</a></li>
          <li><a href="#contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
