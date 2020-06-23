import React from 'react';
import './styles/portfolio.scss';

import hero from './res/hero.png';
import resume from './res/Matthew_Lin_Resume.pdf';
import robolink from './res/robolink.png';
import programination from './res/programination.png';

import HoverTile from './components/Portfolio/HoverTile';

const Portfolio = () => {
  return (
    <>
      <main id="portfolio">
        <div id="landing-page" className="main-div">
          <div className="flex-row center">
            <h3 className="no-margin medium-text">
              Full Stack Software Developer
            </h3>
          </div>
          <div className="flex-row center bottom-margin">
            <h5 className="light-text">
              I create high quality web/desktop/mobile apps and more!
            </h5>
          </div>
          <div className="flex-row center">
            <a
              href="https://github.com/matthew-plusprogramming"
              target="_blank"
              rel="noopener noreferrer"
              className="button waves-effect waves-light z-depth-1 fixed-width-button">
              View Github
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="button waves-effect waves-light z-depth-1 fixed-width-button">
              View Resume
            </a>
          </div>

          <div className="flex-row center">
            <img id="hero" src={hero} alt="" />
          </div>
        </div>
        <div id="about-me-section" className="invert-colors">
          <div className="flex-row center">
            <h4 className="large-bottom-margin medium-text">
              Hi, I'm Matthew, a passionate software developer.
            </h4>
          </div>
          <div className="flex-row center large-bottom-margin">
            <p className="flow-text">
              Since beginning my journey as a budding programmer almost four
              years ago, I've explored a wide range of computer science related
              fields, studied many of them, and worked on various personal and
              freelance programming projects. In addition to theoretical and
              personal practical knowledge, I also have two summers of
              professional work experience as a software engineer.
            </p>
          </div>
          <div className="flex-row center large-bottom-margin">
            <p className="flow-text">
              I try my best to take initiative, be a natural leader, and
              communicate with teammates & clients to get the job done. I may
              not know everything yet, but I'm constantly working to improve and
              expand my skillset!
            </p>
          </div>
        </div>
        <div id="companies-section">
          <div className="flex-row center">
            <h4 className="large-bottom-margin">Companies I've Worked With</h4>
          </div>
          <div id="company-tiles">
            <HoverTile
              data={{
                img: robolink,
                title: 'Robolink',
                path: '/work-experience/robolink',
              }}>
              Teaching STEM to kids of all ages. Holds year around robotics
              camps & produces educational STEM materials.
            </HoverTile>

            <HoverTile
              data={{
                img: programination,
                title: 'Programination',
                path: '/work-experience/programination',
              }}>
              Creating high quality web and mobile applications of all kinds for
              clients.
            </HoverTile>
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
