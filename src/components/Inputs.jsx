import {BiSearch,BiCurrentLocation} from "react-icons/bi";
import {useState} from "react";
const Inputs = ({setQuery,setUnits}) => {
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
  };
  const handleSearchClick = () =>{
    if(city !== "") setQuery({q:city,days:7});
  };
   
  const handleInputChange = (e) => {
    const value = e.target.value;
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

  function TopButtons() {
    const cities = [
      { id: 1, name: 'New York' },
      { id: 2, name: 'Los Angeles' },
      { id: 3, name: 'Chicago' },
      { id: 4, name: 'Houston' },
      { id: 5, name: 'Miami' }
    ];
  
  
    const handleCityChange = (event) => {
      setSelectedCity(event.target.value);
      setCity(event.target.value);
      setQuery({q:event.target.value,days:7})
    };


    const handleSearch = () => {
      // Add your search functionality here
      console.log(`Searching in ${selectedCity}`);
    };
  
    return (
        <div className="flex items-center justify-start">
          <select
            value={"Select City"}
            onChange={handleCityChange}
            className="appearance-none bg-white border-none rounded-full py-5  w-60 text-base font-sans cursor-pointer shadow-md hover:shadow-lg focus:shadow-outline focus:outline-none transition-all duration-300"
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
        </div>
    );
  }
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
    <div className="flex flex-row justify-start gap-7">
      <TopButtons/>
    <div className="flex flex-row justify-start">
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-5/2 items-center justify-center space-x-4">
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Search by city..."
            className="text-gray-500 text-xl font-light p-5 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase rounded-md"
          />
          <BiSearch
            size={40}
            className="cursor-pointer transition ease-out hover:scale-125 mx-4"
            onClick={handleSearchClick}
          />
          <BiCurrentLocation
            size={40}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </div>
      {filteredCities.length > 0 && (
            <ul className="absolute z-10 w-1/4 bg-white border-2 border-gray-300 rounded-lg shadow-lg mt-11 max-h-60 overflow-y-auto">
              {filteredCities.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
    </div>
    </div>
    </div>
  );
}

export default Inputs;
