import React, { useState, useEffect } from "react";

// An array of titles to cycle through
const titles = [
  "Muzamil Hussain",
  "a MERN Stack Developer",
  "a React.js Expert",
  "a Lifelong Learner",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  // The typing effect logic
  useEffect(() => {
    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      } else {
        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev - 1);
          setText(titles[index].substring(0, subIndex - 1));
        }, 80); // Deleting speed
        return () => clearTimeout(timeout);
      }
    } else {
      if (subIndex === titles[index].length) {
        const pause = setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        return () => clearTimeout(pause);
      } else {
        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev + 1);
          setText(titles[index].substring(0, subIndex + 1));
        }, 120); // Typing speed
        return () => clearTimeout(timeout);
      }
    }
  }, [subIndex, isDeleting, index]);

  return (
    <section
      className="h-[800px] flex flex-col justify-center items-center p-6 md:px-16 animated-background"
      id="home"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 mx-auto lg:px-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          {/* MODIFIED h2 ELEMENT */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4
                       opacity-0 animate-on-load text-gradient-animated-hero" // Removed old text color, added new gradient class
            style={{ animationDelay: '100ms' }}
          >
            Hi, I'm <span className="text-gradient-animated-hero">{text}</span><span className="blinking-cursor">|</span>
          </h2>
          {/* ... (the rest of your component remains the same) ... */}
          <p
            className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] mb-6
                       opacity-0 animate-on-load"
            style={{ animationDelay: '300ms' }}
          >
            Junior MERN Stack Developer | React.js | Next.js | Node.js
          </p>
          <div
            className="flex flex-col text-[14px] lg:text-[16px] sm:flex-row gap-4 sm:space-x-4 justify-center md:justify-start
                       opacity-0 animate-on-load"
            style={{ animationDelay: '500ms' }}
          >
            <a
              href="#projects"
              className="px-6 py-3 button-gradient-animated text-[var(--color-background)] rounded-lg shadow hover:bg-[var(--color-primary)]/80 text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-lg shadow hover:bg-[var(--color-surface)]/80 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="flex-1 flex justify-center 
                     opacity-0 animate-on-load"
          style={{ animationDelay: '700ms' }}
        >
          <div className="w-60 h-60 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:h-90 lg:w-90 rounded-full overflow-hidden shadow-lg border-4 border-[var(--color-primary)] image-glow">
            <img
              src="https://avatars.githubusercontent.com/muzamilhussain33"
              alt="Muzamil Hussain"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;