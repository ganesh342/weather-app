import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import ForeCast from "./components/ForeCast";
import getFormattedWeatherData from "./services/weatherService";
import {useState,useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [query,setQuery]= useState({q:"tokyo",days:7});
  const [units,setUnits] = useState("Celsius");
  const [weather,setWeather] = useState(null);


  const getWeather = async() =>{
    const message = query.q  ?query.q : 'current location';
    toast.info(`Fetching weather data for ${message.toUpperCase()}`);
    await getFormattedWeatherData({ ...query, units}).then((data) => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`)
      setWeather(data);
    })
  };

  useEffect(()=>{
    getWeather();
  },[query]);


  const formatBackground = () =>{
    if(!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === 'metric' ? 20: 60
    if(weather.temp <=threshold) return 'from-cyan-600 to-blue-700'
    return 'bg-blue-800'
  };


  return (
    <div className={`mx-auto max-w-screen-lg px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
    <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

    {weather && 
    <>
    <TimeAndLocation weather={weather}/>
    <TempAndDetails weather={weather} units={units}/>
    <ForeCast title='3 day forecast' day={weather.day} data={weather.daily} units={units}/>
    </>
    }

    <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
};

export default App;
