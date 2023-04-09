import React from "react";
import { useState, useEffect } from "react";
import './Home.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {

  // const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const phrases = ["Programmer", "Web Developer", "Gamer"]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

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
            <span>And I am a</span> <span className="typingText"> {phrases[index]}</span>
          </div>

          <div className="mediaLinks">
            <a href="https://www.instagram.com/baberwal_aditya/" ><div className="mediaLink"><InstagramIcon/></div></a>
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=adityababerwal@gmail.com"
              
            >
              <div className="mediaLink"><MailOutlineIcon/></div>
            </a>
            <a href="https://www.linkedin.com/in/aditya-baberwal/" ><div className="mediaLink"><LinkedInIcon/></div></a>
          </div>

          <a href="https://drive.google.com/file/d/1-L67paY0qE7PCsE29xkrepCC5fLV9WIl/view?usp=share_link" className="resume">View CV</a>

        </div>

        <div className="image">
        </div>
      </div>
  </div>
  )
}

export default Home;
