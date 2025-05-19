import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

// Navbar component
function Navbar({ toggleDarkMode, isDark }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 dark:text-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:glow">Himanshu Goyal</h1>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl focus:outline-none">
          ☰
        </button>

        <ul className={`md:flex gap-6 items-center ${isOpen ? 'block mt-4 md:mt-0' : 'hidden'} md:block`}>
          <li><a href="#hero" className="hover:text-indigo-500 transition">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-500 transition">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-500 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-500 transition">Contact</a></li>
          <li>
            <button
              onClick={toggleDarkMode}
              className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
              title="Toggle Theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <div className="font-sans bg-white dark:bg-gray-950 dark:text-white">
      <Navbar toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}
