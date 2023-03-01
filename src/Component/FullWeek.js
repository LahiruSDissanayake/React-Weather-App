import React, { useState } from 'react'
import { iconUrlFromCode } from './WeatherService'

function FullWeek({title, items}) {
    console.log(items);

    const [show, setShow] = useState(true);

    return (
      <div >
        <div className='flex items-center justify-start mt-6'>
          <p className='text-white font-medium uppercase'>
              {title}
          </p>
        </div>
  
        <hr className='my-2' />
  
        {show &&
        <div className='flex flex-row items-center justify-between text-white'>
          {items.map(item => (
              <div className='flex flex-col items-center justify-center' >
              <p className='font-light text-sm px-9'>
                  {item.title}
              </p>
              <img src={iconUrlFromCode(item.icon)} alt='' className='w-12 my-1' />
              <p className='font-medium px-9'>{`${item.temp.toFixed()}°`}</p>
          </div>
          ))}
              
        </div>
        }

        <div className='flex flex-col items-center justify-center'>
        <button onClick={() => setShow(!show)} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mx-8 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-8">{show === true ? 'Back' : 'View Entire Week'}</button>
        </div>
        
      </div>
    )
}

export default FullWeek
