"use client";

import React from "react";
import CitySearch from "./CitySearch";
import WeatherDisplay from "./WeatherDisplay";

interface SearchProps {
  setCity: (city: string) => void;
  stat: {
    temp: string;
    condition: string;
    time: string;
    location: string;
    isDay: string;
    conditionIcon: string;
  };
  onGetLocation: () => void;
  locationLoading: boolean;
  weatherId?: number;
}

function Search({ setCity, stat, onGetLocation, locationLoading, weatherId }: SearchProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-2xl p-6 shadow-2xl backdrop-blur-sm border border-slate-600/30 h-full">
      {/* Search Section */}
      <CitySearch
        onCitySelect={setCity}
        onGetLocation={onGetLocation}
        locationLoading={locationLoading}
      />

      {/* Weather Display */}
      {stat.temp && (
        <WeatherDisplay
          temp={stat.temp}
          condition={stat.condition}
          time={stat.time}
          location={stat.location}
          conditionIcon={stat.conditionIcon}
          weatherId={weatherId}
        />
      )}
    </div>
  );
}

export default Search; 