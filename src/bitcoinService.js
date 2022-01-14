import axios from "axios";

const APIurl =
  "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur";

const bitcoinService = {
  getHistoryByRange: async (start, end) => {
    try {
      const response = await axios.get(`${APIurl}&from=${start}&to=${end}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
};

export default bitcoinService;
