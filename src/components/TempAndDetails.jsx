// import { FaThermometerEmpty } from "react-icons/fa";
// import { BiSolidDropletHalf } from "react-icons/bi";
// import { FiWind } from "react-icons/fi";
// import { WiRain } from 'react-icons/wi';
// import { GiSunrise, GiSunset } from "react-icons/gi";
// import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

// const TempAndDetails = ({ weather }) => {
//   const verticalDetails = [
//     {
//       id: 1,
//       Icon: FaThermometerEmpty,
//       title: "Real Feel",
//       value: `${weather.feelslike_c}°`,
//     },
//     {
//       id: 2,
//       Icon: BiSolidDropletHalf,
//       title: "Humidity",
//       value: `${weather.humidity}%`,
//     },
//     {
//       id: 3,
//       Icon: FiWind,
//       title: "Wind",
//       value: `${weather.wind_mph} mp/h`,
//     },
//     {
//       id: 4,
//       Icon: WiRain,
//       title: "Precipitation",
//       value: `${weather.precip_mm} mm`,
//     },
//   ];

//   const horizontalDetails = [
//     {
//       id: 1,
//       Icon: GiSunrise,
//       title: "Sunrise",
//       value: weather.sunrise,
//     },
//     {
//       id: 2,
//       Icon: GiSunset,
//       title: "Sunset",
//       value: weather.sunset,
//     },
//     {
//       id: 3,
//       Icon: MdKeyboardArrowUp,
//       title: "High",
//       value: `${weather.heatindex_c}°`,
//     },
//     {
//       id: 4,
//       Icon: MdKeyboardArrowDown,
//       title: "Low",
//       value: `${weather.dewpoint_c}°`,
//     },
//   ];

//   return (
//     <div>
//       {/* Weather Condition */}
//       <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
//         <p>{weather.details}</p>
//       </div>

//       {/* Main Weather Info */}
//       <div className="flex flex-row items-start justify-between py-3">
//         {/* Primary Details (Horizontal Grid) */}
//         <div className="grid grid-cols-4 gap-10 bg-opacity-90 p-4 rounded-lg">
//           {verticalDetails.map(({ id, Icon, title, value }) => (
//             <div key={id} className="flex flex-col items-center text-white from-blue-500 to-blue-600">
//               <Icon size={40} className="text-blue-300" />
//               <p className="text-lg font-medium mt-2">{value}</p>
//               <p className="text-lg font-light mt-2 text-blue-200">{title}</p>
//             </div>
//           ))}
//         </div>

//         {/* Secondary Details (Vertical List Beside Primary) */}
//         <div className="flex flex-col items-start bg-blue-800 bg-opacity-90 p-4 rounded-lg ml-4">
//           {horizontalDetails.map(({ id, Icon, title, value }) => (
//             <div key={id} className="flex flex-row items-center mb-2 last:mb-0">
//               <Icon size={15} className="text-blue-300 mr-2" />
//               <div className="text-white">
//                 <p className="text-sm font-light text-blue-200">{title}</p>
//                 <p className="text-sm font-medium">{value}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// export default TempAndDetails;

import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { WiRain } from 'react-icons/wi';
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TempAndDetails = ({ weather , units}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${(units === "Celsius")? `${weather.temp_c}°c` :`${weather.temp_f}°f`}`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${weather.humidity}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${weather.wind_mph} mp/h`,
    },
    {
      id: 4,
      Icon: WiRain,
      title: "Precipitation",
      value: `${weather.precip_mm} mm`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: weather.sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: weather.sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${(units === "Celsius")? `${weather.heatindex_c}°c` :`${weather.heatindex_f}°f`}`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${(units === "Celsius")? `${weather.dewpoint_c}°c` :`${weather.dewpoint_f}°f`}`,
    },
  ];

  return (
    <div className="p-4">
      {/* Weather Condition */}
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{weather.details}</p>
      </div>

      {/* Main Weather Info */}
      <div className="flex flex-row items-start justify-between py-3 space-x-4">
        {/* Primary Details (Card Layout) */}
        <div className="grid grid-cols-4 gap-4 w-full">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex flex-col items-center bg-gradient-to-b from-blue-500 to-blue-600 p-4 rounded-lg shadow-md text-white"
            >
              <Icon size={40} className="text-blue-300 mb-2" />
              <p className="text-lg mt-3 font-bold">{value}</p>
              <p className="text-lg mt-3 font-light text-blue-200">{title}</p>
            </div>
          ))}
        </div>

        {/* Secondary Details (Vertical List Beside Primary) */}
        <div className="flex flex-col items-start bg-blue-800 bg-opacity-90 p-4 rounded-lg shadow-md ml-4 w-1/4">
          {horizontalDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className="flex flex-row items-center mb-3 last:mb-0">
              <Icon size={20} className="text-blue-300 mr-2" />
              <div className="text-white">
                <p className="text-sm font-light text-blue-200">{title}</p>
                <p className="text-sm font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TempAndDetails;

