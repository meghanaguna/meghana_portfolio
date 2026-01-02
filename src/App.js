import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import "./styles/main.css"
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
