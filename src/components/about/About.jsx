import './about.css';
import React from 'react';
import { FaAward, FaFistRaised } from 'react-icons/fa';
import { RiComputerFill } from 'react-icons/ri';

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__image-bg">
          <img src="" alt="About Image" className="about__image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>XMUM Hackathon</h5>
              <small>2019 Hackathon Award Winner</small>
            </article>
            <article className="about__card">
              <RiComputerFill className="about__icon" />
              <h5>Computer Enthusiast</h5>
              <small>Loves Building Computers</small>
            </article>
            <article className="about__card">
              <FaFistRaised className="about__icon" />
              <h5>Cooperative & Independent</h5>
              <small>Solves problems with Minimal Help</small>
            </article>
          </div>
          <p>
            A hard-working developer with good attention to detail, who holds
            himself to high standards in writing quality codes.
          </p>
          <a href="#contact" className="btn btn-cta">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
