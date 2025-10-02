import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Me</h2>
        <p className="text-gray-700 mb-4">Feel free to reach out!</p>
        <p className="text-lg">📧 <a href="mailto:muzamilhussain369@gmail.com" className="text-blue-600">muzamilhussain369@gmail.com</a></p>
        <p className="text-lg">📞 0303-0458064</p>
        <p className="text-lg">🌐 <a href="#" className="text-blue-600">GitHub</a> | <a href="#" className="text-blue-600">LinkedIn</a></p>
      </div>
    </section>
  );
};

export default Contact;
