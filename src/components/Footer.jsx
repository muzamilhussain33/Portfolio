import React from "react";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { Twitter, Instagram } from "lucide-react";
import projects from "../services/projects";
import logo from "../assets/images/logo.png";

const Footer = () => {
  // Get the last two projects (latest)
  const latestProjects = projects.slice(-2);

  return (
    <footer className="bg-[var(--color-surface)] text-[var(--color-text-primary)]">
      <div className="max-w-[1638px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.5fr] gap-12">

        {/* Left Section */}
        <div
          className="flex flex-col items-center md:items-start text-center md:text-left 
                     opacity-0 section-item-animate"
          style={{ animationDelay: '100ms' }}
        >
          <a href="/">
            <h1 className="flex items-center">
              <img src={logo} className="w-[85px] h-[40px]" alt="logo" />
              <span className="flex flex-col">
                <h3 className="xl:text-[26px] text-[26px] lg:text-[16px] font-[600] font-[Poppins]">Muzamil Hussain</h3>
                <p className="xl:text-[11px] lg:text-[9px] text-[11px] font-[400] font-[Poppins] text-[var(--color-primary)]">Junior MERN Stack Developer</p>
              </span>

            </h1>
          </a>
          <p className="mt-2 text-[var(--color-text-secondary)] max-w-xs">
            Crafting clean and modern web experiences with passion. Always learning and building.
          </p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a href="https://tiktok.com/@muzamilcreates" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full skill-tag-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:text-[var(--color-primary)]">
              <FaTiktok className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/muzamilhussain" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full skill-tag-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:text-[var(--color-primary)]">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full skill-tag-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:text-[var(--color-primary)]">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/muzamilcreates?igsh=bWc4eWltc3E5aXpi" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full skill-tag-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:text-[var(--color-primary)]">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Middle Section - Menu */}
        <div
          className="flex flex-row flex-wrap justify-center lg:flex-col lg:justify-start items-center pr-20 text-[14px] 
                     opacity-0 section-item-animate order-last lg:order-none gap-6 lg:gap-0"
          style={{ animationDelay: '300ms' }}
        >
          <h3 className="text-xl font-semibold mb-4 text-gradient-static w-full lg:w-auto text-center ">Menu</h3>
          {/* --- Change #1: Added hover-text-gradient to menu links --- */}
          <a href="#projects" className="md:mb-2 text-[var(--color-text-secondary)] hover:underline transition-transform hover:-translate-y-1 hover-text-gradient">Projects</a>
          <a href="#experience" className="md:mb-2 text-[var(--color-text-secondary)] hover:underline transition-transform hover:-translate-y-1 hover-text-gradient">Experience</a>
          <a href="#education" className="md:mb-2 text-[var(--color-text-secondary)] hover:underline transition-transform hover:-translate-y-1 hover-text-gradient">Education</a>
          <a href="#contact" className="md:mb-2 text-[var(--color-text-secondary)] hover:underline transition-transform hover:-translate-y-1 hover-text-gradient">Contact</a>
        </div>

        {/* Right Section - Latest Projects */}
        <div
          className="flex flex-col items-center md:items-start text-center md:text-left 
                     opacity-0 section-item-animate"
          style={{ animationDelay: '500ms' }}
        >
          <h3 className="text-xl font-semibold mb-4 text-gradient-static">Latest Projects</h3>
          <div className="space-y-4 w-full">
            {latestProjects.slice().reverse().map((project, i) => (
              <div
                key={i}
                className="flex flex-row gap-4 items-center text-start group opacity-0 section-item-animate"
                style={{ animationDelay: `${600 + i * 150}ms` }}
              >
                <img
                  className="w-24 h-16 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                  src={project.image}
                  alt={project.name}
                />
                <div>
                  {/* --- Change #2: Added hover-text-gradient to project titles --- */}
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="block hover:underline font-bold text-[var(--color-text-primary)] hover-text-gradient">
                    {project.name}
                  </a>
                  <p className="text-[14px] text-[var(--color-text-secondary)]">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div
        className="text-center bg-[var(--color-background)] text-[var(--color-text-secondary)] text-sm py-4
                   opacity-0 section-item-animate"
        style={{ animationDelay: '800ms' }}
      >
        © {new Date().getFullYear()} Copyright Muzamil Hussain. | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;