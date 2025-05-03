import { useState } from 'react';

const hours = ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM"];
const len = 24;

const HourlyForeCast = ({ title , hour, data, units}) => {
  return (
    <div className="bg-blue-800 shadow-sm rounded-lg p max-w mx-auto mt-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xl font-semibold text-gray-800 uppercase">{title}</p>
      </div>
      <hr className="border-gray-300 mb-3" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 items-center justify-around gap-10">
        {data &&
          data.map((d, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 items-center justify-center min-w-[50px] max-w-[100px] p-3 aspect-square  rounded-lg  transition-transform transform hover:scale-105"
            >
              <p className="text-md font-medium text-gray-900">
                {`${(index*3 + hour) % len}:00`}
              </p>
              <img
                src={d.iconURL}
                alt="weather-icon"
                className="w-16 h-16 my-2 rounded-full"
              />
              <p className="text-lg font-bold text-gray-700">{(units === "Celsius")? `${d.tempC}°c` :`${d.tempF}°f`}</p>
              <p className="text-xs text-black font-italic">{d.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HourlyForeCast