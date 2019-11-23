import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';
import moment from 'moment';
import './DailyWeather.css';


const DailyWeatherItem = ({epoch, icon, list, maxTemp, minTemp, onDailyClick, showHourly, ...props}) => {
    return (
        <>
            <div class="DWblock" onClick={onDailyClick}>
                    <h3 class="DWtitle">{moment(epoch*1000).format('dddd')}</h3>
                        <div class="DWtempblock">
                            <div class="DWicon"><WeatherIcon icon={icon}/></div>
                            <div class="DWmaxmin"><b>{maxTemp}</b></div>
                            <div class="DWmaxmin">{minTemp}</div>
                        </div>
                </div>
            {showHourly && <HourlyWeather list={list} />}
        </>
    )
}

export default DailyWeatherItem;