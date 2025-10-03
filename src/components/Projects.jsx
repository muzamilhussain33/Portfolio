import ProjectsGrid from "./ProjectsGrid";
import projects from "../services/projects";

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      {/* --- Timeline View --- */}
      <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">
        Projects Timeline
      </h2>

      <div className="relative mb-20">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full hidden md:block"></div>

        {[...projects].reverse().map((project, i) => (
          <div
            key={i}
            className={`mb-12 flex w-full ${
              i % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } justify-center`}
          >
            {/* Card */}
            <div
              className={`relative w-full md:w-5/12 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition`}
            >
              {/* Circle indicator */}
              <span
                className={`absolute top-6 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow shadow-blue-600 
                  hidden md:block 
                  ${i % 2 === 0 ? "-right-12 md:-right-3 " : "-left-12 md:-left-3"}`}
              ></span>

              {/* On mobile, show dot inside */}
              <span className="md:hidden flex items-center justify-center mb-4">
                <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
              </span>

              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-2">{project.desc}</p>
              <p className="text-sm text-gray-500 mb-1">Role: {project.role}</p>
              <p className="text-sm text-gray-500 mb-3">
                <span className="font-semibold">Duration:</span> {project.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* --- Grid View --- */}
      <ProjectsGrid />
    </section>
  );
};

export default Projects;
