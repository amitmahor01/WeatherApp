"use client";

import { useEffect, useState } from "react";
import Highlights from "./components/Highlights";
import Search from "./components/Search";
import WeatherDetails from "./components/WeatherDetails";
import { getWeatherDataAPI, getWeatherByCoordinates, getUserLocation } from "./service/weather";
import { WeatherData } from "./types/weather";
import { 
  getWindDirection, 
  formatTime, 
  formatSunTime, 
  getWeatherIcon,
  convertMpsToMph,
  convertMetersToKm
} from "./utils/weatherUtils";

export default function Home() {
  const [city, setCity] = useState("Jhansi");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherByCity = async (cityName: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherDataAPI(cityName);
      setWeatherData(data);
    } catch (e: any) {
      setError(e.message || "Error fetching weather data");
      console.error("error ", e);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByLocation = async () => {
    setLoading(true);
    setError(null);
    try {
      const coords = await getUserLocation();
      const data = await getWeatherByCoordinates(coords.lat, coords.lon);
      setWeatherData(data);
      setCity(data.name);
    } catch (e: any) {
      setError(e.message || "Error getting location or fetching weather data");
      console.error("error ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherByCity(city);
  }, [city]);

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800/30 via-gray-800/30 to-zinc-800/30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zinc-700/15 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen p-4 lg:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
            Weather Dashboard
          </h1>
          <p className="text-white/70 text-lg">
            Get detailed weather information for any location
          </p>
        </div>

        {/* Main Layout - Two Columns */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Search (Half Width, Full Height) */}
          <div className="w-full lg:w-1/2">
            <div className="h-full">
              <Search
                setCity={handleCityChange}
                stat={{
                  temp: weatherData ? weatherData.main.temp.toString() : "",
                  condition: weatherData
                    ? weatherData.weather[0].description
                    : "",
                  time: weatherData ? formatTime(weatherData.dt) : "",
                  location: weatherData ? weatherData.name : "",
                  isDay: "1",
                  conditionIcon: weatherData
                    ? getWeatherIcon(weatherData.weather[0].icon)
                    : "",
                }}
                onGetLocation={fetchWeatherByLocation}
                locationLoading={loading}
                weatherId={weatherData?.weather[0]?.id}
              />

              {error && (
                <div className="mt-4 bg-red-900/30 border border-red-700/50 text-red-200 px-4 py-3 rounded-xl text-center text-sm backdrop-blur-sm">
                  {error}
                </div>
              )}
            </div>
          </div>
          
          {/* Right Column - Weather Tiles + Details (Half Width) */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 h-full">
              {/* Major Weather Tiles */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 text-center lg:text-left">
                  Current Conditions
                </h2>
                
                {weatherData && (
                  <div className="grid grid-cols-2 gap-4">
                    <Highlights
                      stats={{
                        title: "Wind Speed",
                        value: convertMpsToMph(weatherData.wind.speed).toFixed(1),
                        unit: "mph",
                        direction: getWindDirection(weatherData.wind.deg),
                      }}
                    />
                    <Highlights
                      stats={{
                        title: "Humidity",
                        value: weatherData.main.humidity,
                        unit: "%",
                      }}
                    />
                    <Highlights
                      stats={{
                        title: "Visibility",
                        value: convertMetersToKm(weatherData.visibility).toFixed(1),
                        unit: "km",
                      }}
                    />
                    <Highlights
                      stats={{
                        title: "Air Pressure",
                        value: weatherData.main.pressure,
                        unit: "mb",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Detailed Information */}
              {weatherData && (
                <WeatherDetails 
                  weatherData={weatherData}
                  getWindDirection={getWindDirection}
                  formatSunTime={formatSunTime}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center py-6">
        <p className="text-white/50 text-sm">
          Powered by OpenWeatherMap API • Built with Next.js & Tailwind CSS
        </p>
      </div>
    </div>
  );
}
