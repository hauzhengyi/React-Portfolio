import React from 'react';

function Skill({ icon, skill, experience }) {
  return (
    <article className="skills__details">
      {icon}
      <h4>{skill}</h4>
      <small className="text-light">{experience}</small>
    </article>
  );
}

export default Skill;
