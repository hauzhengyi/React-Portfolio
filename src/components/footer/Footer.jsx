import './footer.css';
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/zyhau/"
          target="_blank"
          className="footer__linkedin"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/hauzhengyi"
          target="_blank"
          className="footer__github"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:hauzhengyi@hotmail.com"
          target="_blank"
          className="footer__email"
        >
          <MdEmail />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Hau Zheng Yi. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
