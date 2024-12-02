import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Skill />
        <Project/>
        <Resume />
        <Contact/> 
    </div>
  );
}

export default App;
