import React, { useState } from "react";
import './Header.css';
import HamBurgDrawer from './HamburgDrawer.js';

const Header = () => {


  return (
    <div className="header">

      <div id="portfolio">Portfolio</div>

      <HamBurgDrawer className="hamBurgDrawer" style={{display: 'none'}}/>
      <div className="links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#ContactMe">Contact Me</a></li>
        </ul>
      </div>


    </div>
  )
}

export default Header;
