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
 * Iterates through the list of arrays and returns the one with the
 * highest value in index 1. Can be used to find highest price or trading volume.
 * 
 * @param {Array} values Array containing arrays where index 0 contains date in unix time
 * and index 1 contains either price or 24h trading volume of that day
 * @returns {Array} Array containing the highest value eg. [1628640000000, 30433526566.871216]
 */
export const getHighestValueWithDate = values => {
  let indexOfHighest = 0;
  for (let i = 1; i < values.length; i++) {
    if (values[i][1] > values[indexOfHighest][1]) {
      indexOfHighest = i;
    }
  }
  return values[indexOfHighest];
}


/**
 * Iterates through the list of arrays and returns the one with the
 * lowest value in index 1. Can be used to find lowest price or trading volume.
 * 
 * @param {Array} values Array containing arrays where index 0 contains date in unix time
 * and index 1 contains either price or 24h trading volume of that day
 * @returns {Array} Array containing the lowest value eg. [1628640000000, 50310.23157858034]
 */
export const getLowestValueWithDate = values => {
  let indexOfLowest = 0;
  for (let i = 1; i < values.length; i++) {
    if (values[i][1] < values[indexOfLowest][1]) {
      indexOfLowest = i;
    }
  }
  return values[indexOfLowest];
}

/**
 * Computes the best day to buy and sell bitcoins in given time range to 
 * maximimze profits.
 * 
 * @param {Array} prices Array containing arrays where index 0 contains date in unix time
 * and index 1 contains price of that day (00:00 UTC time)
 * @returns {Object} Object with properties toBuy and toSell. 
 */
export const getBestDatesToBuyAndSell = prices => {
  const highest = getHighestValueWithDate(prices);
  const lowest = getLowestValueWithDate(prices);

  let bestDates = {
    toBuy: lowest,
    toSell: highest
  }

  //Check if the date of the highest price is before the date of the lowest price 
  if (highest[0] < lowest[0]) {
    console.log("highest is before lowest")

    let lowestBefore;
    let highestAfter;
    let difference1;
    let difference2;

    //filter all the prices before the date of the highest price 
    const pricesBeforeHighest = prices.filter(priceArray =>
      priceArray[0] < highest[0]
    )
    
    if (pricesBeforeHighest.length > 0) {
      lowestBefore = getLowestValueWithDate(pricesBeforeHighest);
      //calculate how much the price increases between these dates
      difference1 = highest[1] - lowestBefore[1];
    }
   

    //filter all the prices after the date of the lowest price
    const pricesAfterLowest = prices.filter(priceArray => 
      priceArray[0] > lowest[0]
    )
    
    if (pricesAfterLowest.length > 0) {
      highestAfter = getHighestValueWithDate(pricesAfterLowest);
      //calculate how much the price increases between these dates
      difference2 = highestAfter[1] - lowest;
    }
    
    //check within which time range the price will increase more,
    //if either one is undefined use the other
    if ((difference1 > difference2 && lowestBefore !== undefined) || highestAfter === undefined) {
      bestDates = { toBuy: lowestBefore, toSell: highest }
      return bestDates;
    } else {
      bestDates = { toBuy: lowest, toSell: highestAfter }
      return bestDates
    }
  }
  return bestDates;
    
}