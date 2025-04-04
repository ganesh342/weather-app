

// const TimeAndLocation = ({ weather:{local,date_time, name, country},}) => {
//   const [dayDate, timePart] = local.split(' | ');
//   const [day, date] = dayDate.split(',');
//   const time = timePart.replace('Local time: ', '');
//   return (
//     <div className="mt-4">
//       <div className="bg-white p-4 rounded-xl shadow-lg max-w-4xl w-full flex items-center justify-between bg-gradient-to-r from-yellow-600 to-orange-700 transform transition-all hover:shadow-xl">
//         {/* Day */}
//         <div className="flex-1 text-center border-r border-blue-200 pr-4">
//           <span className="block text-2xl font-semibold text-blue-700">{day}</span>
//         </div>
//         {/* Date */}
//         <div className="flex-1 text-center border-r border-blue-200 px-4">
//           <span className="block text-2xl font-semibold text-blue-700">{date}</span>
//         </div>
//         {/* Time */}
//         <div className="flex-1 text-center pl-4">
//           <span className="block text-2xl font-semibold text-blue-700">{time}</span>
//         </div>
//       </div>
//       {/* <div className="flex items-center justify-center my-6">
//           <p className="text-xl font-extralight">
//             {local}
//           </p>
//       </div> */}
//     <div className="flex items-center justify-center my-3 mb-14">
//     <p className="text-3xl font-medium">{name},{country}</p>
//     </div>
//     </div>
//   )
// }

import React from 'react';


const TimeAndLocation = ({ weather: { local, name, country, temp_c ,icons} }) => {
  // Split the local string: "Tuesday,01 Apr 2025 | Local time: 04:02 PM"
  const [dayDate, timePart] = local.split(' | ');
  const [day, date] = dayDate.split(',');

  return (
    <div className="mt-6 px-4 from-blue-500 to-blue-600">
      {/* City, Country, Temp, Date, and Day Card */}
      <div className="from-blue-500 to-blue-600 bg-opacity-90 p-4 rounded-lg shadow-lg max-w-4xl w-full flex items-center justify-between text-white">
        {/* Left Section: City, Country, Date, and Day */}
        <div className="flex-1">
          {/* City */}
          <h1 className="text-4xl font-bold uppercase">{name}</h1>
          {/* Country */}
          <p className="text-lg font-light text-blue-200">{country}</p>
          {/* Date and Day */}
          <p className="text-lg font-light mt-1">{date} {day}</p>
        </div>

        {/* Right Section: Temperature */}
        <div className="text-3xl font-semibold">
        <img src={icons} alt="weather-icon" className="w-37" />
        </div>
      </div>
    </div>
  );
};

export default TimeAndLocation
