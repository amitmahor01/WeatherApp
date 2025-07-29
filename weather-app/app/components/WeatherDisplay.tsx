"use client";

import React from "react";
import Image from "next/image";
import WeatherAnimation from "./WeatherAnimation";

interface WeatherDisplayProps {
  temp: string;
  condition: string;
  time: string;
  location: string;
  conditionIcon: string;
  weatherId?: number;
}

function WeatherDisplay({ 
  temp, 
  condition, 
  time, 
  location, 
  conditionIcon, 
  weatherId 
}: WeatherDisplayProps) {
  return (
    <div className="text-center">
      {/* Weather Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <Image
            src={conditionIcon}
            alt="weather condition"
            width={64}
            height={64}
            className="w-16 h-16"
          />
        </div>
      </div>

      {/* Temperature */}
      <div className="mb-4">
        <div className="flex justify-center items-center">
          <span className="text-6xl font-bold text-white">{temp}</span>
          <span className="text-2xl text-white/80 ml-2">°C</span>
        </div>
      </div>

      {/* Condition */}
      <div className="mb-4">
        <h3 className="text-xl text-white/90 font-medium capitalize">
          {condition}
        </h3>
      </div>

      {/* Location and Time */}
      <div className="space-y-2 mb-6">
        <div className="text-white/80 text-lg font-medium">
          {location}
        </div>
        <div className="text-white/60 text-sm">
          {time}
        </div>
      </div>

      {/* Weather Animation */}
      {weatherId && (
        <WeatherAnimation 
          weatherCondition={condition}
          weatherId={weatherId}
        />
      )}
    </div>
  );
}

export default WeatherDisplay; 