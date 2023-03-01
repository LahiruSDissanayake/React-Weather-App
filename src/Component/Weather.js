import React, { useEffect, useState } from 'react';
import Details from './Details';
import ForcastThreeDays from './ForcastThreeDays';
import FullWeek from './FullWeek';
import Inputs from './Inputs';
import Location from './Location';
import './Weather.css';
import getFormattedWeatherData from './WeatherService';






function Weather() {

    const [query, setQuery] = useState({q: "Colombo"});
    const [units, setUnits] = useState("metric");
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({...query, units})
            .then((data) => {
               setWeather(data); 
            });
        };
    
        fetchWeather();
    }, [query, units]);

    return(
        <>
         <div className='image py-7'>
        <div className='grid grid-cols-2 gap-4 mt-10' >
        
            
            
            <div className=" mx-auto max-h-100 mt-4 py-20 px-4 bg-black opacity-60 h-fit shadow-xl shadow-gray-80 rounded-lg ml-8 pl-16 pr-16">

            <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

            {weather && (
                <div>
            

            <Details weather={weather}/>

           

            <Location weather={weather}/>

            </div>
            )}
        </div>
        <div className="mx-auto w-min mt-4 py-5 px-4 bg-black opacity-60 h-fit shadow-xl shadow-gray-80 rounded-lg mr-8 pl-8 pr-8">
        {weather && (
            <div>
            <ForcastThreeDays title="Daily Forcast" items={weather.daily} />
            <FullWeek title="Entire Week" items={weather.hourly} />
            </div>
            )}
        </div>    

                
        
        </div>


        </div>
        </>
    )
}

export default Weather;

