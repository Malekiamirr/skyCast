import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import WeatherContext from "../context/weather";

function SearchBox() {
  const { inputValue, setInputValue, fetchGeoLoaction, darkMode } =
    useContext(WeatherContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGeoLoaction(inputValue);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        darkMode === true ? "bg-eerie" : "bg-gray2"
      } flex gap-2 place-items-center px-3 rounded-full `}
    >
      <CiSearch
        className={`${
          darkMode === true ? "text-white" : "text-onyx"
        } text-2xl hover:cursor-pointer hover:text-3xl transition-all duration-100 active:text-2xl`}
        onClick={handleSubmit}
      />
      <input
        value={inputValue}
        onChange={handleChange}
        type='text'
        placeholder='Search city...'
        className={`${
          darkMode === true
            ? "text-white placeholder:text-white placeholder:opacity-80 placeholder:font-light"
            : "text-onyx placeholder:text-onyx placeholder:opacity-100 placeholder:font-normal"
        } bg-transparent w-full  py-2 placeholder:text-xs    outline-none`}
      />
    </form>
  );
}

export default SearchBox;
