import React from 'react'
import {
    UilArrowUp,UilTemperature,UilTear,UilWind,UilSun,UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from './WeatherService';

function Details({weather: {Details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like,timezone}}) {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>{Details}</p>
      </div>

    {/*width*/ }
    <div className='flex flex-row items-center justify-between text-white py-3 space-x-20'>

        <div className='flex flex-col space-y-2 w-44'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilSun size={18} className="mr-1" />
            Raise:
            <span className='font-medium  ml-1'>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
          </div>  
          <div className='flex font-light text-sm items-center justify-center'>
            <UilSunset size={18} className="mr-1" />
            Set :
            <span className='font-medium ml-1'>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
          </div> 
          <div className='flex font-light text-sm items-center justify-center'>
            <UilArrowUp size={18} className="mr-1" />
            High :
            <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
          </div> 
        </div>

        <img src={iconUrlFromCode(icon)} alt='' className='w-20' />
        <p className='text-5xl'>{`${temp.toFixed()}°`}</p>

        <div className='flex flex-col space-y-2 w-44'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
          </div>  
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
          </div> 
          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className='font-medium ml-1'>{`${speed.toFixed()}km/h`}</span>
          </div> 
        </div>
    </div>




    </div>
  )
}

export default Details
