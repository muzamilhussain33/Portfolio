import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Work Experience</h2>
        <div className="bg-white p-6 border rounded-lg shadow">
          <h3 className="text-xl font-semibold">Junior Developer – Success Sahiwal Community</h3>
          <p className="text-sm text-gray-500">March 2025 – Present</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Collaborated in a team environment on real-world projects.</li>
            <li>Worked on frontend development with React.js and Next.js.</li>
            <li>Integrated APIs and deployed apps on cloud platforms.</li>
            <li>Improved debugging and performance optimization in live apps.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
