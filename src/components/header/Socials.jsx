import React from 'react';
import { BsLinkedin } from 'react-icons/bs';

function Socials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/zyhau/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/hauzhengyi" target="_blank">
        GitHub
      </a>
      <a href="mailto:hauzhengyi@hotmail.com" target="_blank">
        Email
      </a>
    </div>
  );
}

export default Socials;
