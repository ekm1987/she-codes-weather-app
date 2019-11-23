import React from 'react';
import { Link } from 'react-router-dom';
import TextLink from '../components/atoms/TextLink';
import Forecast from '../components/organisms/Forecast';
import PageTemplate from '../components/templates/PageTemplate';
import './WeatherPage.css';


const WeatherPage = ({ city, temperature, changeCity, forecast, linkType, ...props }) => {
  return (
    <PageTemplate city={city} temperature={temperature} changeCity={changeCity}>
      <Forecast forecast={forecast} />
      <Link to="/complain">
        <TextLink linkType="complaintLink">Complain about the weather!</TextLink>
      </Link>
    </PageTemplate>
  );
};

export default WeatherPage;