import {
  faThermometerHalf, faThermometerEmpty, faWind, faTachometerAlt,
  faTint, faEye, faCloud, faCloudRain, faSnowflake, faSun,
  faMoon, faMapMarkerAlt, faCompass, faThermometerThreeQuarters
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const weatherIcons = {
  temperature: faThermometerHalf,
  temperatureRange: faThermometerEmpty,
  feelsLike: faThermometerThreeQuarters,
  windSpeed: faWind,
  windGust: faTachometerAlt,
  windDirection: faCompass,
  humidity: faTint,
  visibility: faEye,
  airPressure: faTachometerAlt,
  cloudCover: faCloud,
  rain: faCloudRain,
  snow: faSnowflake,
  sunrise: faSun,
  sunset: faMoon,
  coordinates: faMapMarkerAlt,
  details: faThermometerHalf, // Default for detailed info header
};

export const getWeatherIcon = (metric: string): IconDefinition => {
  const iconMap: { [key: string]: IconDefinition } = {
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
    'details': weatherIcons.details,
  };
  return iconMap[metric.toLowerCase()] || faThermometerHalf;
}; 