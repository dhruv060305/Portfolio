import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';

function App() {
  return (
    <>
    <Nav title="Profile"></Nav>

    <div className="container">
      <Main style={{maxwidth: "540px"}} cardTitle="Dhruv Taraviya" about="LinkedIn: " cardText="I'm Dhurv Taraviya, a passionate front-end developer with expertise in HTML, CSS, JavaScript, and React. I specialize in building responsive and user-friendly web applications. My goal is to create seamless digital experiences with clean and efficient code. I constantly explore new technologies to enhance my skills and stay updated with industry trends"></Main>
    </div>
    </>

  );
}

export default App;
