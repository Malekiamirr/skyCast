import { useContext, useEffect } from "react";
import Header from "./components/Header";
import RainChart from "./components/RainChart";
import ShowLargeCities from "./components/ShowLargeCities";
import ShowMap from "./components/ShowMap";
import ShowWeatherForcast from "./components/ShowWeatherForcast";
import WeatherContext from "./context/weather";

function App() {
  const { fetchWeather, darkMode } = useContext(WeatherContext);
  // First when user come in
  useEffect(() => {
    fetchWeather(35.1686, 51.0205);
  }, []);

  return (
    <div
      className={`${
        darkMode ? "bg-night" : "bg-light"
      } relative text-blue-400 grid grid-cols-[3fr_1fr] items-center py-6 my-5 m-auto rounded-3xl lg:max-w-7xl font-Roboto overflow-hidden`}
    >
      <div className='col-span-2'>
        <Header />
      </div>

      <div className='col-span-2 xl:col-span-1'>
        <ShowWeatherForcast />
      </div>
      <RainChart />

      <div className='col-start-1 col-end-3 xl:col-end-2 row-start-4 xl:row-start-3 mt-8'>
        <ShowMap />
      </div>
      <div className='col-span-2 md:col-span-1 mt-8'>
        <ShowLargeCities />
      </div>
    </div>
  );
}

export default App;
