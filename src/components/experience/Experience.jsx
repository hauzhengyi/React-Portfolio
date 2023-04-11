import './experience.css';
import React from 'react';

function Experience() {
  return (
    <section id="experience">
      <h5>Life is about</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__timeline">
          <div className="experience__line"></div>
          <div className="experience__card">
            <div className="experience__dot"></div>
            <h6>26 Jan 1997</h6>
            <div className="experience__title">
              <h3>Birthday</h3>
              <h5>Home</h5>
            </div>
            <small className="event__description text-light">
              Hello World!
            </small>
          </div>
          <div className="experience__card">
            <div className="experience__dot"></div>
            <h6>26 Jan 1997</h6>
            <div className="experience__title">
              <h3>Birthday</h3>
              <h5>Home</h5>
            </div>
            <small className="event__description text-light">
              Hello World!
            </small>
          </div>
          <div className="experience__card">
            <div className="experience__dot"></div>
            <h6>26 Jan 1997</h6>
            <div className="experience__title">
              <h3>Birthday</h3>
              <h5>Home</h5>
            </div>
            <small className="event__description text-light">
              Hello World!
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
