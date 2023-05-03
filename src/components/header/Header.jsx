import React from 'react';
import './header.css';
import CallToAction from './CallToAction';
import Socials from './Socials';

import avatar from '../../assets/Avatar.png';
import DarkMode from './Darkmode';
// const avatar =
//   'https://raw.githubusercontent.com/hauzhengyi/React-Portfolio/main/src/assets/Avatar.png';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Zheng Yi</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <DarkMode />
        <CallToAction />
        <Socials />

        <div className="avatar">
          <img src={avatar} alt="Avatar" crossOrigin="anonymous" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
