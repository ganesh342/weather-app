import {BiSearch,BiCurrentLocation} from "react-icons/bi";
import {useState} from "react";
const Inputs = ({setQuery,setUnits}) => {
  const [city,setCity]= useState("");

  const handleSearchClick = () =>{
    if(city !== "") setQuery({q:city,days:7});
  };
   

  
  // Example usage
  async function getCityFromLatLng(lat, lng) {
    // Construct the API URL with English language preference
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&zoom=10&accept-language=en`;
    
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
  
  
  const handleLocationClick =  () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const {latitude,longitude} = position.coords;
        const city = getCityFromLatLng(latitude,longitude);
        setQuery({q:`${city}`,days:7});
      })
    }
  }

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input type="text" value={city} onChange={(e)=>setCity(e.currentTarget.value)}placeholder="search by city..." className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"/>
        <BiSearch size={30} className="cursor-pointer transition ease-out hover:scale-125" onClick={handleSearchClick} />
        <BiCurrentLocation size={30} className="cursor-pointer transition ease-out hover:scale-125" onClick={handleLocationClick} />
    </div>
    </div>
  )
}

export default Inputs;
