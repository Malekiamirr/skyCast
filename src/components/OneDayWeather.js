import { useContext } from "react";
import WeatherContext from "../context/weather";
import showWeatherImage from "../utils/showWeatherImage";
import showWindDirection from "../utils/showWindDirection";
import convertWeakdays from "../utils/convertWeekdays";
import convertTimestamp from "../utils/convertTimestamp";

function OneDayWeather({ day, isActive }) {
  const { forcastData, darkMode } = useContext(WeatherContext);
  const date = new Date();
  const today = date.getDay();
  const time = convertTimestamp(date / 1000);

  const AddOneDay = (date, day) => {
    date.setDate(date.getDate() + day);
    const today = date.getDay();
    return convertWeakdays(today, true);
  };

  if (isActive) {
    return (
      <div className='bg-columbia hover:-translate-y-1 transition-transform duration-200 rounded-3xl mx-auto max-w-lg md:max-w-xs'>
        <div className='flex items-center justify-between px-8 py-4 bg-columbia-2 text-night font-bold rounded-t-3xl'>
          <p className='text-xl'>{convertWeakdays(today)}</p>
          <p className='text-xl font-Electrolize'>
            {forcastData.ready ? convertTimestamp(forcastData?.dataTime) : time}
          </p>
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
                {forcastData.ready
                  ? showWindDirection(forcastData.windDeg)
                  : ""}
                , {forcastData.ready ? forcastData.windSpeed : ""} m/s
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

  return (
    <div
      className={`  ${
        darkMode === true
          ? "bg-eerie text-white"
          : "bg-gray2 text-gray text-opacity-70"
      }  flex flex-col justify-around items-center w-24 h-48 md:h-auto px-2 py-4 rounded-3xl hover:bg-opacity-70 hover:-translate-y-1 transition-transform duration-200`}
    >
      <p className='text-xl text-center'>{AddOneDay(date, day)}</p>
      <div
        className={`${
          darkMode === true ? "border-onyx" : "border-white"
        } border-b  w-4/6`}
      ></div>
      <div className='w-14 h-w-14'>
        {forcastData.ready
          ? showWeatherImage(forcastData.daily[day].weather[0].icon)
          : ""}
      </div>
      <p className='text-4xl font-bold font-Electrolize'>
        {forcastData.ready ? Math.round(forcastData.daily[day].temp.day) : ""}
        <span>&#176;</span>
      </p>
    </div>
  );
}

export default OneDayWeather;
