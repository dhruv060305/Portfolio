import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home';
import Project from './Components/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {

  return (

    
    
    <Router>

      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Project/> }></Route>
      </Routes>


    </Router>

      




      
    
      






    
  )
}

export default App
