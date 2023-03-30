import axios from "axios";
import getCountryName from "./getCountryName.js";

const getCity = async (lat, lng) => {
  const response =
    await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en
  `);
  const country = getCountryName(response.data.countryCode);
  const data = {
    city: response.data.city,
    country: country,
    locality: response.data.locality,
    province: response.data.principalSubdivision,
  };
  console.log(data);

  return data;
};

//   console.log(lat, lng);
//   var xhr = new XMLHttpRequest();

//   // Paste your LocationIQ token below.
//   xhr.open(
//     "GET",
//     "https://us1.locationiq.com/v1/reverse.php?key=pk.59e3ab9e305a766c4c0c71c9c52a5d8e&lat=" +
//       lat +
//       "&lon=" +
//       lng +
//       "&format=json",
//     true
//   );
//   xhr.send();
//   xhr.onreadystatechange = processRequest;
//   xhr.addEventListener("readystatechange", processRequest, false);

//   function processRequest(e) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       var response = JSON.parse(xhr.responseText);
//       var city = response.address.city;

//       return city;
//     }
//   }
// }

export default getCity;
