import './Landing.css';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Landing = () => {
  return (
    <div className='landingContainer'>
      <img src='./teamwork.png' className='logoImg'></img>
      <p className='header'>RSMHPA</p>
      <p className='header2'>Russian-Speaking Mental Health Providers Association</p>
    </div>
  );
};

export default Landing;
