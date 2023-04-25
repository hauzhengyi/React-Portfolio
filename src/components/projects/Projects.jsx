import './projects.css';
import React from 'react';
import Project from './Project.jsx';

const projects = [
  {
    id: 'todo_list',
    image: '',
    title: 'To-Do List',
    code: '',
    demo: '',
    ready: true,
  },
  {
    id: 'pokedex',
    image: '',
    title: 'Pokedex',
    code: '',
    demo: '',
    ready: false,
  },
  {
    id: 'ecommerce',
    image: '',
    title: 'Ecommerce Website',
    code: '',
    demo: '',
    ready: false,
  },
];

function Projects() {
  return (
    <section id="projects">
      <h5>My Recent</h5>
      <h2>Projects</h2>
      <div className="container projects__container">
        {projects.map((project) => {
          return <Project id={project.id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
