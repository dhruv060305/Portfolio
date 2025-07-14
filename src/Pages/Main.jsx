import React from 'react';
import { Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

export default function Main() {
  return (
    <>
      {/* Inline CSS keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
        `}
      </style>

      <section id="home" className="min-h-screen bg-[#000000] text-white flex items-start justify-center px-4">
        <div className="mt-20 max-w-4xl w-full">

          <h1
            className="text-4xl md:text-7xl font-extralight"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              animationDelay: '0.2s',
              opacity: 0,
              fontFamily: 'Bebas Neue',
            }}
          >
            I'm
          </h1>

          <h1
            className="text-6xl md:text-9xl text-yellow-300"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              animationDelay: '0.6s',
              opacity: 0,
              fontFamily: 'Bebas Neue',
            }}
          >
            Dhruv Taraviya
          </h1>

          <h1
            className="text-4xl md:text-7xl font-extralight mt-2"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              animationDelay: '1s',
              opacity: 0,
              fontFamily: 'Bebas Neue',
            }}
          >
            A{' '}
            <mark className="bg-yellow-300 text-black px-1 font-normal not-italic">
              Frontend
            </mark>{' '}
            Developer
          </h1>

          <h1
            className="text-2xl md:text-4xl font-extralight mt-5"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              animationDelay: '1.4s',
              opacity: 0,
              fontFamily: 'Bebas Neue',
            }}
          >
            based In Mumbai
          </h1>

          {/* Social Icons */}
          <div
            className="flex justify-start mt-5 gap-6 pt-2 text-white"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              animationDelay: '1.8s',
              opacity: 0,
            }}
          >
            <a
              href="https://github.com/dhruv060305"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:dhruvtaraviya1@gmail.com"
              className="hover:text-gray-300"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Down */}
          <div
            className="flex flex-col items-center mt-10 animate-bounce"
            style={{
              animationDelay: '2.2s',
              animation: 'bounce 2s infinite',
            }}
          >
            <p className="text-sm text-gray-400 mb-1">Know me more</p>
            <ChevronDown className="text-gray-400" size={24} />
          </div>

        </div>
      </section>
    </>
  );
}
