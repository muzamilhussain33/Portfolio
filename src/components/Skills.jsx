import React from "react";

const skills = [
  "React.js", "Next.js", "Tailwind CSS", "Bootstrap", 
  "Node.js", "Express.js", "Redux Toolkit", "React Query", 
  "React Native", "AWS EC2", "Azure", "Git/GitHub"
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <span key={i} className="px-4 py-2 bg-white border rounded-lg shadow text-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
