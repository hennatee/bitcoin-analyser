import { AnalyzerContainer, HeadingSm, TextSm } from "../styledComponents"
import { unixToLocaleString, twoDecimals } from "../utils";


/**
 * This component displays information about analyzed data from given time
 * range. 
 * 
 * @param {number} downward Maximum amount of days the price has decreased in a row
 * @param {Array} volume UNIX Timestamp in index 0 and highest volume in index 1
 * @param {Object} timeToBuyAndSell Object containing information about best
 * day to buy and sell 
 */
const AnalyzedData = ({downward, volume, timeToBuyAndSell}) => {

  const PLACEHOLDER_EMPTY = "-";

  /**
   * Formats word "day" properly according to the amount 
   * 
   * @param {number} downward 
   * @returns {string} 
   */
  const downwardToText = (downward = PLACEHOLDER_EMPTY) => {
    if (downward === 1) return `${downward} day`;
    if (downward > 1) return `${downward} days`;
    return downward;
  }

  /**
   * @param {Array} volume UNIX Timestamp in index 0 and volume in euros
   * in index 1
   * @returns {string} String with date and volume on that day (accuracy of
   * two decimals)
   */
  const volumeToText = volume => {
    const volumeDate = unixToLocaleString(volume[0]);
    const highestVolume = volume[1];
    return `${volumeDate} | ${twoDecimals(highestVolume)}`;
  }

  const BUY = "buy";
  const SELL = "sell";
  
  /**
   * 
   * @param {string} buyOrSell constant BUY/SELL 
   * @param {Object | null} bestDays Object with properties toBuy and toSell containing
   * UNIX Timestamp in index 0 and price in index 1. Or null which means there are no good 
   * days to buy or sell because price is only decreasing.
   * @returns {string} String with date and price or message reporting that price is only decreasing.
   */
  const buyOrSellToText = (buyOrSell, bestDays) => {
    if (bestDays === undefined) return PLACEHOLDER_EMPTY;
    if (bestDays === null) return "Price is only decreasing!";
    if (buyOrSell === BUY) {
      return bestDayToText(bestDays.toBuy);
    }
    if (buyOrSell === SELL) {
      return bestDayToText(bestDays.toSell);
    }
  }

  /**
   * @param {Array} bestDay Unix Timestamp in index 0 and price in index 1
   * @returns {string} String with date and price
   */
  const bestDayToText = bestDay => {
    const date = unixToLocaleString(bestDay[0]);
    const price = bestDay[1];
    return `${date} | ${twoDecimals(price)}€`
  }


  return (
    <AnalyzerContainer className="analyzed-data">

      <div>
        <HeadingSm>Longest downward</HeadingSm>
        <TextSm>{downwardToText(downward)}</TextSm>
      </div>
      <div>
        <HeadingSm>Highest 24h volume</HeadingSm>
        <TextSm>{volume ? volumeToText(volume) : PLACEHOLDER_EMPTY}</TextSm>
      </div>
      <div>
        <HeadingSm>Best day to buy</HeadingSm>
        <TextSm>{buyOrSellToText(BUY, timeToBuyAndSell)}</TextSm>
      </div>
      <div>
        <HeadingSm>Best day to sell</HeadingSm>
        <TextSm>{buyOrSellToText(SELL, timeToBuyAndSell)}</TextSm>
      </div>
      
    </AnalyzerContainer>  
  )
}

export default AnalyzedData