import './Resources.css';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { COLORS } from '../../Constants';
import {
  crisisCenterDataBelarus,
  crisisCenterDataRussia,
  crisisCenterDataUkraine,
} from '../../Data';

const Resources = () => {
  return (
    <div className='ResourcesContainer'>
      <p
        className='header'
        style={{ color: COLORS.navy, fontSize: 50, marginBottom: 20 }}
      >
        Resources
      </p>
      <div className='ResourcesBodyContainer'>
        <p className='ResourcesBodyParagraph'>
          {/*Contact list of crisis centers for psychological support*/}
          <p>Список контактов кризисных центров психологической поддержки</p>
          {/*RUSSIA*/}
          <p className='ResourcesHeader'>РОССИЯ:</p>
          <ul>
            {crisisCenterDataRussia.map((centerInfo, index) => {
              return (
                <li className='ResourcesBullet'>
                  {centerInfo.name}:
                  {centerInfo.number && (
                    <p className='ResourcesNumber'> {centerInfo.number}</p>
                  )}
                  {centerInfo.number2 && (
                    <p className='ResourcesNumber'>; {centerInfo.number2}</p>
                  )}
                  {centerInfo.website && (
                    <p className='ResourcesNumber'>
                      &nbsp;
                      <a className='ResourcesWebsite' href={centerInfo.website}>
                        {centerInfo.website}
                      </a>
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
          {/*UKRAINE*/}
          <p className='ResourcesHeader'>УКРАИНА:</p>
          <ul>
            {crisisCenterDataUkraine.map((centerInfo, index) => {
              return (
                <li className='ResourcesBullet'>
                  {centerInfo.name}:
                  {centerInfo.number && (
                    <p className='ResourcesNumber'> {centerInfo.number}</p>
                  )}
                </li>
              );
            })}
          </ul>
          {/*BELARUS*/}
          <p className='ResourcesHeader'>БЕЛАРУСЬ:</p>
          <ul>
            {crisisCenterDataBelarus.map((centerInfo, index) => {
              return (
                <li className='ResourcesBullet'>
                  {centerInfo.name}:
                  {centerInfo.number && (
                    <p className='ResourcesNumber'> {centerInfo.number}</p>
                  )}
                  {centerInfo.website && (
                    <p className='ResourcesNumber'>
                      &nbsp;
                      <a className='ResourcesWebsite' href={centerInfo.website}>
                        {centerInfo.website}
                      </a>
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Resources;
