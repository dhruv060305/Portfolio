import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Second from './Components/Second'
import Footer from './Components/Footer'

function App() {

   
  return (
    <>
    <Nav title="Profile"></Nav>

    <div className="container">
      <Main style={{maxwidth: "540px"}} cardTitle="Dhruv Taraviya" about="LinkedIn: " cardText="I'm Dhurv Taraviya, a passionate front-end developer with expertise in HTML, CSS, JavaScript, and React. I specialize in building responsive and user-friendly web applications. My goal is to create seamless digital experiences with clean and efficient code. I constantly explore new technologies to enhance my skills and stay updated with industry trends"></Main>

      <Second text="Perusing Bachelor of Enginnering Degree at Bharati Vidyapeeth Deemed University. Currently in 2nd Year (4-Sem)" text2="I have Completed My 12th (PCM) From Indian Model School with 70% in the Boards in February-23  " />
      
     <Footer email='dhurvtaraviya1@gmail.com' insta="i_dhurv_t_" />
    </div>
     

    

    </>

  );
}

export default App;
