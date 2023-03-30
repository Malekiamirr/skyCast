import { useContext } from "react";
import WeatherContext from "../context/weather";
import LargeCity from "./LargeCity";

function ShowLargeCities() {
  const { darkMode } = useContext(WeatherContext);

  // Connect an api thats randomly generete 3 big cities for us
  const bigCities = [
    { cityName: "California", country: "Us" },
    { cityName: "London", country: "Uk" },
    { cityName: "Baijing", country: "China" },
  ];

  return (
    <div
      className={`
    ${darkMode === true ? "text-white" : "text-gray-600"}
    flex flex-col gap-4 px-6`}
    >
      <p className='text-lg font-Poppins'>Other large cities</p>
      <div className='flex flex-col sm:flex-row xl:flex-col gap-4'>
        {bigCities.map((city) => {
          return <LargeCity key={city.cityName} data={city} />;
        })}
      </div>
    </div>
  );
}

export default ShowLargeCities;
