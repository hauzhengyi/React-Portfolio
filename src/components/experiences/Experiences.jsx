import './experiences.css';
import React from 'react';

function Experiences() {
  return (
    <section id="experiences">
      <h5>Life is about</h5>
      <h2>Experiences</h2>
      <div className="container experiences__container">
        <div className="experiences__timeline">
          <div className="experiences__line"></div>
          <div className="experiences__event">
            <div className="experiences__dot"></div>
            <div className="experiences__card">
              <div className="experiences__title">
                <h4>Java Developer Intern</h4>
                <h5>Sunline Technology (Malaysia) Sdn Bhd</h5>
              </div>
              <h6>August 2021</h6>
              <small className="event__description text-light"></small>
            </div>
          </div>
          <div className="experiences__event">
            <div className="experiences__dot"></div>
            <div className="experiences__card">
              <div className="experiences__title">
                <h4>Web Developer Intern</h4>
                <h5>Saratix (Megah Berkah Sdn Bhd)</h5>
              </div>
              <h6>Feb 2022</h6>
              <small className="event__description text-light"></small>
            </div>
          </div>
          <div className="experiences__event">
            <div className="experiences__dot"></div>
            <div className="experiences__card">
              <div className="experiences__title">
                <h4>
                  Bachelor of Engineering in Computer Science and Technology
                  (Honours)
                </h4>
                <h5>Xiamen University Malaysia</h5>
              </div>
              <h6>March 2022</h6>
              <small className="event__description text-light"></small>
            </div>
          </div>
          <div className="experiences__event">
            <div className="experiences__dot"></div>
            <div className="experiences__card">
              <div className="experiences__title">
                <h4>Frontend Developer</h4>
                <h5>TDCX (MY) Sdn Bhd</h5>
              </div>
              <h6>May 2022</h6>
              <small className="event__description text-light"></small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
