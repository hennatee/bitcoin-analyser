import { useState, useEffect } from "react";
import DateForm from "./DateForm";
import AnalyzedData from "./AnalyzedData";
import { Background } from "./styledComponents";
import { 
  rangeIsBelow90Days,
  unixToDate
} from "./utils";
import {
  getLongestDownwardTrend, 
  getHighestValueWithDate,
  getBestDatesToBuyAndSell
} from "./computations"

const Statistics = () => {

  const [data, setData] = useState(null);
  const [downward, setDownward] = useState(null);
  const [volume, setVolume] = useState(null);
  const [timeToBuyAndSell, setTimeToBuyAndSell] = useState(null);

  console.log(data);

  const handleCallback = formData => {
    setData(formData);
  }



  const analyseData = data => {
    if (!data) return 
    let prices = data.response.prices;
    let volumes = data.response.total_volumes;
    if (rangeIsBelow90Days(data.startUnix, data.endUnix)) {
      console.log("less than ninety days");
      const midnigthPrices = prices.filter(priceArray => 
        unixToDate(priceArray[0]).getUTCHours() === 0
      )
      prices = midnigthPrices;

      const midnightVolumes = volumes.filter(volumeArray =>
        unixToDate(volumeArray[0]).getUTCHours() === 0
      )
      volumes = midnightVolumes;
    } 
    
    const longestDownward = getLongestDownwardTrend(prices);
    setDownward(longestDownward);
    console.log("longest", longestDownward);

    const highestVolumeWithDate = getHighestValueWithDate(volumes);
    setVolume(highestVolumeWithDate);
    console.log("highest volume", highestVolumeWithDate);


    if(longestDownward === prices.lenght - 1) {
      console.log("Price is only decreasing");
    } else {
      const bestDates = getBestDatesToBuyAndSell(prices);
      setTimeToBuyAndSell(bestDates);
    }
    
  }
  useEffect(() => {
    analyseData(data);
  }, [data])
  
  
  return (
    <Background>
      <DateForm callbackToParent={handleCallback}/>
      <AnalyzedData 
        downward={downward}
        volume={volume}
        timeToBuyAndSell={timeToBuyAndSell}/>
    </Background>
  )
}

export default Statistics