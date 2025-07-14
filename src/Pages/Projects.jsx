import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInOnScroll = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: false });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      name: 'Recipe Finder',
      tech: ['React', 'Edamam API', 'Tailwind CSS'],
      live: 'https://dhruv060305.github.io/Recipe-Finder/',
      github: 'https://github.com/dhruv060305/Recipe-Finder',
    },
    {
      name: 'Bank Management System',
      tech: ['Java', 'Swing', 'MySQL'],
      github: 'https://github.com/dhruv060305/Bank-Managment-System',
    },
    {
      name: '3D Solar System',
      tech: ['React', 'Three.js', 'Vite'],
      github: 'https://github.com/dhruv060305/3-D-Solar-System',
    },
    {
      name: 'MediShare',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/dhruv060305/MediShare',
    },
    {
      name: 'Multiuser Chat App',
      tech: ['Java', 'Swing', 'Socket.IO', 'MongoDB'],
      github: 'https://github.com/dhruv060305/Multiuser-Chat-Application',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-5xl md:text-6xl font-[Cinzel] tracking-wide mb-16 text-center border-b border-gray-700 pb-4">
            PROJECTS
          </h2>
        </FadeInOnScroll>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeInOnScroll delay={0.2 + index * 0.1} key={index}>
              <div className="border border-gray-700 p-6 rounded-xl hover:bg-white hover:text-black transition duration-300">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>

                <p className="text-sm text-gray-300 mb-4 flex flex-wrap gap-2">
                  {project.tech.map((item, idx) => (
                    <mark
                      key={idx}
                      className="bg-yellow-300 text-black px-2 py-0.5 rounded text-xs"
                    >
                      {item}
                    </mark>
                  ))}
                </p>

                <div className="flex gap-4 text-sm flex-wrap items-center">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-400"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-400"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </FadeInOnScroll>
          ))}

          {/* Just Text: View More Projects */}
          <FadeInOnScroll delay={0.2 + projects.length * 0.1}>
            <div className="flex items-center justify-end px-4 md:px-6">
              <a
                href="https://github.com/dhruv060305?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-blue-400 text-sm md:text-base"
              >
                → View More Projects
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
