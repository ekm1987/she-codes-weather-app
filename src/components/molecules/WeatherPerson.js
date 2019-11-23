import React from 'react';
import Avatar from '../atoms/Avatar';
import Profile from '../atoms/Profile';

const WeatherPerson = () => {
  return (
    <div className = "weather-person-container">
    <div>
      <Avatar />
      <Profile />
    </div>
    </div>
  );
};

export default WeatherPerson;
