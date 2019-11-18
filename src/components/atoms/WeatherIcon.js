import React from 'react';
import { WiDayThunderstorm, WiNightThunderstorm, WiDayShowers, WiNightShowers, WiDayRain, WiNightRain, WiDaySnow, WiNightSnow, WiDayFog, WiNightFog, WiDaySunny, WiNightClear, WiDayCloudy, WiNightCloudy, WiDayCloudyHigh, WiNightCloudyHigh, WiDayCloudyWindy, WiNightCloudyWindy} from "react-icons/wi";

const icons = {
  "01d": <WiDaySunny />,
  "01n": <WiNightClear />,
  "02d": <WiDayCloudy />,
	"02n": <WiNightCloudy />,
	"03d": <WiDayCloudyHigh />,
	"03n": <WiNightCloudyHigh />,
  "04d": <WiDayCloudyWindy />,
  "04n": <WiNightCloudyWindy />,
  "09d": <WiDayShowers />,
  "09n": <WiNightShowers />,
  "10d": <WiDayRain />,
  "10n": <WiNightRain />,
  "11d": <WiDayThunderstorm />,
  "11n": <WiNightThunderstorm />,
  "13d": <WiDaySnow />,
  "13n": <WiNightSnow />,
  "50d": <WiDayFog />,
  "50n": <WiNightFog />,
  } 

const WeatherIcon = ({ icon, ...props }) => {

  console.log(icons)

  return (
    <div>
    {icons[icon] && icons[icon]}
    </div>
  );

};


export default WeatherIcon;