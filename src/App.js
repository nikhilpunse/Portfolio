import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import TeckSkills from './components/TeckSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <AboutMe/>
      <TeckSkills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
