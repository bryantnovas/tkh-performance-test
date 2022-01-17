import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiRain,
  WiDayRain,
  WiNightRain,
  WiThunderstorm,
  WiSnowflakeCold,
  WiFog
} from "react-icons/wi";

export default function WeatherIcon({ code, size }) {
  switch (code) {
    case '01d':
      return <WiDaySunny size={size} />;
    case '01n':
      return <WiNightClear size={size} />;
    case '02d':
      return <WiDayCloudy size={size} />;
    case '02n':
      return <WiNightAltCloudy size={size} />;
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return <WiCloud size={size} />;
    case '09d':
    case '09n':
      return <WiRain size={size} />;
    case '10d':
      return <WiDayRain size={size} />;
    case '10n':
      return <WiNightRain size={size} />;
    case '11d':
    case '11n':
      return <WiThunderstorm size={size} />;
    case '13d':
    case '13n':
      return <WiSnowflakeCold size={size} />;
    case '50d':
    case '50n':
      return <WiFog size={size} />;
    default:
      return <WiDaySunny size={size} />;
  }
}