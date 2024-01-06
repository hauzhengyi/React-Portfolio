import React, { useState, useRef } from 'react';
import './App.css';
import Background from './components/background/Background';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experiences from './components/experiences/Experiences';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export const Theme = React.createContext();

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('portfolio-zhengyi-theme') || 'light'
  );

  const header = useRef(null);
  const about = useRef(null);
  const experiences = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  return (
    <Theme.Provider value={[theme, setTheme]}>
      <div className="App">
        <Background />

        <header id="header" ref={header}>
          <Header />
        </header>

        <section id="about" ref={about}>
          <About />
        </section>

        <section id="experiences" ref={experiences}>
          <Experiences />
        </section>

        <section id="skills" ref={skills}>
          <Skills />
        </section>

        <section id="projects" ref={projects}>
          <Projects />
        </section>

        <section id="contact" ref={contact}>
          <Contact />
        </section>

        <footer id="footer">
          <Footer />
        </footer>

        <Nav
          header={header}
          about={about}
          experiences={experiences}
          skills={skills}
          projects={projects}
          contact={contact}
        />
      </div>
    </Theme.Provider>
  );
}

export default App;
