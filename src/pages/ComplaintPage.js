import React from 'react';
import { Link } from 'react-router-dom';
import TextLink from '../components/atoms/TextLink';
import WeatherPerson from '../components/molecules/WeatherPerson';
import ComplaintForm from '../components/organisms/ComplaintForm';
import PageTemplate from '../components/templates/PageTemplate';
import './ComplaintPage.css';


const ComplaintPage = ({ city, temperature, changeCity, ...props }) => {
  
  return (
    <PageTemplate city={city} temperature={temperature} changeCity={changeCity}>
      <div className="complaint-form">
      <Link to="/">
        <TextLink>Go Back</TextLink>
        <br></br>
      </Link>
      <WeatherPerson />
      <ComplaintForm />
      </div>
    </PageTemplate>
  );
};

export default ComplaintPage;