import Particles from './Effects/Particles';

export default function Contact() {

    const handeleformSubmit = () => {
        alert("Form submitted successfully!");
         // Prevent the default form submission behavior 
    }


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
                <div className="w-full max-w-2xl bg-transparent p-8 rounded-2xl shadow-md">
                    <h2 className="text-3xl font-bold mb-6 text-center ">Contact Me</h2>
                    <form action="https://formspree.io/f/manegdnn" method="POST" className="space-y-5">
                        <div>
                            <label className="block mb-1 font-medium ">Name</label>
                            <input type="text" name="name" required className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium ">Email</label>
                            <input type="email" name="email" required className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium ">Message</label>
                            <textarea name="message" rows="5" required className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                        </div>

                        <button type="submit" onClick={handeleformSubmit} className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition">
                            Send Message
                        </button>
                       

                    </form>
                </div>
                
            </div>
        </div>
    );
}
