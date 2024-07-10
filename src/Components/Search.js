import React from "react";



function Search({setCity, stat}) {
  const handleCityChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  return (
    
    <>
      <div className="flex justify-between">
        <input
          type="text"
          className="bg-slate-700 border border-slate-600 text-slate-200 placeholder-slate-400 text-md w-60 p-2 focus:outline-none focus:outline-slate-400"
          placeholder="Enter your city name"
          onChange={handleCityChange}
          defaultValue={"Jhansi"}
        />

        <div className="m-4 mr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-center mt-9">  {/*sun and moon */}
       <img src={stat.conditionIcon}/>
        
      </div>

      <div className="flex justify-center items-center text-slate-200 mt-5 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
          <p className="font-semibold text-[55px]">{stat.temp}</p><span>°C</span>
      </div>
      
      <div className="flex justify-center items-center text-slate-300 mt-8 text-[22px] text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
        {stat.condition} 
      </div>

      <div className="flex justify-center items-center text-slate-400 mt-4 text-[12px]">
        Today: {stat.time} | {stat.location}
      </div>
    </>
  );
}

export default Search;
