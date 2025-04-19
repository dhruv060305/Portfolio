import React from 'react'
import Particles from './Effects/Particles';



const Projectdata = [
  {
    title: "Amazon Clone",
    description: "This is the first project.",
    video: "src/Assets/Clone.mp4",
    link: "https://github.com/dhruv060305/Amazon.clon.git"
  },
  {
    title: "Bank Management System",
    description: "This is my 1st Backend Project. With Chatbot ",
    video: "src/Assets/BMS.mp4",
    link: "https://github.com/dhruv060305/Bank-Managment-System.git"
  },
  {
    title: "MediShare",
    description: "This is my Hackathon Project Currently Wotking on It. With Chatbot ",
    video: "src/Assets/MediShare.mp4",
    link: "https://github.com/dhruv060305/MediShare.git"
  }
]


export default function Project() {



  return (
    <div className="relative w-full min-h-screen bg-black pt-15 text-white overflow-x-hidden">
      {/* Particle canvas behind everything */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Particles
          className="w-full h-screen"
          particleColors={["#ffffff", "#00ffff", "#ff00ff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={150}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className='w-full h-full flex flex-col items-center justify-start'>

        <div className="relative z-10 flex flex-col items-center py-16 px-4">
          <h2 className="text-3xl font-bold mb-10">My Projects</h2>

          <div className="flex flex-wrap gap-8 justify-center">
            {Projectdata.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-2xl p-4 w-80 shadow-lg transition-transform hover:scale-105"
              >
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={project.video}
                  className="rounded-md mb-4 w-full"
                />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>



      </div>

    </div>
  )
}
