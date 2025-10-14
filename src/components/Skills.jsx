import React, { useState, useEffect } from "react";
import { mainSkills } from "../services/skills";
import { otherSkills } from "../services/skills";

const ProgressBar = ({ level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, 300); 

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
      <div
        className="h-3 rounded-full transition-all duration-1000 ease-out 
                   bg-gradient-to-r from-blue-500 to-purple-600"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};


const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Change #1: Removed 'text-center' to align left */}
        <h2 
          className="text-3xl font-bold mb-10 opacity-0 section-item-animate text-gradient-animated"
          style={{ animationDelay: '100ms' }}
        >
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {mainSkills.map((skill, i) => (
            <div 
              key={i} 
              className="w-full opacity-0 section-item-animate"
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-gray-800 font-medium">{skill.name}</span>
                {/* Change #2: Added gradient to percentage text */}
                <span className="text-gradient-static">{skill.level}%</span>
              </div>
              
              <ProgressBar level={skill.level} />

            </div>
          ))}
        </div>

        <div className="mt-16">
          {/* Change #3: Added animated gradient to 'Other Skills' heading */}
          <h3 
            className="text-2xl font-semibold mb-4 opacity-0 section-item-animate text-gradient-animated"
            style={{ animationDelay: '800ms' }}
          >
            Other Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border rounded-lg shadow text-gray-700 hover:bg-blue-50 transition opacity-0 section-item-animate"
                style={{ animationDelay: `${900 + i * 75}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;