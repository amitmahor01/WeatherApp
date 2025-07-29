import { WeatherData } from "../types/weather";

interface GeocodingResponse {
  name: string;
  country: string;
  state?: string;
  lat: number;
  lon: number;
}

/**
 * Weather service functions using Next.js API routes
 */

export const getWeatherDataAPI = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch weather data');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in getWeatherDataAPI:', error);
    throw error;
  }
};

export const getWeatherByCoordinates = async (lat: number, lon: number): Promise<WeatherData> => {
  try {
    const response = await fetch(`/api/weather/coordinates?lat=${lat}&lon=${lon}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch weather data');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in getWeatherByCoordinates:', error);
    throw error;
  }
};

export const getCitySuggestions = async (query: string): Promise<GeocodingResponse[]> => {
  try {
    const response = await fetch(`/api/geocode?q=${encodeURIComponent(query)}&limit=5`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch city suggestions');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in getCitySuggestions:', error);
    throw error;
  }
};

export const getUserLocation = (): Promise<{ lat: number; lon: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  });
}; 