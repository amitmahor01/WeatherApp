import React from "react";

function Highlights({ stats }) {
  return (
    <div className="bg-slate-600 p-2 text-slate-200 flex flex-col justify-start items-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
      <h2 className="text-sm mt-2">{stats.title}</h2>
      <div className="mt-2">
        <span className="font-bold text-2xl">{stats.value}</span>
        <span className="text-l">{stats.unit}</span>
      </div>
      {stats.direction ? (
        <div className="mt-2 flex text-l">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-slate-200 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          <div className="ms-2 text-slate-200">{stats.direction}</div>
        </div>
      ) : null}
      {
        stats.title == "Humidity"? (<div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mt-4">
          <div
            className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
            style={{ width: "45%" }}
          ></div>
        </div>) : null
        
      }
    </div>
  );
}

export default Highlights;
