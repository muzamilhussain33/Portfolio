import React from "react";

const About = () => {
  return (
    <section id="about" className="max-w-[1638px] mx-auto px-6 py-16">
      <h2
        className="text-3xl font-bold mb-6 opacity-0 section-item-animate"
        style={{ animationDelay: '200ms' }}
      >
        <span className="text-gradient-animated">About Me</span>
      </h2>

      {/* Apply the new static gradient class to the paragraph */}
      <p
        className="text-lg leading-8 opacity-0 section-item-animate text-gradient-paragraph"
        style={{ animationDelay: '400ms' }}
      >
        I’m a BSCS student at the University of Sahiwal with hands-on experience in full-stack development.
        My expertise lies in building scalable frontend applications using React.js, Next.js, and Tailwind CSS,
        while also having a solid foundation in backend development with Node.js and Express.js.
        I’ve deployed applications on Vercel, Netlify, AWS EC2, and Azure.
        Recently, I’ve been exploring mobile development with React Native and advancing my knowledge in cybersecurity.
      </p>
    </section>
  );
};

export default About;