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
  const tomorrow = today + 1;
  const time = convertTimestamp(date / 1000);

  return (
    <div className='bg-columbia rounded-3xl hover:-translate-y-1 transition-transform duration-200 mx-auto max-w-lg md:max-w-xs'>
      <div className='flex items-center justify-between px-8 py-4 bg-columbia-2 text-night font-bold rounded-t-3xl'>
        <p className='text-lg'>{convertWeakdays(tomorrow)}</p>
        <p className='text-lg font-Electrolize'>{time}</p>
      </div>

      <div className='grid grid-cols-2 items-center py-2'>
        <p className='justify-self-center text-6xl font-bold font-Electrolize'>
          {forcastData.ready ? Math.round(forcastData.daily[1].temp.day) : ""}
          <span>&#176;</span>
        </p>
        <div className='justify-self-center w-20 h-20'>
          {forcastData.ready
            ? showWeatherImage(forcastData.daily[1].weather[0].icon)
            : ""}
        </div>

        <div className='justify-self-center md:justify-self-start flex flex-col text-sm sm:text-xs2 font-Roboto font-light pl-3'>
          <p>
            Real feel{" "}
            <span className='font-semibold font-Electrolize'>
              {forcastData.ready
                ? Math.round(forcastData.daily[1].feels_like.day)
                : ""}
              <span>&#176;</span>
            </span>
          </p>
          <p>
            Wind:{" "}
            <span className='font-semibold font-Electrolize'>
              {forcastData.ready
                ? showWindDirection(forcastData.daily[1].wind_deg)
                : ""}
              , {forcastData.ready ? forcastData.daily[1].wind_speed : ""} m/s
            </span>
          </p>
          <p>
            pressure:{" "}
            <span className='font-semibold font-Electrolize'>
              {forcastData.ready ? forcastData.daily[1].pressure : ""} MB
            </span>
          </p>
        </div>

        <div className='flex flex-col text-sm sm:text-xs2 font-Roboto font-light justify-self-center md:justify-self-end pr-3'>
          <p>
            humidity:{" "}
            <span className=' font-semibold font-Electrolize'>
              {forcastData.ready ? forcastData.daily[1].humidity : ""}%
            </span>
          </p>
          <p>
            Sunrise:{" "}
            <span className=' font-semibold font-Electrolize'>
              {forcastData.ready
                ? convertTimestamp(forcastData.daily[1].sunrise)
                : ""}
            </span>
          </p>
          <p>
            Sunset:{" "}
            <span className=' font-semibold font-Electrolize'>
              {forcastData.ready
                ? convertTimestamp(forcastData.daily[1].sunset)
                : ""}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TodayWeather;
