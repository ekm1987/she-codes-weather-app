import React from 'react';
import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy, WiCloud, WiRain, WiShowers, WiNightAltShowers, WiNightRain, WiThunderstorm, WiNightAltThunderstorm,
    WiSnow, WiFog } from "react-icons/wi";
    
    class WeatherIcon extends React.Component {
    
        constructor(props) {
            super(props);
    
            this.state = {
                icon: ''
            };
        };
    
        render() {
            
            const icons = {
                "01d": WiDaySunny,
                "01n": WiNightClear,
                "02d": WiDayCloudy,
                "02n": WiNightAltCloudy,
                "03d": WiCloud,
                "03n": WiCloud,
                "04d": WiDayCloudy,
                "04n": WiNightAltCloudy,
                "09d": WiShowers,
                "09n": WiNightAltShowers,
                "10d": WiRain,
                "10n": WiNightRain,
                "11d": WiThunderstorm,
                "11n": WiNightAltThunderstorm,
                "13d": WiSnow,
                "13n": WiSnow,
                "50d": WiFog,
                "50n": WiFog,
            };
            const IconCode = icons[this.props.icon];
            return (
                <>
                    <IconCode />
                </>
            )
        }
    }  

  

export default WeatherIcon;


// import React from 'react';
// import './WeatherIcon.css';
// import { WiDayThunderstorm, WiNightThunderstorm, WiDayShowers, WiNightShowers, WiDayRain, WiNightRain, WiDaySnow, WiNightSnow, WiDayFog, WiNightFog, WiDaySunny, WiNightClear, WiDayCloudy, WiNightCloudy, WiDayCloudyHigh, WiNightCloudyHigh, WiDayCloudyWindy, WiNightCloudyWindy} from "react-icons/wi";



// const icons = {
//   "01d": <WiDaySunny />,
//   "01n": <WiNightClear />,
//   "02d": <WiDayCloudy />,
// 	"02n": <WiNightCloudy />,
// 	"03d": <WiDayCloudyHigh />,
// 	"03n": <WiNightCloudyHigh />,
//   "04d": <WiDayCloudyWindy />,
//   "04n": <WiNightCloudyWindy />,
//   "09d": <WiDayShowers />,
//   "09n": <WiNightShowers />,
//   "10d": <WiDayRain />,
//   "10n": <WiNightRain />,
//   "11d": <WiDayThunderstorm />,
//   "11n": <WiNightThunderstorm />,
//   "13d": <WiDaySnow />,
//   "13n": <WiNightSnow />,
//   "50d": <WiDayFog />,
//   "50n": <WiNightFog />,
//   } 

// const WeatherIcon = ({ icon, ...props }) => {

//   console.log(icons)

//   return (
//     <div>
//     {icons[icon] && icons[icon]}
//     </div>
//   );

// };


// export default WeatherIcon;