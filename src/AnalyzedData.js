import { StatisticContainer, HeadingSm, TextSm } from "./styledComponents"
import { unixToDate } from "./utils";

const AnalyzedData = ({downward, volume, timeToBuyAndSell}) => {

  const volumeToString = (volume) => {
    const volumeDate = unixToDate(volume[0]).toLocaleDateString();
    const highestVolume = volume[1];
    return `${volumeDate} ${highestVolume}`;
  }
  
  const buyOrSellToString = bestDay => {
    const date = unixToDate(bestDay[0]).toLocaleDateString();
    const price = bestDay[1];
    return `${date} ${price}€`
  }

  return (
    <StatisticContainer>

      <HeadingSm>Longest downward</HeadingSm>
      <TextSm>{downward ? `${downward} days` : "-"}</TextSm>

      <HeadingSm>Highest 24h volume</HeadingSm>
      <TextSm>{volume ? volumeToString(volume) : "-"}</TextSm>

      <HeadingSm>Best day to buy</HeadingSm>
      <TextSm>{timeToBuyAndSell ? buyOrSellToString(timeToBuyAndSell.toBuy) : "-"}</TextSm>

      <HeadingSm>Best day to sell</HeadingSm>
      <TextSm>{timeToBuyAndSell ? buyOrSellToString(timeToBuyAndSell.toSell) : "-"}</TextSm>
      
    </StatisticContainer>  
  )
}

export default AnalyzedData