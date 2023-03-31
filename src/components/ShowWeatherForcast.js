import OneDayWeather from "./OneDayWeather";
import TodayWeather from "./TodayWeather";
import HourlyWeather from "./HourlyWeather";
import TomorrowWeather from "./TomorrowWeather";

import { useContext, useState } from "react";
import WeatherContext from "../context/weather";

function ShowWeatherForcast() {
  const [pageToShow, setPageToShow] = useState("forcast");
  const [dataToShow, setDataToShow] = useState("forcast");

  const { darkMode } = useContext(WeatherContext);

  const handlePageToShow = (to) => {
    setPageToShow(to);
  };

  const handleDataToShow = (data) => {
    setDataToShow(data);
    console.log(data);
  };

  const renderedToScreen = () => {
    if (pageToShow === "forcast") {
      const content = (
        <>
          <div className='col-span-3 sm:col-span-6 w-full md:w-auto'>
            <OneDayWeather isActive={true} />
          </div>
          <OneDayWeather isActive={false} day={1} />
          <OneDayWeather isActive={false} day={2} />
          <OneDayWeather isActive={false} day={3} />
          <OneDayWeather isActive={false} day={4} />
          <OneDayWeather isActive={false} day={5} />
          <OneDayWeather isActive={false} day={6} />
        </>
      );

      return content;
    }

    if (pageToShow === "today") {
      const content = (
        <>
          <div className='col-span-3 sm:col-span-6 w-full md:w-auto'>
            <TodayWeather />
          </div>
          <HourlyWeather hour={4} />
          <HourlyWeather hour={8} />
          <HourlyWeather hour={12} />
          <HourlyWeather hour={16} />
          <HourlyWeather hour={20} />
          <HourlyWeather hour={24} />
        </>
      );

      return content;
    }

    if (pageToShow === "tomorrow") {
      const content = (
        <>
          <div className='col-span-3 sm:col-span-6 w-full md:w-auto'>
            <TomorrowWeather />
          </div>
          <HourlyWeather hour={24} />
          <HourlyWeather hour={28} />
          <HourlyWeather hour={32} />
          <HourlyWeather hour={36} />
          <HourlyWeather hour={42} />
          <HourlyWeather hour={46} />
        </>
      );

      return content;
    }
  };

  return (
    <div className='px-5 sm:px-6'>
      <div className='flex justify-between px-2 md:px-0 items-center mt-6 '>
        <div
          className={`${darkMode === true ? " text-white" : "text-onyx"}
        flex gap-4 sm:gap-4 text-base font-light`}
        >
          <button
            className={`${
              pageToShow === "today" ? "active-page" : null
            } opacity-40`}
            onClick={() => handlePageToShow("today")}
          >
            Today
          </button>
          <button
            className={`${
              pageToShow === "tomorrow" ? "active-page" : null
            } opacity-40`}
            onClick={() => handlePageToShow("tomorrow")}
          >
            Tomorrow
          </button>
          <button
            className={`${
              pageToShow === "forcast" ? "active-page" : null
            } opacity-40`}
            onClick={() => handlePageToShow("forcast")}
          >
            Next 7 days
          </button>
        </div>

        {/* Two part forecast air quality */}
        <div
          className={`
        ${darkMode === true ? "bg-eerie text-white" : "bg-gray2 text-onyx"}
        sm:flex gap-2 text-sm font-Poppins font-normal rounded-full hidden`}
        >
          <button
            onClick={() => handleDataToShow("forcast")}
            className={`${
              dataToShow === "forcast" ? "active" : null
            } rounded-full py-2 px-4 hover:bg-white hover:bg-opacity-50 transition-all duration-200`}
          >
            Forecast
          </button>
          <button
            onClick={() => handleDataToShow("air-quality")}
            className={`${
              dataToShow === "air-quality" ? "active" : null
            } rounded-full py-2 px-4 hover:bg-white hover:bg-opacity-50 transition-all duration-200`}
          >
            Air quality
          </button>
        </div>
      </div>
      <div className='mt-6 grid grid-cols-3 sm:grid-cols-6 gap-4 place-content-center md:w-full md:flex md:justify-between justify-items-center sm:justify-items-start md:gap-4 xl:justify-center '>
        {renderedToScreen()}
      </div>
    </div>
  );
}

export default ShowWeatherForcast;
