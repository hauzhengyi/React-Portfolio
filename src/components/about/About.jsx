import './about.css';
import React from 'react';
import { FaAward, FaGlobeAmericas } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

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
              <FaAward />
              <h5>Something</h5>
            </article>
            <article className="about__card">
              <FaGlobeAmericas />
              <h5>Something</h5>
            </article>
            <article className="about__card">
              <MdSchool />
              <h5>Something</h5>
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
