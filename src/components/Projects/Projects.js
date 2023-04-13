import React from "react";
import './Projects.css';
import Accordion from './Accordian.js';

const Projects = () => {
  return (
    <div id="Projects">
      <div className="container">
        <div className="title">
          Projects
        </div>

        <div className="projects">
          <Accordion/>
        </div>
      </div>
    </div>
  )
}

export default Projects;
