import React, { useState } from 'react';
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

  return (
    <Theme.Provider value={[theme, setTheme]}>
      <div className="App">
        <Background />
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
