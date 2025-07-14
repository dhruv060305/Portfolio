import React from 'react';
import { Github, Mail, MapPin, FileDown, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-yellow-300 text-black px-6 py-20 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide font-[Cinzel]">
          Let's Connect
        </h2>

        <p className="text-lg md:text-xl font-light">
          Have a question, collaboration idea, or just want to say hi? I'd love to hear from you.
        </p>

        <div className="text-left space-y-4 text-base md:text-lg">
          <div className="flex items-center gap-3">
            <Mail size={20} />
            <span>
              <strong>Email:</strong>{' '}
              <a href="mailto:dhruvtaraviya1@gmail.com" className="underline">
                dhruvtaraviya1@gmail.com
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={20} />
            <span>
              <strong>Location:</strong> Mumbai, India
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Github size={20} />
            <span>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/dhruv060305"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                github.com/dhruv060305
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Linkedin size={20} />
            <span>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://linkedin.com/in/dhruv-taraviya-103010349" // 👉 Replace with your LinkedIn username
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                linkedin.com/in/dhruv-taraviya-103010349
              </a>
            </span>
          </div>
        </div>

        <div className="pt-6">
          <a
            href="/Resume.pdf" // 👉 Place your resume in the public/ folder
            download
            className="inline-flex items-center gap-2 bg-black text-yellow-300 px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            <FileDown size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
