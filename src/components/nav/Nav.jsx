import React from 'react';
import './nav.css';
import { BiHome, BiUser, BiBrain } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';
import { FiCodesandbox } from 'react-icons/fi';

function Nav() {
  return (
    <nav>
      <a href="#">
        <BiHome />
      </a>
      <a href="#about">
        <BiUser />
      </a>
      <a href="#experiences">
        <MdWorkOutline />
      </a>
      <a href="#skills">
        <BiBrain />
      </a>
      <a href="#projects">
        <FiCodesandbox />
      </a>
    </nav>
  );
}

export default Nav;
