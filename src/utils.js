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
  //console.log(date.toLocaleString());
  return date;
}

/**
 * Checks if time range between given parameters is longer than 90 days
 * 
 * @param {number} unixStart Start date in UNIX Timestamp (seconds)
 * @param {number} unixEnd End date in UNIX Timestamp (seconds)
 * @returns {boolean} True if time range is longer than 90 days
 */
export const rangeIsBelow90Days = (unixStart, unixEnd) => {
  const day = 86400; //seconds
  const ninetyDays = day * 90;
  if (unixEnd - unixStart <= ninetyDays) return true;
  return false;
}

/**
 * Computes the longest downward trend within a given values. Array given as a parameter should 
 * have values sorted by date.
 * 
 * @param {Array} prices Array containing arrays where index 0 contains date in unix time
 * and index 1 contains price of that day (00:00 UTC time)
 * @returns {number} The maximum mount of days the price was decreasing in a row
 */
export const getLongestDownwardTrend = prices => {
  let downward = 0;
  let longestDownward = 0;
  for (let i = 1; i < prices.length; i++) {
    //console.log(prices[i][1]);
    if (prices[i][1] < prices[i-1][1]) {
      downward++;
      if (downward > longestDownward) {
        longestDownward = downward;
      }
    } else {
      downward = 0;
    }
  }
  return longestDownward;
} 

/**
 * Iterates through the list of volumes and returns the one with the
 * highest volume value.
 * 
 * @param {Array} volumes Array containing arrays where index 0 contains date in unix time
 * and index 1 contains 24h trading volume of that day
 * @returns {Array} Array containing the highest volume eg. [1628640000000, 30433526566.871216]
 */
export const getHighestVolumeWithDate = volumes => {
  let indexOfHighest = 0;
  for (let i = 1; i < volumes.length; i++) {
    if (volumes[i][1] > volumes[indexOfHighest][1]) {
      indexOfHighest = i;
    }
  }
  return volumes[indexOfHighest];
}