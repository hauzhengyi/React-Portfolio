import './about.css';
import React, { useContext } from 'react';
import { FaAward, FaFistRaised } from 'react-icons/fa';
import { RiComputerFill } from 'react-icons/ri';
import { Theme } from '/src/App';
import photoPurple from '../../assets/About_Photo_Purple.jpg';
import photoYellow from '../../assets/About_Photo_Yellow.jpg';

function About() {
  const [theme, setTheme] = useContext(Theme);

  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__image-bg">
          <img
            src={theme === 'dark' ? photoYellow : photoPurple}
            alt="About Image"
            className="about__image"
            crossOrigin=""
          />
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
              <small>Solves Problems with Minimal Help</small>
            </article>
          </div>
          <p>
            Hi there, I'm a web developer with a flair for front-end magic. I
            love crafting websites that are not only gorgeous to look at, but
            also easy and fun to use. I'm a perfectionist who writes neat and
            tidy codes, and I care about every detail, from the most trivial to
            the most crucial. Coding is my favorite thing to do, whether it's
            for work or for play. When I'm not busy making awesome websites, I
            like to unwind with games, sports and computer tinkering. My dream
            is to become a full-stack wizard who can conjure up any web solution
            imaginable.
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
