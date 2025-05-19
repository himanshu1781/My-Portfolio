import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from './assets/profile.png'; // Make sure the image is correctly placed

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center md:gap-6 px-4 py-12 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-black">
      
      {/* Left Text Section */}
      <div className="text-center md:text-left md:w-[48%]">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Hi, I'm Himanshu
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          <Typewriter
            words={['Web Developer 💻', 'ML Enthusiast 🤖', 'Problem Solver 🧠']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a href="#projects" className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition transform hover:scale-105">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-100 transition transform hover:scale-105">
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Avatar Section */}
      <div className="md:w-[40%] mb-10 md:mb-0 flex justify-center">
        <img
          src={profileImage}
          alt="Himanshu profile"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-indigo-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition duration-300 animate-[float_3s_ease-in-out_infinite]"
        />
      </div>

      {/* Optional Scroll Down Indicator */}
      <div className="absolute bottom-6 w-full text-center animate-bounce text-gray-400 dark:text-gray-500">
        ↓ Scroll Down
      </div>
    </section>
  );
}
