/**
 * Computes the longest downward trend within a given values. Takes Array of Arrays
 * as a parameter and computes the downward based on values in arrays' index 1.
 *
 * @param {Array} values Array containing arrays with lenght >= 2
 * @returns {number} The maximum number the value was decreasing in a row
 */
export const getLongestDownwardTrend = (values) => {
  let downward = 0;
  let longestDownward = 0;
  for (let i = 1; i < values.length; i++) {
    if (values[i][1] < values[i - 1][1]) {
      downward++;
      if (downward > longestDownward) {
        longestDownward = downward;
      }
    } else {
      downward = 0;
    }
  }
  return longestDownward;
};

/**
 * Iterates through a list of arrays and returns the one with the
 * highest value in index 1.
 *
 * @param {Array} values Array containing arrays with length >= 2
 * @returns {Array} Array containing the highest value in index 1
 */
export const getArrayByHighestIndexOne = (values) => {
  let indexOfHighest = 0;
  for (let i = 1; i < values.length; i++) {
    if (values[i][1] > values[indexOfHighest][1]) {
      indexOfHighest = i;
    }
  }
  return values[indexOfHighest];
};

/**
 * Iterates through the list of arrays and returns the one with the
 * lowest value in index 1.
 *
 * @param {Array} values Array containing arrays with lenght >= 2
 * @returns {Array} Array containing the lowest value in index 1
 */
export const getArrayByLowestIndexOne = (values) => {
  let indexOfLowest = 0;
  for (let i = 1; i < values.length; i++) {
    if (values[i][1] < values[indexOfLowest][1]) {
      indexOfLowest = i;
    }
  }
  return values[indexOfLowest];
};

/**
 * Computes the best day to buy and sell bitcoins in given time range to
 * maximimze profits. Note that this function should not be used if price only
 * decreases.
 *
 * @param {Array} prices Array containing arrays where index 0 contains date in
 * unix time and index 1 contains price of that day (00:00 UTC time)
 * @returns {Object} Object with properties toBuy and toSell
 */
export const getBestDatesToBuyAndSell = (prices) => {
  const arrayWithHighestPrice = getArrayByHighestIndexOne(prices);
  const arrayWithLowestPrice = getArrayByLowestIndexOne(prices);

  let bestDates = {
    toBuy: arrayWithLowestPrice,
    toSell: arrayWithHighestPrice,
  };

  /*Check if date of the highest price is before the lowest price
  and compute new dates if so*/
  if (highestIsBeforeLowest(arrayWithHighestPrice, arrayWithLowestPrice)) {
    bestDates = getDatesByBiggestIncrease(prices);
  }

  return bestDates;
};

/**
 * Finds the best dates to buy and sell by calculating the biggest increase
 * in price between dates.
 *
 * @param {Array} prices Array of arrays containing data of prices
 * @returns {Object} Object with properties toBuy and toSell
 * containing array with UNIX time in index 0 and price in index 1
 */
const getDatesByBiggestIncrease = (prices) => {
  let indexToBuy;
  let indexToSell;
  let currentDifference;
  let biggestDifference = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      currentDifference = prices[j][1] - prices[i][1];
      if (currentDifference > biggestDifference) {
        biggestDifference = currentDifference;
        indexToBuy = i;
        indexToSell = j;
      }
    }
  }
  const bestDates = {
    toBuy: prices[indexToBuy],
    toSell: prices[indexToSell],
  };
  return bestDates;
};

/**
 * Compares two arrays by values in index 0 which contains
 * UNIX Timestamp.
 * @param {Array} highest
 * @param {Array} lowest
 * @returns {boolean} True if date of highest is before date of lowest
 */
const highestIsBeforeLowest = (highest, lowest) => {
  return highest[0] < lowest[0];
};
