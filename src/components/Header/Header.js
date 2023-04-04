import React from "react";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div id="portfolio">Portfolio</div>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#ContactMe">Contact Me</a>
      </div>
    </div>
  )
}

export default Header;
