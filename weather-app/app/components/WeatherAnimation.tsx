"use client";

import React from "react";

interface WeatherAnimationProps {
  weatherCondition: string;
  weatherId: number;
}

function WeatherAnimation({ weatherCondition, weatherId }: WeatherAnimationProps) {
  // Weather condition mapping based on OpenWeatherMap weather IDs
  const getWeatherAnimation = () => {
    // Clear sky
    if (weatherId === 800) {
      return {
        emoji: "☀️",
        animation: "animate-pulse",
        description: "Clear sky"
      };
    }
    
    // Thunderstorm
    if (weatherId >= 200 && weatherId < 300) {
      return {
        emoji: "⛈️",
        animation: "animate-bounce",
        description: "Thunderstorm"
      };
    }
    
    // Drizzle
    if (weatherId >= 300 && weatherId < 400) {
      return {
        emoji: "🌦️",
        animation: "animate-pulse",
        description: "Drizzle"
      };
    }
    
    // Rain
    if (weatherId >= 500 && weatherId < 600) {
      return {
        emoji: "🌧️",
        animation: "animate-bounce",
        description: "Rain"
      };
    }
    
    // Snow
    if (weatherId >= 600 && weatherId < 700) {
      return {
        emoji: "❄️",
        animation: "animate-pulse",
        description: "Snow"
      };
    }
    
    // Atmosphere (fog, mist, etc.)
    if (weatherId >= 700 && weatherId < 800) {
      return {
        emoji: "🌫️",
        animation: "animate-pulse",
        description: "Fog"
      };
    }
    
    // Clouds
    if (weatherId >= 801 && weatherId <= 899) {
      return {
        emoji: "☁️",
        animation: "animate-pulse",
        description: "Cloudy"
      };
    }
    
    // Default sunny animation
    return {
      emoji: "🌤️",
      animation: "animate-pulse",
      description: "Partly cloudy"
    };
  };

  // Fallback animations using condition text
  const getFallbackAnimation = () => {
    const condition = weatherCondition.toLowerCase();
    
    if (condition.includes("rain") || condition.includes("drizzle")) {
      return {
        emoji: "🌧️",
        animation: "animate-bounce",
        description: "Rain"
      };
    }
    
    if (condition.includes("snow")) {
      return {
        emoji: "❄️",
        animation: "animate-pulse",
        description: "Snow"
      };
    }
    
    if (condition.includes("thunder") || condition.includes("storm")) {
      return {
        emoji: "⛈️",
        animation: "animate-bounce",
        description: "Thunderstorm"
      };
    }
    
    if (condition.includes("cloud") || condition.includes("overcast")) {
      return {
        emoji: "☁️",
        animation: "animate-pulse",
        description: "Cloudy"
      };
    }
    
    if (condition.includes("fog") || condition.includes("mist")) {
      return {
        emoji: "🌫️",
        animation: "animate-pulse",
        description: "Fog"
      };
    }
    
    // Default sunny animation
    return {
      emoji: "☀️",
      animation: "animate-pulse",
      description: "Clear sky"
    };
  };

  const weatherAnim = getWeatherAnimation() || getFallbackAnimation();

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-32 h-32 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-600/30 mb-4">
        <span className={`text-6xl ${weatherAnim.animation}`}>
          {weatherAnim.emoji}
        </span>
      </div>
      <div className="text-center">
        <p className="text-white/80 text-sm font-medium capitalize">
          {weatherAnim.description}
        </p>
        <p className="text-white/60 text-xs mt-1">
          {weatherCondition}
        </p>
      </div>
      
      {/* Note about replacing with actual animations */}
      <div className="mt-4 p-3 bg-slate-800/50 rounded-lg border border-slate-600/30 backdrop-blur-sm">
        <p className="text-white/50 text-xs text-center leading-relaxed">
          💡 This can be replaced with actual Lottie animations or dynamic background images based on weather conditions
        </p>
      </div>
    </div>
  );
}

export default WeatherAnimation; 