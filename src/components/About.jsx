import React from "react";
import ScrollReveal from "./ScrollReveal";

const About = () => {
  return (
    <section id="about" className="bg-[var(--color-surface)] py-16">
      <div className="max-w-[1638px] mx-auto px-6 md:px-16">
        <ScrollReveal direction="left">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-gradient-animated">About Me</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={200}>
          <p className="text-lg leading-8 text-gradient-paragraph">
            I’m a BSCS student at the University of Sahiwal with hands-on experience in full-stack development.
            My expertise lies in building scalable frontend applications using React.js, Next.js, and Tailwind CSS,
            while also having a solid foundation in backend development with Node.js and Express.js.
            I’ve deployed applications on Vercel, Netlify, AWS EC2, and Azure.
            Recently, I’ve been exploring mobile development with React Native and advancing my knowledge in cybersecurity.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;