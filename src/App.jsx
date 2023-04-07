import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <About />
      <Contact />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
