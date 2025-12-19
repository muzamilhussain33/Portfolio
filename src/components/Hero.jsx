import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#b4f42c] selection:text-black">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          {/* Logo - Styled to match the 'M' icon */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-white rounded-sm rotate-45"></div>
            <span className="relative z-10 font-bold text-xl">M</span>
          </div>
          <div>
            <h1 className="text-xl font-bold leading-none">Muzzamil Hussain</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Junior MERN Stack Developer</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-400">
          {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <button className="px-5 py-2 border border-[#b4f42c] text-[#b4f42c] rounded-md text-sm font-bold hover:bg-[#b4f42c] hover:text-black transition-all">
          Download Resume
        </button>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-6 md:px-16 pt-10 pb-20 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Side: Text */}
        <div className="z-20 w-full lg:w-1/2">
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

          <div className="flex items-center gap-5 mt-10">
            <button className="px-8 py-3.5 border-2 border-[#b4f42c] text-[#b4f42c] rounded-xl font-bold text-lg hover:bg-[#b4f42c] hover:text-black transition-all">
              View Projects
            </button>
            <button className="px-8 py-3.5 bg-[#b4f42c] text-black rounded-xl font-bold text-lg hover:brightness-110 transition-all">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-20 lg:mt-0">

          {/* Background Glow */}
          <div className="absolute w-[400px] h-[400px] bg-[#b4f42c] opacity-20 rounded-full blur-[120px]"></div>

          {/* The Green Circle Outline */}
          <div className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] border-[12px] border-[#b4f42c]/60 rounded-full"></div>

          {/* Custom Code Icons (SVGs for exact match) */}
          <div className="absolute top-10 left-10 md:left-20">
            <CodeIcon className="w-16 h-16 text-[#b4f42c] opacity-40 rotate-[-15deg]" />
          </div>
          <div className="absolute bottom-10 right-10 md:right-20">
            <CodeIcon className="w-16 h-16 text-[#b4f42c] opacity-40 rotate-[15deg]" />
          </div>

          {/* Profile Image (Replace with your actual PNG) */}
          <img
            src="https://via.placeholder.com/600x800" // Replace with your image link
            alt="Muzzamil Hussain"
            className="relative z-10 w-full max-w-[500px] object-contain drop-shadow-2xl"
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