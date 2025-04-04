import {useState} from "react";

export default function Units({setUnits}) {

    const [isDropdownFocused, setIsDropdownFocused] = useState(false);

    const units = [
      { id: 1, name: "Celsius", value: "metric" }, // 'metric' for Celsius in most weather APIs
      { id: 2, name: "Fahrenheit", value: "imperial" }, // 'imperial' for Fahrenheit
    ];
  

    const handleUnitChange = (event) => {
      const selectUnit = event.target.value;// Update the units in the parent component
      setUnits(selectUnit);
    };
  
    return (
        <div className="relative w-48">
        <select
        onChange={handleUnitChange}
          className="w-full p-3 bg-blue-500 border border-gray-300 rounded-lg text-black font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all appearance-none cursor-pointer"
          title="Select Units"  onFocus={() => setIsDropdownFocused(true)}
          onBlur={() => setIsDropdownFocused(false)}
        >
          {units.map((unit) => (
            <option key={unit.id} value={unit.name}>
              {unit.name}
            </option>
          ))}
        </select>
        {/* Custom Arrow */}
        <span
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-transform duration-200 ${
              isDropdownFocused ? 'rotate-180' : 'rotate-0'
            }`}
          >
            ▼
          </span>
      </div>
    );
  }