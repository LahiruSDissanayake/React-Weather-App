import React from 'react'
import { UilSearchAlt } from '@iconscout/react-unicons';
import { formatToLocalTime } from './WeatherService';

function Location({weather: {dt, timezone, name,country}}) {
  return (
    <div>

      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
            {`${name},${country}`}
        </p>
      </div>

      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
           {formatToLocalTime(dt, timezone)}
        </p>
      </div>


      <div className='flex flex-row w-full items-center justify-center space-x-2 mt-12 '>
        <input type="text" placeholder='Latitude' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-md' />
        <input type="text" placeholder='Longitude' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-md' />
        <UilSearchAlt size={35} className="text-white cursor-pointer transition ease-out hover:scale-150" />
      </div> 


      
    </div>
  )
}

export default Location;
