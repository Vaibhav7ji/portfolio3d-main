import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: 'Event Manager',
    description: 'An intuitive event planning platform for managing schedules, RSVPs, and updates seamlessly in real time.',
    link: 'https://github.com/vaibhavj34/event-manager',
    tech: ["React", "NodeJS", "Tailwind", "Express", "MongoDB"],
    modelUrl: '/3d/event-model.glb',
    
  },
  {
    name: 'Codecaze: The Learning Platform',
    description: 'Interactive platform offering coding lessons, quizzes, and projects to help students upskill efficiently.',
    link: 'https://github.com/your-username/codecaze',
    tech: ["React", "NodeJS", "Tailwind", "Express", "MongoDB"," ThreeJS"],
    modelUrl: '/3d/code-model.glb',
  },
  {
    name: 'Baytalhusn',
    description: 'A culturally resonant cosmetic e-commerce brand designed for Arabic markets with a unique personalized skincare quiz.',
    link: 'https://baytalhusn.myshopify.com/',
    tech: ["Liquid", "javascript", "html", "wordpress", "MongoDB"," wordpress"],
    modelUrl: '/3d/beauty-model.glb',
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen py-16 px-6 text-white relative overflow-hidden bg-black">
  {/* Animated lighting background */}
  <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-black bg-opacity-60 backdrop-blur-sm"></div>
    <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600 opacity-30 blur-3xl rounded-full animate-pulse"></div>
    <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500 opacity-20 blur-2xl rounded-full animate-ping"></div>
    <div className="absolute top-10 right-10 w-60 h-60 bg-pink-500 opacity-20 blur-2xl rounded-full animate-pulse"></div>
  </div>
      {/* Floating Diamond Animation */}
      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2 z-0"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <model-viewer
          src="/models/diamond.glb"
          alt="Floating Diamond"
          auto-rotate
          camera-controls
          disable-zoom
          className="w-28 h-28 pointer-events-none"
        ></model-viewer>
      </motion.div>

      <h2 className="text-4xl font-bold mb-12 text-center relative z-10">
        My Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transform transition-all duration-300 p-4 border border-gray-700 hover:border-blue-400"
          >
            <model-viewer
              src={project.modelUrl}
              alt={`${project.name} 3D model`}
              auto-rotate
              camera-controls
              className="w-full h-64 bg-black rounded-lg mb-4"
              style={{ pointerEvents: "none" }}
            ></model-viewer>

            <div>
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:underline"
              >
                View Project <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;