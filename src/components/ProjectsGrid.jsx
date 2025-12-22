import React from "react";
import projects from "../services/projects";
import ScrollReveal from "./ScrollReveal";

const ProjectsGrid = () => {
  return (
    <section className="max-w-[1638px] mx-auto px-6 md:px-16 py-10">
      <ScrollReveal direction="up">
        <h2 className="text-3xl font-bold mb-12 text-center">
          All Projects
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          // Card with fade-in and hover animations
          <ScrollReveal
            key={i}
            direction="up"
            delay={i * 100}
            className="bg-white border rounded-lg shadow hover:shadow-xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden group">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-gray-500 text-4xl font-bold opacity-20">{project.name[0]}</span>
                </div>
              )}

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold tracking-wider border border-[#b4f42c] px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
                  View Project
                </span>
              </div>
            </div>

            {/* Info below */}
            <div className="p-6 text-center relative z-10 bg-[var(--color-surface)]">
              <h3 className="text-xl font-bold text-gradient-static mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                {project.role} • {project.date}
              </p>

              {/* Button with animated gradient */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[var(--color-background)] rounded-full shadow-lg 
                           transition-all duration-300 hover:scale-105 hover:shadow-[#b4f42c]/20 button-gradient-animated"
              >
                Live Preview
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;