import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center">
      <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
        Get in Touch
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-xl mx-auto">
        I'd love to hear from you! Whether you have a project in mind, a question, or just want to connect.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg text-gray-800 dark:text-white">
        {/* Email */}
        <a
          href="mailto:himanshu.goyal1781@gmail.com"
          className="flex items-center gap-3 hover:text-indigo-500 transition"
        >
          <FaEnvelope />
          himanshu.goyal1781@gmail.com
        </a>

        {/* Phone */}
        <a
          href="tel:+917665754039"
          className="flex items-center gap-3 hover:text-indigo-500 transition"
        >
          <FaPhoneAlt />
          +91 7665754039
        </a>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center gap-6 text-2xl text-gray-700 dark:text-gray-300">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
