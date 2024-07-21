import {useState} from 'react';
const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const len=7;
const ForeCast = ({title,day,data}) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex items-center justify-between">
        {data && data.map && data.map((d,index)=>(
            <div key={index} className="flex flex-col items-center justify-center">
            <p className="font-light tex-sm">{days[(index+day+1)%len]}</p>
            <img src={d.icon} alt="weather-icon" 
            className="w-12 my-1" />
            <p className="font-medium">{d.temp.toFixed()}°</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ForeCast
