import { createContext, useContext, useState } from "react";
// import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";


const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=b6e14d6b818247bda11212219242010";

const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};

const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};

// 
// 
const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    setData(response);
  };

  const fetchCurrentUserLocationData = () => {
    if ("geolocation" in navigator){

      navigator.geolocation.getCurrentPosition((position) => {
        getWeatherDataForLocation(
          position.coords.latitude,
          position.coords.longitude
        ).then((data) => setData(data));
      });
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        setSearchCity,
        fetchData,
        fetchCurrentUserLocationData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};