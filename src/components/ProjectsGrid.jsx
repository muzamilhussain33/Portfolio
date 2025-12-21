import React from "react";
import projects from "../services/projects";

const ProjectsGrid = () => {
  return (
    <section className="max-w-[1638px] mx-auto px-6 md:px-16 py-10">
      <h2
        className="text-3xl font-bold mb-12 text-center opacity-0 section-item-animate text-gradient-animated"
        style={{ animationDelay: '100ms' }}
      >
        All Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          // Card with fade-in and hover animations
          <div
            key={i}
            className="bg-white border rounded-lg shadow hover:shadow-xl overflow-hidden
                       opacity-0 section-item-animate hover:-translate-y-1 transition-all duration-300"
            style={{ animationDelay: `${200 + i * 150}ms` }}
          >
            {/* Project live embed with forced desktop view */}
            <div className="relative h-48 overflow-hidden iframe-wrapper">
              <iframe
                src={project.live}
                title={project.name}
                className="iframe-desktop"
                sandbox="allow-scripts allow-same-origin"
                loading="lazy"
              ></iframe>
            </div>

            {/* Info below */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gradient-static">
                {project.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {project.role} • {project.date}
              </p>
              {/* Button with animated gradient */}
              <a
                href={project.link}
                className="inline-block mt-4 px-4 py-2 text-sm text-white rounded-lg shadow 
                           transition hover:scale-105 button-gradient-animated"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Styles for desktop view */}
      <style jsx>{`
        .iframe-wrapper {
          overflow: auto; /* enable scroll inside */
        }

        .iframe-desktop {
          width: 1400px;       /* force desktop width */
          height: 900px;       /* large desktop height */
          border: 0;
          overflow: hidden;
          transform: scale(0.25); /* shrink to fit container */
          transform-origin: top left;
          pointer-events: auto; /* allow scrolling & clicks */
          display: block;
        }
      `}</style>
    </section>
  );
};

export default ProjectsGrid;