import React, { useState, useEffect } from 'react';
import './nav.css';
import { BiHome, BiUser, BiBrain, BiPhone } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';
import { FiCodesandbox } from 'react-icons/fi';

function Nav(props) {
  const sectionSequenceReversed = [
    'contact',
    'projects',
    'skills',
    'experiences',
    'about',
    'header',
  ];

  const [currentSection, setCurrentSection] = useState();

  const handleScroll = () => {
    const centerPosition = window.scrollY + window.innerHeight / 2;
    sectionSequenceReversed.find((sectionName) => {
      if (centerPosition > props[sectionName].current.offsetTop) {
        setCurrentSection(sectionName);
        return true;
      }
    });
  };

  useEffect(() => {
    handleScroll();
    document.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="nav">
      <a href="#header" className={currentSection == 'header' ? 'active' : ''}>
        <BiHome />
      </a>
      <a href="#about" className={currentSection == 'about' ? 'active' : ''}>
        <BiUser />
      </a>
      <a
        href="#experiences"
        className={currentSection == 'experiences' ? 'active' : ''}
      >
        <MdWorkOutline />
      </a>
      <a href="#skills" className={currentSection == 'skills' ? 'active' : ''}>
        <BiBrain />
      </a>
      <a
        href="#projects"
        className={currentSection == 'projects' ? 'active' : ''}
      >
        <FiCodesandbox />
      </a>
      <a
        href="#contact"
        className={currentSection == 'contact' ? 'active' : ''}
      >
        <BiPhone />
      </a>
    </nav>
  );
}

export default Nav;
