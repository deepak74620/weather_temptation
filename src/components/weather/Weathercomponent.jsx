
import React from "react";

import { useWeather } from "@/components/weather/context/weather";

export const weatherCard = () => {
    const weather = useWeather();
  
    return (
      <div class="card p-2.5 shadow-lg rounded-[20px]">
        <img src={weather?.data?.current?.condition?.icon} />
        <h2>{weather?.data?.current?.temp_c}. C</h2>
        <h5>
          {weather?.data?.location?.name}, 
          {weather?.data?.location?.region}{" "}
          {weather?.data?.location?.country}
        </h5>
      </div>
    );
};

export const Input = () => {
    const weather = useWeather();

    return (
        <input
        class="input-field rounded-[10px] border-0 shadow-lg text-[25px] m-2.5"
        placeholder="Search here"
        value={weather?.searchCity}
        onChange={(e) => weather.setSearchCity(e.target.value)}
        />
    );
};

export const Button = (props) => {
    return (
        <button class="btn border-0 px-5 py-2.5 rounded-[10px] m-1.25 cursor-pointer" onClick={props.onClick}>
        {props.value}
        </button>
    );
};

// export {Card,Input,Button}