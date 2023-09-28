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
  SiLinux,
  SiPytorch,
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
} from 'react-icons/si';
import html from '../../assets/icons8-html-5.svg';
import css from '../../assets/icons8-css3.svg';
import javascript from '../../assets/icons8-javascript.svg';
import react from '../../assets/icons8-react-native.svg';
import vue from '../../assets/icons8-vuejs.svg';
import nuxt from '../../assets/icons8-nuxt-js.svg';
import bootstrap from '../../assets/icons8-bootstrap.svg';
import jquery from '../../assets/icons8-jquery-is-a-javascript-library-designed-to-simplify-html-96.png';
import php from '../../assets/php.svg';
import laravel from '../../assets/icons8-laravel-96.png';
import java from '../../assets/icons8-java.svg';
import python from '../../assets/icons8-python.svg';
import cpp from '../../assets/icons8-c++.svg';
import mysql from '../../assets/icons8-mysql-logo.svg';
import github from '../../assets/icons8-github.svg';
import linux from '../../assets/icons8-linux-96.png';
import pytorch from '../../assets/pytorch.svg';
import ads from '../../assets/icons8-google-ads.svg';
import analytics from '../../assets/google-analytics.svg';
import gtm from '../../assets/icons8-google-tag-manager.svg';
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
            <Skill image={html} skill="HTML5" experience="Experienced" />
            <Skill image={css} skill="CSS3" experience="Experienced" />
            <Skill
              image={javascript}
              skill="JavaScript"
              experience="Experienced"
            />
            <Skill image={react} skill="React" experience="Intermediate" />
            <Skill image={vue} skill="Vue" experience="Experienced" />
            <Skill image={nuxt} skill="Nuxt" experience="Experienced" />
            <Skill
              image={bootstrap}
              skill="Bootstrap"
              experience="Experienced"
            />
            <Skill image={jquery} skill="jQuery" experience="Intermediate" />
            {/* <Skill
              image={typescript}
              skill="TypeScript"
              experience="Basic"
            /> */}
          </div>
        </div>
        <div className="skills__backend">
          <h3>Backend</h3>
          <div className="skills__content">
            <Skill image={php} skill="PHP" experience="Experienced" />
            <Skill image={laravel} skill="Laravel" experience="Intermediate" />
            <Skill image={java} skill="Java" experience="Intermediate" />
            <Skill image={python} skill="Python" experience="Intermediate" />
            <Skill image={cpp} skill="C++" experience="Experienced" />
            <Skill image={mysql} skill="MySQL" experience="Experienced" />
          </div>
        </div>
        <div className="skills__other">
          <h3>Other</h3>
          <div className="skills__content">
            <Skill image={github} skill="GitHub" experience="Experienced" />
            <Skill image={linux} skill="Linux" experience="Intermediate" />
            <Skill image={pytorch} skill="Pytorch" experience="Intermediate" />
            <Skill image={ads} skill="Google Ads" experience="Experienced" />
            <Skill
              image={analytics}
              skill="Google Analytics"
              experience="Experienced"
            />
            <Skill
              image={gtm}
              skill="Google Tag Manager"
              experience="Experienced"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
