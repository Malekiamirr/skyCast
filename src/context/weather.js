import { createContext, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

function Provider({ children }) {
  const [inputValue, setInputValue] = useState("");
  const [forcastData, setForcastData] = useState({ ready: false });
  const [locationData, setLocationData] = useState({ ready: false });
  const [oneDayData, setOneDayData] = useState({ ready: false });
  const [darkMode, setDarkMode] = useState(true);

  // Get cities Location
  const fetchGeoLoaction = async (city) => {
    const apiKey = "e7533ba8e605f8792205b485fc722e30";
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
    );
    handleLocationResponse(response);
    fetchWeather(response.data[0].lat, response.data[0].lon);
  };

  function handleLocationResponse(response) {
    const data = [...response.data];
    const fetchedData = {
      ready: true,
      cityName: data[0].name,
      country: data[0].country,
      lat: data[0].lat,
      lon: data[0].lon,
    };
    setLocationData({ ...locationData, ...fetchedData });
  }
  /////////////////

  // Get one day Weather Data
  const fetchOneDayWeather = async (city) => {
    const apiKey = "e7533ba8e605f8792205b485fc722e30";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    handleOneDayResponse(response);
  };

  function handleOneDayResponse(response) {
    setOneDayData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      cityName: response.data.name,
      country: response.data.sys.country,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      date: new Date(),
    });
  }
  ////////////////////

  const fetchWeather = async (lat, lon) => {
    const apiKey = "de2c40e370d58e257faf07ba4ea95840";
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    console.log(response.data);
    handleForcastDataResponse(response.data);
  };

  function handleForcastDataResponse(data) {
    setForcastData({
      ready: true,
      dayliWeather: data.daily,
      temp: data.current.temp,
      feelsLike: data.current.feels_like,
      clouds: data.current.clouds,
      dataTime: data.current.dt,
      humidity: data.current.humidity,
      pressure: data.current.pressure,
      sunrise: data.current.sunrise,
      sunset: data.current.sunset,
      visibility: data.current.visibility,
      windDeg: data.current.wind_deg,
      windSpeed: data.current.wind_speed,
      icon: data.current.weather[0].icon,
      description: data.current.weather[0].description,
      daily: data.daily,
      hourly: data.hourly,
    });
  }

  // Utilities

  // Convert Kelvin to selsious
  const tempConverter = (temp) => {
    return temp - 273;
  };

  // Format the time in Am/Pm Mode
  const formatAMPM = (unix_timestamp) => {
    // Create a new JavaScript Date object based on the timestamp

    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(unix_timestamp * 1000);

    // Hours part from the timestamp
    let hours = date.getHours();

    // Minutes part from the timestamp
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  // Convert seconds to time //BUG
  const sToTime = (totalSeconds) => {
    const totalMinutes = Math.floor(totalSeconds / 60);

    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  // Values to share in context
  const valueToShare = {
    inputValue,
    forcastData,
    locationData,
    oneDayData,
    darkMode,
    fetchWeather,
    fetchGeoLoaction,
    fetchOneDayWeather,
    setInputValue,
    setDarkMode,
    formatAMPM,
    sToTime,
    tempConverter,
  };

  return (
    <WeatherContext.Provider value={valueToShare}>
      {children}
    </WeatherContext.Provider>
  );
}

export { Provider };
export default WeatherContext;
