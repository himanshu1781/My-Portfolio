import React from 'react';
import { FaMusic, FaCloudSun, FaRobot } from 'react-icons/fa';

const projects = [
  {
    name: "Music Web",
    description: "Responsive music website using HTML, CSS, and JavaScript with smooth playback and hosting.",
    link: "https://himanshu1781.github.io/Music-web/",
    icon: <FaMusic className="text-4xl text-indigo-500" />,
  },
  {
    name: "Weather App",
    description: "Weather app with real-time data using public API, clean UI, and responsive design.",
    link: "https://himanshu1781.github.io/weather-app/",
    icon: <FaCloudSun className="text-4xl text-yellow-400" />,
  },
  {
    name: "Automated Grading System (LSTM)",
    description: "Uses LSTM and XAI for accurate, explainable grading in an educational setting.",
    link: "#",
    icon: <FaRobot className="text-4xl text-purple-500" />,
  },
];

export default function Projects() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800 dark:text-white animate-fade-in">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center hover:-translate-y-1 animate-fade-in-slow"
          >
            <div className="mb-4 flex justify-center">{project.icon}</div>
            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Live Demo →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
