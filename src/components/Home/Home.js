import React from "react";
import './Home.css';
import MyImage from './hanuman.jpg';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TypeAnimation } from "react-type-animation";

const Home = () => {

  return (
  <div id="Home">
      <div className="container">
        <div className="text">
          <div className="greet">
            Hello, I'm
          </div>
          <div className="myName">
            Aditya Baberwal
          </div>
          <div className="whoAmI">
            <span>And I am a</span>
            <span className="typingText">
              <TypeAnimation
                sequence={['Programmer', 1000, 'Web Developer', 1000, 'Gamer', 1000]}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
                speed={{type: 'keyStrokeDelayInMs', value: 100}}
              />
            </span>
          </div>

          <div className="mediaLinks">
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=adityababerwal@gmail.com">
              <div className="mediaLink">
                <MailOutlineIcon/>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/aditya-baberwal/">
              <div className="mediaLink">
                <LinkedInIcon/>
              </div>
            </a>
            <a href="https://github.com/adityababerwal">
              <div className="mediaLink">
                <GitHubIcon/>
              </div>
            </a>
          </div>

          <a href="https://drive.google.com/file/d/1-L67paY0qE7PCsE29xkrepCC5fLV9WIl/view?usp=share_link" className="resume">View CV</a>

        </div>

        <div className="image">
          <img src={MyImage} alt="this is my image"/>
        </div>
      </div>
  </div>
  )
}

export default Home;
