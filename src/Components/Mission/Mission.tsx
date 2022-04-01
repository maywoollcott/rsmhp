import './Mission.css';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { COLORS } from '../../Constants';

const Mission = () => {
  return (
    <div className='missionContainer'>
      <p className='header' style={{ color: COLORS.white, fontSize: 50, marginBottom: 40 }}>
        Mission
      </p>
      <div className='missionBodyContainer'>
        <p className='missionBodyParagraph'>
          The Russian-Speaking Mental Health Providers Association (RSMHPA) is an organization that aims to promote
          psychological and physical wellness, dignity and human rights for people across the globe.
        </p>
        <p className='missionBodyParagraph'>
          RSMHPA supports the Russian-speaking community by providing mental health counseling, professional
          consultation, and psychological education.
        </p>
        <p className='missionBodyParagraph'>
          Our providers span across mental health disciplines, vast areas of expertise, and different parts of New
          England and beyond. Our numbers are growing and we welcome new members daily. The Russian-speaking community
          is varied in their cultural, religious, ethnic, geographic, and linguistic origins, and our members provide
          mental health services that meet the diversity of our community.{' '}
        </p>{' '}
        <p className='missionBodyParagraph'>
          We mobilize when crisis strikes our communities and respond by offering psychological first aid, crisis
          intervention, psychoeducation, and culturally-informed professional consultations.
        </p>{' '}
        <p className='missionBodyParagraph'>
          {' '}
          RSMHPA condemns Russia's war with Ukraine and the ensuing destruction of life, property, and the threat to
          liberty and well-being of people in Ukraine and all those affected by Russia's aggression against its
          neighbor. We stand shoulder to shoulder with all who sacrifice their personal safety to raise awareness and
          provide aid amidst this humanitarian crisis.{' '}
        </p>{' '}
        <p className='missionBodyParagraph'>Ukraine Crisis specific response: </p>{' '}
        <p className='missionBodyParagraph'>
          We work remotely via different platforms with adults, teenagers and geriatric population offering psychiatric
          first aid, coping-focused counseling, grounding, meditation and visualization techniques.{' '}
        </p>
        <p className='missionBodyParagraph'>
          {' '}
          We work with individuals and groups and welcome your interests and requests for services.
        </p>
      </div>
    </div>
  );
};

export default Mission;
