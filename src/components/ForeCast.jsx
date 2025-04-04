import { useState } from 'react';

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const len = 7;

const ForeCast = ({ title, day, data, units}) => {
  return (
    <div className="bg-blue-800 shadow-lg rounded-lg p-4 max-w mx-auto mt-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xl font-semibold text-gray-800 uppercase">{title}</p>
      </div>
      <hr className="border-gray-300 mb-3" />

      <div className="flex items-center justify-around gap-10">
        {data &&
          data.map((d, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 items-center justify-center min-w-[100px] max-w-[200px] p-3 aspect-square bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <p className="text-sm font-medium text-gray-600">
                {days[(index + day + 1) % len]}
              </p>
              <img
                src={d.icon}
                alt="weather-icon"
                className="w-16 h-16 my-2 shadow-md rounded-full"
              />
              <p className="text-lg font-bold text-gray-700">{(units === "Celsius")? `${d.tempc}°c` :`${d.tempf}°f`}</p>
              <p className="text-sm text-black font-italic">{d.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ForeCast;

