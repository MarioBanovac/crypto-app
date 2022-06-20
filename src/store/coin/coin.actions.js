import axios from "axios";
import { GET_COIN_DATA_SUCCESS } from "./coin.store";

export const getCoinData = (coinName) => async (dispatch, getState) => {
  try {
    const {
      currencyDetails: { currency },
    } = getState();
    const { data } = await axios(
      `${process.env.REACT_APP_API_ENDPOINT}/coins/${coinName}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
    );
    dispatch({
      type: GET_COIN_DATA_SUCCESS,
      payload: { data, currency },
    });
  } catch (err) {}
};
