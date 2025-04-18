import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home';
import Project from './Components/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exp from './Components/Exp';
import Contact from './Components/Contact';
// import Particles from './Components/Effects/Particles';
import React, { useState, useEffect } from 'react';





function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-64 h-16 border-2 border-neon-green rounded-md overflow-hidden shadow-neon">
        <div className="absolute inset-0 animate-fill bg-neon-green"></div>
        <div className="relative z-10 text-black text-xl font-bold text-center leading-[4rem]">
          Loading...
        </div>
      </div>
    </div>
    );
  }


  return (



    <Router>

      <Nav />


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Project />}></Route>
        <Route path='/experience' element={<Exp />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>


    </Router>
















  )
}

export default App
