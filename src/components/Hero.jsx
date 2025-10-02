import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100" id="home">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-blue-700">Hi, I'm Muzamil Hussain</h2>
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Junior MERN Stack Developer | React.js | Next.js | Node.js
      </p>
      <div className="space-x-4">
        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">View Projects</a>
        <a href="#contact" className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300">Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;
