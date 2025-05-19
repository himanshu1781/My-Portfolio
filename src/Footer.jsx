import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side - Text */}
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Himanshu Goyal. All rights reserved.</p>
        </div>
        
        {/* Center - Links */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-gray-200 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Optional Right Side - Tagline */}
        <div className="text-center md:text-right text-sm italic">
          Crafted with 💖 by Himanshu
        </div>
      </div>
    </footer>
  );
}
