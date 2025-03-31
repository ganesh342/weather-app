// import React from 'react'
// const TopButtons = ({setQuery}) => {
//     const cities = [
//         {
//             id: 1,
//             name: "London",
//         },
//         {
//             id: 2,
//             name: "Sydney",
//         },
//         {
//             id: 3,
//             name: "Tokyo",
//         },
//         {
//             id: 4,
//             name: "Paris",
//         },
//         {
//             id: 5,
//             name: "Toronto",
//         },
//     ];
//   return (
//     <div className="flex items-center justify-around my-6">
//     {cities.map((city) =>(<button key={city.id} className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in" onClick={()=> setQuery({q:city.name,days:7})}>{city.name}</button>))}
//     </div>
//   );
// };

// export default TopButtons;

import React, { useState } from 'react';

function TopButtons({setQuery}) {
  const cities = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' },
    { id: 4, name: 'Houston' },
    { id: 5, name: 'Miami' }
  ];

  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setQuery({q:event.target.value,days:7})
  };

  const handleSearch = () => {
    // Add your search functionality here
    console.log(`Searching in ${selectedCity}`);
  };

  return (
      <div className="max-w-7xl mx-auto flex items-center justify-start gap-4">
        <select
          value={selectedCity}
          onChange={handleCityChange}
          className="appearance-none bg-white border-none rounded-full py-2 px-4 w-48 text-base font-sans cursor-pointer shadow-md hover:shadow-lg focus:shadow-outline focus:outline-none transition-all duration-300"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            backgroundColor:'burlywood'
          }}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

        {selectedCity && (
          <div className="flex items-center gap-2 text-white animate-fade-in">
            <span className="text-sm opacity-90">Selected:</span>
            <span className="text-base font-semibold bg-white/20 px-2 py-1 rounded-full">
              {selectedCity}
            </span>
          </div>
        )}
      </div>
  );
}

export default TopButtons;
