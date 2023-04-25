import './projects.css';
import React from 'react';

function Project() {
  return (
    <article className="project">
      <div className="project__image"></div>
      <h3 className="project__title">Project Title</h3>
      <div className="project__cta">
        <a href="" className="btn project__code" target="_blank">
          Source Code
        </a>
        <a href="" className="btn btn-cta project__demo" target="_blank">
          Live Demo
        </a>
      </div>
    </article>
  );
}

export default Project;
