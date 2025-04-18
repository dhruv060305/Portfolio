import Particles from './Effects/Particles';


export default function Exp() {
    return (


        <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
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

        </div>
    );
}