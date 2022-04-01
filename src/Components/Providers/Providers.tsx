import './Providers.css';
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { providerData } from '../../Data';

const Providers = () => {
  const [selectedProvider, setSelectedProvider] = useState(0);

  const onProviderNameClick = (index: number) => {
    setSelectedProvider(index);
  };

  return (
    <div className='providersContainer'>
      <div className='providersContent'>
        <div className='namesContainer'>
          <p className='header' style={{ fontSize: 50, marginBottom: 100 }}>
            Providers
          </p>
          {providerData.map((provider, index) => {
            return (
              <p
                className={selectedProvider === index ? 'nameText selectedNameText' : 'nameText'}
                onClick={() => onProviderNameClick(index)}
              >
                {provider.name}
              </p>
            );
          })}
        </div>
        <div className='biosContainer'>
          <img src={`./${selectedProvider}.png`} className='providerPic'></img>
          <p className='bioText'> {providerData[selectedProvider].bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Providers;
