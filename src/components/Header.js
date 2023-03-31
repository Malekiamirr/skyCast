import { FaBell } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BsMoonStarsFill } from "react-icons/bs";
import SearchBox from "./SearchBox";
import { FaRegSun } from "react-icons/fa";
import { useContext, useState } from "react";
import WeatherContext from "../context/weather";
import getCountryName from "../utils/getCountryName.js";
import profileUrl from "../img/profile.jpg";

function Header() {
  const { locationData, darkMode, setDarkMode } = useContext(WeatherContext);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleDarkMode = (value) => {
    value === "dark" ? setDarkMode(true) : setDarkMode(false);
  };

  const countryName = getCountryName(locationData.country);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <div className='flex items-center justify-between md:justify-center gap-4 sm:gap-8'>
      <div className='flex items-center gap-4 justify-start mx-5 sm:mx-0 sm:pl-6 w-2/5 md:w-1/4'>
        <button
          className={`${
            darkMode === true ? "bg-eerie" : "bg-gray2"
          }  rounded-full flex items-center justify-center w-8 md:w-11 h-8 md:h-11 p-2  transition-transform duration-200  hover:bg-opacity-5  hover:scale-125`}
        >
          <FaBell
            className={`${darkMode === true ? "text-white" : "text-onyx"}`}
          />
        </button>
        <div
          className={`${
            darkMode === true ? "text-white" : "text-onyx"
          } flex items-center gap-2`}
        >
          <GoLocation
            className={`${darkMode === true ? "text-white" : "text-onyx"}`}
          />
          <p className='text-xs sm:text-sm md:text-base font-Poppins font-light'>
            {locationData.cityName ? locationData.cityName : "Tehran"},{" "}
            {countryName ? countryName : "Iran"}
          </p>
        </div>
      </div>

      <div className='w-full md:w-1/2'>
        <SearchBox />
      </div>

      <div
        onClick={toggleMenu}
        className='md:hidden flex flex-col gap-1 justify-center items-center text-onyx pr-10 cursor-pointer relative'
      >
        <div className={` border-b-2 w-6 h-1`}></div>

        <div className={` border-b-2 w-6 h-1`}></div>

        <div className={`border-b-2 w-6 h-1`}></div>

        <div
          className={`${
            isMenuOpen ? "hidden" : ""
          } absolute top-10 right-10 h-screen bg-gray-900 bg-opacity-40`}
        >
          <div
            className={`${
              darkMode === true ? "text-white bg-eerie" : "text-onyx bg-gray2"
            } flex items-center gap-3 rounded-full text-xl overflow-hidden`}
          >
            <button
              onClick={() => handleDarkMode("dark")}
              className={`${
                darkMode ? "bg-gray bg-opacity-70 text-white" : null
              } p-3 rounded-full transition-all h-full duration-300 hover:text-white hover:bg-gray`}
            >
              <BsMoonStarsFill />
            </button>

            <button
              onClick={() => handleDarkMode("light")}
              className={`${
                !darkMode ? "bg-gray bg-opacity-60 text-white" : null
              } p-3 rounded-full transition-all h-full duration-300 hover:text-white hover:bg-gray`}
            >
              <FaRegSun />
            </button>
          </div>
        </div>
      </div>

      <div className='hidden md:gap-4 md:items-center md:justify-end pr-6 w-1/4 md:flex'>
        {/* Icons container */}
        <div
          className={`${
            darkMode === true ? "text-white bg-eerie" : "text-onyx bg-gray2"
          } flex items-center gap-3 rounded-full text-xl overflow-hidden`}
        >
          <button
            onClick={() => handleDarkMode("dark")}
            className={`${
              darkMode ? "bg-gray bg-opacity-70 text-white" : null
            } p-3 rounded-full transition-all h-full duration-300 hover:text-white hover:bg-gray`}
          >
            <BsMoonStarsFill />
          </button>

          <button
            onClick={() => handleDarkMode("light")}
            className={`${
              !darkMode ? "bg-gray bg-opacity-60 text-white" : null
            } p-3 rounded-full transition-all h-full duration-300 hover:text-white hover:bg-gray`}
          >
            <FaRegSun />
          </button>
        </div>

        {/* profile */}
        <div
          className={`w-11 h-11 rounded-full bg-onyx overflow-hidden relative`}
        >
          <img
            src={profileUrl}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            alt='user profile'
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
