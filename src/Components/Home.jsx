import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
                <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">

                    {/* Left Section */}
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Name Here</h1>
                        <p className="text-sm text-gray-400 mb-6">
                            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 px-6 rounded shadow-lg transition">
                            Let's get started
                        </button>
                    </div>

                    {/* Right Section - Profile Image */}
                    <div className="flex-shrink-0">
                        <img
                            src="https://images.unsplash.com/photo-1603415526960-f8f7cb090c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                            alt="Profile"
                            className="w-48 h-48 rounded-full object-cover border-4 border-gray-700"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
