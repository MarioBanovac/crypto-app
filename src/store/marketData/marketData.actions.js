import axios from "axios";
import { GET_NAVBAR_MARKET_DATA_SUCCESS } from "./marketData.store";

export const getNavbarMarketData = () => async (dispatch, getState) => {
  try {
    const {
      currencyDetails: { currency },
    } = getState();
    const {
      data: {
        data: {
          active_cryptocurrencies,
          markets,
          total_market_cap,
          market_cap_change_percentage_24h_usd,
          total_volume,
          market_cap_percentage: { btc, eth },
        },
      },
    } = await axios(`${process.env.REACT_APP_API_ENDPOINT}/global`);
    dispatch({
      type: GET_NAVBAR_MARKET_DATA_SUCCESS,
      payload: {
        active_cryptocurrencies,
        markets,
        total_market_cap: total_market_cap[currency.toLowerCase()],
        market_cap_change_percentage_24h_usd,
        total_volume: total_volume[currency.toLowerCase()],
        btc,
        eth,
      },
    });
  } catch (err) {}
};
