import React from 'react';
import Particles from './Effects/Particles';
import DecryptedText from './Effects/DecryptedText';
import TiltedCard from './Effects/TiltedCard';
import RotatingText from './Effects/RotatingText'
import PP from '../Assets/PP.jpg'
import { motion } from 'framer-motion';

const timeline = [
    { year: "2022", text: " Started Learning HTML/CSS/JS" },
    { year: "2023", text: "Started Built React apps, explored React" },
    { year: "2024", text: "Started Building Front-End Sites" },
    { year: "2025", text: "Explored Node.js " },
];


export default function Home() {
    return (
        <div className="relative w-full min-h-screen bg-black pt-10 text-white overflow-x-hidden">

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

            <div className=" w-auto h-60 mt-20 border-r-2 md:flex justify-evenly items-center ">


                {/* Centered text in front */}
                <div className=" w-auto h-full flex flex-col justify-center items-center z-10">
                    <DecryptedText
                        
                        text="Hi I'm Dhruv"
                        animateOn="view"
                        revealDirection="start"
                        sequential
                        className="text-6xl font-bold text-green-400"
                        encryptedClassName="opacity-50"
                        parentClassName="text-center"
                    />
                    <br />
                    <div className='flex flex-col justify-start items-center'>


                        <div className='flex flex-row justify-start items-center'>
                            <p className='mr-5 text-4xl'>I'm a</p>
                            <RotatingText
                                texts={['Frontend Devloper', 'Backend Developer']}
                                mainClassName="px-2 font-bold sm:px-2 md:px-3 bg-cyan-300 h-10 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                        </div>

                        <div className='h-auto w-90 mt-5 mb-5 flex justify-start items-center '>

                            <DecryptedText
                                text="🛠️ Skilled in React, JavaScript, and Tailwind — currently building cool stuff in Front-end and Exploring Unity-6.
🎯 Always up for turning ideas into clean, functional code."
                                animateOn="view"
                                speed="10"
                                revealDirection="start"
                                sequential
                                className="font-bold text-wrap text-black-400"
                                encryptedClassName="text-wrap opacity-50"
                                parentClassName="text-center"
                            />

                        </div>

                    </div>


                </div>


                <div className=' z-10 mt-20 w-auto h-full flex justify-center items-center '>

                    <TiltedCard
                        imageSrc={PP}
                        altText=""
                        containerHeight="300px"
                        containerWidth="300px"
                        imageHeight="300px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}

                    />


                </div>




            </div>

            <div className="bg-black text-white hidden md:block py-16 mt-10 *:px-4">
                <h2 className="text-3xl font-bold text-center mb-12">🧠 My Tech Journey</h2>

                <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-2">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col hover:scale-110 transition-all duration-300 ease-in-out items-center text-center bg-zinc-900 border border-zinc-700 rounded-2xl p-5 w-full sm:w-[300px] md:w-[240px] shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-3 h-3 bg-cyan-400 rounded-full mb-4 shadow" />
                            <h3 className="text-xl font-semibold">{item.year}</h3>
                            <p className="text-gray-300 mt-2">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
}
