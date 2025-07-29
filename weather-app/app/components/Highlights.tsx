"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeatherIcon } from "../utils/icons";

interface HighlightsProps {
  stats: {
    title: string;
    value: string | number;
    unit: string;
    direction?: string;
  };
}

function Highlights({ stats }: HighlightsProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:from-slate-700/80 hover:to-slate-800/80 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-slate-600/30 p-2 rounded-lg group-hover:bg-slate-500/40 transition-colors duration-300">
            <FontAwesomeIcon 
              icon={getWeatherIcon(stats.title)} 
              className="w-5 h-5 text-slate-300"
            />
          </div>
          <h3 className="text-white/90 font-medium text-sm">{stats.title}</h3>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-baseline space-x-1">
          <span className="text-3xl font-bold text-white">{stats.value}</span>
          {stats.unit && <span className="text-lg text-white/70">{stats.unit}</span>}
        </div>

        {stats.direction && (
          <div className="flex items-center space-x-2 text-white/80">
            <FontAwesomeIcon 
              icon={getWeatherIcon("wind direction")} 
              className="w-4 h-4"
            />
            <span className="text-sm">{stats.direction}</span>
          </div>
        )}

        {stats.title.toLowerCase() === "humidity" && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-white/60">
              <span>0%</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-slate-600/30 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-slate-400 to-slate-300 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.value}%` }}
              ></div>
            </div>
          </div>
        )}

        {stats.title.toLowerCase() === "cloud cover" && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-white/60">
              <span>0%</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-slate-600/30 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-slate-400 to-slate-300 h-2 rounded-full transition-all duration-500"
                style={{ width: `${stats.value}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Highlights; 