import {FaThermometerEmpty} from "react-icons/fa";
import {BiSolidDropletHalf} from "react-icons/bi";
import {FiWind} from "react-icons/fi";
import { GiSunrise,GiSunset} from "react-icons/gi";
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md";

const TempAndDetails = ({weather}) => {
    const verticalDetails = [
        {   id:1,
            Icon: FaThermometerEmpty,
            title: "Real Feel",
            value: `${weather.feelslike_c}°`,
        },
        {   id:2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${weather.humidity}%`,
        },
        {   id:3,
            Icon: FiWind,
            title: "Wind",
            value: `${weather.wind_mph}mp/h`
        },
    ];
    const horizantalDetails = [
        {   id:1,
            Icon: GiSunrise,
            title: "SunRise",
            value: weather.sunrise,
        },
        {   id:2,
            Icon: GiSunset,
            title: "Sunset",
            value: weather.sunset,
        },
        {   id:3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: `${weather.heatindex_c}°`
        },
        {   id:4,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: `${weather.dewpoint_c}°`
        },
    ];
  return (
    <div>
    <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
      <p>{weather.details}</p>
    </div>

    <div className="flex flex-row items-center justify-between py-3">
        <img src={weather.icons} alt="weather-icon" className="w-20"/>
        <p className="text-5xl">{weather.temp_c}°</p>
        <div className="flex flex-col space-y-3 items-start">

            {verticalDetails.map(({id,Icon,title,value}) =>(
                <div key={id} className="flex font-light text-sm items-center justify-center">
                <Icon size={18} className="mr-1" />
                {title}:<span className="font-medium ml-1">{value}</span>
            </div>
                ))}
        </div>
    </div>
       


       <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
          {
            horizantalDetails.map(({id,Icon,title,value}) => (
                <div key={id} className="flex flex-row items-center">
                    <Icon size={30} />
                    <p className="font-light ml-1">
                    {title}:<span className="font-medium ml-1">{value}</span>
                    </p>
                    </div>
            ))
          }


        <div className="flex-row items-center">

        </div>


       </div>



    </div>
  )
}

export default TempAndDetails
