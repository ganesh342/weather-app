import {BiSearch,BiCurrentLocation} from "react-icons/bi";
import {useState} from "react";
import Units from './Units';
const Inputs = ({setQuery,units,setUnits}) => {
  const [city, setCity] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [cities] = useState([
    "New York City",
    "Toronto",
    "Mexico City",
    "Los Angeles",
    "Vancouver",
    "Chicago",
    "Havana",
    "Guatemala City",
    "Panama City",
    "Montreal",
    "São Paulo",
    "Buenos Aires",
    "Rio de Janeiro",
    "Lima",
    "Bogotá",
    "Santiago",
    "Caracas",
    "Quito",
    "Montevideo",
    "La Paz",
    "London",
    "Paris",
    "Berlin",
    "Rome",
    "Madrid",
    "Amsterdam",
    "Vienna",
    "Prague",
    "Warsaw",
    "Athens",
    "Lagos",
    "Cairo",
    "Johannesburg",
    "Nairobi",
    "Casablanca",
    "Addis Ababa",
    "Accra",
    "Dakar",
    "Algiers",
    "Tunis",
    "Tokyo",
    "Beijing",
    "Delhi",
    "Bangkok",
    "Seoul",
    "Mumbai",
    "Jakarta",
    "Singapore",
    "Manila",
    "Hanoi",
    "Sydney",
    "Auckland",
    "Melbourne",
    "Brisbane",
    "Wellington",
    "Perth",
    "Adelaide",
    "Suva",
    "Hobart",
    "Nouméa"
  ]
  );
  const handleSuggestionClick = (suggestion) => {
    setSelectedCity(suggestion);
    setCity(suggestion);
    setFilteredCities([]);
    setQuery({q:suggestion,days:7});
  };
  const handleSearchClick = () =>{
    if(city !== "") setQuery({q:city,days:7});
  };
   
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSelectedCity(value);
    setCity(value);

    // Filter cities based on input
    if (value) {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  // Example usage
  async function getCityFromLatLng(lat, lng) {
    // Construct the API URL with English language preference
    const baseUrl = import.meta.env.VITE_REACT_APP_MAP_API_BASE_URL;
    const url = `${baseUrl}?lat=${lat}&lon=${lng}&format=json&zoom=10&accept-language=en`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.address) {
        // Check multiple fields to find the city name
        const city = 
          data.address.city ||              // Standard city field
          data.address.town ||              // For smaller towns
          data.address.village ||           // For rural areas
          data.address.suburb ||            // Neighborhoods
          data.address.state_district ||    // Administrative regions (common in India)
          "City not found";
        
        console.log(`The city is: ${city}`);
        return city;
      } else {
        console.log("No address found in response");
        return null;
      }
    } catch (error) {
      console.error("Error fetching geocoding data:", error);
      return null;
    }
  }
  
  
  const handleLocationClick = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const city = await getCityFromLatLng(position.coords.latitude, position.coords.longitude);
          console.log("city", city); // Now logs the resolved city value
          setCity(city);
          setQuery({ q: `${city}`, days: 7 });
        } catch (error) {
          console.error("Error fetching city:", error);
        }
      });
    }
  };

  return (
    <div className="relative bg-gradient-to-r bg-blue-800 bg-opacity-90 p-4 flex items-center justify-between max-w-4xl mx-auto rounded-xl">
      {/* Left Section: Location Icon */}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleLocationClick}
          aria-label="Search for a location"
          className="text-gray-600 hover:text-blue-600 bg-blue-500 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          title="Use Current Location"
        >
          <BiCurrentLocation size={28} />
        </button>
        <Units setUnits={setUnits}/>
      </div>

      {/* Right Section: Search Input + Icon */}
      <div className="relative flex items-center flex-1 max-w-lg ml-6 bg-blue-500 rounded-lg shadow-md">
        <input
          type="text"
          value={selectedCity}
          onChange={handleInputChange}
          placeholder="Search by City..."
          className="flex-1 p-4 text-black text-lg bg-transparent focus:outline-none capitalize placeholder:text-black font-semibold bg-blue-400"
        />
        <button
          onClick={handleSearchClick}
          className="text-gray-600 hover:text-blue-600 p-3 transition-transform duration-200 hover:scale-110"
          title="Search"
        >
          <BiSearch size={28} className="bg-blue-500 border-black" />
        </button>

        {/* Filtered Cities Dropdown */}
        {filteredCities.length > 0 && (
          <ul className="absolute z-10 w-full bg-blue-500  border-gray-300 hidden:false rounded-lg shadow-lg top-full mt-1 max-h-60 overflow-hidden">
            {filteredCities.map((suggestion, index) => (
              <li
                key={index}
                className="p-3 text-black font-medium cursor-pointer hover:bg-gray-100 border-b border-gray-200 last:border-b-0 overflow-hidden"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))} </ul>) }
      </div>
    </div>
  );
}

export default Inputs;
