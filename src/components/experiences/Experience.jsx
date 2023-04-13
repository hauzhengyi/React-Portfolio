import './experiences.css';
import React from 'react';

function Experience({ experience }) {
  return (
    <div className="experiences__event">
      <div className="experiences__dot"></div>
      <div className="experiences__card">
        <h4>{experience.title}</h4>
        <h5>{experience.company}</h5>
        <h6>{experience.date}</h6>
        <small className="text-light">{experience.detail}</small>
      </div>
    </div>
  );
}

export default Experience;
