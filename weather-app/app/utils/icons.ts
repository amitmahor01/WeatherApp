import { 
  faThermometerHalf, 
  faThermometerEmpty, 
  faWind, 
  faTachometerAlt,
  faTint, 
  faEye, 
  faCloud, 
  faCloudRain, 
  faSnowflake, 
  faSun, 
  faMoon, 
  faMapMarkerAlt,
  faCompass,
  faThermometerThreeQuarters,
  faThermometerQuarter,
  faThermometerFull
} from '@fortawesome/free-solid-svg-icons';

export const weatherIcons = {
  // Temperature related
  temperature: faThermometerHalf,
  temperatureRange: faThermometerEmpty,
  feelsLike: faThermometerThreeQuarters,
  
  // Wind related
  windSpeed: faWind,
  windGust: faTachometerAlt,
  windDirection: faCompass,
  
  // Atmospheric
  humidity: faTint,
  visibility: faEye,
  airPressure: faTachometerAlt,
  cloudCover: faCloud,
  
  // Precipitation
  rain: faCloudRain,
  snow: faSnowflake,
  
  // Sun/Moon
  sunrise: faSun,
  sunset: faMoon,
  
  // Location
  coordinates: faMapMarkerAlt,
};

export const getWeatherIcon = (metric: string) => {
  const iconMap: { [key: string]: any } = {
    'temperature range': weatherIcons.temperatureRange,
    'feels like': weatherIcons.feelsLike,
    'wind speed': weatherIcons.windSpeed,
    'wind gust': weatherIcons.windGust,
    'humidity': weatherIcons.humidity,
    'visibility': weatherIcons.visibility,
    'air pressure': weatherIcons.airPressure,
    'cloud cover': weatherIcons.cloudCover,
    'rain (1h)': weatherIcons.rain,
    'rain (3h)': weatherIcons.rain,
    'snow (1h)': weatherIcons.snow,
    'snow (3h)': weatherIcons.snow,
    'sunrise': weatherIcons.sunrise,
    'sunset': weatherIcons.sunset,
    'coordinates': weatherIcons.coordinates,
  };
  
  return iconMap[metric.toLowerCase()] || weatherIcons.temperature;
}; 