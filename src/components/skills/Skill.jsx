import React from 'react';

function Skill({ icon, image, skill, experience }) {
  return (
    <article className="skills__details">
      <img className="skills__details-icon" src={image} alt="" />
      <div>
        <h4>{skill}</h4>
        <small>{experience}</small>
      </div>
    </article>
  );
}

export default Skill;
