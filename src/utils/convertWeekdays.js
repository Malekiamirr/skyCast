// Convert Week Days
const convertWeakdays = (day, shortDay = false) => {
  const mainDay = day > 6 ? day - 7 : day;

  if (shortDay) {
    switch (mainDay) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";

      case 2:
        return "Tue";

      case 3:
        return "Wed";

      case 4:
        return "Thu";

      case 5:
        return "Fri";

      case 6:
        return "Sat";

      default:
        break;
    }
  }

  switch (mainDay) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    default:
      break;
  }
};

export default convertWeakdays;
