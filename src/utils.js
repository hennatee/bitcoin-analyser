const DAY_IN_SECONDS = 24 * 60 * 60 // 86400s

/**
 * @param {string} dateString Date to convert in format yyyy-mm-dd
 * @returns {number} Date in UNIX Timestamp (eg. 1422577232)
 */
export const dateToUnix = dateString => {
  const dateToConvert = new Date(dateString);
  const unix = Math.floor(dateToConvert.getTime() / 1000); //seconds
  return unix;
}


/**
 * @param {number} unix Date in UNIX Timestamp (eg. 1638468329477)
 * @returns {Date} Date object converted from UNIX Timestamp
 */
export const unixToDate = unix => { 
  const date = new Date(unix);
  return date;
}

/**
 * Checks whether two dates are on a same day
 * 
 * @param {Date} day1 
 * @param {Date} day2 
 * @returns {boolean} True if given dates are on a same day
 */
export const isSameDay = (day1, day2) => {
  return day1.getFullYear() === day2.getFullYear() &&
    day1.getMonth() === day2.getMonth() &&
    day1.getDate() === day2.getDate();
}



/**
 * Checks if time range between given parameters is 1-90 days
 * 
 * @param {number} unixStart Start date in UNIX Timestamp (seconds)
 * @param {number} unixEnd End date in UNIX Timestamp (seconds)
 * @returns {boolean} True if time range is longer than 90 days
 */
export const rangeIsBelow91Days = (unixStart, unixEnd) => {
  const ninetyDays = DAY_IN_SECONDS * 90;
  if (unixEnd - unixStart <= ninetyDays) return true;
  return false;
}

/**
 * Formats given number to accuracy of two decimals
 * 
 * @param {number} number Number to be formatted
 * @returns {number} Number formatted to show two decimals
 */
export const twoDecimals = number => {
  return parseFloat(number).toFixed(2);
}

/**
 * Checks whether both parameter dates are in the past or not
 * 
 * @param {Date} day1
 * @param {date} day2
 * @returns {boolean} Returns true if both dates are not in the past
 */
export const datesAreNotInPast = (day1, day2) => {
  const currentDate = new Date();
  return day1 > currentDate || day2 > currentDate;
}


