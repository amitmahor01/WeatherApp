import { useEffect, useState } from "react";
import "./App.css";
import Highlights from "./Components/Highlights";
import Search from "./Components/Search";
import { getWeatherDataAPI } from "./service/weather";

const WEATHER_API = process.env.REACT_APP_WEATHER_API_URL;
console.warn("weather api url ", WEATHER_API);
function App() {
  const [city, setCity] = useState("Jhansi");
  const [weatherData, setWeatherData] = useState(null);
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=9739825703ae43409cf170748240507&q=${city}&aqi=yes`;

  useEffect(() => {
    // fetch(apiURL)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Error! ");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setWeatherData(data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    getWeatherDataAPI(city).then((response) => {
      console.warn("response ", response);
      if (response) {
        if(response.status === 200){
          setWeatherData(response.data);
        }
      }
    }).catch((e)=>{
      console.error("error ",e);
    });

  }, [city]);

  return (
    <>
      <div className="bg-slate-800 h-screen flex justify-center align-top">
        <div className="bg-slate-800 mt-40 w-1/4 h-1/2">
          {weatherData && (
            <Search
              setCity={setCity}
              stat={{
                temp: weatherData ? weatherData.current.temp_c : "",
                condition: weatherData
                  ? weatherData.current.condition.text
                  : "",
                time: weatherData ? weatherData.location.localtime : "",
                location: weatherData ? weatherData.location.name : "",
                isDay: weatherData ? weatherData.current.condition.is_day : "",
                conditionIcon: weatherData
                  ? weatherData.current.condition.icon
                  : "",
              }}
            />
          )}
        </div>
        <div className=" mt-[90px] w-1/3 h-1/2 p-10 grid grid-cols-2 gap-5">
          <h2 className="text-slate-200 text-2xl col-span-2">
            Today's Highlight
          </h2>
          {weatherData && (
            <>
              <Highlights
                stats={{
                  title: "Wind speed",
                  value: weatherData.current.wind_mph,
                  unit: "mph",
                  direction: weatherData.current.wind_dir,
                }}
              />
              <Highlights
                stats={{
                  title: "Humidity",
                  value: weatherData.current.humidity,
                  unit: "%",
                }}
              />
              <Highlights
                stats={{
                  title: "Visibility",
                  value: weatherData.current.vis_miles,
                  unit: "miles",
                }}
              />
              <Highlights
                stats={{
                  title: "Air Pressue",
                  value: weatherData.current.pressure_mb,
                  unit: "mb",
                }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
