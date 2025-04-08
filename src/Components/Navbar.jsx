import React, { useState } from 'react';
import '../App.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className='nav-box'>


            <nav className="bg-#1B1B1B custome-nav rounded text-white p-4 shadow-md">
                <div className="container flex justify-between items-center mx-auto">
                    <a href="/" className="text-xl font-bold">Portfolio</a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="hidden md:flex space-x-5 align-center justify-center">
                            <a href="/" className="hover:underline">Home</a>
                            <a href="/" className="hover:underline">Case Studies</a>
                            <a href="/" className="hover:underline">Testimonials</a>
                            <a href="/" className="hover:underline">Recent Work</a>
                        </div>

                        <button className=" text-white custom-button border ">Get In Touch</button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white custom-button border px-2 py-1"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden flex flex-col items-center space-y-4 bg-gray-800 p-4">
                        <a href="/" className="hover:underline">Home</a>
                        <a href="/" className="hover:underline">Case Studies</a>
                        <a href="/" className="hover:underline">Testimonials</a>
                        <a href="/" className="hover:underline">Recent Work</a>
                        <a href="/" className="hover:underline">Get In Touch</a>
                    </div>
                )}
            </nav>

        </div>
    );
}
