/**
 * Weather-related TypeScript interfaces and types
 */

export interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
    sea_level?: number;
    grnd_level?: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  visibility: number;
  name: string;
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  rain?: {
    "1h"?: number;
    "3h"?: number;
  };
  snow?: {
    "1h"?: number;
    "3h"?: number;
  };
  clouds: {
    all: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
}

export interface WeatherStat {
  temp: string;
  condition: string;
  time: string;
  location: string;
  isDay: string;
  conditionIcon: string;
}

export interface CitySuggestion {
  name: string;
  country: string;
  state?: string;
  lat?: number;
  lon?: number;
}

export interface WeatherHighlight {
  title: string;
  value: string | number;
  unit: string;
  direction?: string;
}

export interface WeatherDetail {
  title: string;
  value: string | number;
  unit: string;
  icon: string;
}

export interface WeatherAnimationData {
  emoji: string;
  animation: string;
  description: string;
} 