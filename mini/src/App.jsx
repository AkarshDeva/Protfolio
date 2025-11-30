import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import "./styles/global.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
       <About />
    <Skills/>
    <Contact/>
    
    </>
  );
};

export default App;
