import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className='flex justify-center bg-black text-amber-50 sticky top-0 z-50'>
            <div className='h-15 flex justify-between items-center w-auto md:w-4xl bg-neutral-800 rounded-br-md rounded-bl-md p-1'>
                <h1 className='font-bold ml-6'><span className='text-lime-400'>P</span>ortfolio</h1>

                <div>
                    <div className="hidden md:flex space-x-5 align-center justify-center ml-10 ">
                        <Link to="/" className="hover:underline font-extralight">Home</Link>
                        <Link to="/projects" className="hover:underline font-extralight">Projects</Link>
                        <Link to="/experience" className="hover:underline font-extralight">Expirence</Link>
                        <Link to="/contact" className="hover:underline font-extralight">Contact</Link>
                    </div>
                </div>

                <div className="flex space-x-4 text-2xl ml-6 mr-2 text-amber-50">
                    <a href="https://github.com/dhruv060305" className="hover:text-lime-400 transition duration-200" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/dhruv-taraviya-103010349" className="hover:text-lime-400 transition duration-200" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:dhruvtaraviya1@email.com" className="hover:text-lime-400 transition duration-200" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>


                <button
                    className="md:hidden text-amber-50 border ml-4 border-amber-50 rounded px-3 py-1 hover:text-black hover:bg-lime-400 transition duration-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>

        </div>  

            {isOpen && (
                <div className="md:hidden absolute top-16 flex flex-col right-4 bg-neutral-900 p-4 rounded-md shadow-lg space-y-3">
                    <Link to="/" className="hover:underline font-extralight">Home</Link>
                    <Link to="/projects" className="hover:underline font-extralight">Projects</Link>
                    <Link to="/experience" className="hover:underline font-extralight">Expirence</Link>
                    <Link to="/contact" className="hover:underline font-extralight">Contact</Link>
                </div>
            )}


        </div>
    )
}
