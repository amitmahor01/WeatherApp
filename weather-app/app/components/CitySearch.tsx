"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { CitySuggestion } from "../types/weather";
import { getCitySuggestions } from "../service/weather";

interface CitySearchProps {
  onCitySelect: (city: string) => void;
  onGetLocation: () => void;
  locationLoading: boolean;
}

interface GeocodingResponse {
  name: string;
  country: string;
  state?: string;
  lat: number;
  lon: number;
}

function CitySearch({ onCitySelect, onGetLocation, locationLoading }: CitySearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounced search function
  const debouncedSearch = (query: string) => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setLoading(true);
    searchTimeoutRef.current = setTimeout(async () => {
      try {
        const data = await getCitySuggestions(query);
        console.log('City suggestions:', data);
        
        const citySuggestions: CitySuggestion[] = data.map((city: GeocodingResponse) => ({
          name: city.name,
          country: city.country,
          state: city.state,
          lat: city.lat,
          lon: city.lon
        }));
        
        setSuggestions(citySuggestions);
        setShowSuggestions(citySuggestions.length > 0);
      } catch (error) {
        console.error("Error fetching city suggestions:", error);
        setSuggestions([]);
        setShowSuggestions(false);
      } finally {
        setLoading(false);
      }
    }, 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleCitySelect = (city: CitySuggestion) => {
    console.log('Selected city:', city);
    setSearchTerm(city.name);
    setShowSuggestions(false);
    setSuggestions([]);
    onCitySelect(city.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onCitySelect(searchTerm.trim());
      setShowSuggestions(false);
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex space-x-3">
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search for a city..."
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {loading ? (
                <FontAwesomeIcon 
                  icon={faSpinner} 
                  className="w-5 h-5 text-white animate-spin"
                />
              ) : (
                <FontAwesomeIcon 
                  icon={faSearch} 
                  className="w-5 h-5 text-white/60"
                />
              )}
            </div>
          </div>
          
          {/* Location Button */}
          <button
            type="button"
            onClick={onGetLocation}
            disabled={locationLoading}
            className="bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-500 hover:to-gray-600 disabled:from-gray-700 disabled:to-gray-800 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center min-w-[60px]"
          >
            {locationLoading ? (
              <FontAwesomeIcon 
                icon={faSpinner} 
                className="w-5 h-5 animate-spin"
              />
            ) : (
              <FontAwesomeIcon 
                icon={faLocationArrow} 
                className="w-5 h-5"
              />
            )}
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-md border border-slate-600/50 rounded-xl overflow-hidden z-50 max-h-60 overflow-y-auto">
            {suggestions.map((city, index) => (
              <div
                key={`${city.name}-${city.country}-${index}`}
                onClick={() => handleCitySelect(city)}
                className="px-4 py-3 hover:bg-slate-700/50 cursor-pointer transition-colors duration-200 border-b border-slate-600/30 last:border-b-0"
              >
                <div className="text-white font-medium">{city.name}</div>
                <div className="text-white/60 text-sm">
                  {city.state && `${city.state}, `}{city.country}
                </div>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default CitySearch; 