function convertTimestamp(timestamp, isAmPm = true) {
  let d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
    hh = d.getHours(),
    h = hh,
    min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
    ampm = "AM",
    time;

  if (!isAmPm) {
    time = h + ":" + min;

    return time;
  }
  if (hh > 12) {
    h = hh - 12;
    ampm = "PM";
  } else if (hh === 12) {
    h = 12;
    ampm = "PM";
  } else if (hh == 0) {
    h = 12;
  }

  // ie: 2013-02-18, 8:35 AM
  time = h + ":" + min + " " + ampm;

  return time;
}

export default convertTimestamp;
