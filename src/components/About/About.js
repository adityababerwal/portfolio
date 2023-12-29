import React  from "react";
import './About.css';

const About = () => {

  return (
    <div id="About">
      <div className="About container">

        <div className="title">About</div>

        <div className="About stuff">

          <div className="education">
            <div className="heading">
              Education
            </div>
            
              <li>4th Year</li>
              <li>Mechanical Engg</li>
              <li>IIT Patna</li>
            
          </div>

          <div className="skills">
            <div className="heading">
              Techincal Skills
            </div>
            
              <li>Git</li>
              <li>C/C++, Python</li>
              <li>HTML, CSS, JS, ReactJS</li>
              <li>Linux</li>
              <li>SolidWorks, MatLab</li>
              <li>Arduino, RaspberryPi</li>
            
          </div>

          <div className="interests">
            <div className="heading">
              Interests
            </div>
            
              <li>Web Development</li>
              <li>Sports</li>
              <li>C++ Programming</li>
            
          </div>

        </div>

      </div>
    </div>
  )
}

export default About;
