import { useContext, useEffect, useState } from "react";
import WeatherContext from "../context/weather";
import showWeatherImage from "../utils/showWeatherImage";
import axios from "axios";

function LargeCity({ data }) {
  const { darkMode } = useContext(WeatherContext);
  const [dataWeather, setDataWeather] = useState({ ready: false });
  useEffect(() => {
    const fetchWeatherData = async (city) => {
      const apiKey = "e7533ba8e605f8792205b485fc722e30";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      setDataWeather({
        ready: true,
        temperature: response.data.main.temp,
        icon: response.data.weather[0].icon,
        description: response.data.weather[0].description,
        date: new Date(),
      });
    };

    fetchWeatherData(data.cityName);
  }, []);

  return (
    <div
      className={`${
        darkMode === true ? "bg-eerie text-white" : "bg-gray2 text-onyx"
      } sm:w-full md:w-52 lg:w-56 xl:w-full flex xl:gap-0 justify-between py-2 px-6 rounded-3xl font-Poppins transition-all duration-200 hover:bg-opacity-50 hover:-translate-y-1`}
    >
      <div>
        <p className='text-gray text-lg sm:text-base md:text-lg font-extralight'>
          {data.country}
        </p>
        <p className='text-lg sm:text-base md:text-lg font-light mt-1'>
          {data.cityName}
        </p>
        <p className='text-base sm:text-sm font-extralight mt-4'>
          {dataWeather.description}
        </p>
      </div>

      <div className='flex flex-col gap-2 justify-center items-center'>
        <div className='sm:w-14 w-16 sm:h-14 h-16'>
          {showWeatherImage(dataWeather.icon)}
        </div>
        <p className='text-3xl sm:text-2xl font-Electrolize'>
          {Math.round(dataWeather.temperature)}
          <span>&#176;</span>
        </p>
      </div>
    </div>

    // <div
    //   className={`  ${
    //     darkMode === true ? "bg-eerie text-white" : "bg-gray2 text-onyx"
    //   } w-49 sm:max-w-4xl lg:w-full flex justify-between px-4 py-1 items-center rounded-3xl transition-all duration-200 hover:bg-opacity-50 hover:-translate-y-1`}
    // >
    //   <div className='flex flex-col gap-1'>
    //     <p className='text-onyx text-lg'>{data.country}</p>
    //     <p className='text-lg font-light'>{data.cityName}</p>
    //     <p className='text-sm font-light'>{oneDayData.description}</p>
    //   </div>

    //   <div className='w-20 flex flex-col gap-2 justify-between items-center'>
    //     <div className='h-14 w-14'>{showWeatherImage(oneDayData.icon)}</div>
    //     <p className='text-2xl font-Electrolize'>
    //       {Math.round(oneDayData.temperature)}
    //       <span>&#176;</span>
    //     </p>
    //   </div>
    // </div>
  );
}

export default LargeCity;
