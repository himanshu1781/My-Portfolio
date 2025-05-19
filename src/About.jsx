import React from 'react';

export default function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition duration-300">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Emoji Avatar */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 shadow-xl mb-6 flex items-center justify-center text-white text-5xl">
          👨‍💻
        </div>

        {/* Section Title */}
        <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
          About Me
        </h2>

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full mb-6 animate-pulse"></div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
          I'm a <span className="font-semibold">B.Tech Computer Science</span> student at <span className="font-semibold">GGSIPU</span>, passionate about
          <span className="text-indigo-600 font-semibold"> web development</span>,
          <span className="text-purple-600 font-semibold"> problem solving</span>, and diving into
          <span className="text-pink-600 font-semibold"> AI/ML</span>. I love turning ideas into
          interactive web apps and constantly exploring new technologies to sharpen my skills and creativity.
        </p>
      </div>
    </section>
  );
}

