import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o9i4xss",      // Your Service ID
        "template_dy97l39",     // Replace with your Template ID
        form.current,
        "aHu0DrOUw02xJGvrt"       // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Oops! Something went wrong.");
        }
      );
  };

  return (
    
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex-1 bg-white rounded-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Me</h2>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-2 rounded h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
        {status && <p className="text-sm text-gray-700 mt-2">{status}</p>}
      </form>
  );
};

export default ContactForm;
