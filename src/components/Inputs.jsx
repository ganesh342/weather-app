import {BiSearch,BiCurrentLocation} from "react-icons/bi";
import {useState} from "react";
const Inputs = ({setQuery,setUnits}) => {
  const [city,setCity]= useState("");

  const handleSearchClick = () =>{
    if(city !== "") setQuery({q:city,days:7});
  };
   
  const handleLocationClick = () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const {latitude,longitude} = position.coords;
        setQuery({lat:latitude,lon:longitude,days:7});
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
