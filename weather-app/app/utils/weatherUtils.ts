/**
 * Weather utility functions for formatting and calculations
 */

export const getWindDirection = (degrees: number): string => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};

export const formatTime = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleString();
};

export const formatSunTime = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

export const getWeatherIcon = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

export const convertMpsToMph = (mps: number): number => {
  return mps * 2.237;
};

export const convertMetersToKm = (meters: number): number => {
  return meters / 1000;
};

export const formatTemperature = (temp: number): string => {
  return temp.toFixed(1);
};

export const formatPressure = (pressure: number): string => {
  return pressure.toString();
};

export const formatHumidity = (humidity: number): string => {
  return humidity.toString();
}; 