import React, { useContext, useState, useEffect } from "react";
import {
  MapContainer,
  useMapEvents,
  useMap,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "../app.css";
import * as parkData from "../data/skateboard-parks.json";
import WeatherContext from "../context/weather";
import getCity from "../utils/getCity";

function ShowMap() {
  const { fetchWeather, locationData, setInputValue } =
    useContext(WeatherContext);
  const [latlon, setLatlon] = useState({ lat: 35.1686, lon: 51.0205 });

  const { darkMode } = useContext(WeatherContext);

  // Get User cordinates on a click
  const GetCoordinates = () => {
    const map = useMap();

    useEffect(() => {
      if (!map) return;

      map.on("click", (e) => {
        setLatlon(e.latlng);
        const data = getCity(e.latlng.lat, e.latlng.lng);
        console.log(data);
        if (data.city) locationData.cityName = data.city;
        else if (data.locality) locationData.cityName = data.locality;
        else locationData.cityName = data.province;
        locationData.country = data.country;
        console.log(locationData);

        fetchWeather(e.latlng.lat, e.latlng.lng);
      });
    }, [latlon.lat]);

    return (
      <Marker position={latlon}>
        <Popup>Location you choose</Popup>
      </Marker>
    );
  };

  const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <div
      className={`
    ${
      darkMode === true ? "text-white" : "text-gray-600"
    } flex flex-col gap-6 px-6 w-full`}
    >
      <p className='text-lg font-Poppins'>Global Map</p>
      <MapContainer center={latlon} zoom={5}>
        <TileLayer
          attribution={`${
            darkMode
              ? '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
              : '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          } `}
          url={`${
            darkMode
              ? "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
              : "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          } `}
        />
        <GetCoordinates />
        <Marker position={latlon}>
          <Popup>Location You Are</Popup>
        </Marker>
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
export default ShowMap;
