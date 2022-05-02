import './Navbar.css';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
  return (
    <div className='navBar'>
      <p className='logo'>RSMHPA</p>
      <ul>
        <li>
          <Link activeClass='active' to='landingContainer' spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='missionContainer' spy={true} smooth={true}>
            Mission
          </Link>
        </li>
        <li>
          <Link to='providersContainer' spy={true} smooth={true}>
            Providers
          </Link>
        </li>
        <li>
          <Link to='contactUsContainer' spy={true} smooth={true}>
            Contact Us
          </Link>
        </li>
        {/* <li>
          <Link to='ResourcesContainer' spy={true} smooth={true}>
            Resources
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default NavBar;
