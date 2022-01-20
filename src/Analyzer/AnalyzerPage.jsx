import React, { useState, useEffect } from "react";
import DateForm from "./Form/DateForm";
import AnalyzedData from "./Data/AnalyzedData";
import Chart from "./Chart/Chart";
import { Background } from "../styledComponents";
import { rangeIsBelow91Days, unixToDate } from "../utils";
import {
  getLongestDownwardTrend,
  getArrayByHighestIndexOne,
  getBestDatesToBuyAndSell,
} from "../computations";

const Analyzer = () => {
  const [data, setData] = useState(null);
  const [prices, setPrices] = useState(null);
  const [downward, setDownward] = useState();
  const [volume, setVolume] = useState();
  const [timeToBuyAndSell, setTimeToBuyAndSell] = useState();

  /**
   * Updates state when data is received from form
   *
   * @param {Object} formData
   */
  const handleCallback = (formData) => {
    setData(formData);
  };

  /**
   * @param {Array} arrays Array of arrays with length >= 2
   * @returns {Array} Filtered array only including arrays that
   * have 00:xx UTC time in in index 0
   */
  const getMidnightValues = (arrays) => {
    return arrays.filter((array) => unixToDate(array[0]).getUTCHours() === 0);
  };

  /**
   * Checks if price is increasing during the given time range
   *
   * @param {number} downward Computed value of longest downward in given time range
   * @param {Array} priceData Data used to compute the downward
   * @returns {boolean} Returns true if price is increasing at some point in given data
   */
  const priceIsIncreasing = (downward, priceData) => {
    return downward < priceData.length - 1;
  };

  /**
   * Analyzes the response data gotten from CoinGecko api.
   * - computes the longest downward trend
   * - finds the day with the highest trading volume
   * - computes the best day to buy and sell
   *
   * @param {Object} data Data-object returned from form-component including
   * properties startUnix, endUnix and response
   */
  const analyseData = (data) => {
    if (!data) return;
    let priceData = data.response.prices;
    let volumeData = data.response.total_volumes;

    //endpoint returns hourly data for time range between 1-90 days
    if (rangeIsBelow91Days(data.startUnix, data.endUnix)) {
      priceData = getMidnightValues(priceData);
      volumeData = getMidnightValues(volumeData);
    }

    setPrices(priceData);

    const longestDownward = getLongestDownwardTrend(priceData);
    setDownward(longestDownward);

    const highestVolumeData = getArrayByHighestIndexOne(volumeData);
    setVolume(highestVolumeData);

    if (priceIsIncreasing(longestDownward, priceData)) {
      const bestDates = getBestDatesToBuyAndSell(priceData);
      setTimeToBuyAndSell(bestDates);
    } else {
      setTimeToBuyAndSell(null);
    }
  };
  useEffect(() => {
    analyseData(data);
  }, [data]);

  return (
    <Background>
      <DateForm callbackToParent={handleCallback} />
      <Chart prices={prices} />
      <AnalyzedData
        downward={downward}
        volume={volume}
        timeToBuyAndSell={timeToBuyAndSell}
      />
    </Background>
  );
};

export default Analyzer;
