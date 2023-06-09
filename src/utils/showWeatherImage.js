import icons from "../img/icons";

const showWeatherImage = (icon) => {
  const image = icons.filter((image) => {
    return image.includes(icon);
  });

  return <img src={image} alt='weather image' />;
};

export default showWeatherImage;
