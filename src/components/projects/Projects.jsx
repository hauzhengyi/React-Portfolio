import './projects.css';
import React from 'react';
import Project from './Project.jsx';
import todo from '../../assets/react-todo-image.png';
import pokedex from '../../assets/pokedex-image.png';
import ecommerce from '../../assets/ecommerce-image.png';

const projects = [
  {
    id: 'todo_list',
    image: todo,
    title: 'To-Do List',
    code: 'https://github.com/hauzhengyi/react-todo',
    demo: 'https://hauzhengyi.github.io/react-todo/',
    ready: true,
  },
  {
    id: 'pokedex',
    image: pokedex,
    title: 'Pokedex',
    code: '',
    demo: '',
    ready: false,
  },
  {
    id: 'ecommerce',
    image: ecommerce,
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
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
