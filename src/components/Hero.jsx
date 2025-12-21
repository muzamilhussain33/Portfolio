import React from 'react';
import Navbar from './Navbar';
import tagimg from '../assets/Hero/tag.png'
import myImag from "../assets/Hero/man.png"

const HeroSection = () => {
  return (
    <div className="">
      <Navbar />
      {/* Main Content */}
      <main className="min-h-[905px] max-w-[1638px] mx-auto px-6 md:px-16 mt-30 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 ">
          <h1 className="text-7xl md:text-8xl font-black tracking-tight leading-[0.9]">
            Programmar
          </h1>
          <div className="flex items-center gap-4 mt-2">
            <h2 className="text-7xl md:text-8xl font-black text-[#b4f42c] tracking-tight leading-[0.9]">
              Full Stack
            </h2>
            {/* Junior Tag */}
            <div className="bg-[#3e4d15] px-3 py-1 rounded-full self-center mt-2 border border-[#b4f42c]/30">
              <span className="text-[#b4f42c] text-[10px] font-bold uppercase tracking-tighter">Junior</span>
            </div>
          </div>

          <p className="mt-8 text-lg md:text-xl text-gray-300 font-medium">
            Junior MERN Stack Developer | React.js | Next.js | Node.js
          </p>

          <div className="flex items-center gap-5 mt-10 text-[26px] w-[442px] h-[70px]">
            <button className="w-[50%] h-full border-2 border-[#b4f42c] text-[#b4f42c] rounded-xl font-bold hover:bg-[#b4f42c] hover:text-black transition-all duration-200 ease-in-out" onClick={() => window.location.href = '#projects'}>
              View Projects
            </button>
            <button className="w-[50%] h-full bg-[#b4f42c] text-black rounded-xl font-bold hover:brightness-110 hover:bg-[var(--color-text-primary)] transition-all duration-200 ease-in-out" onClick={() => window.location.href = '#contact'}>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative h-[837px] w-[809px] flex justify-center items-center">
          <div className="absolute top-10 left-5 md:left-5">
            {/* <CodeIcon className="w-16 h-16 text-[#b4f42c] opacity-40" /> */}
            <img src={tagimg} className='w-[160px] h-[139px]' alt="" />
          </div>
          {/* Background Glow */}
          <div className="absolute w-[157px] h-[164px]  bg-black rounded-full blur-[120px] custom-shadow"></div>

          {/* The Green Circle Outline */}
          <div className="absolute w-[615px] h-[689px] border-[35px] border-[#b4f42c]/60 rounded-full"></div>

          {/* Custom Code Icons (SVGs for exact match) */}

          <div className="absolute bottom-10 right-5">
            <img src={tagimg} className='w-[160px] h-[139px]' alt="" />
          </div>

          {/* Profile Image (Replace with your actual PNG) */}
          <img
            src={myImag}
            alt="Muzzamil Hussain"
            className="relative z-10 w-full max-w-[809px] h-[837px] object-contain drop-shadow-2xl"
          />
        </div>

      </main>
    </div>
  );
};

// Helper component for the specific </ title> icon style
const CodeIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

export default HeroSection;