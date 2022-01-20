import axios from "axios";

const APIurl =
  "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur";

const bitcoinService = {

  /**
   * Sends request to CoinGecko's Public API 
   * endpoint GET /coins/{id}/market_chart/range 
   * 
   * @param {number} start Start time in UNIX Timestamp
   * @param {number} end End time in UNIX Timestamp
   * @returns {Object} Response's data property
   */
  getHistoryByRange: async (start, end) => {
    
      const response = await axios.get(`${APIurl}&from=${start}&to=${end}`);
      return response.data;
  },
};

export default bitcoinService;
