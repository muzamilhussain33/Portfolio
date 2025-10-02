import React from "react";

const projects = [
  {
    name: "Sublet",
    desc: "Rental marketplace app built in React Native. Implemented Redux, image upload, and deployed backend on Azure + S3.",
    tech: "React Native, Redux, Node.js, Azure, AWS S3",
    link: "#"
  },
  {
    name: "Inzaar LMS",
    desc: "Learning Management System with Next.js frontend and React.js dashboards.",
    tech: "Next.js, React.js, Tailwind CSS",
    link: "#"
  },
  {
    name: "Patient Appointment System",
    desc: "React-based app for managing appointments and scheduling.",
    tech: "React.js, Node.js, Express",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-2">{project.desc}</p>
            <p className="text-sm text-gray-500">Tech: {project.tech}</p>
            <a href={project.link} className="text-blue-600 hover:underline text-sm mt-2 inline-block">View More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
