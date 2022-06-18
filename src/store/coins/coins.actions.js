import axios from "axios";
import { GET_COINS_SUCCESS, DELETE_COINS_SUCCESS } from "./coins.store";

export const fetchCoins = () => async (dispatch, getState) => {
  try {
    const {
      currencyDetails: { currency },
    } = getState();
    const {
      coins: { page },
    } = getState();
    const { data } = await axios(
      `${process.env.REACT_APP_API_ENDPOINT}/coins/markets?vs_currency=${
        currency || "usd"
      }&order=market_cap_desc&per_page=15&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({
      type: GET_COINS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteCoins = () => ({
  type: DELETE_COINS_SUCCESS,
});
