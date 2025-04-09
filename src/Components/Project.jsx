import React from 'react'
import Particles from './Effects/Particles';


export default function Project() {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
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
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold'>Projects</h1>
        <p className='text-2xl'>Coming Soon...</p>
      </div>
    </div>
  )
}
