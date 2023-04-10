import './skills.css';
import React from 'react';
import { FaJava, FaGithub } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import {
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiJquery,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiPython,
  SiCplusplus,
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiLinux,
  SiPytorch,
} from 'react-icons/si';
import Skill from './Skill';

function Skills() {
  return (
    <section id="skills">
      <h5>Always Sharpening My</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend</h3>
          <div className="skills__content">
            <Skill
              icon={<IoLogoHtml5 />}
              skill="HTML5"
              experience="Experienced"
            />
            <Skill
              icon={<IoLogoCss3 />}
              skill="CSS3"
              experience="Experienced"
            />
            <Skill
              icon={<SiJavascript />}
              skill="JavaScript"
              experience="Experienced"
            />
            <Skill icon={<SiReact />} skill="React" experience="Intermediate" />
            <Skill
              icon={<SiBootstrap />}
              skill="Bootstrap"
              experience="Experienced"
            />
            <Skill
              icon={<SiJquery />}
              skill="jQuery"
              experience="Intermediate"
            />
            <Skill
              icon={<SiTypescript />}
              skill="TypeScript"
              experience="Basic"
            />
          </div>
        </div>
        <div className="skills__backend">
          <h3>Backend</h3>
          <div className="skills__content">
            <Skill icon={<SiPhp />} skill="PHP" experience="Experienced" />
            <Skill
              icon={<SiLaravel />}
              skill="Laravel"
              experience="Intermediate"
            />
            <Skill icon={<FaJava />} skill="Java" experience="Intermediate" />
            <Skill
              icon={<SiPython />}
              skill="Python"
              experience="Intermediate"
            />
            <Skill
              icon={<SiCplusplus />}
              skill="C++"
              experience="Experienced"
            />
            <Skill icon={<GrMysql />} skill="MySQL" experience="Experienced" />
          </div>
        </div>
        <div className="skills__other">
          <h3>Other</h3>
          <div className="skills__content">
            <Skill
              icon={<FaGithub />}
              skill="GitHub"
              experience="Experienced"
            />
            <Skill
              icon={<SiGoogleads />}
              skill="Google Ads"
              experience="Experienced"
            />
            <Skill
              icon={<SiGoogleanalytics />}
              skill="Google Analytics"
              experience="Experienced"
            />
            <Skill
              icon={<SiGoogletagmanager />}
              skill="Google Tag Manager"
              experience="Experienced"
            />
            <Skill icon={<SiLinux />} skill="Linux" experience="Intermediate" />
            <Skill
              icon={<SiPytorch />}
              skill="Pytorch"
              experience="Intermediate"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
