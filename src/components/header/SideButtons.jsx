import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import DarkMode from './Darkmode';

function SideButtons() {
  return (
    <div className="header__sidebuttons">
      <DarkMode />
      <a
        href="https://www.linkedin.com/in/zyhau"
        target="_blank"
        className="sidebuttons__linkedin"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/hauzhengyi"
        target="_blank"
        className="sidebuttons__github"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:hauzhengyi@hotmail.com"
        target="_blank"
        className="sidebuttons__email"
      >
        <MdEmail />
      </a>
    </div>
  );
}

export default SideButtons;
