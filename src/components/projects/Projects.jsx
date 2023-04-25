import './projects.css';
import React from 'react';
import Project from './Project.jsx';

function Projects() {
  return (
    <section id="projects">
      <h5>My Recent</h5>
      <h2>Projects</h2>
      <div className="container projects__container">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}

export default Projects;
