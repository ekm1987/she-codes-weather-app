import React from 'react';
import CurrentCity from '../atoms/CurrentCity';
import CurrentTemperature from '../atoms/CurrentTemperature';
import TextLink from '../atoms/TextLink';
import './CurrentWeather.css';


const CurrentWeather = ({ city, temperature, onTextLinkClick, linkType, ...props }) => {
  
  return (

    <div className="cityimage" style={{ backgroundImage: `url(/static/${city}.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }}>
      <div className="CurrentWeather">
        <CurrentCity city={city} />
        <TextLink onButtonClick={onTextLinkClick}>Change City</TextLink>
        <CurrentTemperature temperature={temperature} />
          <div class="color-divider"></div>
      </div>
    </div>
  );
};

export default CurrentWeather;