import React from "react";
import { useState, useEffect } from "react";
import './Home.css';

const Home = () => {

  // const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const phrases = ["Programmer", "Web Developer", "Gamer"]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
  <div id="home">
    <div className="text">
        <span className="greeting"> Hello, It's me</span>
        <br/>
        <span className="name">Aditya Baberwal</span>
        <br/>
        <span className="whoAmI">And I am a
          <span className="typing"> {phrases[index]}</span>
        </span>

        <div className="icons">
          <a href="#">
          <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
          <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="#">
          <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <div className="downloadCV">
          <a href="#">Download CV</a>
        </div>
    </div>

    <div className="image">
    </div>

  </div>
  )
}

export default Home;
