import React from 'react';
import CTA from './CTA';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Zheng Yi</h1>
        <h5 className="text-light">Frontend Developer</h5>
      </div>
      <CTA />
      <div className="me">
        <img src="" alt="me" />
      </div>
    </header>
  );
}

export default Header;
