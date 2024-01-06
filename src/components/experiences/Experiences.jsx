import './experiences.css';
import React from 'react';
import Experience from './Experience';

const experiences = [
  {
    id: 'newsoft',
    title: 'Frontend Engineer',
    company: 'Newsoft',
    date: 'October 2023',
    detail: '',
  },
  {
    id: 'hytech',
    title: 'Software Engineer (Frontend)',
    company: 'Hytech Consulting Management Sdn Bhd',
    date: 'June 2023',
    detail: '',
  },
  {
    id: 'tdcx',
    title: 'Frontend Developer',
    company: 'TDCX (MY) Sdn Bhd',
    date: 'May 2022',
    detail: '',
  },
  {
    id: 'xmum_grad',
    title:
      'Bachelor of Engineering in Computer Science and Technology (Honours)',
    company: 'Xiamen University Malaysia',
    date: 'March 2022',
    detail: '',
  },
  {
    id: 'saratix',
    title: 'Web Developer Intern',
    company: 'Saratix (Megah Berkah Sdn Bhd)',
    date: 'Feb 2022',
    detail: '',
  },
  {
    id: 'sunline',
    title: 'Software Developer Intern',
    company: 'Sunline Technology (Malaysia) Sdn Bhd',
    date: 'August 2021',
    detail: '',
  },
  {
    id: 'xmum_enroll',
    title: 'Enrolled at Xiamen University Malaysia',
    company: 'Xiamen University Malaysia',
    date: 'August 2018',
    detail: '',
  },
];

function Experiences() {
  return (
    <section id="experiences">
      <h5>Life is about</h5>
      <h2>Experiences</h2>
      <div className="container experiences__container">
        <div className="experiences__timeline">
          <div className="experiences__line"></div>
          {experiences.map((experience) => {
            return <Experience key={experience.id} experience={experience} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
