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

export default function About() {
  const skills = [
    {
      icon: '⚛️',
      title: 'React',
      desc: 'Builds modern, scalable UIs using component-based architecture and React Hooks.',
    },
    {
      icon: '🌐',
      title: 'HTML',
      desc: 'Semantic, accessible structure with clean code practices for web standards.',
    },
    {
      icon: '🎨',
      title: 'CSS',
      desc: 'Pixel-perfect styling, responsive layouts, flex/grid, animations, and effects.',
    },
    {
      icon: '💨',
      title: 'Tailwind CSS',
      desc: 'Utility-first design system with fast prototyping and custom themes.',
    },
    {
      icon: '☕',
      title: 'Java',
      desc: 'Object-oriented programming skills used in core logic and backend systems.',
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-yellow-300 text-black px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Title and Intro */}
        <FadeInOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue' }}>About Me</h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <p className="text-lg md:text-xl leading-relaxed mb-16" style={{ fontFamily: 'Bebas Neue' }}>
            I’m Dhruv Taraviya — a frontend developer with a passion for crafting clean, user-focused web experiences.
            I focus on performance, accessibility, and responsive design to deliver elegant and functional UIs.
          </p>
        </FadeInOnScroll>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <FadeInOnScroll delay={0.3 + i * 0.1} key={i}>
              <div className="bg-black text-white p-6 rounded-xl shadow-lg text-center h-full hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm">{skill.desc}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
