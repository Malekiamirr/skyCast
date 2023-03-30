import { useContext } from "react";
import WeatherContext from "../context/weather";

import convertWeakdays from "../utils/convertWeekdays";
import showWeatherImage from "../utils/showWeatherImage";
import showWindDirection from "../utils/showWindDirection";
import convertTimestamp from "../utils/convertTimestamp";

function TodayWeather() {
  const { forcastData } = useContext(WeatherContext);

  const date = new Date();
  const today = date.getDay();
  const time = convertTimestamp(date / 1000);

  return (
    <div className='bg-columbia rounded-3xl hover:-translate-y-1 transition-transform duration-200 mx-auto max-w-lg md:max-w-xs'>
      <div className='flex items-center justify-between px-8 py-4 bg-columbia-2 text-night font-bold rounded-t-3xl'>
        <p className='text-xl'>{convertWeakdays(today)}</p>
        <p className='text-xl font-Electrolize'>{time}</p>
      </div>

      <div className='grid grid-cols-2 items-center py-2'>
        <p className='justify-self-center text-6xl font-bold font-Electrolize'>
          {forcastData.ready ? Math.round(forcastData.temp) : ""}
          <span>&#176;</span>
        </p>
        <div className='justify-self-center w-20 h-20'>
          {forcastData.ready ? showWeatherImage(forcastData.icon) : ""}
        </div>

        <div className='justify-self-center md:justify-self-start flex flex-col text-sm sm:text-xs2 font-Roboto font-light pl-3'>
          <p>
            Real feel{" "}
            <span className='font-semibold font-Electrolize'>
              {forcastData.ready ? Math.round(forcastData.feelsLike) : ""}
              <span>&#176;</span>
            </span>
          </p>
          <p>
            Wind:{" "}
            <span className='font-semibold font-Electrolize'>
              {forcastData.ready ? showWindDirection(forcastData.windDeg) : ""},{" "}
              {forcastData.ready ? forcastData.windSpeed : ""} m/s
            </span>
          </p>
          <p>
            pressure:{" "}
            <span className='font-semibold font-Electrolize'>
              {forcastData.ready ? forcastData.pressure : ""} MB
            </span>
          </p>
        </div>

        <div className='flex flex-col text-sm sm:text-xs2 font-Roboto font-light justify-self-center md:justify-self-end pr-3'>
          <p>
            humidity:{" "}
            <span className=' font-semibold font-Electrolize'>
              {forcastData.ready ? forcastData.humidity : ""}%
            </span>
          </p>
          <p>
            Sunrise:{" "}
            <span className=' font-semibold font-Electrolize'>
              {forcastData.ready ? convertTimestamp(forcastData.sunrise) : ""}
            </span>
          </p>
          <p>
            Sunset:{" "}
            <span className=' font-semibold font-Electrolize'>
              {forcastData.ready ? convertTimestamp(forcastData.sunset) : ""}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TodayWeather;
