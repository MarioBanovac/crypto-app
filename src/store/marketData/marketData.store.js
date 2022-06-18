const initialState = {
  active_cryptocurrencies: "",
  markets: "",
  total_market_cap: "",
  total_volume: "",
  market_cap_change_percentage_24h_usd: "",
  bitcoinPercentage: "",
  ethereumPercentage: "",
};

export const GET_NAVBAR_MARKET_DATA_SUCCESS = "GET_NAVBAR_MARKET_DATA_SUCCESS";

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NAVBAR_MARKET_DATA_SUCCESS:
      const {
        active_cryptocurrencies,
        markets,
        total_market_cap,
        market_cap_change_percentage_24h_usd,
        total_volume,
        btc,
        eth,
      } = action.payload;
      return {
        ...state,
        active_cryptocurrencies,
        markets,
        total_market_cap,
        market_cap_change_percentage_24h_usd,
        total_volume,
        bitcoinPercentage: btc,
        ethereumPercentage: eth,
      };
    default:
      return state;
  }
}
