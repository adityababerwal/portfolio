import React from "react";
import './About.css';

const About = () => {
  return (
    <div id="About">
      <div className="title">
        About
      </div>

      <div className="about cards">
        <div className="about card">
          <span className="about heading">Technical Skills</span>
          <ul>
            <li><b>Programming:</b>C/C++, Python</li>
            <li><b>Tools:</b>Git, Jupyter</li>
            <li><b>Libraries/Frameworks:</b>Pandas, Numpy</li>
            <li><b>Web Skills:</b>HTML, CSS, JS, React</li>
            <li><b>Operating System:</b>Linux</li>
          </ul>
        </div>

        <div className="about card">
          this is a card
        </div>
      </div>

    </div>
  )
}

export default About;
