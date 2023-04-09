import React from "react";
import './Header.css';
import HamBurgDrawer from './HamburgDrawer.js';

const Header = () => {

  const Pages = ["Home", "Projects", "About", "Contact"];


  return (
    <div className="header">

      <div id="portfolio">Portfolio</div>

      <div className="hamBurgDrawer">
        <HamBurgDrawer Pages={Pages}/>
      </div>

      <div className="links">
        <ul>
          {
            Pages.map((Page) => (
              <li><a href={`#${Page}`} className="navLinks">{Page}</a></li>
            ))
          }
        </ul>
      </div>


    </div>
  )
}

export default Header;
