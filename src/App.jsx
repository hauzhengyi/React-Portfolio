import React, { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experiences from './components/experiences/Experiences';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

export const Theme = React.createContext();

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('portfolio-zhengyi-theme') || 'light'
  );

  return (
    <Theme.Provider value={[theme, setTheme]}>
      <div className="App">
        <Header />
        <Nav />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Theme.Provider>
  );
}

export default App;
