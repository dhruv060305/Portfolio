import React from 'react';
import Particles from './Effects/Particles';
import DecryptedText from './Effects/DecryptedText';
import TiltedCard from './Effects/TiltedCard';
import RotatingText from './Effects/RotatingText'


export default function Home() {
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

            <div className=" w-auto h-60 mt-10 border-r-2 md:flex justify-evenly items-center ">


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
                </div>


                <div className=' z-10  w-auto h-full flex justify-center items-center '>

                    <TiltedCard
                        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                        altText=""
                        captionText=""
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

        </div>
    );
}
