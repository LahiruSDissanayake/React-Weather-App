import React, { useState } from 'react';
import { UilSearchAlt } from '@iconscout/react-unicons';
import { UilMapMarker } from '@iconscout/react-unicons';

function Inputs({setQuery, units, setUnits}) {
  const [city, setCity] = useState("");

  const HandleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if(units !== selectedUnit) setUnits(selectedUnit);
  }

  const handleSearch = () => {
    if (city !== '') setQuery({q: city})
  }

  const handleLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    };
  };

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-96 items-center justify-center space-x-4'>
        <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type="text" placeholder='Search...' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-md' />
        <UilSearchAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-150" onClick={handleSearch} />
        <UilMapMarker size={25} className="text-white cursor-pointer transition ease-out hover:scale-150" onClick={handleLocation} />
      </div> 

      <div className='flex flex-row w-1/4 items-center justify-center'>
          <button name='metric' className='text-xl text-white font-light' onClick={HandleUnitChange} >
            °C
          </button>
          <p className='text-xl text-white mx-1'>
            |
          </p>
          <button name='imperial' className='text-xl text-white font-light' onClick={HandleUnitChange} >
            °F
          </button>
      </div>
    </div>
  );
}

export default Inputs;
