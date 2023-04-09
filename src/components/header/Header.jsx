import React from 'react';
import CallToAction from './CallToAction';
import avatar from '../../assets/Avatar.png';
import Socials from './Socials';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Zheng Yi</h1>
        <h5 className="text-light">Frontend Developer</h5>
      </div>
      <CallToAction />

      <div className="me">
        <img src={avatar} alt="me" />
      </div>

      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
}

export default Header;
