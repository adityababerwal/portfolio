import React from "react";
import './Projects.css';

const Projects = () => {
  return (
    <div id="Projects">
      <div className="title" 
        style={{
          fontWeight: '600',
          fontSize: '70px',
          color: 'white',
        }}>
        Projects
      </div>

      <div className="cards">
        <div className="card">
          <span className="heading">Simple ChatRoom</span>
          <ul>
            <li>A simple chatroom where people can connect and talk to friends in real time</li>
            <li>Implements login with Google</li>
            <li><a href="#">Join Here</a></li>
          </ul>
        </div>
        <div className="card">
          <span className="heading">Pipe Inspection Robot</span>
          <ul>
            <li>An autonomous robot that can go inside a pipe and capture images of the insides</li>
            <li>Equipped with precise, accurate and high-definition camera and sensors</li>
            <li>Can self-align with the pipe while avoiding any obstacles in the path</li>
            <li>Can map its surroundings</li>
          </ul>
        </div>
        <div className="card">
          <span className="heading">MERN ChatApp</span>
          <ul>
            <li>ChatApp with the functionality of one-to-one text and group chat</li>
            <li>Includes
              <ul>
                <li>Authentication</li>
                <li>Real time messaging</li>
                <li>Typing indicator</li>
                <li>Creating groups</li>
                <li>Adding and Removing users from group</li>
              </ul>
            </li>
            <li>Tools used
              <ul>
                <li>MongoDB</li>
                <li>ExpressJS</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects;
