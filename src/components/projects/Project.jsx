import './projects.css';
import React, { useState } from 'react';

const openLink = (link) => {
  window.open(link, '_blank');
};

function Project({ project }) {
  return (
    <article className="project">
      <img
        src={project.image}
        alt="project image"
        className="project__image"
        crossOrigin=""
      />
      <h3 className="project__title">
        {project.title + (project.ready ? '' : ' (Upcoming)')}
      </h3>
      <div className="project__cta">
        <button
          onClick={() => openLink(project.code)}
          className="btn project__code"
          target="_blank"
          disabled={!project.ready}
        >
          Source Code
        </button>
        <button
          onClick={() => openLink(project.demo)}
          className="btn btn-cta project__demo"
          target="_blank"
          disabled={!project.ready}
        >
          Live Demo
        </button>
      </div>
    </article>
  );
}

export default Project;
