import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home';
import Project from './Components/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exp from './Components/Exp';
// import Particles from './Components/Effects/Particles';




function App() {

  return (

    
    
    <Router>

      <Nav />
      
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Project/> }></Route>
        <Route path='/experience' element={<Exp/> }></Route>
      </Routes>


    </Router>

      




      
    
      






    
  )
}

export default App
