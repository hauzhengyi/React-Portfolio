import React from 'react';

function Skill({ icon, skill, experience }) {
  return (
    <article className="skills__details">
      <div className="skills__details-icon">{icon}</div>
      <div>
        <h4>{skill}</h4>
        <small>{experience}</small>
      </div>
    </article>
  );
}

export default Skill;
