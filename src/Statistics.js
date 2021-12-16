import { useState } from "react";
import DateForm from './DateForm';
import { 
  rangeIsBelow90Days,
  getLongestDownwardTrend, 
  unixToDate,
  getHighestVolumeWithDate 
} from "./utils";

const Statistics = () => {

  const [data, setData] = useState(null);

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
    //console.log(prices)
    const longestDownward = getLongestDownwardTrend(prices);
    console.log("longest", longestDownward);

    const highestVolumeWithDate = getHighestVolumeWithDate(volumes);
    console.log("highest volume", highestVolumeWithDate);

  }
  

  analyseData(data);
  
  return (
    <div>
      statistics
      <DateForm callbackToParent={handleCallback}/>
    </div>
  )
}

export default Statistics