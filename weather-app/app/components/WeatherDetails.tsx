"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../utils/icons";

interface WeatherDetailsProps {
  weatherData: any;
  getWindDirection: (degrees: number) => string;
  formatSunTime: (timestamp: number) => string;
}

function WeatherDetails({ weatherData, getWindDirection, formatSunTime }: WeatherDetailsProps) {
  const details = [
    {
      title: "Temperature Range",
      value: `${weatherData.main.temp_min.toFixed(1)}° - ${weatherData.main.temp_max.toFixed(1)}°`,
      unit: "C",
      icon: "temperature range"
    },
    {
      title: "Feels Like",
      value: weatherData.main.feels_like.toFixed(1),
      unit: "°C",
      icon: "feels like"
    },
    {
      title: "Wind Gust",
      value: weatherData.wind.gust ? (weatherData.wind.gust * 2.237).toFixed(1) : "N/A",
      unit: weatherData.wind.gust ? "mph" : "",
      icon: "wind gust"
    },
    {
      title: "Cloud Cover",
      value: weatherData.clouds.all,
      unit: "%",
      icon: "cloud cover"
    },
    {
      title: "Rain (1h)",
      value: weatherData.rain && weatherData.rain["1h"] ? weatherData.rain["1h"] : "N/A",
      unit: weatherData.rain && weatherData.rain["1h"] ? "mm" : "",
      icon: "rain (1h)"
    },
    {
      title: "Rain (3h)",
      value: weatherData.rain && weatherData.rain["3h"] ? weatherData.rain["3h"] : "N/A",
      unit: weatherData.rain && weatherData.rain["3h"] ? "mm" : "",
      icon: "rain (3h)"
    },
    {
      title: "Snow (1h)",
      value: weatherData.snow && weatherData.snow["1h"] ? weatherData.snow["1h"] : "N/A",
      unit: weatherData.snow && weatherData.snow["1h"] ? "mm" : "",
      icon: "snow (1h)"
    },
    {
      title: "Snow (3h)",
      value: weatherData.snow && weatherData.snow["3h"] ? weatherData.snow["3h"] : "N/A",
      unit: weatherData.snow && weatherData.snow["3h"] ? "mm" : "",
      icon: "snow (3h)"
    },
    {
      title: "Sunrise",
      value: formatSunTime(weatherData.sys.sunrise),
      unit: "",
      icon: "sunrise"
    },
    {
      title: "Sunset",
      value: formatSunTime(weatherData.sys.sunset),
      unit: "",
      icon: "sunset"
    },
    {
      title: "Coordinates",
      value: `${weatherData.coord.lat.toFixed(4)}, ${weatherData.coord.lon.toFixed(4)}`,
      unit: "",
      icon: "coordinates"
    }
  ].filter(detail => detail.value !== "N/A");

  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-4">
      <h3 className="text-lg font-bold text-white mb-4 text-center">
        Detailed Information
      </h3>
      
      <div className="space-y-2">
        {details.map((detail, index) => (
          <div 
            key={index}
            className="flex items-center justify-between py-2 px-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/40 transition-colors duration-200"
          >
            <div className="flex items-center space-x-2">
              <div className="bg-slate-600/40 p-1.5 rounded-lg">
                <FontAwesomeIcon 
                  icon={getWeatherIcon(detail.icon)} 
                  className="w-3 h-3 text-slate-300"
                />
              </div>
              <span className="text-white/90 font-medium text-xs">{detail.title}</span>
            </div>
            
            <div className="flex items-baseline space-x-1">
              <span className="text-sm font-semibold text-white">{detail.value}</span>
              {detail.unit && <span className="text-xs text-white/70">{detail.unit}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDetails; 