import React from "react";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"; // lucide icons for social links

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-400 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">

        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/profile.jpg" // replace with your image path
            alt="Muzamil Hussain"
            className="w-20 h-20 rounded-full mb-4 border-2 border-white shadow-lg"
          />
          <h2 className="text-2xl font-bold">Muzamil Hussain</h2>
          <p className="mt-2 text-gray-200 max-w-xs">
            Crafting clean and modern web experiences with passion. Always learning and building. 🚀
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
          <p className="flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4" /> 
            <a href="mailto:muzamilhussain369@gmail.com" className="hover:underline">muzamilhussain369@gmail.com</a>
          </p>
          <p className="flex items-center gap-2 mb-2">
            <Phone className="w-4 h-4" /> 0303-0458064
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 justify-center md:justify-end">
            <a href="https://github.com/muzamilhussain369" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/muzamilhussain" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/muzamilhussain" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} Muzamil Hussain. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
