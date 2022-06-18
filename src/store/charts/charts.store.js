const initialState = {
  dates: [],
  prices: [],
  volumes: [],
  isLoading: false,
  hasError: false,
};

export const GET_CHARTS_PENDING = "GET_CHARTS_PENDING";
export const GET_CHARTS_SUCCESS = "GET_CHARTS_SUCCESS";
export const GET_CHARTS_ERROR = "GET_CHARTS_ERROR";

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHARTS_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GET_CHARTS_SUCCESS:
      const {
        priceArr: prices,
        volumesArr: volumes,
        dateArr: dates,
      } = action.payload;
      return {
        ...state,
        prices,
        volumes,
        dates,
        isLoading: false,
      };
    case GET_CHARTS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}
