import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';

function App() {
  return (
    <>
    <Nav title="Profile"></Nav>

    <div className="container">
      <Main style={{maxwidth: "540px"}}></Main>
    </div>
    </>
  );
}

export default App;
