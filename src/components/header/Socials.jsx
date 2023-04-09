import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Socials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/zyhau/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/hauzhengyi" target="_blank">
        <FaGithub />
      </a>
      <a href="mailto:hauzhengyi@hotmail.com" target="_blank">
        <MdEmail />
      </a>
    </div>
  );
}

export default Socials;
