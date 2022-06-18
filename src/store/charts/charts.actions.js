import axios from "axios";
import {
  GET_CHARTS_PENDING,
  GET_CHARTS_SUCCESS,
  GET_CHARTS_ERROR,
} from "./charts.store";
import { getFormattedDate } from "utils";

export const getCharts = (activeTimeFrame) => async (dispatch, getState) => {
  dispatch({
    type: GET_CHARTS_PENDING,
  });
  const {
    currencyDetails: { currency },
  } = getState();
  try {
    const {
      data: { prices, total_volumes },
    } = await axios(
      `${
        process.env.REACT_APP_API_ENDPOINT
      }/coins/bitcoin/market_chart?vs_currency=${currency}&days=${activeTimeFrame}&interval=${
        activeTimeFrame <= 90 ? "hourly" : "daily"
      }`
    );

    const { dateArr, priceArr } = prices.reduce(
      ({ dateArr, priceArr }, [date, price]) => ({
        dateArr: [...dateArr, getFormattedDate(date)],
        priceArr: [...priceArr, price],
      }),
      { dateArr: [], priceArr: [] }
    );

    const { volumesArr } = total_volumes.reduce(
      ({ volumesArr }, [date, volume]) => ({
        volumesArr: [...volumesArr, volume],
      }),
      { volumesArr: [] }
    );
    dispatch({
      type: GET_CHARTS_SUCCESS,
      payload: { priceArr, volumesArr, dateArr },
    });
  } catch (err) {
    dispatch({ type: GET_CHARTS_ERROR });
  }
};
