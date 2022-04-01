import './ContactUs.css';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { COLORS } from '../../Constants';

const ContactUs = () => {
  const onContactButtonClick = () => {
    window.open(
      'https://docs.google.com/forms/d/1Mn3wdeDI55JV2_h7e5lq8M1ED1t9wJeMm-xd_ieb5fk/viewform?edit_requested=true',
      '_blank'
    );
  };

  return (
    <div className='contactUsContainer'>
      <button className='contactButton' onClick={() => onContactButtonClick()}>
        <p className='header' style={{ fontSize: 50 }}>
          Get in touch!
        </p>
      </button>
      <p className='contactText'>
        Click the button above to fill out an informational form so that we can connect with you.
      </p>
    </div>
  );
};

export default ContactUs;
