
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { StatisticContainer } from "./styledComponents";
import { unixToDate } from "./utils";
import { options } from "./config"

/**
 * Component displays Line Chart which shows prices of bitcoin 
 * in given time range. Chart data is taken from values given as a 
 * props. Empty chart with default tick labels is shown when props is null.
 * 
 * @param {Array} prices Array of arrays containing unix time in index 0 
 * and  price of the day (00:00 UTC) of bitcoin in index 1 
 */
const Chart = ({prices}) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const DEFAULT_DATES = [2019, 2020, 2021];
  const DEFAULT_PRICES = [0, 10000, 20000, 30000, 40000];

  const getPrices = prices => {
    if (prices) {
      return prices.map(priceArray => priceArray[1]);
    }
    return DEFAULT_PRICES;
  }

  const getDates = prices => {
    if (prices) {
      return prices.map(priceArray => unixToDate(priceArray[0]).toLocaleDateString());
    }
    return DEFAULT_DATES;
  }

  const chartData = {
    labels: getDates(prices),
    datasets: [
      {
        label: 'Price in euros',
        data: getPrices(prices),
        backgroundColor: [
          'rgba(255, 255, 255, 0.8)',
          'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.6)',
        ],
        // border = line displayed in chart
        borderColor: "#fff",
        borderWidth: prices ? 2 : 0
      }
    ]
  }

  return (
    <StatisticContainer className="chart">
        <Line
        data={chartData}
        options={options}
      />
    </StatisticContainer>
  )
}

export default Chart