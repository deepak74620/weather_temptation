"use client";
import React, {useEffect} from 'react'
import { useWeather,WeatherProvider } from '@/components/weather/context/weather';
// import { useWeather } from './context/Weather';
import { weatherCard,Input,Button } from './Weathercomponent';
import Location from '../location/Location';

const Wrapper = () => {
  // <WeatherProvider>
  const weatherContent = useWeather();
  console.log(weatherContent);

  useEffect(() => {
    // Get Current Location
    weatherContent?.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className=" p-20">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weatherContent?.fetchData} value="Search" />
      {/* <div>
        dd
      </div> */}
      <weatherCard />
      <Location/>
      <Button value="Refresh" onClick={()=>{window.location.reload()}} />
    </div>
  );

  // </WeatherProvider>
}

const Weather = ()=>{
  return (
    <WeatherProvider>
      <Wrapper/>
    </WeatherProvider>
  )
}

export default Weather
