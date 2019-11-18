import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import moment from 'moment';


const HourlyWeatherItem = ({time,icon,maxTemp, ...props}) => {
    return (
        <li>
            <div>{moment(time*1000).format('ha')}</div>
            <WeatherIcon icon={icon} />
            <div>{maxTemp}</div>
        </li>
    );
};
export default HourlyWeatherItem;