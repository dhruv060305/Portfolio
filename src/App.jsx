import './App.css'
import Nav from './Pages/Nav';
import Main from './Pages/Main';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import CustomCursor from './Components/CustomCursor';

function App() {
  

  return (
    <>
      <CustomCursor></CustomCursor>
      <Nav></Nav>
      <Main></Main>
      <About></About>
      
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}

export default App
