import { useContext } from "react";
import WeatherContext from "../context/weather";
import convertTimestamp from "../utils/convertTimestamp";
import showWeatherImage from "../utils/showWeatherImage";

function HourlyWeather({ hour, day }) {
  const { forcastData, darkMode } = useContext(WeatherContext);

  return (
    <div
      className={`
      ${
        darkMode === true
          ? "bg-eerie text-white"
          : "bg-gray2 text-gray text-opacity-70"
      }
      flex flex-col justify-around items-center w-24 h-48 md:h-auto px-2 py-4 rounded-3xl hover:bg-opacity-70 hover:-translate-y-1 transition-transform duration-200 `}
    >
      <p className='text-xl text-center'>
        {" "}
        {forcastData.ready
          ? convertTimestamp(forcastData.hourly[hour].dt, false)
          : ""}
      </p>
      <div
        className={`
      ${darkMode === true ? "border-onyx" : "border-white"}
      border-b  w-4/6`}
      ></div>
      <div className='w-14 h-w-14'>
        {forcastData.ready
          ? showWeatherImage(forcastData.hourly[hour].weather[0].icon)
          : ""}
      </div>
      <p className='text-4xl font-bold font-Electrolize'>
        {forcastData.ready ? Math.round(forcastData.hourly[hour].temp) : ""}
        <span>&#176;</span>
      </p>
    </div>
  );
}

export default HourlyWeather;
